/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export const redactedReasoningContentTypeEnum = {
  redacted_reasoning: 'redacted_reasoning',
} as const

export type RedactedReasoningContentTypeEnum = (typeof redactedReasoningContentTypeEnum)[keyof typeof redactedReasoningContentTypeEnum]

export type RedactedReasoningContent = {
  /**
   * @description Indicates this is a redacted thinking step.
   * @default "redacted_reasoning"
   * @type string
   */
  type: RedactedReasoningContentTypeEnum
  /**
   * @description The redacted or filtered intermediate reasoning content.
   * @type string
   */
  data: string
}