/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { WebSearchOptionsUserLocation } from './WebSearchOptionsUserLocation.ts';

export const webSearchOptionsSearchContextSizeEnum = {
  low: 'low',
  medium: 'medium',
  high: 'high',
} as const;

export type WebSearchOptionsSearchContextSizeEnum =
  (typeof webSearchOptionsSearchContextSizeEnum)[keyof typeof webSearchOptionsSearchContextSizeEnum];

export type WebSearchOptions = {
  /**
   * @type string | undefined
   */
  search_context_size?: WebSearchOptionsSearchContextSizeEnum;
  user_location?: WebSearchOptionsUserLocation | null;
};
