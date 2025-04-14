/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  CreateProviderMutationRequest,
  CreateProviderMutationResponse,
  CreateProvider422,
} from '../../types/CreateProvider.ts';
import type {
  RequestConfig,
  ResponseConfig,
  ResponseErrorConfig,
} from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions, QueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

export const createProviderMutationKey = () =>
  [{ url: '/v1/providers/' }] as const;

export type CreateProviderMutationKey = ReturnType<
  typeof createProviderMutationKey
>;

/**
 * @description Create a new custom provider
 * @summary Create Provider
 * {@link /v1/providers/}
 */
export async function createProvider(
  data: CreateProviderMutationRequest,
  config: Partial<RequestConfig<CreateProviderMutationRequest>> & {
    client?: typeof client;
  } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CreateProviderMutationResponse,
    ResponseErrorConfig<CreateProvider422>,
    CreateProviderMutationRequest
  >({
    method: 'POST',
    url: `/v1/providers/`,
    data,
    ...requestConfig,
  });
  return res;
}

/**
 * @description Create a new custom provider
 * @summary Create Provider
 * {@link /v1/providers/}
 */
export function useCreateProvider<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ResponseConfig<CreateProviderMutationResponse>,
      ResponseErrorConfig<CreateProvider422>,
      { data: CreateProviderMutationRequest },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<CreateProviderMutationRequest>> & {
      client?: typeof client;
    };
  } = {}
) {
  const {
    mutation: { client: queryClient, ...mutationOptions } = {},
    client: config = {},
  } = options ?? {};
  const mutationKey =
    mutationOptions?.mutationKey ?? createProviderMutationKey();

  return useMutation<
    ResponseConfig<CreateProviderMutationResponse>,
    ResponseErrorConfig<CreateProvider422>,
    { data: CreateProviderMutationRequest },
    TContext
  >(
    {
      mutationFn: async ({ data }) => {
        return createProvider(data, config);
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient
  );
}
