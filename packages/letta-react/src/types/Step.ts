/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { Message } from './Message.ts';

export type Step = {
  /**
   * @description The id of the step. Assigned by the database.
   * @type string
   */
  id: string;
  /**
   * @description The surface that this agent step was initiated from.
   */
  origin?: string | null;
  /**
   * @description The unique identifier of the provider that was configured for this step
   */
  provider_id?: string | null;
  /**
   * @description The unique identifier of the job that this step belongs to. Only included for async calls.
   */
  job_id?: string | null;
  /**
   * @description The ID of the agent that performed the step.
   */
  agent_id?: string | null;
  /**
   * @description The name of the provider used for this step.
   */
  provider_name?: string | null;
  /**
   * @description The name of the model used for this step.
   */
  model?: string | null;
  /**
   * @description The model endpoint url used for this step.
   */
  model_endpoint?: string | null;
  /**
   * @description The context window limit configured for this step.
   */
  context_window_limit?: number | null;
  /**
   * @description The number of tokens generated by the agent during this step.
   */
  completion_tokens?: number | null;
  /**
   * @description The number of tokens in the prompt during this step.
   */
  prompt_tokens?: number | null;
  /**
   * @description The total number of tokens processed by the agent during this step.
   */
  total_tokens?: number | null;
  /**
   * @description Metadata for the agent.
   */
  completion_tokens_details?: {
    [key: string]: any;
  } | null;
  /**
   * @description Metadata tags.
   * @type array | undefined
   */
  tags?: string[];
  /**
   * @description The unique identifier of the transaction that processed this step.
   */
  tid?: string | null;
  /**
   * @description The trace id of the agent step.
   */
  trace_id?: string | null;
  /**
   * @description The messages generated during this step.
   * @type array | undefined
   */
  messages?: Message[];
};
