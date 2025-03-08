import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { LETTA_PATH } from '../../../shared';
import { PluginType } from '../../../plugins';
import { NextURL } from 'next/dist/server/web/next-url';

interface LettaMiddlewareOptions {
  baseUrl: string;
  apiKey?: string;
  plugins?: PluginType[];
}

export async function lettaMiddleware(
  request: NextRequest,
  options: LettaMiddlewareOptions
) {
  const { baseUrl, apiKey, plugins = [] } = options;

  const preRequestPlugins = plugins.filter(
    (plugin) => plugin.triggeredAt === 'prerequest'
  );

  if (request.nextUrl.pathname.startsWith(LETTA_PATH)) {
    let url = request.nextUrl.clone();

    const requestHeaders = new Headers(request.headers);

    if (apiKey) {
      requestHeaders.set('Authorization', `Bearer ${apiKey}`);
    }

    url.protocol = baseUrl.startsWith('https') ? 'https:' : 'http:';

    url.host = baseUrl.replace(/(^\w+:|^)\/\//, '');

    if (baseUrl === 'https://api.letta.com') {
      url = new NextURL('https://api.letta.com');
    }

    url.pathname = url.pathname.replace(new RegExp(`^${LETTA_PATH}`), '');

    for (const plugin of preRequestPlugins) {
      const response = await plugin.operation(
        request,
        { pathname: url.pathname },
        {
          baseUrl,
          token: apiKey,
        }
      );

      if (response) {
        return response;
      }
    }

    return NextResponse.rewrite(url, {
      headers: requestHeaders,
    });
  }
}
