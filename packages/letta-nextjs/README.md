# Letta NextJS

A Letta-Nextjs library full of functions that should make it easier to build applications on top of Letta and Next.js

## Table of Contents

- [Documentation](#documentation)
  - [Minimal Example](#minimal-example)
    - [Before you start](#before-you-start)
    - [Server-side configuration](#server-side-configuration)
    - [Client Side Usage](#client-side-usage)
      - [Set up the `<LettaProvider />`](#set-up-the-lettaprovider-)
    - [Sending, Reading and Interacting with Agents](#sending-reading-and-interacting-with-agents)
- [Plugins](#plugins)

## Documentation

### Minimal Example

#### Before you start

`letta-nextjs` works best with [`letta-react`](https://www.npmjs.com/package/@letta-ai/letta-react).

```bash
npm install @letta-ai/letta-nextjs @letta-ai/letta-react
```

#### Server-side configuration

First create or update your `.env` file in the root of your project and add the following environment variables:

```bash
LETTA_BASE_URL=https://api.letta.com
LETTA_API_KEY=your-api-key-optional
```

Create or visit your `middleware.ts` file in root or `src` directory and add the following code:

```typescript
import { type NextRequest } from 'next/server';
import { lettaMiddleware } from '@letta-ai/letta-nextjs/server';

export function middleware(request: NextRequest) {
  const response = lettaMiddleware(request, {
    baseUrl: process.env.LETTA_BASE_URL,
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

# Plugins

There is a plugin that you can use to extend the functionality of Letta-Nextjs. Right now there is an `identityPlugin` that you can use to better secure your application.

### Identity Plugin

```typescript jsx
import { type NextRequest } from 'next/server';
import { lettaMiddleware } from '@letta-ai/letta-nextjs/server';
import { identityPlugin } from '@letta-ai/letta-nextjs/plugins';

export async function middleware(request: NextRequest) {
  const response = await lettaMiddleware(request, {
    baseUrl: 'http://localhost:3000',
    apiKey: process.env.LETTA_API_KEY,
    plugins: [
      identityPlugin({
        getIdentity: async (req: NextRequest) => {
          // Replace this with your own identity logic
          // you can return a identity id and Letta will only allow access to the agent if the agent is owned by the identity
          const cookie = req.cookies.get('letta-identity-id');

          return {
            identityId: cookie,
          };
        },
      }),
    ],
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
