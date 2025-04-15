import { useQuery } from '@tanstack/react-query';

export function getQueryKey<Request>(
  operationName: string,
  request: Request
): [string, Request] {
  return [operationName, request];
}

export function useLettaQuery<
  Request extends Record<string, any> = Record<string, any>,
  Options extends Record<string, any> = Record<string, any>,
  Response = unknown
>(
  operation: (request: Request, options?: Options) => Response,
  request: Request,
  options?: Options,
  queryOptions = {}
): ReturnType<
  typeof useQuery<
    Awaited<Response>,
    Error,
    Awaited<Response>,
    [string, Request]
  >
> {
  return useQuery<Response, Error, Awaited<Response>, [string, Request]>({
    queryKey: getQueryKey<Request>(operation.name, request),
    queryFn: () => {
      return operation(request, options);
    },
    ...(queryOptions || {}),
  });
}
