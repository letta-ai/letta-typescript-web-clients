/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  ListAgentSourcesQueryResponse,
  ListAgentSourcesPathParams,
  ListAgentSources422,
} from '../../types/ListAgentSources.ts';
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

export const listAgentSourcesInfiniteQueryKey = (
  agent_id: ListAgentSourcesPathParams['agent_id']
) =>
  [
    { url: '/v1/agents/:agent_id/sources', params: { agent_id: agent_id } },
  ] as const;

export type ListAgentSourcesInfiniteQueryKey = ReturnType<
  typeof listAgentSourcesInfiniteQueryKey
>;

/**
 * @description Get the sources associated with an agent.
 * @summary List Agent Sources
 * {@link /v1/agents/:agent_id/sources}
 */
export async function listAgentSourcesInfinite(
  agent_id: ListAgentSourcesPathParams['agent_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ListAgentSourcesQueryResponse,
    ResponseErrorConfig<ListAgentSources422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/agents/${agent_id}/sources`,
    ...requestConfig,
  });
  return res;
}

export function listAgentSourcesInfiniteQueryOptions(
  agent_id: ListAgentSourcesPathParams['agent_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listAgentSourcesInfiniteQueryKey(agent_id);
  return infiniteQueryOptions<
    ResponseConfig<ListAgentSourcesQueryResponse>,
    ResponseErrorConfig<ListAgentSources422>,
    ResponseConfig<ListAgentSourcesQueryResponse>,
    typeof queryKey
  >({
    enabled: !!agent_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return listAgentSourcesInfinite(agent_id, config);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage['nextCursor'],
    getPreviousPageParam: (firstPage) => firstPage['nextCursor'],
  });
}

/**
 * @description Get the sources associated with an agent.
 * @summary List Agent Sources
 * {@link /v1/agents/:agent_id/sources}
 */
export function useListAgentSourcesInfinite<
  TData = InfiniteData<ResponseConfig<ListAgentSourcesQueryResponse>>,
  TQueryData = ResponseConfig<ListAgentSourcesQueryResponse>,
  TQueryKey extends QueryKey = ListAgentSourcesInfiniteQueryKey
>(
  agent_id: ListAgentSourcesPathParams['agent_id'],
  options: {
    query?: Partial<
      InfiniteQueryObserverOptions<
        ResponseConfig<ListAgentSourcesQueryResponse>,
        ResponseErrorConfig<ListAgentSources422>,
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
    queryOptions?.queryKey ?? listAgentSourcesInfiniteQueryKey(agent_id);

  const query = useInfiniteQuery(
    {
      ...(listAgentSourcesInfiniteQueryOptions(
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
    ResponseErrorConfig<ListAgentSources422>
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
