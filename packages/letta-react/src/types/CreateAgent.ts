/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { AgentState } from './AgentState.ts'
import type { CreateAgentRequest } from './CreateAgentRequest.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

export type CreateAgentHeaderParams = {
  'X-Project'?: string | null
}

/**
 * @description Successful Response
 */
export type CreateAgent200 = AgentState

/**
 * @description Validation Error
 */
export type CreateAgent422 = HTTPValidationError

export type CreateAgentMutationRequest = CreateAgentRequest

export type CreateAgentMutationResponse = CreateAgent200

export type CreateAgentMutation = {
  Response: CreateAgent200
  Request: CreateAgentMutationRequest
  HeaderParams: CreateAgentHeaderParams
  Errors: CreateAgent422
}