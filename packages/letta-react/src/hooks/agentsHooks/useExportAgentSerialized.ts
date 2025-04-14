/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type {
  ExportAgentSerializedQueryRequest,
  ExportAgentSerializedQueryResponse,
  ExportAgentSerializedPathParams,
  ExportAgentSerialized422,
} from '../../types/ExportAgentSerialized.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const exportAgentSerializedQueryKey = (agent_id: ExportAgentSerializedPathParams['agent_id'], data?: ExportAgentSerializedQueryRequest) =>
  [{ url: '/v1/agents/:agent_id/export', params: { agent_id: agent_id } }, ...(data ? [data] : [])] as const

export type ExportAgentSerializedQueryKey = ReturnType<typeof exportAgentSerializedQueryKey>

/**
 * @description Export the serialized JSON representation of an agent, formatted with indentation.
 * @summary Export Agent Serialized
 * {@link /v1/agents/:agent_id/export}
 */
export async function exportAgentSerialized(
  agent_id: ExportAgentSerializedPathParams['agent_id'],
  data?: ExportAgentSerializedQueryRequest,
  config: Partial<RequestConfig<ExportAgentSerializedQueryRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<ExportAgentSerializedQueryResponse, ResponseErrorConfig<ExportAgentSerialized422>, ExportAgentSerializedQueryRequest>({
    method: 'GET',
    url: `/v1/agents/${agent_id}/export`,
    data,
    ...requestConfig,
  })
  return res
}

export function exportAgentSerializedQueryOptions(
  agent_id: ExportAgentSerializedPathParams['agent_id'],
  data?: ExportAgentSerializedQueryRequest,
  config: Partial<RequestConfig<ExportAgentSerializedQueryRequest>> & { client?: typeof client } = {},
) {
  const queryKey = exportAgentSerializedQueryKey(agent_id, data)
  return queryOptions<
    ResponseConfig<ExportAgentSerializedQueryResponse>,
    ResponseErrorConfig<ExportAgentSerialized422>,
    ResponseConfig<ExportAgentSerializedQueryResponse>,
    typeof queryKey
  >({
    enabled: !!agent_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return exportAgentSerialized(agent_id, data, config)
    },
  })
}

/**
 * @description Export the serialized JSON representation of an agent, formatted with indentation.
 * @summary Export Agent Serialized
 * {@link /v1/agents/:agent_id/export}
 */
export function useExportAgentSerialized<
  TData = ResponseConfig<ExportAgentSerializedQueryResponse>,
  TQueryData = ResponseConfig<ExportAgentSerializedQueryResponse>,
  TQueryKey extends QueryKey = ExportAgentSerializedQueryKey,
>(
  agent_id: ExportAgentSerializedPathParams['agent_id'],
  data?: ExportAgentSerializedQueryRequest,
  options: {
    query?: Partial<
      QueryObserverOptions<ResponseConfig<ExportAgentSerializedQueryResponse>, ResponseErrorConfig<ExportAgentSerialized422>, TData, TQueryData, TQueryKey>
    > & { client?: QueryClient }
    client?: Partial<RequestConfig<ExportAgentSerializedQueryRequest>> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? exportAgentSerializedQueryKey(agent_id, data)

  const query = useQuery(
    {
      ...(exportAgentSerializedQueryOptions(agent_id, data, config) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<ExportAgentSerialized422>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}