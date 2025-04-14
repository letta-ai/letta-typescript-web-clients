/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  ListCoreMemoryBlocksQueryResponse,
  ListCoreMemoryBlocksPathParams,
  ListCoreMemoryBlocks422,
} from '../../types/ListCoreMemoryBlocks.ts';
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

export const listCoreMemoryBlocksInfiniteQueryKey = (
  agent_id: ListCoreMemoryBlocksPathParams['agent_id']
) =>
  [
    {
      url: '/v1/agents/:agent_id/core-memory/blocks',
      params: { agent_id: agent_id },
    },
  ] as const;

export type ListCoreMemoryBlocksInfiniteQueryKey = ReturnType<
  typeof listCoreMemoryBlocksInfiniteQueryKey
>;

/**
 * @description Retrieve the core memory blocks of a specific agent.
 * @summary List Blocks
 * {@link /v1/agents/:agent_id/core-memory/blocks}
 */
export async function listCoreMemoryBlocksInfinite(
  agent_id: ListCoreMemoryBlocksPathParams['agent_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ListCoreMemoryBlocksQueryResponse,
    ResponseErrorConfig<ListCoreMemoryBlocks422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/agents/${agent_id}/core-memory/blocks`,
    ...requestConfig,
  });
  return res;
}

export function listCoreMemoryBlocksInfiniteQueryOptions(
  agent_id: ListCoreMemoryBlocksPathParams['agent_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listCoreMemoryBlocksInfiniteQueryKey(agent_id);
  return infiniteQueryOptions<
    ResponseConfig<ListCoreMemoryBlocksQueryResponse>,
    ResponseErrorConfig<ListCoreMemoryBlocks422>,
    ResponseConfig<ListCoreMemoryBlocksQueryResponse>,
    typeof queryKey
  >({
    enabled: !!agent_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return listCoreMemoryBlocksInfinite(agent_id, config);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage['nextCursor'],
    getPreviousPageParam: (firstPage) => firstPage['nextCursor'],
  });
}

/**
 * @description Retrieve the core memory blocks of a specific agent.
 * @summary List Blocks
 * {@link /v1/agents/:agent_id/core-memory/blocks}
 */
export function useListCoreMemoryBlocksInfinite<
  TData = InfiniteData<ResponseConfig<ListCoreMemoryBlocksQueryResponse>>,
  TQueryData = ResponseConfig<ListCoreMemoryBlocksQueryResponse>,
  TQueryKey extends QueryKey = ListCoreMemoryBlocksInfiniteQueryKey
>(
  agent_id: ListCoreMemoryBlocksPathParams['agent_id'],
  options: {
    query?: Partial<
      InfiniteQueryObserverOptions<
        ResponseConfig<ListCoreMemoryBlocksQueryResponse>,
        ResponseErrorConfig<ListCoreMemoryBlocks422>,
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
    queryOptions?.queryKey ?? listCoreMemoryBlocksInfiniteQueryKey(agent_id);

  const query = useInfiniteQuery(
    {
      ...(listCoreMemoryBlocksInfiniteQueryOptions(
        agent_id,
        config
      ) as unknown as InfiniteQueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<
        InfiniteQueryObserverOptions,
        'queryKey'
      >),
    },
    queryClient
  ) as UseInfiniteQueryResult<
    TData,
    ResponseErrorConfig<ListCoreMemoryBlocks422>
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
