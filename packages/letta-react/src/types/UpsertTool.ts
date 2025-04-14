/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts';
import type { Tool } from './Tool.ts';
import type { ToolCreate } from './ToolCreate.ts';

/**
 * @description Successful Response
 */
export type UpsertTool200 = Tool;

/**
 * @description Validation Error
 */
export type UpsertTool422 = HTTPValidationError;

export type UpsertToolMutationRequest = ToolCreate;

export type UpsertToolMutationResponse = UpsertTool200;

export type UpsertToolMutation = {
  Response: UpsertTool200;
  Request: UpsertToolMutationRequest;
  Errors: UpsertTool422;
};
