# Letta NextJS

A Letta-Nextjs library full of functions that should make it easier to build applications on top of Letta and Next.js

## Documentation

### Minimal Example

#### Before you start

`letta-nextjs` works best with [`letta-react`](https://www.npmjs.com/package/@letta-ai/letta-react).

```bash
npm install @letta-ai/letta-nextjs @letta-ai/letta-react
```

#### Server-side configuration

Create or visit your `middleware.ts` file in root or `src` directory and add the following code:

```typescript
import { type NextRequest } from 'next/server';
import { lettaMiddleware } from '@letta-ai/letta-nextjs/server';

export function middleware(request: NextRequest) {
  const response = lettaMiddleware(request, {
    baseUrl: 'http://localhost:3000',
    apiKey: process.env.LETTA_API_KEY,
  });

  if (response) {
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
```

The code above has been written so you can add additional middleware if you need. If response is null, you can continue with your middleware.

#### Client Side Usage

##### Set up the `<LettaProvider />`

Create a file called ClientComponents and add the `<LettaProvider />`

```typescript jsx
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
```

Inside your root layout file, import the `ClientLayout` component and wrap it around your application.

```typescript jsx
import ClientLayout from './ClientLayout';

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}
```

#### Sending, Reading and Interacting with Agents

See the [`letta-react`](https://www.npmjs.com/package/@letta-ai/letta-react) documentation for more information on how to send, read and interact with agents.

All you would need to do is use the hooks provided in that library.

```typescript jsx
import { useAgentMessages } from '@letta-ai/letta-react';

export default function Home() {
  const { messages, sendMessage } = useAgentMessages({
    agentId: 'agent-id',
  });

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>{message.text}</div>
      ))}
      <button onClick={() => sendMessage('Hello, Letta!')}>Send Message</button>
    </div>
  );
}
```
