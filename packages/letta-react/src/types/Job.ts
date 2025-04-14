/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { JobStatus } from './JobStatus.ts'
import type { JobType } from './JobType.ts'

/**
 * @description Representation of offline jobs, used for tracking status of data loading tasks (involving parsing and embedding files).\n\nParameters:\n    id (str): The unique identifier of the job.\n    status (JobStatus): The status of the job.\n    created_at (datetime): The unix timestamp of when the job was created.\n    completed_at (datetime): The unix timestamp of when the job was completed.\n    user_id (str): The unique identifier of the user associated with the.
 */
export type Job = {
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
   * @type string | undefined
   */
  status?: JobStatus
  /**
   * @description The unix timestamp of when the job was completed.
   */
  completed_at?: string | null
  /**
   * @description The metadata of the job.
   */
  metadata?: {
    [key: string]: any
  } | null
  /**
   * @type string | undefined
   */
  job_type?: JobType
  /**
   * @description The human-friendly ID of the Job
   * @pattern ^(job|run)-[a-fA-F0-9]{8}
   * @type string | undefined
   */
  id?: string
}