/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { AuthSchemeField } from './AuthSchemeField.ts'

export const appAuthSchemeAuthModeEnum = {
  OAUTH2: 'OAUTH2',
  OAUTH1: 'OAUTH1',
  API_KEY: 'API_KEY',
  BASIC: 'BASIC',
  BEARER_TOKEN: 'BEARER_TOKEN',
  BASIC_WITH_JWT: 'BASIC_WITH_JWT',
  GOOGLE_SERVICE_ACCOUNT: 'GOOGLE_SERVICE_ACCOUNT',
  GOOGLEADS_AUTH: 'GOOGLEADS_AUTH',
  NO_AUTH: 'NO_AUTH',
  CALCOM_AUTH: 'CALCOM_AUTH',
} as const

export type AppAuthSchemeAuthModeEnum = (typeof appAuthSchemeAuthModeEnum)[keyof typeof appAuthSchemeAuthModeEnum]

/**
 * @description App authenticatio scheme.
 */
export type AppAuthScheme = {
  /**
   * @type string
   */
  scheme_name: string
  /**
   * @type string
   */
  auth_mode: AppAuthSchemeAuthModeEnum
  /**
   * @type array
   */
  fields: AuthSchemeField[]
  proxy?: {
    [key: string]: any
  } | null
  authorization_url?: string | null
  token_url?: string | null
  default_scopes?: any[] | null
  token_response_metadata?: any[] | null
  client_id?: string | null
  client_secret?: string | null
}