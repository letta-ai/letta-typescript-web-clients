/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type {
  ClientSideAccessTokensDeleteClientSideAccessTokenMutationRequest,
  ClientSideAccessTokensDeleteClientSideAccessTokenMutationResponse,
  ClientSideAccessTokensDeleteClientSideAccessTokenPathParams,
  ClientSideAccessTokensDeleteClientSideAccessToken400,
} from '../../../types/clientSideAccessTokens/DeleteClientSideAccessToken.ts'
import type { RequestConfig, ResponseConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions, QueryClient } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const clientSideAccessTokensDeleteClientSideAccessTokenMutationKey = () => [{ url: '/v1/client-side-access-tokens/{token}' }] as const

export type ClientSideAccessTokensDeleteClientSideAccessTokenMutationKey = ReturnType<typeof clientSideAccessTokensDeleteClientSideAccessTokenMutationKey>

/**
 * @description Delete a client side access token.
 * @summary Delete Client Side Access Token
 * {@link /v1/client-side-access-tokens/:token}
 */
export async function clientSideAccessTokensDeleteClientSideAccessToken(
  token: ClientSideAccessTokensDeleteClientSideAccessTokenPathParams['token'],
  data?: ClientSideAccessTokensDeleteClientSideAccessTokenMutationRequest,
  config: Partial<RequestConfig<ClientSideAccessTokensDeleteClientSideAccessTokenMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<
    ClientSideAccessTokensDeleteClientSideAccessTokenMutationResponse,
    ResponseErrorConfig<ClientSideAccessTokensDeleteClientSideAccessToken400>,
    ClientSideAccessTokensDeleteClientSideAccessTokenMutationRequest
  >({ method: 'DELETE', url: `/v1/client-side-access-tokens/${token}`, data, ...requestConfig })
  return res
}

/**
 * @description Delete a client side access token.
 * @summary Delete Client Side Access Token
 * {@link /v1/client-side-access-tokens/:token}
 */
export function useClientSideAccessTokensDeleteClientSideAccessToken<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ResponseConfig<ClientSideAccessTokensDeleteClientSideAccessTokenMutationResponse>,
      ResponseErrorConfig<ClientSideAccessTokensDeleteClientSideAccessToken400>,
      { token: ClientSideAccessTokensDeleteClientSideAccessTokenPathParams['token']; data?: ClientSideAccessTokensDeleteClientSideAccessTokenMutationRequest },
      TContext
    > & { client?: QueryClient }
    client?: Partial<RequestConfig<ClientSideAccessTokensDeleteClientSideAccessTokenMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: { client: queryClient, ...mutationOptions } = {}, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? clientSideAccessTokensDeleteClientSideAccessTokenMutationKey()

  return useMutation<
    ResponseConfig<ClientSideAccessTokensDeleteClientSideAccessTokenMutationResponse>,
    ResponseErrorConfig<ClientSideAccessTokensDeleteClientSideAccessToken400>,
    { token: ClientSideAccessTokensDeleteClientSideAccessTokenPathParams['token']; data?: ClientSideAccessTokensDeleteClientSideAccessTokenMutationRequest },
    TContext
  >(
    {
      mutationFn: async ({ token, data }) => {
        return clientSideAccessTokensDeleteClientSideAccessToken(token, data, config)
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  )
}