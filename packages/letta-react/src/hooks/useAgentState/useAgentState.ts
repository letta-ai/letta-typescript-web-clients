import { useLettaClient } from '../useLettaClient/useLettaClient';
import type { LettaClient } from '@letta-ai/letta-client';
import { useCachedState } from '../useCachedState/useCachedState';
import type { AgentState, UpdateAgent } from '@letta-ai/letta-client/api';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseAgentStateOptions {
  client?: LettaClient.Options;
  agentId: string;
}

export function useAgentState(options: UseAgentStateOptions) {
  const { client, agentId } = options;
  const localClient = useLettaClient(client);

  const [localState, setLocalState] = useCachedState<AgentState | undefined>(
    `agent-state-${agentId}`,
    undefined
  );

  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatingError, setUpdatingError] = useState<unknown | null>(null);
  const [loadingError, setLoadingError] = useState<unknown | null>(null);
  const loadedAgentId = useRef<string | null>(null);

  const getAgentState = useCallback(async () => {
    try {
      const state = await localClient.agents.retrieve(agentId);

      setLocalState(state);
    } catch (error) {
      setLoadingError(error);
    } finally {
      setIsLoading(false);
    }
  }, [agentId, localClient, setLocalState]);

  const updateAgentState = useCallback(
    async (state: Partial<UpdateAgent>) => {
      setIsUpdating(true);
      try {
        const response = await localClient.agents.modify(agentId, state);

        setLocalState(response);
      } catch (error) {
        setUpdatingError(error);
      } finally {
        setIsUpdating(false);
      }
    },
    [agentId, localClient, setLocalState]
  );

  useEffect(() => {
    if (agentId !== loadedAgentId.current) {
      setIsLoading(true);
      void getAgentState();
      loadedAgentId.current = agentId;
    }
  }, [agentId]);

  return {
    isLoading,
    updateAgentState,
    isUpdating,
    updatingError,
    loadingError,
    agentState: localState,
    refresh: getAgentState,
  };
}
