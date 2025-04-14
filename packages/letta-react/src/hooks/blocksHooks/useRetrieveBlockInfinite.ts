/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  RetrieveBlockQueryResponse,
  RetrieveBlockPathParams,
  RetrieveBlock422,
} from '../../types/RetrieveBlock.ts';
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

export const retrieveBlockInfiniteQueryKey = (
  block_id: RetrieveBlockPathParams['block_id']
) => [{ url: '/v1/blocks/:block_id', params: { block_id: block_id } }] as const;

export type RetrieveBlockInfiniteQueryKey = ReturnType<
  typeof retrieveBlockInfiniteQueryKey
>;

/**
 * @summary Retrieve Block
 * {@link /v1/blocks/:block_id}
 */
export async function retrieveBlockInfinite(
  block_id: RetrieveBlockPathParams['block_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    RetrieveBlockQueryResponse,
    ResponseErrorConfig<RetrieveBlock422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/blocks/${block_id}`,
    ...requestConfig,
  });
  return res;
}

export function retrieveBlockInfiniteQueryOptions(
  block_id: RetrieveBlockPathParams['block_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = retrieveBlockInfiniteQueryKey(block_id);
  return infiniteQueryOptions<
    ResponseConfig<RetrieveBlockQueryResponse>,
    ResponseErrorConfig<RetrieveBlock422>,
    ResponseConfig<RetrieveBlockQueryResponse>,
    typeof queryKey
  >({
    enabled: !!block_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return retrieveBlockInfinite(block_id, config);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage['nextCursor'],
    getPreviousPageParam: (firstPage) => firstPage['nextCursor'],
  });
}

/**
 * @summary Retrieve Block
 * {@link /v1/blocks/:block_id}
 */
export function useRetrieveBlockInfinite<
  TData = InfiniteData<ResponseConfig<RetrieveBlockQueryResponse>>,
  TQueryData = ResponseConfig<RetrieveBlockQueryResponse>,
  TQueryKey extends QueryKey = RetrieveBlockInfiniteQueryKey
>(
  block_id: RetrieveBlockPathParams['block_id'],
  options: {
    query?: Partial<
      InfiniteQueryObserverOptions<
        ResponseConfig<RetrieveBlockQueryResponse>,
        ResponseErrorConfig<RetrieveBlock422>,
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
    queryOptions?.queryKey ?? retrieveBlockInfiniteQueryKey(block_id);

  const query = useInfiniteQuery(
    {
      ...(retrieveBlockInfiniteQueryOptions(
        block_id,
        config
      ) as unknown as InfiniteQueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<
        InfiniteQueryObserverOptions,
        'queryKey'
      >),
    },
    queryClient
  ) as UseInfiniteQueryResult<TData, ResponseErrorConfig<RetrieveBlock422>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
