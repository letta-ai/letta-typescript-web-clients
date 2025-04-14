/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  ListRunMessagesQueryResponse,
  ListRunMessagesPathParams,
  ListRunMessagesQueryParams,
  ListRunMessages422,
} from '../../types/ListRunMessages.ts';
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

export const listRunMessagesInfiniteQueryKey = (
  run_id: ListRunMessagesPathParams['run_id'],
  params?: ListRunMessagesQueryParams
) =>
  [
    { url: '/v1/runs/:run_id/messages', params: { run_id: run_id } },
    ...(params ? [params] : []),
  ] as const;

export type ListRunMessagesInfiniteQueryKey = ReturnType<
  typeof listRunMessagesInfiniteQueryKey
>;

/**
 * @description Get messages associated with a run with filtering options.Args:    run_id: ID of the run    before: A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.    after: A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.    limit: Maximum number of messages to return    order: Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.    role: Filter by role (user/assistant/system/tool)    return_message_object: Whether to return Message objects or LettaMessage objects    user_id: ID of the user making the requestReturns:    A list of messages associated with the run. Default is List[LettaMessage].
 * @summary List Run Messages
 * {@link /v1/runs/:run_id/messages}
 */
export async function listRunMessagesInfinite(
  run_id: ListRunMessagesPathParams['run_id'],
  params?: ListRunMessagesQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ListRunMessagesQueryResponse,
    ResponseErrorConfig<ListRunMessages422>,
    unknown
  >({
    method: 'GET',
    url: `/v1/runs/${run_id}/messages`,
    params,
    ...requestConfig,
  });
  return res;
}

export function listRunMessagesInfiniteQueryOptions(
  run_id: ListRunMessagesPathParams['run_id'],
  params?: ListRunMessagesQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {}
) {
  const queryKey = listRunMessagesInfiniteQueryKey(run_id, params);
  return infiniteQueryOptions<
    ResponseConfig<ListRunMessagesQueryResponse>,
    ResponseErrorConfig<ListRunMessages422>,
    ResponseConfig<ListRunMessagesQueryResponse>,
    typeof queryKey,
    number
  >({
    enabled: !!run_id,
    queryKey,
    queryFn: async ({ signal, pageParam }) => {
      config.signal = signal;

      if (params) {
        params['next_page'] =
          pageParam as unknown as ListRunMessagesQueryParams['next_page'];
      }
      return listRunMessagesInfinite(run_id, params, config);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage['nextCursor'],
    getPreviousPageParam: (firstPage) => firstPage['nextCursor'],
  });
}

/**
 * @description Get messages associated with a run with filtering options.Args:    run_id: ID of the run    before: A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.    after: A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.    limit: Maximum number of messages to return    order: Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.    role: Filter by role (user/assistant/system/tool)    return_message_object: Whether to return Message objects or LettaMessage objects    user_id: ID of the user making the requestReturns:    A list of messages associated with the run. Default is List[LettaMessage].
 * @summary List Run Messages
 * {@link /v1/runs/:run_id/messages}
 */
export function useListRunMessagesInfinite<
  TData = InfiniteData<ResponseConfig<ListRunMessagesQueryResponse>>,
  TQueryData = ResponseConfig<ListRunMessagesQueryResponse>,
  TQueryKey extends QueryKey = ListRunMessagesInfiniteQueryKey
>(
  run_id: ListRunMessagesPathParams['run_id'],
  params?: ListRunMessagesQueryParams,
  options: {
    query?: Partial<
      InfiniteQueryObserverOptions<
        ResponseConfig<ListRunMessagesQueryResponse>,
        ResponseErrorConfig<ListRunMessages422>,
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
    queryOptions?.queryKey ?? listRunMessagesInfiniteQueryKey(run_id, params);

  const query = useInfiniteQuery(
    {
      ...(listRunMessagesInfiniteQueryOptions(
        run_id,
        params,
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
    ResponseErrorConfig<ListRunMessages422>
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
