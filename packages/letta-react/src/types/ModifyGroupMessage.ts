/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { AssistantMessage } from './AssistantMessage.ts'
import type { HiddenReasoningMessage } from './HiddenReasoningMessage.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { ReasoningMessage } from './ReasoningMessage.ts'
import type { SystemMessage } from './SystemMessage.ts'
import type { ToolCallMessage } from './ToolCallMessage.ts'
import type { ToolReturnMessage } from './ToolReturnMessage.ts'
import type { UpdateAssistantMessage } from './UpdateAssistantMessage.ts'
import type { UpdateReasoningMessage } from './UpdateReasoningMessage.ts'
import type { UpdateSystemMessage } from './UpdateSystemMessage.ts'
import type { UpdateUserMessage } from './UpdateUserMessage.ts'
import type { UserMessage } from './UserMessage.ts'

export type ModifyGroupMessagePathParams = {
  /**
   * @type string
   */
  group_id: string
  /**
   * @type string
   */
  message_id: string
}

/**
 * @description Successful Response
 */
export type ModifyGroupMessage200 =
  | SystemMessage
  | UserMessage
  | ReasoningMessage
  | HiddenReasoningMessage
  | ToolCallMessage
  | ToolReturnMessage
  | AssistantMessage

/**
 * @description Validation Error
 */
export type ModifyGroupMessage422 = HTTPValidationError

export type ModifyGroupMessageMutationRequest = UpdateSystemMessage | UpdateUserMessage | UpdateReasoningMessage | UpdateAssistantMessage

export type ModifyGroupMessageMutationResponse = ModifyGroupMessage200

export type ModifyGroupMessageMutation = {
  Response: ModifyGroupMessage200
  Request: ModifyGroupMessageMutationRequest
  PathParams: ModifyGroupMessagePathParams
  Errors: ModifyGroupMessage422
}