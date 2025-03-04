import React from 'react';
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { LettaProvider } from '../../src';

interface DisableSSRProps {
  children: React.ReactNode;
}

function DisableSSR(props: DisableSSRProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <>{props.children}</> : null;
}

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <DisableSSR>
      <LettaProvider
        options={{
          environment: 'http://localhost:8283',
        }}
      >
        <App />
      </LettaProvider>
    </DisableSSR>
  </StrictMode>
);
