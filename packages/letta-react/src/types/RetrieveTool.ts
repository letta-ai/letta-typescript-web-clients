/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts';
import type { Tool } from './Tool.ts';

export type RetrieveToolPathParams = {
  /**
   * @type string
   */
  tool_id: string;
};

/**
 * @description Successful Response
 */
export type RetrieveTool200 = Tool;

/**
 * @description Validation Error
 */
export type RetrieveTool422 = HTTPValidationError;

export type RetrieveToolQueryResponse = RetrieveTool200;

export type RetrieveToolQuery = {
  Response: RetrieveTool200;
  PathParams: RetrieveToolPathParams;
  Errors: RetrieveTool422;
};
