/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { SSEServerConfig } from './SSEServerConfig.ts'
import type { StdioServerConfig } from './StdioServerConfig.ts'

export type DeleteMcpServerPathParams = {
  /**
   * @type string
   */
  mcp_server_name: string
}

/**
 * @description Successful Response
 */
export type DeleteMcpServer200 = (SSEServerConfig | StdioServerConfig)[]

/**
 * @description Validation Error
 */
export type DeleteMcpServer422 = HTTPValidationError

export type DeleteMcpServerMutationResponse = DeleteMcpServer200

export type DeleteMcpServerMutation = {
  Response: DeleteMcpServer200
  PathParams: DeleteMcpServerPathParams
  Errors: DeleteMcpServer422
}