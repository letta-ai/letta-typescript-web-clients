/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts'
import type { Source } from './Source.ts'

/**
 * @description Successful Response
 */
export type ListSources200 = Source[]

/**
 * @description Validation Error
 */
export type ListSources422 = HTTPValidationError

export type ListSourcesQueryResponse = ListSources200

export type ListSourcesQuery = {
  Response: ListSources200
  Errors: ListSources422
}