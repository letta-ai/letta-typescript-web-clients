/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  ListSourceFilesQueryResponse,
  ListSourceFilesPathParams,
  ListSourceFilesQueryParams,
  ListSourceFiles422,
} from '../../types/ListSourceFiles.ts';
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

export const listSourceFilesSuspenseQueryKey = (
  source_id: ListSourceFilesPathParams['source_id'],
  params?: ListSourceFilesQueryParams
) =>
  [
    { url: '/v1/sources/:source_id/files', params: { source_id: source_id } },
    ...(params ? [params] : []),
  ] as const;

export type ListSourceFilesSuspenseQueryKey = ReturnType<
  typeof listSourceFilesSuspenseQueryKey
>;

/**
 * @description List paginated files associated with a data source.
 * @summary List Source Files
 * {@link /v1/sources/:source_id/files}
 */
export async function listSourceFilesSuspense(
  source_id: ListSourceFilesPathParams['source_id'],
  params?: ListSourceFilesQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ListSourceFilesQueryResponse,
    ResponseErrorConfig<ListSourceFiles422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/sources/${source_id}/files`,
    params,
    ...requestConfig,
  });
  return res;
}

export function listSourceFilesSuspenseQueryOptions(
  source_id: ListSourceFilesPathParams['source_id'],
  params?: ListSourceFilesQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listSourceFilesSuspenseQueryKey(source_id, params);
  return queryOptions<
    ResponseConfig<ListSourceFilesQueryResponse>,
    ResponseErrorConfig<ListSourceFiles422>,
    ResponseConfig<ListSourceFilesQueryResponse>,
    typeof queryKey
  >({
    enabled: !!source_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return listSourceFilesSuspense(source_id, params, config);
    },
  });
}

/**
 * @description List paginated files associated with a data source.
 * @summary List Source Files
 * {@link /v1/sources/:source_id/files}
 */
export function useListSourceFilesSuspense<
  TData = ResponseConfig<ListSourceFilesQueryResponse>,
  TQueryData = ResponseConfig<ListSourceFilesQueryResponse>,
  TQueryKey extends QueryKey = ListSourceFilesSuspenseQueryKey
>(
  source_id: ListSourceFilesPathParams['source_id'],
  params?: ListSourceFilesQueryParams,
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        ResponseConfig<ListSourceFilesQueryResponse>,
        ResponseErrorConfig<ListSourceFiles422>,
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
  const queryKey =
    queryOptions?.queryKey ??
    listSourceFilesSuspenseQueryKey(source_id, params);

  const query = useSuspenseQuery(
    {
      ...(listSourceFilesSuspenseQueryOptions(
        source_id,
        params,
        config
      ) as unknown as UseSuspenseQueryOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
    },
    queryClient
  ) as UseSuspenseQueryResult<
    TData,
    ResponseErrorConfig<ListSourceFiles422>
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
