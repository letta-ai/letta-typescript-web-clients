/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { ListAgentToolsQueryResponse, ListAgentToolsPathParams, ListAgentTools422 } from '../../types/ListAgentTools.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const listAgentToolsQueryKey = (agent_id: ListAgentToolsPathParams['agent_id']) =>
  [{ url: '/v1/agents/:agent_id/tools', params: { agent_id: agent_id } }] as const

export type ListAgentToolsQueryKey = ReturnType<typeof listAgentToolsQueryKey>

/**
 * @description Get tools from an existing agent
 * @summary List Agent Tools
 * {@link /v1/agents/:agent_id/tools}
 */
export async function listAgentTools(agent_id: ListAgentToolsPathParams['agent_id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<ListAgentToolsQueryResponse, ResponseErrorConfig<ListAgentTools422>, unknown>({
    method: 'GET',
    url: `/v1/agents/${agent_id}/tools`,
    ...requestConfig,
  })
  return res
}

export function listAgentToolsQueryOptions(agent_id: ListAgentToolsPathParams['agent_id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = listAgentToolsQueryKey(agent_id)
  return queryOptions<
    ResponseConfig<ListAgentToolsQueryResponse>,
    ResponseErrorConfig<ListAgentTools422>,
    ResponseConfig<ListAgentToolsQueryResponse>,
    typeof queryKey
  >({
    enabled: !!agent_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return listAgentTools(agent_id, config)
    },
  })
}

/**
 * @description Get tools from an existing agent
 * @summary List Agent Tools
 * {@link /v1/agents/:agent_id/tools}
 */
export function useListAgentTools<
  TData = ResponseConfig<ListAgentToolsQueryResponse>,
  TQueryData = ResponseConfig<ListAgentToolsQueryResponse>,
  TQueryKey extends QueryKey = ListAgentToolsQueryKey,
>(
  agent_id: ListAgentToolsPathParams['agent_id'],
  options: {
    query?: Partial<QueryObserverOptions<ResponseConfig<ListAgentToolsQueryResponse>, ResponseErrorConfig<ListAgentTools422>, TData, TQueryData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? listAgentToolsQueryKey(agent_id)

  const query = useQuery(
    {
      ...(listAgentToolsQueryOptions(agent_id, config) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<ListAgentTools422>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}