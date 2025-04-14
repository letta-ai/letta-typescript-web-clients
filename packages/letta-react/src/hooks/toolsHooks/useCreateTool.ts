/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  CreateToolMutationRequest,
  CreateToolMutationResponse,
  CreateTool422,
} from '../../types/CreateTool.ts';
import type {
  RequestConfig,
  ResponseConfig,
  ResponseErrorConfig,
} from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions, QueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

export const createToolMutationKey = () => [{ url: '/v1/tools/' }] as const;

export type CreateToolMutationKey = ReturnType<typeof createToolMutationKey>;

/**
 * @description Create a new tool
 * @summary Create Tool
 * {@link /v1/tools/}
 */
export async function createTool(
  data: CreateToolMutationRequest,
  config: Partial<RequestConfig<CreateToolMutationRequest>> & {
    client?: typeof client;
  } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CreateToolMutationResponse,
    ResponseErrorConfig<CreateTool422>,
    CreateToolMutationRequest
  >({
    method: 'POST',
    url: `/v1/tools/`,
    data,
    ...requestConfig,
  });
  return res;
}

/**
 * @description Create a new tool
 * @summary Create Tool
 * {@link /v1/tools/}
 */
export function useCreateTool<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ResponseConfig<CreateToolMutationResponse>,
      ResponseErrorConfig<CreateTool422>,
      { data: CreateToolMutationRequest },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<CreateToolMutationRequest>> & {
      client?: typeof client;
    };
  } = {}
) {
  const {
    mutation: { client: queryClient, ...mutationOptions } = {},
    client: config = {},
  } = options ?? {};
  const mutationKey = mutationOptions?.mutationKey ?? createToolMutationKey();

  return useMutation<
    ResponseConfig<CreateToolMutationResponse>,
    ResponseErrorConfig<CreateTool422>,
    { data: CreateToolMutationRequest },
    TContext
  >(
    {
      mutationFn: async ({ data }) => {
        return createTool(data, config);
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient
  );
}
