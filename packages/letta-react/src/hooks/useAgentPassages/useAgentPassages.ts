import { useLettaClient } from '../useLettaClient/useLettaClient';
import { useCachedState } from '../useCachedState/useCachedState';
import type { AgentState, Passage } from '@letta-ai/letta-client/api';
import type { LettaClient } from '@letta-ai/letta-client';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseAgentStateOptions {
  client?: LettaClient.Options;
  agentId: string;
}

export function useAgentPassages(options: UseAgentStateOptions) {
  const { client, agentId } = options;
  const localClient = useLettaClient(client);
  const loadedAgentId = useRef<string | null>(null);

  const [localState, setLocalState] = useCachedState<Passage[] | undefined>(
    `agent-passages-${agentId}`,
    undefined
  );

  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState<unknown | null>(null);

  const getAgentPassages = useCallback(async () => {
    try {
      const state = await localClient.agents.passages.list(agentId);

      setLocalState(state);
    } catch (error) {
      setLoadingError(error);
    } finally {
      setIsLoading(false);
    }
  }, [agentId, localClient, setLocalState]);

  useEffect(() => {
    if (agentId !== loadedAgentId.current) {
      setIsLoading(true);
      void getAgentPassages();
      loadedAgentId.current = agentId;
    }
  }, [agentId, getAgentPassages]);

  return {
    isLoading,
    loadingError,
    isLoadingError: !!loadingError,
    passages: localState,
    refresh: getAgentPassages,
  };
}
