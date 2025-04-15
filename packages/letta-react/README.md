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

Then you can use `useLetta` and `useLettaQuery` hooks to interact with the Letta API.

```tsx
import { useLetta, useLettaQuery } from '@letta-ai/letta-react';

function YourComponent() {
  const client = useLetta();
  const { data, isLoading, error } = useLettaQuery(
    (args) => client.agents.list(args),
    { limit: 1 }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data: {JSON.stringify(data)}</div>;
}
```

The `useLetta` hook returns the Letta client instance, which you can use to call any of the API methods. The `useLettaQuery` hook is a wrapper around the `useQuery` hook from tanstack/react-query, which allows you to easily fetch data from the Letta API and manage the loading and error states.

The format of the `useLettaQuery` hook is as follows:

```tsx
useLettaQuery(
  operation // the client operation you want to call, this should be 1:1 match with our API docs, it __must__ be wrapped in a function
  args, // the arguments to pass to the operation
  options // optional react-query options
)
```

## Examples

### List Agents

1. First let's go to the [API docs](https://docs.letta.ai/api-reference/agents/list) and see the API for listing agents.

   ```ts
   import { LettaClient } from '@letta-ai/letta-client';
   const client = new LettaClient({ token: 'YOUR_TOKEN' });
   await client.agents.list();
   ```

   As we can see, we can call the `list` method on the `agents` object to get a list of agents. The `list` method takes an optional `args`.

2. Now let's translate the usage to use the `useLettaQuery` hook to call this API in a React component.

   ```tsx
   import { useLetta, useLettaQuery } from '@letta-ai/letta-react';

   function YourComponent() {
     const client = useLetta();
     const { data, isLoading, error } = useLettaQuery((args) =>
       client.agents.list(args)
     );

     if (isLoading) return <div>Loading...</div>;
     if (error) return <div>Error: {error.message}</div>;

     return <div>Data: {JSON.stringify(data)}</div>;
   }
   ```

# Future Work

This library only supports queries not mutations at the moment. Please use this library in conjunction with [@letta-ai/vercel-ai-sdk-provider](https://www.npmjs.com/package/@letta-ai/vercel-ai-sdk-provider) for a full experience.
