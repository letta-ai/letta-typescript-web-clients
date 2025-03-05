import { NextRequest, NextResponse } from 'next/server';
import { LettaClient } from '@letta-ai/letta-client';
import type { PluginType } from '../types';

interface IdentityPluginOptions {
  getIdentity: (req: NextRequest) => Promise<
    | {
        identityId: string;
      }
    | undefined
    | null
  >;
  errorCodeOnNotFound?: number;
  errorCodeOnUnauthorized?: number;
}

/**
 * Automatically secure routes by validating if the agent is owned by the identity
 * @param options
 */

// url starts with /v1/agents but can be followed by any string
const AgentRegex = new RegExp('/v1/agents/([a-zA-Z0-9-]+)/?');

export function identityPlugin(options: IdentityPluginOptions) {
  const { errorCodeOnNotFound = 404, errorCodeOnUnauthorized = 401 } = options;
  const operation: PluginType['operation'] =
    async function identityPluginOperation(req, payload, clientOptions) {
      if (!payload.pathname.startsWith('/v1/agents')) {
        return;
      }

      const { getIdentity } = options;

      const identity = await getIdentity(req);

      if (!identity) {
        return NextResponse.next({
          status: errorCodeOnUnauthorized,
        });
      }

      const client = new LettaClient(clientOptions);

      const agentId = AgentRegex.exec(payload.pathname)?.[1];
      if (!agentId) {
        return NextResponse.next({
          status: errorCodeOnNotFound,
        });
      }

      const agent = await client.agents.retrieve(agentId);

      if (!agent) {
        return NextResponse.next({
          status: errorCodeOnNotFound,
        });
      }

      if ((agent.identityIds || []).includes(identity.identityId)) {
        return;
      }

      return NextResponse.next({
        status: errorCodeOnUnauthorized,
      });
    };

  return {
    operation,
    triggeredAt: 'prerequest' as const,
  } satisfies PluginType;
}
