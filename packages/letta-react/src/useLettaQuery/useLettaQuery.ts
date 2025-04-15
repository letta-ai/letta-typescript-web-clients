import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { LettaClient } from '@letta-ai/letta-client';
import type { UseQueryOptions } from '@tanstack/react-query/src/types.ts';

type Query<Res> = (client: LettaClient) => Res;

type Options<Res> = Omit<UseQueryOptions<Res>, 'queryFn'>;

export function useLettaQuery<Res>(
  operation: Query<Promise<Res>>,
  queryOptions: Options<Res>
) {
  const client = useRef(
    new LettaClient({
      // force to use the default base URL, you should by proxy it in your server
      baseUrl: '/',
    })
  );

  return useQuery<Res>({
    ...queryOptions,
    queryFn: async () => {
      return operation(client.current);
    },
  });
}
