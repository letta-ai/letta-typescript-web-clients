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
    const requestHeaders = new Headers(request.headers);

    if (apiKey) {
      requestHeaders.set('Authorization', `Bearer ${apiKey}`);
    }

    const existingUrl = request.nextUrl.clone();

    const pathname = existingUrl.pathname.replace(LETTA_PATH, '');
    const query = existingUrl.searchParams;

    const url = new NextURL(`${baseUrl}${pathname}`);

    url.search = query.toString();

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
