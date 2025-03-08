import { NextRequest } from 'next/server';
import { LETTA_PATH } from '../../../shared';
import { lettaMiddleware } from './lettaMiddleware';

describe('lettaMiddleware', () => {
  it('should return a rewritten response', async () => {
    const req = new NextRequest(
      new URL(`http://localhost:3000${LETTA_PATH}/v1/agents`)
    );

    const response = await lettaMiddleware(req, {
      baseUrl: 'https://api.letta.com',
      apiKey: '123',
    });

    expect(response?.headers.get('x-middleware-rewrite')).toEqual(
      'https://api.letta.com/v1/agents'
    );
  });

  it('should return a response with a bearer token', async () => {
    const req = new NextRequest(
      new URL(`http://localhost:3000${LETTA_PATH}/v1/agents`)
    );

    const response = await lettaMiddleware(req, {
      baseUrl: 'https://api.letta.com',
      apiKey: '123',
    });

    expect(response?.headers.get('Authorization')).toEqual('Bearer 123');
  });

  it('should return a response with a rewritten URL', async () => {
    const req = new NextRequest(
      new URL(`http://localhost:3000${LETTA_PATH}/v1/agents`)
    );

    const response = await lettaMiddleware(req, {
      baseUrl: 'http://localhost:8000',
      apiKey: '123',
    });

    expect(response?.headers.get('x-middleware-rewrite')).toEqual(
      'http://localhost:8000/v1/agents'
    );
  });
});
