import React from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { useLettaQuery } from './useLettaQuery.ts';
import { LettaClient } from '@letta-ai/letta-client';
import { enableFetchMocks } from 'jest-fetch-mock';
import fetchMock from 'jest-fetch-mock';
enableFetchMocks();
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useLetta } from '../useLetta/useLetta.ts';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useLettaQuery', () => {
  it('should create a useQuery hook around the given operation', async () => {
    // mock fetch function
    const mockList = jest
      .fn()
      .mockResolvedValue([{ id: 'agent1', name: 'Agent 1' }]);

    fetchMock.mockResponseOnce(
      JSON.stringify([{ id: 'agent1', name: 'Agent 1' }])
    );

    const { result } = renderHook(
      () => {
        const client = useLetta();

        return useLettaQuery((args) => client.agents.list(args), { limit: 1 });
      },
      { wrapper }
    );

    // Wait for the hook to fetch data
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    // Assert the result of the hook
    expect(result.current.data).toEqual([{ id: 'agent1', name: 'Agent 1' }]);
  });
});
