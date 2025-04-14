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
  QueryObserverOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const listJobsQueryKey = (params?: ListJobsQueryParams) =>
  [{ url: '/v1/jobs/' }, ...(params ? [params] : [])] as const;

export type ListJobsQueryKey = ReturnType<typeof listJobsQueryKey>;

/**
 * @description List all jobs.
 * @summary List Jobs
 * {@link /v1/jobs/}
 */
export async function listJobs(
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

export function listJobsQueryOptions(
  params?: ListJobsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listJobsQueryKey(params);
  return queryOptions<
    ResponseConfig<ListJobsQueryResponse>,
    ResponseErrorConfig<ListJobs422>,
    ResponseConfig<ListJobsQueryResponse>,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return listJobs(params, config);
    },
  });
}

/**
 * @description List all jobs.
 * @summary List Jobs
 * {@link /v1/jobs/}
 */
export function useListJobs<
  TData = ResponseConfig<ListJobsQueryResponse>,
  TQueryData = ResponseConfig<ListJobsQueryResponse>,
  TQueryKey extends QueryKey = ListJobsQueryKey
>(
  params?: ListJobsQueryParams,
  options: {
    query?: Partial<
      QueryObserverOptions<
        ResponseConfig<ListJobsQueryResponse>,
        ResponseErrorConfig<ListJobs422>,
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
  const queryKey = queryOptions?.queryKey ?? listJobsQueryKey(params);

  const query = useQuery(
    {
      ...(listJobsQueryOptions(
        params,
        config
      ) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient
  ) as UseQueryResult<TData, ResponseErrorConfig<ListJobs422>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
