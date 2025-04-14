/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts';

export type DeleteToolPathParams = {
  /**
   * @type string
   */
  tool_id: string;
};

/**
 * @description Successful Response
 */
export type DeleteTool200 = any;

/**
 * @description Validation Error
 */
export type DeleteTool422 = HTTPValidationError;

export type DeleteToolMutationResponse = DeleteTool200;

export type DeleteToolMutation = {
  Response: DeleteTool200;
  PathParams: DeleteToolPathParams;
  Errors: DeleteTool422;
};
