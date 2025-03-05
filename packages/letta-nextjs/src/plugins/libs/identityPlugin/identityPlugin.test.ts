import { identityPlugin } from './identityPlugin';
import { LettaClient } from '@letta-ai/letta-client';
import { NextRequest } from 'next/server';

jest.mock('@letta-ai/letta-client', () => ({
  LettaClient: jest.fn(),
}));

const LettaClientMock = LettaClient as jest.Mock;

describe('identityPlugin', () => {
  it('should work for /v1/agents/:agent_id', async () => {
    LettaClientMock.mockImplementation(() => ({
      agents: {
        retrieve: () =>
          Promise.resolve({
            identityIds: ['identity'],
          }),
      },
    }));

    const { operation } = identityPlugin({
      getIdentity: () => Promise.resolve('identity'),
    });

    expect(
      operation(
        {
          url: '/v1/agents/1234',
        } as NextRequest,
        { pathname: '/v1/agents/1235' },
        { baseUrl: '' }
      )
    ).resolves.toBeUndefined();
  });

  it('should work for /v1/agents/:agent_id/other', async () => {
    LettaClientMock.mockImplementation(() => ({
      agents: {
        retrieve: () =>
          Promise.resolve({
            identityIds: ['identity'],
          }),
      },
    }));

    const { operation } = identityPlugin({
      getIdentity: () => Promise.resolve('identity'),
    });

    expect(
      operation(
        {
          url: '/v1/agents/1234/other',
        } as NextRequest,
        { pathname: '/v1/agents/1235/other' },
        { baseUrl: '' }
      )
    ).resolves.toBeUndefined();
  });

  it('should not work if identity is not in agent', async () => {
    LettaClientMock.mockImplementation(() => ({
      agents: {
        retrieve: () =>
          Promise.resolve({
            identityIds: [],
          }),
      },
    }));

    const { operation } = identityPlugin({
      getIdentity: () => Promise.resolve('identity'),
    });

    expect(
      operation(
        {
          url: '/v1/agents/1235',
        } as NextRequest,
        { pathname: '/v1/agents/1235' },
        { baseUrl: '' }
      )
    ).resolves.toBeTruthy();
  });
});
