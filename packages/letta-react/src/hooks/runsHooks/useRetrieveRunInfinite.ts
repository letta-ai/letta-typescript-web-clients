/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  RetrieveRunQueryResponse,
  RetrieveRunPathParams,
  RetrieveRun422,
} from '../../types/RetrieveRun.ts';
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

export const retrieveRunInfiniteQueryKey = (
  run_id: RetrieveRunPathParams['run_id']
) => [{ url: '/v1/runs/:run_id', params: { run_id: run_id } }] as const;

export type RetrieveRunInfiniteQueryKey = ReturnType<
  typeof retrieveRunInfiniteQueryKey
>;

/**
 * @description Get the status of a run.
 * @summary Retrieve Run
 * {@link /v1/runs/:run_id}
 */
export async function retrieveRunInfinite(
  run_id: RetrieveRunPathParams['run_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    RetrieveRunQueryResponse,
    ResponseErrorConfig<RetrieveRun422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/runs/${run_id}`,
    ...requestConfig,
  });
  return res;
}

export function retrieveRunInfiniteQueryOptions(
  run_id: RetrieveRunPathParams['run_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = retrieveRunInfiniteQueryKey(run_id);
  return infiniteQueryOptions<
    ResponseConfig<RetrieveRunQueryResponse>,
    ResponseErrorConfig<RetrieveRun422>,
    ResponseConfig<RetrieveRunQueryResponse>,
    typeof queryKey
  >({
    enabled: !!run_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return retrieveRunInfinite(run_id, config);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage['nextCursor'],
    getPreviousPageParam: (firstPage) => firstPage['nextCursor'],
  });
}

/**
 * @description Get the status of a run.
 * @summary Retrieve Run
 * {@link /v1/runs/:run_id}
 */
export function useRetrieveRunInfinite<
  TData = InfiniteData<ResponseConfig<RetrieveRunQueryResponse>>,
  TQueryData = ResponseConfig<RetrieveRunQueryResponse>,
  TQueryKey extends QueryKey = RetrieveRunInfiniteQueryKey
>(
  run_id: RetrieveRunPathParams['run_id'],
  options: {
    query?: Partial<
      InfiniteQueryObserverOptions<
        ResponseConfig<RetrieveRunQueryResponse>,
        ResponseErrorConfig<RetrieveRun422>,
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
    queryOptions?.queryKey ?? retrieveRunInfiniteQueryKey(run_id);

  const query = useInfiniteQuery(
    {
      ...(retrieveRunInfiniteQueryOptions(
        run_id,
        config
      ) as unknown as InfiniteQueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<
        InfiniteQueryObserverOptions,
        'queryKey'
      >),
    },
    queryClient
  ) as UseInfiniteQueryResult<TData, ResponseErrorConfig<RetrieveRun422>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
