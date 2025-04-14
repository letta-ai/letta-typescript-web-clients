/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  AgentsMigrateAgentMutationRequest,
  AgentsMigrateAgentMutationResponse,
  AgentsMigrateAgentPathParams,
  AgentsMigrateAgent404,
  AgentsMigrateAgent409,
  AgentsMigrateAgent500,
} from '../../../types/agents/MigrateAgent.ts';
import type {
  RequestConfig,
  ResponseConfig,
  ResponseErrorConfig,
} from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions, QueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

export const agentsMigrateAgentMutationKey = () =>
  [{ url: '/v1/agents/{agent_id}/migrate' }] as const;

export type AgentsMigrateAgentMutationKey = ReturnType<
  typeof agentsMigrateAgentMutationKey
>;

/**
 * @description Migrate an agent to a new versioned agent template
 * @summary Migrate Agent
 * {@link /v1/agents/:agent_id/migrate}
 */
export async function agentsMigrateAgent(
  agent_id: AgentsMigrateAgentPathParams['agent_id'],
  data: AgentsMigrateAgentMutationRequest,
  config: Partial<RequestConfig<AgentsMigrateAgentMutationRequest>> & {
    client?: typeof client;
  } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AgentsMigrateAgentMutationResponse,
    ResponseErrorConfig<
      AgentsMigrateAgent404 | AgentsMigrateAgent409 | AgentsMigrateAgent500
    >,
    AgentsMigrateAgentMutationRequest
  >({
    method: 'POST',
    url: `/v1/agents/${agent_id}/migrate`,
    data,
    ...requestConfig,
  });
  return res;
}

/**
 * @description Migrate an agent to a new versioned agent template
 * @summary Migrate Agent
 * {@link /v1/agents/:agent_id/migrate}
 */
export function useAgentsMigrateAgent<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ResponseConfig<AgentsMigrateAgentMutationResponse>,
      ResponseErrorConfig<
        AgentsMigrateAgent404 | AgentsMigrateAgent409 | AgentsMigrateAgent500
      >,
      {
        agent_id: AgentsMigrateAgentPathParams['agent_id'];
        data: AgentsMigrateAgentMutationRequest;
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<AgentsMigrateAgentMutationRequest>> & {
      client?: typeof client;
    };
  } = {}
) {
  const {
    mutation: { client: queryClient, ...mutationOptions } = {},
    client: config = {},
  } = options ?? {};
  const mutationKey =
    mutationOptions?.mutationKey ?? agentsMigrateAgentMutationKey();

  return useMutation<
    ResponseConfig<AgentsMigrateAgentMutationResponse>,
    ResponseErrorConfig<
      AgentsMigrateAgent404 | AgentsMigrateAgent409 | AgentsMigrateAgent500
    >,
    {
      agent_id: AgentsMigrateAgentPathParams['agent_id'];
      data: AgentsMigrateAgentMutationRequest;
    },
    TContext
  >(
    {
      mutationFn: async ({ agent_id, data }) => {
        return agentsMigrateAgent(agent_id, data, config);
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient
  );
}
