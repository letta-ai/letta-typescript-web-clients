/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type { HealthCheckQueryResponse } from '../../types/HealthCheck.ts';
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

export const healthCheckInfiniteQueryKey = () =>
  [{ url: '/v1/health/' }] as const;

export type HealthCheckInfiniteQueryKey = ReturnType<
  typeof healthCheckInfiniteQueryKey
>;

/**
 * @summary Health Check
 * {@link /v1/health/}
 */
export async function healthCheckInfinite(
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    HealthCheckQueryResponse,
    ResponseErrorConfig<Error>,
    unknown
  >({ method: 'GET', url: `/v1/health/`, ...requestConfig });
  return res;
}

export function healthCheckInfiniteQueryOptions(
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = healthCheckInfiniteQueryKey();
  return infiniteQueryOptions<
    ResponseConfig<HealthCheckQueryResponse>,
    ResponseErrorConfig<Error>,
    ResponseConfig<HealthCheckQueryResponse>,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return healthCheckInfinite(config);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage['nextCursor'],
    getPreviousPageParam: (firstPage) => firstPage['nextCursor'],
  });
}

/**
 * @summary Health Check
 * {@link /v1/health/}
 */
export function useHealthCheckInfinite<
  TData = InfiniteData<ResponseConfig<HealthCheckQueryResponse>>,
  TQueryData = ResponseConfig<HealthCheckQueryResponse>,
  TQueryKey extends QueryKey = HealthCheckInfiniteQueryKey
>(
  options: {
    query?: Partial<
      InfiniteQueryObserverOptions<
        ResponseConfig<HealthCheckQueryResponse>,
        ResponseErrorConfig<Error>,
        TData,
        TQueryData,
        TQueryKey
      >
    > & {
      client?: QueryClient;
    };
    client?: Partial<RequestConfig> & { client?: typeof client };
  } = {}
) {
  const {
    query: { client: queryClient, ...queryOptions } = {},
    client: config = {},
  } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? healthCheckInfiniteQueryKey();

  const query = useInfiniteQuery(
    {
      ...(healthCheckInfiniteQueryOptions(
        config
      ) as unknown as InfiniteQueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<
        InfiniteQueryObserverOptions,
        'queryKey'
      >),
    },
    queryClient
  ) as UseInfiniteQueryResult<TData, ResponseErrorConfig<Error>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
