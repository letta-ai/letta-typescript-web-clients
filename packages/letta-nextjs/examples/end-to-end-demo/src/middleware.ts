import { type NextRequest } from 'next/server';
import { lettaMiddleware } from '@letta-ai/letta-nextjs/server';
import { identityPlugin } from '@letta-ai/letta-nextjs/plugins';

export function middleware(request: NextRequest) {
  const response = lettaMiddleware(request, {
    baseUrl: 'http://localhost:3000',
    apiKey: process.env.LETTA_API_KEY,
    plugins: [
      identityPlugin({
        getIdentity: async () => {
          // Replace this with your own identity logic
          return 'identity-dd11e6be-3ce0-48fe-8e12-6b6bf5e2b9f9';
        },
      }),
    ],
  });

  if (response) {
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
