# Letta React

Letta React is a helper library for using Letta in React applications it uses [tanstack/react-query](https://tanstack.com/query/v4) under the hood to manage the state of your queries and mutations.

## Installation

```bash
npm install @letta-ai/letta-react @tanstack/react-query @letta-ai/letta-client
```

## Usage

First set up a tanstack/react-query client and wrap your app with the `QueryClientProvider` component.

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  );
}
```

Then you can use `useLettaQuery` hooks to interact with the Letta API.

```tsx
import { useLetta, useLettaQuery } from '@letta-ai/letta-react';

function YourComponent() {
  const { data, isLoading, error } = useLettaQuery(
    // the first argument exposes a client instantiation
    (client) => client.agents.list({ limit: 1 }),
    // the rest of the argumenst are the same as react-query, so you should specify a queryKey
    { queryKey: ['agents', 'list'] }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data: {JSON.stringify(data)}</div>;
}
```

# Future Work

This library only supports queries not mutations at the moment. Please use this library in conjunction with [@letta-ai/vercel-ai-sdk-provider](https://www.npmjs.com/package/@letta-ai/vercel-ai-sdk-provider) for a full experience.
