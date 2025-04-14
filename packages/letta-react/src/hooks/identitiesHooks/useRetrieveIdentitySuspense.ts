/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios'
import type { RetrieveIdentityQueryResponse, RetrieveIdentityPathParams, RetrieveIdentity422 } from '../../types/RetrieveIdentity.ts'
import type { RequestConfig, ResponseErrorConfig, ResponseConfig } from '@kubb/plugin-client/clients/axios'
import type { QueryKey, QueryClient, UseSuspenseQueryOptions, UseSuspenseQueryResult } from '@tanstack/react-query'
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'

export const retrieveIdentitySuspenseQueryKey = (identity_id: RetrieveIdentityPathParams['identity_id']) =>
  [{ url: '/v1/identities/:identity_id', params: { identity_id: identity_id } }] as const

export type RetrieveIdentitySuspenseQueryKey = ReturnType<typeof retrieveIdentitySuspenseQueryKey>

/**
 * @summary Retrieve Identity
 * {@link /v1/identities/:identity_id}
 */
export async function retrieveIdentitySuspense(
  identity_id: RetrieveIdentityPathParams['identity_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config

  const res = await request<RetrieveIdentityQueryResponse, ResponseErrorConfig<RetrieveIdentity422>, unknown>({
    method: 'GET',
    url: `/v1/identities/${identity_id}`,
    ...requestConfig,
  })
  return res
}

export function retrieveIdentitySuspenseQueryOptions(
  identity_id: RetrieveIdentityPathParams['identity_id'],
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = retrieveIdentitySuspenseQueryKey(identity_id)
  return queryOptions<
    ResponseConfig<RetrieveIdentityQueryResponse>,
    ResponseErrorConfig<RetrieveIdentity422>,
    ResponseConfig<RetrieveIdentityQueryResponse>,
    typeof queryKey
  >({
    enabled: !!identity_id,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal
      return retrieveIdentitySuspense(identity_id, config)
    },
  })
}

/**
 * @summary Retrieve Identity
 * {@link /v1/identities/:identity_id}
 */
export function useRetrieveIdentitySuspense<
  TData = ResponseConfig<RetrieveIdentityQueryResponse>,
  TQueryData = ResponseConfig<RetrieveIdentityQueryResponse>,
  TQueryKey extends QueryKey = RetrieveIdentitySuspenseQueryKey,
>(
  identity_id: RetrieveIdentityPathParams['identity_id'],
  options: {
    query?: Partial<UseSuspenseQueryOptions<ResponseConfig<RetrieveIdentityQueryResponse>, ResponseErrorConfig<RetrieveIdentity422>, TData, TQueryKey>> & {
      client?: QueryClient
    }
    client?: Partial<RequestConfig> & { client?: typeof client }
  } = {},
) {
  const { query: { client: queryClient, ...queryOptions } = {}, client: config = {} } = options ?? {}
  const queryKey = queryOptions?.queryKey ?? retrieveIdentitySuspenseQueryKey(identity_id)

  const query = useSuspenseQuery(
    {
      ...(retrieveIdentitySuspenseQueryOptions(identity_id, config) as unknown as UseSuspenseQueryOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<UseSuspenseQueryOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseSuspenseQueryResult<TData, ResponseErrorConfig<RetrieveIdentity422>> & { queryKey: TQueryKey }

  query.queryKey = queryKey as TQueryKey

  return query
}