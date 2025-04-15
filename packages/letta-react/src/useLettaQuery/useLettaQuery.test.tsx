import React from 'react';
import { renderHook, waitFor } from '@testing-library/react';
import { useLettaQuery } from './useLettaQuery';
import { enableFetchMocks } from 'jest-fetch-mock';
import fetchMock from 'jest-fetch-mock';
enableFetchMocks();
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
        return useLettaQuery(
          (client) => {
            return client.agents.list();
          },
          {
            queryKey: ['agents'],
          }
        );
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
