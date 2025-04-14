/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { ListToolsQueryResponse, ListToolsQueryParams, ListTools422 } from '../../types/ListTools.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const listToolsSuspenseQueryKey = (params?: ListToolsQueryParams) => [{ url: '/v1/tools/' }, ...(params ? [params] : [])] as const

export type ListToolsSuspenseQueryKey = ReturnType<typeof listToolsSuspenseQueryKey>

/**
 * @description Get a list of all tools available to agents belonging to the org of the user
 * @summary List Tools
 * {@link /v1/tools/}
 */
export async function listToolsSuspense(params?: ListToolsQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<ListToolsQueryResponse, ResponseErrorConfig<ListTools422>, unknown>({ method: 'GET', url: `/v1/tools/`, params, ...requestConfig })
  return res
}

export function listToolsSuspenseQueryOptions(params?: ListToolsQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = listToolsSuspenseQueryKey(params)
  return queryOptions<ResponseConfig<ListToolsQueryResponse>, ResponseErrorConfig<ListTools422>, ResponseConfig<ListToolsQueryResponse>, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return listToolsSuspense(params, config)
    },
  })
}

/**
 * @description Get a list of all tools available to agents belonging to the org of the user
 * @summary List Tools
 * {@link /v1/tools/}
 */
export function useListToolsSuspense<
  TData = ResponseConfig<ListToolsQueryResponse>,
  TQueryData = ResponseConfig<ListToolsQueryResponse>,
  TQueryKey extends QueryKey = ListToolsSuspenseQueryKey,
>(
  params?: ListToolsQueryParams,
  options: {
    query?: Partial<UseSuspenseQueryOptions<ResponseConfig<ListToolsQueryResponse>, ResponseErrorConfig<ListTools422>, TData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? listToolsSuspenseQueryKey(params)

  const query = useSuspenseQuery(
    {
      ...(listToolsSuspenseQueryOptions(params, config) as unknown as UseSuspenseQueryOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<ListTools422>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}