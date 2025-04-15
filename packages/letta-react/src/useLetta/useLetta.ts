import { useState } from 'react';
import { LettaClient } from '@letta-ai/letta-client';

export function useLetta(options: LettaClient.Options = {}) {
  const [client] = useState(new LettaClient(options));

  return client;
}
