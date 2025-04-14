/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export const hiddenReasoningMessageMessageTypeEnum = {
  hidden_reasoning_message: 'hidden_reasoning_message',
} as const

export type HiddenReasoningMessageMessageTypeEnum = (typeof hiddenReasoningMessageMessageTypeEnum)[keyof typeof hiddenReasoningMessageMessageTypeEnum]

export const hiddenReasoningMessageStateEnum = {
  redacted: 'redacted',
  omitted: 'omitted',
} as const

export type HiddenReasoningMessageStateEnum = (typeof hiddenReasoningMessageStateEnum)[keyof typeof hiddenReasoningMessageStateEnum]

/**
 * @description Representation of an agent\'s internal reasoning where reasoning content\nhas been hidden from the response.\n\nArgs:\n    id (str): The ID of the message\n    date (datetime): The date the message was created in ISO format\n    name (Optional[str]): The name of the sender of the message\n    state (Literal[\"redacted\", \"omitted\"]): Whether the reasoning\n        content was redacted by the provider or simply omitted by the API\n    hidden_reasoning (Optional[str]): The internal reasoning of the agent
 */
export type HiddenReasoningMessage = {
  /**
   * @type string
   */
  id: string
  /**
   * @type string, date-time
   */
  date: string
  name?: string | null
  otid?: string | null
  /**
   * @default "hidden_reasoning_message"
   * @type string
   */
  message_type: HiddenReasoningMessageMessageTypeEnum
  /**
   * @type string
   */
  state: HiddenReasoningMessageStateEnum
  hidden_reasoning?: string | null
}