/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts'

export type DeleteSourcePathParams = {
  /**
   * @type string
   */
  source_id: string
}

/**
 * @description Successful Response
 */
export type DeleteSource200 = any

/**
 * @description Validation Error
 */
export type DeleteSource422 = HTTPValidationError

export type DeleteSourceMutationResponse = DeleteSource200

export type DeleteSourceMutation = {
  Response: DeleteSource200
  PathParams: DeleteSourcePathParams
  Errors: DeleteSource422
}