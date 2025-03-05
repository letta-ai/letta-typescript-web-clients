import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { LETTA_PATH } from '../../../shared';

interface LettaMiddlewareOptions {
  baseUrl: string;
  apiKey?: string;
}

export async function lettaMiddleware(
  request: NextRequest,
  options: LettaMiddlewareOptions
) {
  const { baseUrl, apiKey } = options;

  if (request.nextUrl.pathname.startsWith(LETTA_PATH)) {
    const url = request.nextUrl.clone();

    const requestHeaders = new Headers(request.headers);

    if (apiKey) {
      requestHeaders.set('Authorization', `Bearer ${apiKey}`);
    }

    url.protocol = baseUrl.startsWith('https') ? 'https:' : 'http:';

    url.host = baseUrl.replace(/(^\w+:|^)\/\//, '');
    url.pathname = url.pathname.replace(new RegExp(`^${LETTA_PATH}`), '');

    return NextResponse.rewrite(url, {
      headers: requestHeaders,
    });
  }
}
