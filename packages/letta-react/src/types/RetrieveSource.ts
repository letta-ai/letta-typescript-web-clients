/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts';
import type { Source } from './Source.ts';

export type RetrieveSourcePathParams = {
  /**
   * @type string
   */
  source_id: string;
};

/**
 * @description Successful Response
 */
export type RetrieveSource200 = Source;

/**
 * @description Validation Error
 */
export type RetrieveSource422 = HTTPValidationError;

export type RetrieveSourceQueryResponse = RetrieveSource200;

export type RetrieveSourceQuery = {
  Response: RetrieveSource200;
  PathParams: RetrieveSourcePathParams;
  Errors: RetrieveSource422;
};
