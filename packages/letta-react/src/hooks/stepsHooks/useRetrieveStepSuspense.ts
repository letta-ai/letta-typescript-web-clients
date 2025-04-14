/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { RetrieveStepQueryResponse, RetrieveStepPathParams, RetrieveStep422 } from '../../types/RetrieveStep.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const retrieveStepSuspenseQueryKey = (step_id: RetrieveStepPathParams['step_id']) =>
  [{ url: '/v1/steps/:step_id', params: { step_id: step_id } }] as const

export type RetrieveStepSuspenseQueryKey = ReturnType<typeof retrieveStepSuspenseQueryKey>

/**
 * @description Get a step by ID.
 * @summary Retrieve Step
 * {@link /v1/steps/:step_id}
 */
export async function retrieveStepSuspense(step_id: RetrieveStepPathParams['step_id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<RetrieveStepQueryResponse, ResponseErrorConfig<RetrieveStep422>, unknown>({
    method: 'GET',
    url: `/v1/steps/${step_id}`,
    ...requestConfig,
  })
  return res
}

export function retrieveStepSuspenseQueryOptions(step_id: RetrieveStepPathParams['step_id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = retrieveStepSuspenseQueryKey(step_id)
  return queryOptions<
    ResponseConfig<RetrieveStepQueryResponse>,
    ResponseErrorConfig<RetrieveStep422>,
    ResponseConfig<RetrieveStepQueryResponse>,
    typeof queryKey
  >({
    enabled: !!step_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return retrieveStepSuspense(step_id, config)
    },
  })
}

/**
 * @description Get a step by ID.
 * @summary Retrieve Step
 * {@link /v1/steps/:step_id}
 */
export function useRetrieveStepSuspense<
  TData = ResponseConfig<RetrieveStepQueryResponse>,
  TQueryData = ResponseConfig<RetrieveStepQueryResponse>,
  TQueryKey extends QueryKey = RetrieveStepSuspenseQueryKey,
>(
  step_id: RetrieveStepPathParams['step_id'],
  options: {
    query?: Partial<UseSuspenseQueryOptions<ResponseConfig<RetrieveStepQueryResponse>, ResponseErrorConfig<RetrieveStep422>, TData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? retrieveStepSuspenseQueryKey(step_id)

  const query = useSuspenseQuery(
    {
      ...(retrieveStepSuspenseQueryOptions(step_id, config) as unknown as UseSuspenseQueryOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<RetrieveStep422>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}