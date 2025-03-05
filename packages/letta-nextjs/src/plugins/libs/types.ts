import type { NextRequest, NextResponse } from 'next/server';
import type { LettaClient } from '@letta-ai/letta-client';

export interface LettaMiddlewarePayload {
  pathname: string;
}

export type PluginType = {
  operation: (
    req: NextRequest,
    payload: LettaMiddlewarePayload,
    options: LettaClient.Options
  ) => Promise<NextResponse | undefined>;
  triggeredAt: 'prerequest';
};
