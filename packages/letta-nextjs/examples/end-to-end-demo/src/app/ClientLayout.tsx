'use client';

import { LettaProvider } from '@letta-ai/letta-react';
import { getLettaProviderConfig } from '@letta-ai/letta-nextjs/client';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout(props: ClientLayoutProps) {
  const { children } = props;

  return (
    <LettaProvider options={getLettaProviderConfig()}>{children}</LettaProvider>
  );
}
