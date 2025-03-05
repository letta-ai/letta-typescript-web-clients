'use client';
import React from 'react';
import type { ReactNode } from 'react';
import { LettaProvider } from '@letta-ai/letta-react';
import { LETTA_PATH } from '../../shared';

interface NextLettaProviderProps {
  children: ReactNode;
}

export function NextLettaProvider(props: NextLettaProviderProps) {
  const { children } = props;

  return (
    <LettaProvider
      options={{
        baseUrl: LETTA_PATH,
        environment: LETTA_PATH,
      }}
    >
      {children}
    </LettaProvider>
  );
}
