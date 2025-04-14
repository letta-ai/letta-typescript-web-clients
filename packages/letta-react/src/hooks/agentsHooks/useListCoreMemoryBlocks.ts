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
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const listCoreMemoryBlocksQueryKey = (
  agent_id: ListCoreMemoryBlocksPathParams['agent_id']
) =>
  [
    {
      url: '/v1/agents/:agent_id/core-memory/blocks',
      params: { agent_id: agent_id },
    },
  ] as const;

export type ListCoreMemoryBlocksQueryKey = ReturnType<
  typeof listCoreMemoryBlocksQueryKey
>;

/**
 * @description Retrieve the core memory blocks of a specific agent.
 * @summary List Blocks
 * {@link /v1/agents/:agent_id/core-memory/blocks}
 */
export async function listCoreMemoryBlocks(
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

export function listCoreMemoryBlocksQueryOptions(
  agent_id: ListCoreMemoryBlocksPathParams['agent_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listCoreMemoryBlocksQueryKey(agent_id);
  return queryOptions<
    ResponseConfig<ListCoreMemoryBlocksQueryResponse>,
    ResponseErrorConfig<ListCoreMemoryBlocks422>,
    ResponseConfig<ListCoreMemoryBlocksQueryResponse>,
    typeof queryKey
  >({
    enabled: !!agent_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return listCoreMemoryBlocks(agent_id, config);
    },
  });
}

/**
 * @description Retrieve the core memory blocks of a specific agent.
 * @summary List Blocks
 * {@link /v1/agents/:agent_id/core-memory/blocks}
 */
export function useListCoreMemoryBlocks<
  TData = ResponseConfig<ListCoreMemoryBlocksQueryResponse>,
  TQueryData = ResponseConfig<ListCoreMemoryBlocksQueryResponse>,
  TQueryKey extends QueryKey = ListCoreMemoryBlocksQueryKey
>(
  agent_id: ListCoreMemoryBlocksPathParams['agent_id'],
  options: {
    query?: Partial<
      QueryObserverOptions<
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
    queryOptions?.queryKey ?? listCoreMemoryBlocksQueryKey(agent_id);

  const query = useQuery(
    {
      ...(listCoreMemoryBlocksQueryOptions(
        agent_id,
        config
      ) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient
  ) as UseQueryResult<TData, ResponseErrorConfig<ListCoreMemoryBlocks422>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
