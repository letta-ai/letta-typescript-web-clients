/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { ContextWindowOverview } from './ContextWindowOverview.ts';
import type { HTTPValidationError } from './HTTPValidationError.ts';

export type RetrieveAgentContextWindowPathParams = {
  /**
   * @type string
   */
  agent_id: string;
};

/**
 * @description Successful Response
 */
export type RetrieveAgentContextWindow200 = ContextWindowOverview;

/**
 * @description Validation Error
 */
export type RetrieveAgentContextWindow422 = HTTPValidationError;

export type RetrieveAgentContextWindowQueryResponse =
  RetrieveAgentContextWindow200;

export type RetrieveAgentContextWindowQuery = {
  Response: RetrieveAgentContextWindow200;
  PathParams: RetrieveAgentContextWindowPathParams;
  Errors: RetrieveAgentContextWindow422;
};
