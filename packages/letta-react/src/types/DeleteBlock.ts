/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { Block } from './Block.ts';
import type { HTTPValidationError } from './HTTPValidationError.ts';

export type DeleteBlockPathParams = {
  /**
   * @type string
   */
  block_id: string;
};

/**
 * @description Successful Response
 */
export type DeleteBlock200 = Block;

/**
 * @description Validation Error
 */
export type DeleteBlock422 = HTTPValidationError;

export type DeleteBlockMutationResponse = DeleteBlock200;

export type DeleteBlockMutation = {
  Response: DeleteBlock200;
  PathParams: DeleteBlockPathParams;
  Errors: DeleteBlock422;
};
