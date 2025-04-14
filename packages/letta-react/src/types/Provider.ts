/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type Provider = {
  /**
   * @description The id of the provider, lazily created by the database manager.
   */
  id?: string | null;
  /**
   * @description The name of the provider
   * @type string
   */
  name: string;
  /**
   * @description API key used for requests to the provider.
   */
  api_key?: string | null;
  /**
   * @description The last update timestamp of the provider.
   */
  updated_at?: string | null;
};
