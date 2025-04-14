/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import client from '@kubb/plugin-client/clients/axios';
import type {
  UploadFileToSourceMutationRequest,
  UploadFileToSourceMutationResponse,
  UploadFileToSourcePathParams,
  UploadFileToSource422,
} from '../../types/UploadFileToSource.ts';
import type {
  RequestConfig,
  ResponseConfig,
  ResponseErrorConfig,
} from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions, QueryClient } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

export const uploadFileToSourceMutationKey = () =>
  [{ url: '/v1/sources/{source_id}/upload' }] as const;

export type UploadFileToSourceMutationKey = ReturnType<
  typeof uploadFileToSourceMutationKey
>;

/**
 * @description Upload a file to a data source.
 * @summary Upload File To Source
 * {@link /v1/sources/:source_id/upload}
 */
export async function uploadFileToSource(
  source_id: UploadFileToSourcePathParams['source_id'],
  data: UploadFileToSourceMutationRequest,
  config: Partial<RequestConfig<UploadFileToSourceMutationRequest>> & {
    client?: typeof client;
  } = {}
) {
  const { client: request = client, ...requestConfig } = config;

  const formData = new FormData();
  if (data) {
    Object.keys(data).forEach((key) => {
      const value = data[key as keyof typeof data];
      if (
        typeof key === 'string' &&
        (typeof value === 'string' || (value as Blob) instanceof Blob)
      ) {
        formData.append(key, value as unknown as string);
      }
    });
  }
  const res = await request<
    UploadFileToSourceMutationResponse,
    ResponseErrorConfig<UploadFileToSource422>,
    UploadFileToSourceMutationRequest
  >({
    method: 'POST',
    url: `/v1/sources/${source_id}/upload`,
    data: formData,
    ...requestConfig,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...requestConfig.headers,
    },
  });
  return res;
}

/**
 * @description Upload a file to a data source.
 * @summary Upload File To Source
 * {@link /v1/sources/:source_id/upload}
 */
export function useUploadFileToSource<TContext>(
  options: {
    mutation?: UseMutationOptions<
      ResponseConfig<UploadFileToSourceMutationResponse>,
      ResponseErrorConfig<UploadFileToSource422>,
      {
        source_id: UploadFileToSourcePathParams['source_id'];
        data: UploadFileToSourceMutationRequest;
      },
      TContext
    > & { client?: QueryClient };
    client?: Partial<RequestConfig<UploadFileToSourceMutationRequest>> & {
      client?: typeof client;
    };
  } = {}
) {
  const {
    mutation: { client: queryClient, ...mutationOptions } = {},
    client: config = {},
  } = options ?? {};
  const mutationKey =
    mutationOptions?.mutationKey ?? uploadFileToSourceMutationKey();

  return useMutation<
    ResponseConfig<UploadFileToSourceMutationResponse>,
    ResponseErrorConfig<UploadFileToSource422>,
    {
      source_id: UploadFileToSourcePathParams['source_id'];
      data: UploadFileToSourceMutationRequest;
    },
    TContext
  >(
    {
      mutationFn: async ({ source_id, data }) => {
        return uploadFileToSource(source_id, data, config);
      },
      mutationKey,
      ...mutationOptions,
    },
    queryClient
  );
}
