/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts';
import type { Passage } from './Passage.ts';

export type ListSourcePassagesPathParams = {
  /**
   * @type string
   */
  source_id: string;
};

/**
 * @description Successful Response
 */
export type ListSourcePassages200 = Passage[];

/**
 * @description Validation Error
 */
export type ListSourcePassages422 = HTTPValidationError;

export type ListSourcePassagesQueryResponse = ListSourcePassages200;

export type ListSourcePassagesQuery = {
  Response: ListSourcePassages200;
  PathParams: ListSourcePassagesPathParams;
  Errors: ListSourcePassages422;
};
