/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type ToolUpdate = {
  /**
   * @description The description of the tool.
   */
  description?: string | null
  /**
   * @description Metadata tags.
   */
  tags?: string[] | null
  /**
   * @description The source code of the function.
   */
  source_code?: string | null
  /**
   * @description The type of the source code.
   */
  source_type?: string | null
  /**
   * @description The JSON schema of the function (auto-generated from source_code if not provided)
   */
  json_schema?: {
    [key: string]: any
  } | null
  /**
   * @description The args JSON schema of the function.
   */
  args_json_schema?: {
    [key: string]: any
  } | null
  /**
   * @description The maximum number of characters in the response.
   */
  return_char_limit?: number | null
}