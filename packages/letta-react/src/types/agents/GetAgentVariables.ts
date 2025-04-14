/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

export type AgentsGetAgentVariablesPathParams = {
  /**
   * @type string
   */
  agent_id: string
}

/**
 * @description 200
 */
export type AgentsGetAgentVariables200 = {
  /**
   * @type object
   */
  variables: {
    [key: string]: string
  }
}

export const agentsGetAgentVariables404MessageEnum = {
  'Agent not found': 'Agent not found',
} as const

export type AgentsGetAgentVariables404MessageEnum = (typeof agentsGetAgentVariables404MessageEnum)[keyof typeof agentsGetAgentVariables404MessageEnum]

/**
 * @description 404
 */
export type AgentsGetAgentVariables404 = {
  /**
   * @type string
   */
  message: AgentsGetAgentVariables404MessageEnum
}

export type AgentsGetAgentVariablesQueryResponse = AgentsGetAgentVariables200

export type AgentsGetAgentVariablesQuery = {
  Response: AgentsGetAgentVariables200
  PathParams: AgentsGetAgentVariablesPathParams
  Errors: AgentsGetAgentVariables404
}