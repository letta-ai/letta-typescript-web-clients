/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  ListActiveJobsQueryResponse,
  ListActiveJobs422,
} from '../../types/ListActiveJobs.ts';
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

export const listActiveJobsQueryKey = () =>
  [{ url: '/v1/jobs/active' }] as const;

export type ListActiveJobsQueryKey = ReturnType<typeof listActiveJobsQueryKey>;

/**
 * @description List all active jobs.
 * @summary List Active Jobs
 * {@link /v1/jobs/active}
 */
export async function listActiveJobs(
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ListActiveJobsQueryResponse,
    ResponseErrorConfig<ListActiveJobs422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/jobs/active`,
    ...requestConfig,
  });
  return res;
}

export function listActiveJobsQueryOptions(
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listActiveJobsQueryKey();
  return queryOptions<
    ResponseConfig<ListActiveJobsQueryResponse>,
    ResponseErrorConfig<ListActiveJobs422>,
    ResponseConfig<ListActiveJobsQueryResponse>,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return listActiveJobs(config);
    },
  });
}

/**
 * @description List all active jobs.
 * @summary List Active Jobs
 * {@link /v1/jobs/active}
 */
export function useListActiveJobs<
  TData = ResponseConfig<ListActiveJobsQueryResponse>,
  TQueryData = ResponseConfig<ListActiveJobsQueryResponse>,
  TQueryKey extends QueryKey = ListActiveJobsQueryKey
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        ResponseConfig<ListActiveJobsQueryResponse>,
        ResponseErrorConfig<ListActiveJobs422>,
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
  const queryKey = queryOptions?.queryKey ?? listActiveJobsQueryKey();

  const query = useQuery(
    {
      ...(listActiveJobsQueryOptions(
        config
      ) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient
  ) as UseQueryResult<TData, ResponseErrorConfig<ListActiveJobs422>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
