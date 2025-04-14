/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { ToolType } from './ToolType.ts'

/**
 * @description Representation of a tool, which is a function that can be called by the agent.\n\nParameters:\n    id (str): The unique identifier of the tool.\n    name (str): The name of the function.\n    tags (List[str]): Metadata tags.\n    source_code (str): The source code of the function.\n    json_schema (Dict): The JSON schema of the function.
 */
export type Tool = {
  /**
   * @description The human-friendly ID of the Tool
   * @pattern ^tool-[a-fA-F0-9]{8}
   * @type string | undefined
   */
  id?: string
  /**
   * @type string | undefined
   */
  tool_type?: ToolType
  /**
   * @description The description of the tool.
   */
  description?: string | null
  /**
   * @description The type of the source code.
   */
  source_type?: string | null
  /**
   * @description The name of the function.
   */
  name?: string | null
  /**
   * @description Metadata tags.
   * @type array | undefined
   */
  tags?: string[]
  /**
   * @description The source code of the function.
   */
  source_code?: string | null
  /**
   * @description The JSON schema of the function.
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
   * @default 6000
   * @type integer | undefined
   */
  return_char_limit?: number
  /**
   * @description The id of the user that made this Tool.
   */
  created_by_id?: string | null
  /**
   * @description The id of the user that made this Tool.
   */
  last_updated_by_id?: string | null
  /**
   * @description A dictionary of additional metadata for the tool.
   */
  metadata_?: {
    [key: string]: any
  } | null
}