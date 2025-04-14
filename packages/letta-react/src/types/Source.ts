/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { EmbeddingConfig } from './EmbeddingConfig.ts';

/**
 * @description Representation of a source, which is a collection of files and passages.\n\nParameters:\n    id (str): The ID of the source\n    name (str): The name of the source.\n    embedding_config (EmbeddingConfig): The embedding configuration used by the source.\n    user_id (str): The ID of the user that created the source.\n    metadata (dict): Metadata associated with the source.\n    description (str): The description of the source.
 */
export type Source = {
  /**
   * @description The human-friendly ID of the Source
   * @pattern ^source-[a-fA-F0-9]{8}
   * @type string | undefined
   */
  id?: string;
  /**
   * @description The name of the source.
   * @type string
   */
  name: string;
  /**
   * @description The description of the source.
   */
  description?: string | null;
  /**
   * @type object
   */
  embedding_config: EmbeddingConfig;
  /**
   * @description Metadata associated with the source.
   */
  metadata?: {
    [key: string]: any;
  } | null;
  /**
   * @description The id of the user that made this Tool.
   */
  created_by_id?: string | null;
  /**
   * @description The id of the user that made this Tool.
   */
  last_updated_by_id?: string | null;
  /**
   * @description The timestamp when the source was created.
   */
  created_at?: string | null;
  /**
   * @description The timestamp when the source was last updated.
   */
  updated_at?: string | null;
};
