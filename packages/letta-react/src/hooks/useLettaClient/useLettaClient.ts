import { useState } from 'react';
import { LettaClient } from '@letta-ai/letta-client';
import { useGlobalLettaConfig } from '../useGlobalLettaConfig/useGlobalLettaConfig';

export function useLettaClient(localOptions: LettaClient.Options = {}) {
  const globalClient = useGlobalLettaConfig();

  const [localClient] = useState(
    () =>
      new LettaClient({
        ...globalClient.state,
        ...localOptions,
      })
  );

  return localClient;
}
