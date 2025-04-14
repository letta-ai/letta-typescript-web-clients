/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { AgentState } from '../AgentState.ts'

export type TemplatesCreateAgentsFromTemplatePathParams = {
  /**
   * @description The project slug
   * @type string
   */
  project: string
  /**
   * @description The template version, formatted as {template-name}:{version-number} or {template-name}:latest
   * @type string
   */
  template_version: string
}

/**
 * @description 201
 */
export type TemplatesCreateAgentsFromTemplate201 = {
  /**
   * @type array
   */
  agents: AgentState[]
}

/**
 * @description Body
 */
export type TemplatesCreateAgentsFromTemplateMutationRequest = {
  /**
   * @description The tags to assign to the agent
   * @type array | undefined
   */
  tags?: string[]
  /**
   * @description The name of the agent, optional otherwise a random one will be assigned
   * @type string | undefined
   */
  agent_name?: string
  /**
   * @description The memory variables to assign to the agent
   * @type object | undefined
   */
  memory_variables?: {
    [key: string]: string
  }
  /**
   * @description The tool variables to assign to the agent
   * @type object | undefined
   */
  tool_variables?: {
    [key: string]: string
  }
  /**
   * @description The identity ids to assign to the agent
   * @type array | undefined
   */
  identity_ids?: string[]
}

export type TemplatesCreateAgentsFromTemplateMutationResponse = TemplatesCreateAgentsFromTemplate201

export type TemplatesCreateAgentsFromTemplateMutation = {
  Response: TemplatesCreateAgentsFromTemplate201
  Request: TemplatesCreateAgentsFromTemplateMutationRequest
  PathParams: TemplatesCreateAgentsFromTemplatePathParams
  Errors: any
}