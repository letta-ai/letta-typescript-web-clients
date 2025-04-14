/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

/**
 * @description Auth scheme field.
 */
export type AuthSchemeField = {
  /**
   * @type string
   */
  name: string;
  display_name?: string | null;
  /**
   * @type string
   */
  description: string;
  /**
   * @type string
   */
  type: string;
  default?: string | null;
  /**
   * @default false
   * @type boolean | undefined
   */
  required?: boolean;
  /**
   * @default true
   * @type boolean | undefined
   */
  expected_from_customer?: boolean;
  get_current_user_endpoint?: string | null;
};
