/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  ListProvidersQueryResponse,
  ListProvidersQueryParams,
  ListProviders422,
} from '../../types/ListProviders.ts';
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

export const listProvidersQueryKey = (params?: ListProvidersQueryParams) =>
  [{ url: '/v1/providers/' }, ...(params ? [params] : [])] as const;

export type ListProvidersQueryKey = ReturnType<typeof listProvidersQueryKey>;

/**
 * @description Get a list of all custom providers in the database
 * @summary List Providers
 * {@link /v1/providers/}
 */
export async function listProviders(
  params?: ListProvidersQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ListProvidersQueryResponse,
    ResponseErrorConfig<ListProviders422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/providers/`,
    params,
    ...requestConfig,
  });
  return res;
}

export function listProvidersQueryOptions(
  params?: ListProvidersQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listProvidersQueryKey(params);
  return queryOptions<
    ResponseConfig<ListProvidersQueryResponse>,
    ResponseErrorConfig<ListProviders422>,
    ResponseConfig<ListProvidersQueryResponse>,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return listProviders(params, config);
    },
  });
}

/**
 * @description Get a list of all custom providers in the database
 * @summary List Providers
 * {@link /v1/providers/}
 */
export function useListProviders<
  TData = ResponseConfig<ListProvidersQueryResponse>,
  TQueryData = ResponseConfig<ListProvidersQueryResponse>,
  TQueryKey extends QueryKey = ListProvidersQueryKey
>(
  params?: ListProvidersQueryParams,
  options: {
    query?: Partial<
      QueryObserverOptions<
        ResponseConfig<ListProvidersQueryResponse>,
        ResponseErrorConfig<ListProviders422>,
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
  const queryKey = queryOptions?.queryKey ?? listProvidersQueryKey(params);

  const query = useQuery(
    {
      ...(listProvidersQueryOptions(
        params,
        config
      ) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient
  ) as UseQueryResult<TData, ResponseErrorConfig<ListProviders422>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
