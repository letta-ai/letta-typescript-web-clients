/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { TextContent } from './TextContent.ts'

export const lettaUserMessageContentUnionTypeEnum = {
  text: 'text',
} as const

export type LettaUserMessageContentUnionTypeEnum = (typeof lettaUserMessageContentUnionTypeEnum)[keyof typeof lettaUserMessageContentUnionTypeEnum]

export type LettaUserMessageContentUnion = TextContent & {
  type?: LettaUserMessageContentUnionTypeEnum
}