/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export const messageRoleEnum = {
  assistant: 'assistant',
  user: 'user',
  tool: 'tool',
  function: 'function',
  system: 'system',
} as const;

export type MessageRoleEnum =
  (typeof messageRoleEnum)[keyof typeof messageRoleEnum];

export type MessageRole = MessageRoleEnum;
