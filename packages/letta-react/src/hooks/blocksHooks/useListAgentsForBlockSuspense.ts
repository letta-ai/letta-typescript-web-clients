/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  ListAgentsForBlockQueryResponse,
  ListAgentsForBlockPathParams,
  ListAgentsForBlock422,
} from '../../types/ListAgentsForBlock.ts';
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

export const listAgentsForBlockSuspenseQueryKey = (
  block_id: ListAgentsForBlockPathParams['block_id']
) =>
  [
    { url: '/v1/blocks/:block_id/agents', params: { block_id: block_id } },
  ] as const;

export type ListAgentsForBlockSuspenseQueryKey = ReturnType<
  typeof listAgentsForBlockSuspenseQueryKey
>;

/**
 * @description Retrieves all agents associated with the specified block.Raises a 404 if the block does not exist.
 * @summary List Agents For Block
 * {@link /v1/blocks/:block_id/agents}
 */
export async function listAgentsForBlockSuspense(
  block_id: ListAgentsForBlockPathParams['block_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ListAgentsForBlockQueryResponse,
    ResponseErrorConfig<ListAgentsForBlock422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/blocks/${block_id}/agents`,
    ...requestConfig,
  });
  return res;
}

export function listAgentsForBlockSuspenseQueryOptions(
  block_id: ListAgentsForBlockPathParams['block_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listAgentsForBlockSuspenseQueryKey(block_id);
  return queryOptions<
    ResponseConfig<ListAgentsForBlockQueryResponse>,
    ResponseErrorConfig<ListAgentsForBlock422>,
    ResponseConfig<ListAgentsForBlockQueryResponse>,
    typeof queryKey
  >({
    enabled: !!block_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return listAgentsForBlockSuspense(block_id, config);
    },
  });
}

/**
 * @description Retrieves all agents associated with the specified block.Raises a 404 if the block does not exist.
 * @summary List Agents For Block
 * {@link /v1/blocks/:block_id/agents}
 */
export function useListAgentsForBlockSuspense<
  TData = ResponseConfig<ListAgentsForBlockQueryResponse>,
  TQueryData = ResponseConfig<ListAgentsForBlockQueryResponse>,
  TQueryKey extends QueryKey = ListAgentsForBlockSuspenseQueryKey
>(
  block_id: ListAgentsForBlockPathParams['block_id'],
  options: {
    query?: Partial<
      UseSuspenseQueryOptions<
        ResponseConfig<ListAgentsForBlockQueryResponse>,
        ResponseErrorConfig<ListAgentsForBlock422>,
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
    queryOptions?.queryKey ?? listAgentsForBlockSuspenseQueryKey(block_id);

  const query = useSuspenseQuery(
    {
      ...(listAgentsForBlockSuspenseQueryOptions(
        block_id,
        config
      ) as unknown as UseSuspenseQueryOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
    },
    queryClient
  ) as UseSuspenseQueryResult<
    TData,
    ResponseErrorConfig<ListAgentsForBlock422>
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
