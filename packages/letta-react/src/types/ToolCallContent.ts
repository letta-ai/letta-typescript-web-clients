/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export const toolCallContentTypeEnum = {
  tool_call: 'tool_call',
  tool_return: 'tool_return',
} as const

export type ToolCallContentTypeEnum = (typeof toolCallContentTypeEnum)[keyof typeof toolCallContentTypeEnum]

export type ToolCallContent = {
  /**
   * @description Indicates this content represents a tool call event.
   * @default "tool_call"
   * @type string
   */
  type: ToolCallContentTypeEnum
  /**
   * @description A unique identifier for this specific tool call instance.
   * @type string
   */
  id: string
  /**
   * @description The name of the tool being called.
   * @type string
   */
  name: string
  /**
   * @description The parameters being passed to the tool, structured as a dictionary of parameter names to values.
   * @type object
   */
  input: {
    [key: string]: any
  }
}