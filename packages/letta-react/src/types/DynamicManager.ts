/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type DynamicManager = {
  /**
   * @default "dynamic"
   * @type string | undefined
   */
  manager_type?: 'dynamic'
  /**
   * @type string
   */
  manager_agent_id: string
  /**
   * @default "DONE!"
   */
  termination_token?: string | null
  max_turns?: number | null
}