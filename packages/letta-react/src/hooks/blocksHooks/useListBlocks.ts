/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { ListBlocksQueryResponse, ListBlocksQueryParams, ListBlocks422 } from '../../types/ListBlocks.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import { queryOptions, useQuery } from '@tanstack/react-query'

export const listBlocksQueryKey = (params?: ListBlocksQueryParams) => [{ url: '/v1/blocks/' }, ...(params ? [params] : [])] as const

export type ListBlocksQueryKey = ReturnType<typeof listBlocksQueryKey>

/**
 * @summary List Blocks
 * {@link /v1/blocks/}
 */
export async function listBlocks(params?: ListBlocksQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<ListBlocksQueryResponse, ResponseErrorConfig<ListBlocks422>, unknown>({
    method: 'GET',
    url: `/v1/blocks/`,
    params,
    ...requestConfig,
  })
  return res
}

export function listBlocksQueryOptions(params?: ListBlocksQueryParams, config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const queryKey = listBlocksQueryKey(params)
  return queryOptions<ResponseConfig<ListBlocksQueryResponse>, ResponseErrorConfig<ListBlocks422>, ResponseConfig<ListBlocksQueryResponse>, typeof queryKey>({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return listBlocks(params, config)
    },
  })
}

/**
 * @summary List Blocks
 * {@link /v1/blocks/}
 */
export function useListBlocks<
  TData = ResponseConfig<ListBlocksQueryResponse>,
  TQueryData = ResponseConfig<ListBlocksQueryResponse>,
  TQueryKey extends QueryKey = ListBlocksQueryKey,
>(
  params?: ListBlocksQueryParams,
  options: {
    query?: Partial<QueryObserverOptions<ResponseConfig<ListBlocksQueryResponse>, ResponseErrorConfig<ListBlocks422>, TData, TQueryData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? listBlocksQueryKey(params)

  const query = useQuery(
    {
      ...(listBlocksQueryOptions(params, config) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<ListBlocks422>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}