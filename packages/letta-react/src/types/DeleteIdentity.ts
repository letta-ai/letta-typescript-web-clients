/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { HTTPValidationError } from './HTTPValidationError.ts';

export type DeleteIdentityPathParams = {
  /**
   * @type string
   */
  identity_id: string;
};

/**
 * @description Successful Response
 */
export type DeleteIdentity200 = any;

/**
 * @description Validation Error
 */
export type DeleteIdentity422 = HTTPValidationError;

export type DeleteIdentityMutationResponse = DeleteIdentity200;

export type DeleteIdentityMutation = {
  Response: DeleteIdentity200;
  PathParams: DeleteIdentityPathParams;
  Errors: DeleteIdentity422;
};
