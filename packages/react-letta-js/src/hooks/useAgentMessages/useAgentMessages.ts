import { LettaClient, type Letta } from '@letta-ai/letta-client';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { LettaRequest } from '@letta-ai/letta-client/api/types/LettaRequest';
import type { MessagesListRequest } from '@letta-ai/letta-client/api/resources/agents';
import { useGlobalLettaConfig } from '../useGlobalLettaConfig/useGlobalLettaConfig';
import type { LocalMessagesState } from '../../types';
import { useCachedState } from '../useCachedState/useCachedState';
import { useLettaClient } from '../useLettaClient/useLettaClient';

interface UseAgentOptions {
  client?: LettaClient.Options;
  agentId: string;
  limit?: number;
  messageOptions?: Omit<MessagesListRequest, 'after' | 'before' | 'limit'>;
  method?: 'stream' | 'basic';
}

function extendContent(
  content: string | Letta.TextContent[],
  nextContent: string | Letta.TextContent[]
): string | Letta.TextContent[] {
  if (typeof content === 'string') {
    if (typeof nextContent === 'string') {
      return `${content}${nextContent}`;
    } else {
      return `${content}${nextContent.join('')}`;
    }
  } else {
    if (typeof nextContent === 'string') {
      return [...content, { text: nextContent, type: 'text' }];
    } else {
      return [...content, ...nextContent];
    }
  }
}

interface SendMessagePayload {
  messages: LettaRequest['messages'];
}

export function useAgentMessages(options: UseAgentOptions) {
  const {
    client = {},
    method = 'stream',
    messageOptions = {},
    limit = 20,
    agentId,
  } = options;
  const localClient = useLettaClient(client);

  const [localMessages, setLocalMessages] = useCachedState<LocalMessagesState>(
    `messages-${agentId}`,
    {
      messages: [],
    }
  );

  const hasInitialLoaded = useRef<boolean>(false);

  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [loadingError, setLoadingError] = useState<Error | null>(null);

  const [isSending, setIsSending] = useState(false);
  const [sendingError, setSendingError] = useState<Error | null>(null);

  const sendNonStreamedMessage = useCallback(
    async function sendNonStreamedMessage(
      sendMessagePayload: SendMessagePayload
    ) {
      try {
        setIsSending(true);
        setSendingError(null);

        const response = await localClient.agents.messages.create(agentId, {
          ...sendMessagePayload,
          ...messageOptions,
        });

        setLocalMessages((prevState) => ({
          ...prevState,
          messages: [...response.messages, ...prevState.messages],
        }));
      } catch (e) {
        setSendingError(e);
      } finally {
        setIsSending(false);
      }
    },
    [localClient]
  );

  const sendStreamedMessage = useCallback(
    async function sendStreamedMessage(sendMessagePayload: SendMessagePayload) {
      try {
        setIsSending(true);
        setSendingError(null);

        const response = await localClient.agents.messages.createStream(
          agentId,
          {
            ...sendMessagePayload,
            ...messageOptions,
            streamTokens: true,
          }
        );

        for await (const nextMessage of response) {
          if (nextMessage.messageType === 'usage_statistics') {
            return;
          }
          if (!nextMessage?.id) {
            return;
          }

          setLocalMessages((prevState) => {
            let hasExistingMessage = false;
            const nextMessages = prevState.messages.map((prevMessage) => {
              if (!prevMessage?.id || !nextMessage?.id) {
                return prevMessage;
              }

              if (prevMessage.id !== nextMessage.id) {
                return prevMessage;
              }

              if (
                nextMessage.messageType === 'reasoning_message' &&
                prevMessage.messageType === 'reasoning_message'
              ) {
                hasExistingMessage = true;

                return {
                  ...prevMessage,
                  ...nextMessage,
                  reasoning: `${prevMessage.reasoning}${nextMessage.reasoning}`,
                };
              }

              if (
                nextMessage.messageType === 'system_message' &&
                prevMessage.messageType === 'system_message'
              ) {
                hasExistingMessage = true;

                return {
                  ...prevMessage,
                  ...nextMessage,
                  content: extendContent(
                    prevMessage.content,
                    nextMessage.content
                  ),
                };
              }

              if (
                nextMessage.messageType === 'user_message' &&
                prevMessage.messageType === 'user_message'
              ) {
                hasExistingMessage = true;

                return {
                  ...prevMessage,
                  ...nextMessage,
                  content: extendContent(
                    prevMessage.content,
                    nextMessage.content
                  ),
                };
              }

              if (
                nextMessage.messageType === 'assistant_message' &&
                prevMessage.messageType === 'assistant_message'
              ) {
                hasExistingMessage = true;

                return {
                  ...prevMessage,
                  ...nextMessage,
                  content: extendContent(
                    prevMessage.content,
                    nextMessage.content
                  ),
                };
              }

              if (
                nextMessage.messageType === 'tool_call_message' &&
                prevMessage.messageType === 'tool_call_message'
              ) {
                hasExistingMessage = true;

                return {
                  ...prevMessage,
                  ...nextMessage,
                };
              }

              if (
                nextMessage.messageType === 'tool_return_message' &&
                prevMessage.messageType === 'tool_return_message'
              ) {
                hasExistingMessage = true;
                return {
                  ...prevMessage,
                  ...nextMessage,
                };
              }

              return prevMessage;
            });

            return {
              ...prevState,
              messages: [
                ...nextMessages,
                ...(!hasExistingMessage
                  ? [
                      {
                        ...nextMessage,
                      },
                    ]
                  : []),
              ],
            };
          });
        }
      } catch (e) {
        setSendingError(e);
      } finally {
        setIsSending(false);
      }
    },
    [localClient]
  );

  const sendMessage = useCallback(
    function sendMessage(payload: SendMessagePayload) {
      if (isSending) {
        return;
      }

      if (method === 'stream') {
        return sendStreamedMessage(payload);
      }

      return sendNonStreamedMessage(payload);
    },
    [method, isSending, sendStreamedMessage, sendNonStreamedMessage]
  );

  const getMessages = useCallback(
    async function getMessages(before?: string) {
      try {
        if (isFetching) {
          return;
        }

        setLoadingError(null);
        setIsFetching(true);

        const messages = await localClient.agents.messages.list(agentId, {
          before,
          limit: limit + 1,
          ...messageOptions,
        });

        const messagesToAdd = messages.slice(1, messages.length);
        const nextCursor = messages.length > limit ? messages[0] : undefined;

        setLocalMessages((prevState) => ({
          ...prevState,
          messages: [...messagesToAdd, ...prevState.messages],
          nextCursor: nextCursor?.id,
        }));
      } catch (e) {
        setLoadingError(e);
      } finally {
        setIsFetching(false);
        setIsLoading(false);
      }
    },
    [localClient, isFetching]
  );

  const fetchOlderMessages = useCallback(async () => {
    const nextCursor = localMessages.nextCursor;

    if (!nextCursor) {
      return;
    }

    return getMessages(nextCursor);
  }, [getMessages]);

  useEffect(() => {
    if (hasInitialLoaded.current) {
      return;
    }

    hasInitialLoaded.current = true;

    setIsLoading(true);

    getMessages();
  }, []);

  return {
    messages: localMessages.messages,
    isLoading,
    isFetching,
    isLoadingError: !!loadingError,
    loadingError,
    sendMessage,
    isSending,
    sendingError,
    isSendingError: !!sendingError,
    fetchOlderMessages,
    hasOlderMessages: localMessages.nextCursor,
  };
}
