/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { DynamicManagerUpdate } from './DynamicManagerUpdate.ts';
import type { RoundRobinManagerUpdate } from './RoundRobinManagerUpdate.ts';
import type { SleeptimeManagerUpdate } from './SleeptimeManagerUpdate.ts';
import type { SupervisorManagerUpdate } from './SupervisorManagerUpdate.ts';

export type GroupUpdate = {
  agent_ids?: string[] | null;
  description?: string | null;
  manager_config?:
    | (
        | RoundRobinManagerUpdate
        | SupervisorManagerUpdate
        | DynamicManagerUpdate
        | SleeptimeManagerUpdate
      )
    | null;
  shared_block_ids?: string[] | null;
};
