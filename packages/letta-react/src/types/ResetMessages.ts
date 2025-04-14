/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { AgentState } from './AgentState.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

export type ResetMessagesPathParams = {
  /**
   * @type string
   */
  agent_id: string
}

export type ResetMessagesQueryParams = {
  /**
   * @description If true, adds the default initial messages after resetting.
   * @default false
   * @type boolean | undefined
   */
  add_default_initial_messages?: boolean
}

/**
 * @description Successful Response
 */
export type ResetMessages200 = AgentState

/**
 * @description Validation Error
 */
export type ResetMessages422 = HTTPValidationError

export type ResetMessagesMutationResponse = ResetMessages200

export type ResetMessagesMutation = {
  Response: ResetMessages200
  PathParams: ResetMessagesPathParams
  QueryParams: ResetMessagesQueryParams
  Errors: ResetMessages422
}