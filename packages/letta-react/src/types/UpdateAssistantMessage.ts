/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { LettaAssistantMessageContentUnion } from './LettaAssistantMessageContentUnion.ts';

export type UpdateAssistantMessage = {
  /**
   * @default "assistant_message"
   * @type string | undefined
   */
  message_type?: 'assistant_message';
  /**
   * @description The message content sent by the assistant (can be a string or an array of content parts)
   */
  content: LettaAssistantMessageContentUnion[] | string;
};
