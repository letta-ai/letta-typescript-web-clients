/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  ListActiveRunsQueryResponse,
  ListActiveRunsQueryParams,
  ListActiveRuns422,
} from '../../types/ListActiveRuns.ts';
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

export const listActiveRunsQueryKey = (params?: ListActiveRunsQueryParams) =>
  [{ url: '/v1/runs/active' }, ...(params ? [params] : [])] as const;

export type ListActiveRunsQueryKey = ReturnType<typeof listActiveRunsQueryKey>;

/**
 * @description List all active runs.
 * @summary List Active Runs
 * {@link /v1/runs/active}
 */
export async function listActiveRuns(
  params?: ListActiveRunsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ListActiveRunsQueryResponse,
    ResponseErrorConfig<ListActiveRuns422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/runs/active`,
    params,
    ...requestConfig,
  });
  return res;
}

export function listActiveRunsQueryOptions(
  params?: ListActiveRunsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listActiveRunsQueryKey(params);
  return queryOptions<
    ResponseConfig<ListActiveRunsQueryResponse>,
    ResponseErrorConfig<ListActiveRuns422>,
    ResponseConfig<ListActiveRunsQueryResponse>,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return listActiveRuns(params, config);
    },
  });
}

/**
 * @description List all active runs.
 * @summary List Active Runs
 * {@link /v1/runs/active}
 */
export function useListActiveRuns<
  TData = ResponseConfig<ListActiveRunsQueryResponse>,
  TQueryData = ResponseConfig<ListActiveRunsQueryResponse>,
  TQueryKey extends QueryKey = ListActiveRunsQueryKey
>(
  params?: ListActiveRunsQueryParams,
  options: {
    query?: Partial<
      QueryObserverOptions<
        ResponseConfig<ListActiveRunsQueryResponse>,
        ResponseErrorConfig<ListActiveRuns422>,
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
  const queryKey = queryOptions?.queryKey ?? listActiveRunsQueryKey(params);

  const query = useQuery(
    {
      ...(listActiveRunsQueryOptions(
        params,
        config
      ) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient
  ) as UseQueryResult<TData, ResponseErrorConfig<ListActiveRuns422>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
