/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { SSEServerConfig } from './SSEServerConfig.ts'
import type { StdioServerConfig } from './StdioServerConfig.ts'

/**
 * @description Successful Response
 */
export type AddMcpServer200 = (SSEServerConfig | StdioServerConfig)[]

/**
 * @description Validation Error
 */
export type AddMcpServer422 = HTTPValidationError

export type AddMcpServerMutationRequest = StdioServerConfig | SSEServerConfig

export type AddMcpServerMutationResponse = AddMcpServer200

export type AddMcpServerMutation = {
  Response: AddMcpServer200
  Request: AddMcpServerMutationRequest
  Errors: AddMcpServer422
}