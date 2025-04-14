/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  RetrieveGroupQueryResponse,
  RetrieveGroupPathParams,
  RetrieveGroup422,
} from '../../types/RetrieveGroup.ts';
import type {
  RequestConfig,
  ResponseErrorConfig,
  ResponseConfig,
} from '@kubb/plugin-client/clients/axios';
import type {
  InfiniteData,
  QueryKey,
  QueryClient,
  InfiniteQueryObserverOptions,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { infiniteQueryOptions, useInfiniteQuery } from '@tanstack/react-query';

export const retrieveGroupInfiniteQueryKey = (
  group_id: RetrieveGroupPathParams['group_id']
) => [{ url: '/v1/groups/:group_id', params: { group_id: group_id } }] as const;

export type RetrieveGroupInfiniteQueryKey = ReturnType<
  typeof retrieveGroupInfiniteQueryKey
>;

/**
 * @description Retrieve the group by id.
 * @summary Retrieve Group
 * {@link /v1/groups/:group_id}
 */
export async function retrieveGroupInfinite(
  group_id: RetrieveGroupPathParams['group_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    RetrieveGroupQueryResponse,
    ResponseErrorConfig<RetrieveGroup422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/groups/${group_id}`,
    ...requestConfig,
  });
  return res;
}

export function retrieveGroupInfiniteQueryOptions(
  group_id: RetrieveGroupPathParams['group_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = retrieveGroupInfiniteQueryKey(group_id);
  return infiniteQueryOptions<
    ResponseConfig<RetrieveGroupQueryResponse>,
    ResponseErrorConfig<RetrieveGroup422>,
    ResponseConfig<RetrieveGroupQueryResponse>,
    typeof queryKey
  >({
    enabled: !!group_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return retrieveGroupInfinite(group_id, config);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage['nextCursor'],
    getPreviousPageParam: (firstPage) => firstPage['nextCursor'],
  });
}

/**
 * @description Retrieve the group by id.
 * @summary Retrieve Group
 * {@link /v1/groups/:group_id}
 */
export function useRetrieveGroupInfinite<
  TData = InfiniteData<ResponseConfig<RetrieveGroupQueryResponse>>,
  TQueryData = ResponseConfig<RetrieveGroupQueryResponse>,
  TQueryKey extends QueryKey = RetrieveGroupInfiniteQueryKey
>(
  group_id: RetrieveGroupPathParams['group_id'],
  options: {
    query?: Partial<
      InfiniteQueryObserverOptions<
        ResponseConfig<RetrieveGroupQueryResponse>,
        ResponseErrorConfig<RetrieveGroup422>,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: typeof client };
  } = {}
) {
  const {
    query: { client: queryClient, ...queryOptions } = {},
    client: config = {},
  } = options ?? {};
  const queryKey =
    queryOptions?.queryKey ?? retrieveGroupInfiniteQueryKey(group_id);

  const query = useInfiniteQuery(
    {
      ...(retrieveGroupInfiniteQueryOptions(
        group_id,
        config
      ) as unknown as InfiniteQueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<
        InfiniteQueryObserverOptions,
        'queryKey'
      >),
    },
    queryClient
  ) as UseInfiniteQueryResult<TData, ResponseErrorConfig<RetrieveGroup422>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
