/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

/**
 * @description A ToolRule that conditionally maps to different child tools based on the output.
 */
export type ConditionalToolRule = {
  /**
   * @description The name of the tool. Must exist in the database for the user\'s organization.
   * @type string
   */
  tool_name: string
  /**
   * @default "conditional"
   * @type string | undefined
   */
  type?: 'conditional'
  /**
   * @description The default child tool to be called. If None, any tool can be called.
   */
  default_child?: string | null
  /**
   * @description The output case to check for mapping
   * @type object
   */
  child_output_mapping: {
    [key: string]: string
  }
  /**
   * @description Whether to throw an error when output doesn\'t match any case
   * @default false
   * @type boolean | undefined
   */
  require_output_mapping?: boolean
}