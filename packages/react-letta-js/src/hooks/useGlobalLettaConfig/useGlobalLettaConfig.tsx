import React, { Dispatch, SetStateAction, useState } from 'react';
import { LettaClient } from '@letta-ai/letta-client';
import { createContext, useMemo, type ReactNode, useContext } from 'react';

type CachedData = Record<string, any>;

interface LettaProviderState {
  isProviderSet?: boolean;
  state: LettaClient.Options;
  cachedData: CachedData;
  updateCache: Dispatch<SetStateAction<CachedData>>;
}

const LettaContext = createContext<LettaProviderState>({
  state: {},
  cachedData: {},
  updateCache: () => {
    return;
  },
});

interface LettaProviderProps {
  options: LettaClient.Options;
  children: ReactNode;
}

export function LettaProvider(props: LettaProviderProps) {
  const [cachedData, updateCache] = useState({});

  const state = useMemo(
    () => ({
      state: props.options,
      cachedData,
      updateCache,
      isProviderSet: true,
    }),
    [props.options, updateCache, cachedData]
  );

  return (
    <LettaContext.Provider value={state}>
      {props.children}
    </LettaContext.Provider>
  );
}

export function useGlobalLettaConfig() {
  return useContext(LettaContext);
}
