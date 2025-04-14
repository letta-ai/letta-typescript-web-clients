/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts'

export type DeleteFileFromSourcePathParams = {
  /**
   * @type string
   */
  source_id: string
  /**
   * @type string
   */
  file_id: string
}

/**
 * @description Successful Response
 */
export type DeleteFileFromSource204 = any

/**
 * @description Validation Error
 */
export type DeleteFileFromSource422 = HTTPValidationError

export type DeleteFileFromSourceMutationResponse = DeleteFileFromSource204

export type DeleteFileFromSourceMutation = {
  Response: DeleteFileFromSource204
  PathParams: DeleteFileFromSourcePathParams
  Errors: DeleteFileFromSource422
}