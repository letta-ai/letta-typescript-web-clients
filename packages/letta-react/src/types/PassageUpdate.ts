/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { EmbeddingConfig } from './EmbeddingConfig.ts'

export type PassageUpdate = {
  /**
   * @description The id of the user that made this object.
   */
  created_by_id?: string | null
  /**
   * @description The id of the user that made this object.
   */
  last_updated_by_id?: string | null
  /**
   * @description The timestamp when the object was created.
   */
  created_at?: string | null
  /**
   * @description The timestamp when the object was last updated.
   */
  updated_at?: string | null
  /**
   * @description Whether this passage is deleted or not.
   * @default false
   * @type boolean | undefined
   */
  is_deleted?: boolean
  /**
   * @description The unique identifier of the agent associated with the passage.
   */
  agent_id?: string | null
  /**
   * @description The data source of the passage.
   */
  source_id?: string | null
  /**
   * @description The unique identifier of the file associated with the passage.
   */
  file_id?: string | null
  /**
   * @description The metadata of the passage.
   * @default [object Object]
   */
  metadata_?: {
    [key: string]: any
  } | null
  /**
   * @description The text of the passage.
   */
  text?: string | null
  /**
   * @description The embedding of the passage.
   */
  embedding?: number[] | null
  /**
   * @description The embedding configuration used by the passage.
   */
  embedding_config?: EmbeddingConfig | null
  /**
   * @description The unique identifier of the passage.
   * @type string
   */
  id: string
}