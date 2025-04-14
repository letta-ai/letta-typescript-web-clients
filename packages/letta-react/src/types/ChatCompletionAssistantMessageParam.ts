/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { Audio } from './Audio.ts';
import type { ChatCompletionContentPartRefusalParam } from './ChatCompletionContentPartRefusalParam.ts';
import type { ChatCompletionContentPartTextParam } from './ChatCompletionContentPartTextParam.ts';
import type { ChatCompletionMessageToolCallParam } from './ChatCompletionMessageToolCallParam.ts';
import type { FunctionCall } from './FunctionCall.ts';

export type ChatCompletionAssistantMessageParam = {
  /**
   * @type string
   */
  role: 'assistant';
  audio?: Audio | null;
  content?:
    | string
    | (
        | ChatCompletionContentPartTextParam
        | ChatCompletionContentPartRefusalParam
      )[]
    | null;
  function_call?: FunctionCall | null;
  /**
   * @type string | undefined
   */
  name?: string;
  refusal?: string | null;
  /**
   * @type array | undefined
   */
  tool_calls?: ChatCompletionMessageToolCallParam[];
};
