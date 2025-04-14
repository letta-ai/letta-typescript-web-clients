/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { RetrieveRunQueryResponse, RetrieveRunPathParams, RetrieveRun422 } from '../../types/RetrieveRun.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const retrieveRunSuspenseQueryKey = (run_id: RetrieveRunPathParams['run_id']) => [{ url: '/v1/runs/:run_id', params: { run_id: run_id } }] as const

export type RetrieveRunSuspenseQueryKey = ReturnType<typeof retrieveRunSuspenseQueryKey>

/**
 * @description Get the status of a run.
 * @summary Retrieve Run
 * {@link /v1/runs/:run_id}
 */
export async function retrieveRunSuspense(run_id: RetrieveRunPathParams['run_id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<RetrieveRunQueryResponse, ResponseErrorConfig<RetrieveRun422>, unknown>({
    method: 'GET',
    url: `/v1/runs/${run_id}`,
    ...requestConfig,
  })
  return res
}

export function retrieveRunSuspenseQueryOptions(run_id: RetrieveRunPathParams['run_id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = retrieveRunSuspenseQueryKey(run_id)
  return queryOptions<ResponseConfig<RetrieveRunQueryResponse>, ResponseErrorConfig<RetrieveRun422>, ResponseConfig<RetrieveRunQueryResponse>, typeof queryKey>(
    {
      enabled: !!run_id,
      queryKey,
      queryFn: async ({ signal }) => {
        config.signal = signal
        return retrieveRunSuspense(run_id, config)
      },
    },
  )
}

/**
 * @description Get the status of a run.
 * @summary Retrieve Run
 * {@link /v1/runs/:run_id}
 */
export function useRetrieveRunSuspense<
  TData = ResponseConfig<RetrieveRunQueryResponse>,
  TQueryData = ResponseConfig<RetrieveRunQueryResponse>,
  TQueryKey extends QueryKey = RetrieveRunSuspenseQueryKey,
>(
  run_id: RetrieveRunPathParams['run_id'],
  options: {
    query?: Partial<UseSuspenseQueryOptions<ResponseConfig<RetrieveRunQueryResponse>, ResponseErrorConfig<RetrieveRun422>, TData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? retrieveRunSuspenseQueryKey(run_id)

  const query = useSuspenseQuery(
    {
      ...(retrieveRunSuspenseQueryOptions(run_id, config) as unknown as UseSuspenseQueryOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<RetrieveRun422>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}