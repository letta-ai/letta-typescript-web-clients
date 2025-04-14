/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { DeleteAgentMutationResponse, DeleteAgentPathParams, DeleteAgent422 } from '../../types/DeleteAgent.ts'
import type { RequestConfig, ResponseConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios'
import type { UseMutationOptions, QueryClient } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

export const deleteAgentMutationKey = () => [{ url: '/v1/agents/{agent_id}' }] as const

export type DeleteAgentMutationKey = ReturnType<typeof deleteAgentMutationKey>

/**
 * @description Delete an agent.
 * @summary Delete Agent
 * {@link /v1/agents/:agent_id}
 */
export async function deleteAgent(agent_id: DeleteAgentPathParams['agent_id'], config: Partial<RequestConfig> & { client?: typeof client } = {}) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<DeleteAgentMutationResponse, ResponseErrorConfig<DeleteAgent422>, unknown>({
    method: 'DELETE',
    url: `/v1/agents/${agent_id}`,
    ...requestConfig,
  })
  return res
}

/**
 * @description Delete an agent.
 * @summary Delete Agent
 * {@link /v1/agents/:agent_id}
 */
export function useDeleteAgent<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ResponseConfig<DeleteAgentMutationResponse>,
      ResponseErrorConfig<DeleteAgent422>,
      { agent_id: DeleteAgentPathParams['agent_id'] },
      TContext
    > & { client?: QueryClient }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { mutation: { client: queryClient, ...mutationOptions } = {}, client: config = {} } = options ?? {}
  const mutationKey = mutationOptions?.mutationKey ?? deleteAgentMutationKey()

  return useMutation<
    ResponseConfig<DeleteAgentMutationResponse>,
    ResponseErrorConfig<DeleteAgent422>,
    { agent_id: DeleteAgentPathParams['agent_id'] },
    TContext
  >(
    {
      mutationFn: async ({ agent_id }) => {
        return deleteAgent(agent_id, config)
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient,
  )
}