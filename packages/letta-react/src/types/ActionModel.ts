/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { ActionParametersModel } from './ActionParametersModel.ts'
import type { ActionResponseModel } from './ActionResponseModel.ts'

/**
 * @description Action data model.
 */
export type ActionModel = {
  /**
   * @type string
   */
  name: string
  /**
   * @type string
   */
  description: string
  /**
   * @type object
   */
  parameters: ActionParametersModel
  /**
   * @type object
   */
  response: ActionResponseModel
  /**
   * @type string
   */
  appName: string
  /**
   * @type string
   */
  appId: string
  /**
   * @type string
   */
  version: string
  /**
   * @type array
   */
  available_versions: string[]
  /**
   * @type array
   */
  tags: string[]
  logo?: string | null
  display_name?: string | null
  /**
   * @default false
   * @type boolean | undefined
   */
  enabled?: boolean
}