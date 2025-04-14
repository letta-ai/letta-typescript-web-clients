/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  SendGroupMessageMutationRequest,
  SendGroupMessageMutationResponse,
  SendGroupMessagePathParams,
  SendGroupMessage422,
} from '../../types/SendGroupMessage.ts';
import type {
  RequestConfig,
  ResponseConfig,
  ResponseErrorConfig,
} from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions, QueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

export const sendGroupMessageMutationKey = () =>
  [{ url: '/v1/groups/{group_id}/messages' }] as const;

export type SendGroupMessageMutationKey = ReturnType<
  typeof sendGroupMessageMutationKey
>;

/**
 * @description Process a user message and return the group's response.This endpoint accepts a message from a user and processes it through through agents in the group based on the specified pattern
 * @summary Send Group Message
 * {@link /v1/groups/:group_id/messages}
 */
export async function sendGroupMessage(
  group_id: SendGroupMessagePathParams['group_id'],
  data: SendGroupMessageMutationRequest,
  config: Partial<RequestConfig<SendGroupMessageMutationRequest>> & {
    client?: typeof client;
  } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    SendGroupMessageMutationResponse,
    ResponseErrorConfig<SendGroupMessage422>,
    SendGroupMessageMutationRequest
  >({
    method: 'POST',
    url: `/v1/groups/${group_id}/messages`,
    data,
    ...requestConfig,
  });
  return res;
}

/**
 * @description Process a user message and return the group's response.This endpoint accepts a message from a user and processes it through through agents in the group based on the specified pattern
 * @summary Send Group Message
 * {@link /v1/groups/:group_id/messages}
 */
export function useSendGroupMessage<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ResponseConfig<SendGroupMessageMutationResponse>,
      ResponseErrorConfig<SendGroupMessage422>,
      {
        group_id: SendGroupMessagePathParams['group_id'];
        data: SendGroupMessageMutationRequest;
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<SendGroupMessageMutationRequest>> & {
      client?: typeof client;
    };
  } = {}
) {
  const {
    mutation: { client: queryClient, ...mutationOptions } = {},
    client: config = {},
  } = options ?? {};
  const mutationKey =
    mutationOptions?.mutationKey ?? sendGroupMessageMutationKey();

  return useMutation<
    ResponseConfig<SendGroupMessageMutationResponse>,
    ResponseErrorConfig<SendGroupMessage422>,
    {
      group_id: SendGroupMessagePathParams['group_id'];
      data: SendGroupMessageMutationRequest;
    },
    TContext
  >(
    {
      mutationFn: async ({ group_id, data }) => {
        return sendGroupMessage(group_id, data, config);
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient
  );
}
