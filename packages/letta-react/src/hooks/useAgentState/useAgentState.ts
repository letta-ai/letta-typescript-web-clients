import { useLettaClient } from '../useLettaClient/useLettaClient';
import type { LettaClient } from '@letta-ai/letta-client';
import { useCachedState } from '../useCachedState/useCachedState';
import type { AgentState } from '@letta-ai/letta-client/api';
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
  const [loadingError, setLoadingError] = useState<unknown | null>(null);
  const hasInitialLoaded = useRef<boolean>(false);

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

  useEffect(() => {
    if (hasInitialLoaded.current) {
      return;
    }

    hasInitialLoaded.current = true;

    setIsLoading(true);

    getAgentState();
  }, []);

  return {
    isLoading,
    error: loadingError,
    agentState: localState,
    refresh: getAgentState,
  };
}
