/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { Group } from './Group.ts'
import type { GroupUpdate } from './GroupUpdate.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

export type ModifyGroupPathParams = {
  /**
   * @type string
   */
  group_id: string
}

export type ModifyGroupHeaderParams = {
  'X-Project'?: string | null
}

/**
 * @description Successful Response
 */
export type ModifyGroup200 = Group

/**
 * @description Validation Error
 */
export type ModifyGroup422 = HTTPValidationError

export type ModifyGroupMutationRequest = GroupUpdate

export type ModifyGroupMutationResponse = ModifyGroup200

export type ModifyGroupMutation = {
  Response: ModifyGroup200
  Request: ModifyGroupMutationRequest
  PathParams: ModifyGroupPathParams
  HeaderParams: ModifyGroupHeaderParams
  Errors: ModifyGroup422
}