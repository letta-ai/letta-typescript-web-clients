/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { AppAuthScheme } from './AppAuthScheme.ts'

/**
 * @description App data model.
 */
export type AppModel = {
  /**
   * @type string
   */
  name: string
  /**
   * @type string
   */
  key: string
  /**
   * @type string
   */
  appId: string
  /**
   * @type string
   */
  description: string
  /**
   * @type array
   */
  categories: string[]
  /**
   * @type object
   */
  meta: {
    [key: string]: any
  }
  logo?: string | null
  docs?: string | null
  group?: string | null
  status?: string | null
  /**
   * @default false
   * @type boolean | undefined
   */
  enabled?: boolean
  /**
   * @default false
   * @type boolean | undefined
   */
  no_auth?: boolean
  auth_schemes?: AppAuthScheme[] | null
  testConnectors?:
    | {
        [key: string]: any
      }[]
    | null
  documentation_doc_text?: string | null
  configuration_docs_text?: string | null
}