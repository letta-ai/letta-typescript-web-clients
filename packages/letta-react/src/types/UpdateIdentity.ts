/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { Identity } from './Identity.ts'
import type { IdentityUpdate } from './IdentityUpdate.ts'

export type UpdateIdentityPathParams = {
  /**
   * @type string
   */
  identity_id: string
}

/**
 * @description Successful Response
 */
export type UpdateIdentity200 = Identity

/**
 * @description Validation Error
 */
export type UpdateIdentity422 = HTTPValidationError

export type UpdateIdentityMutationRequest = IdentityUpdate

export type UpdateIdentityMutationResponse = UpdateIdentity200

export type UpdateIdentityMutation = {
  Response: UpdateIdentity200
  Request: UpdateIdentityMutationRequest
  PathParams: UpdateIdentityPathParams
  Errors: UpdateIdentity422
}