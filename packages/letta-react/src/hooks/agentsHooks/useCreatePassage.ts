/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { CreatePassageMutationRequest, CreatePassageMutationResponse, CreatePassagePathParams, CreatePassage422 } from '../../types/CreatePassage.ts'
import type { RequestConfig, ResponseConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions, QueryClient } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const createPassageMutationKey = () => [{ url: '/v1/agents/{agent_id}/archival-memory' }] as const

export type CreatePassageMutationKey = ReturnType<typeof createPassageMutationKey>

/**
 * @description Insert a memory into an agent's archival memory store.
 * @summary Create Passage
 * {@link /v1/agents/:agent_id/archival-memory}
 */
export async function createPassage(
  agent_id: CreatePassagePathParams['agent_id'],
  data: CreatePassageMutationRequest,
  config: Partial<RequestConfig<CreatePassageMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<CreatePassageMutationResponse, ResponseErrorConfig<CreatePassage422>, CreatePassageMutationRequest>({
    method: 'POST',
    url: `/v1/agents/${agent_id}/archival-memory`,
    data,
    ...requestConfig,
  })
  return res
}

/**
 * @description Insert a memory into an agent's archival memory store.
 * @summary Create Passage
 * {@link /v1/agents/:agent_id/archival-memory}
 */
export function useCreatePassage<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ResponseConfig<CreatePassageMutationResponse>,
      ResponseErrorConfig<CreatePassage422>,
      { agent_id: CreatePassagePathParams['agent_id']; data: CreatePassageMutationRequest },
      TContext
    > & { client?: QueryClient }
    client?: Partial<RequestConfig<CreatePassageMutationRequest>> & { client?: typeof client }
  } = {},
) {
  const { mutation: { client: queryClient, ...mutationOptions } = {}, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? createPassageMutationKey()

  return useMutation<
    ResponseConfig<CreatePassageMutationResponse>,
    ResponseErrorConfig<CreatePassage422>,
    { agent_id: CreatePassagePathParams['agent_id']; data: CreatePassageMutationRequest },
    TContext
  >(
    {
      mutationFn: async ({ agent_id, data }) => {
        return createPassage(agent_id, data, config)
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  )
}