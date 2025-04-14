/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { ToolReturnMessage } from './ToolReturnMessage.ts'
import type { ToolRunFromSource } from './ToolRunFromSource.ts'

/**
 * @description Successful Response
 */
export type RunToolFromSource200 = ToolReturnMessage

/**
 * @description Validation Error
 */
export type RunToolFromSource422 = HTTPValidationError

export type RunToolFromSourceMutationRequest = ToolRunFromSource

export type RunToolFromSourceMutationResponse = RunToolFromSource200

export type RunToolFromSourceMutation = {
  Response: RunToolFromSource200
  Request: RunToolFromSourceMutationRequest
  Errors: RunToolFromSource422
}