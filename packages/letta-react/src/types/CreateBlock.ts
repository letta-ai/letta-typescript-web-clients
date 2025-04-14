/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { Block } from './Block.ts'
import type { HTTPValidationError } from './HTTPValidationError.ts'

/**
 * @description Create a block
 */
export type CreateBlock = {
  /**
   * @description Value of the block.
   * @type string
   */
  value: string
  /**
   * @description Character limit of the block.
   * @default 5000
   * @type integer | undefined
   */
  limit?: number
  /**
   * @description Name of the block if it is a template.
   */
  name?: string | null
  /**
   * @default false
   * @type boolean | undefined
   */
  is_template?: boolean
  /**
   * @description Label of the block.
   * @type string
   */
  label: string
  /**
   * @description Description of the block.
   */
  description?: string | null
  /**
   * @description Metadata of the block.
   * @default [object Object]
   */
  metadata?: {
    [key: string]: any
  } | null
}

/**
 * @description Successful Response
 */
export type CreateBlock200 = Block

/**
 * @description Validation Error
 */
export type CreateBlock422 = HTTPValidationError

export type CreateBlockMutationRequest = CreateBlock

export type CreateBlockMutationResponse = CreateBlock200

export type CreateBlockMutation = {
  Response: CreateBlock200
  Request: CreateBlockMutationRequest
  Errors: CreateBlock422
}