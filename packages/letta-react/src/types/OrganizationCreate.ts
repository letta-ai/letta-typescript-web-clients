/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type OrganizationCreate = {
  /**
   * @description The name of the organization.
   */
  name?: string | null
  /**
   * @description Whether the organization has access to privileged tools.
   * @default false
   */
  privileged_tools?: boolean | null
}