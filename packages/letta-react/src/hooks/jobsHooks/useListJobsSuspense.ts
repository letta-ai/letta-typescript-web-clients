/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  ListJobsQueryResponse,
  ListJobsQueryParams,
  ListJobs422,
} from '../../types/ListJobs.ts';
import type {
  RequestConfig,
  ResponseErrorConfig,
  ResponseConfig,
} from '@kubb/plugin-client/clients/axios';
import type {
  QueryKey,
  QueryClient,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

export const listJobsSuspenseQueryKey = (params?: ListJobsQueryParams) =>
  [{ url: '/v1/jobs/' }, ...(params ? [params] : [])] as const;

export type ListJobsSuspenseQueryKey = ReturnType<
  typeof listJobsSuspenseQueryKey
>;

/**
 * @description List all jobs.
 * @summary List Jobs
 * {@link /v1/jobs/}
 */
export async function listJobsSuspense(
  params?: ListJobsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ListJobsQueryResponse,
    ResponseErrorConfig<ListJobs422>,
    unknown
  >({ method: 'GET', url: `/v1/jobs/`, params, ...requestConfig });
  return res;
}

export function listJobsSuspenseQueryOptions(
  params?: ListJobsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listJobsSuspenseQueryKey(params);
  return queryOptions<
    ResponseConfig<ListJobsQueryResponse>,
    ResponseErrorConfig<ListJobs422>,
    ResponseConfig<ListJobsQueryResponse>,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return listJobsSuspense(params, config);
    },
  });
}

/**
 * @description List all jobs.
 * @summary List Jobs
 * {@link /v1/jobs/}
 */
export function useListJobsSuspense<
  TData = ResponseConfig<ListJobsQueryResponse>,
  TQueryData = ResponseConfig<ListJobsQueryResponse>,
  TQueryKey extends QueryKey = ListJobsSuspenseQueryKey
>(
  params?: ListJobsQueryParams,
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        ResponseConfig<ListJobsQueryResponse>,
        ResponseErrorConfig<ListJobs422>,
        TData,
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
  const queryKey = queryOptions?.queryKey ?? listJobsSuspenseQueryKey(params);

  const query = useSuspenseQuery(
    {
      ...(listJobsSuspenseQueryOptions(
        params,
        config
      ) as unknown as UseSuspenseQueryOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
    },
    queryClient
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<ListJobs422>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
