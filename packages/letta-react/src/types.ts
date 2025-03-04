import type { Letta } from '@letta-ai/letta-client';

export interface LocalMessagesState {
  messages: Letta.LettaMessageUnion[];
  nextCursor?: string;
}
