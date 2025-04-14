/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type {
  RetrieveAgentContextWindowQueryResponse,
  RetrieveAgentContextWindowPathParams,
  RetrieveAgentContextWindow422,
} from '../../types/RetrieveAgentContextWindow.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const retrieveAgentContextWindowSuspenseQueryKey = (agent_id: RetrieveAgentContextWindowPathParams['agent_id']) =>
  [{ url: '/v1/agents/:agent_id/context', params: { agent_id: agent_id } }] as const

export type RetrieveAgentContextWindowSuspenseQueryKey = ReturnType<typeof retrieveAgentContextWindowSuspenseQueryKey>

/**
 * @description Retrieve the context window of a specific agent.
 * @summary Retrieve Agent Context Window
 * {@link /v1/agents/:agent_id/context}
 */
export async function retrieveAgentContextWindowSuspense(
  agent_id: RetrieveAgentContextWindowPathParams['agent_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<RetrieveAgentContextWindowQueryResponse, ResponseErrorConfig<RetrieveAgentContextWindow422>, unknown>({
    method: 'GET',
    url: `/v1/agents/${agent_id}/context`,
    ...requestConfig,
  })
  return res
}

export function retrieveAgentContextWindowSuspenseQueryOptions(
  agent_id: RetrieveAgentContextWindowPathParams['agent_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = retrieveAgentContextWindowSuspenseQueryKey(agent_id)
  return queryOptions<
    ResponseConfig<RetrieveAgentContextWindowQueryResponse>,
    ResponseErrorConfig<RetrieveAgentContextWindow422>,
    ResponseConfig<RetrieveAgentContextWindowQueryResponse>,
    typeof queryKey
  >({
    enabled: !!agent_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return retrieveAgentContextWindowSuspense(agent_id, config)
    },
  })
}

/**
 * @description Retrieve the context window of a specific agent.
 * @summary Retrieve Agent Context Window
 * {@link /v1/agents/:agent_id/context}
 */
export function useRetrieveAgentContextWindowSuspense<
  TData = ResponseConfig<RetrieveAgentContextWindowQueryResponse>,
  TQueryData = ResponseConfig<RetrieveAgentContextWindowQueryResponse>,
  TQueryKey extends QueryKey = RetrieveAgentContextWindowSuspenseQueryKey,
>(
  agent_id: RetrieveAgentContextWindowPathParams['agent_id'],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<ResponseConfig<RetrieveAgentContextWindowQueryResponse>, ResponseErrorConfig<RetrieveAgentContextWindow422>, TData, TQueryKey>
    > & { client?: QueryClient }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? retrieveAgentContextWindowSuspenseQueryKey(agent_id)

  const query = useSuspenseQuery(
    {
      ...(retrieveAgentContextWindowSuspenseQueryOptions(agent_id, config) as unknown as UseSuspenseQueryOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<RetrieveAgentContextWindow422>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}