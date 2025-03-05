# Letta React

A Letta react library full of the hooks you need to talk to Letta instantly

```bash
npm install @letta-ai/letta-react
```

## Documentation

### Minimal Example

#### Server-side configuration

#### Next.js

Try out [`@letta-ai/letta-nextjs`](https://www.npmjs.com/package/@letta-ai/letta-nextjs) for a more streamlined setup.

##### Local Letta Instance

First setup Letta server, [instructions here](https://docs.letta.com/quickstart)

Add the following environment variable to your environment to avoid CORS errors

```bash
export ACCEPTABLE_ORIGINS=your server url
```

Then start your server.

##### Cloud/Secure Setups

Setup a proxy server, below we are using [`express`](https://www.npmjs.com/package/express), [`http-proxy-middleware`](https://www.npmjs.com/package/http-proxy-middleware) and [`cors`](https://www.npmjs.com/package/cors)

```typescript
import * as express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import { createProxyMiddleware } from 'http-proxy-middleware';
import type { Filter, Options, RequestHandler } from 'http-proxy-middleware';

const app = express();


app.use(cors({
    origin: process.env.YOUR_WEBSITE_URL
}))

const lettaProxy = createProxyMiddleware<Request, Response>({
    target: 'https://api.letta.com', // or your hosted url
    changeOrigin: true,
    headers: {
        Authorization: 'Bearer ${process.env.LETTA_API_KEY}'
    }
  }),

app.use(lettaProxy);

app.listen(3000);
```

#### Client Side Usage

##### Set up the `<LettaProvider />`

Add the `<LettaProvider />` to the root of your application

```typescript jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LettaProvider } from '../../src';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <StrictMode>
    <LettaProvider
      options={{
        baseUrl: `your-letta-api-server-location`,
      }}
    >
      <App />
    </LettaProvider>
  </StrictMode>
);
```

##### Sending and Reading Messages `useAgentMessages`

Check out [this example](./packages/letta-react/examples/view-and-send-messages) for more detailed usage.

```typescript jsx
const {
  messages,
  isLoading,
  isFetching,
  isLoadingError,
  sendMessage,
  isSending,
  sendingError,
  isSendingError,
  fetchOlderMessages,
  hasOlderMessages,
} = useAgentMessages({
  agentId: `your-agent-id`,
});
```

##### Getting Agent State

Check out [this example](./packages/letta-react/examples/view-and-send-messages) for more detailed usage.

```typescript jsx
const { agentState, error, isLoading, refresh } = useAgentState({
  agentId: `your-agent-id`,
});
```
