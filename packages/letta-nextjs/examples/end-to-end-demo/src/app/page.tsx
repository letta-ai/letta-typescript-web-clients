'use client';
import {
  useAgentMessages,
  useAgentPassages,
  useAgentState,
} from '@letta-ai/letta-react';
import React, { FormEvent, useCallback, useState } from 'react';

export default function Home() {
  const [messageToSend, setMessageToSend] = useState<string>('');
  const {
    messages,
    fetchOlderMessages,
    isFetching,
    hasOlderMessages,
    isLoading,
    isSending,
    sendMessage,
  } = useAgentMessages({
    agentId: 'agent-0d07e901-64de-4bbd-8a7c-268ce88bc6cb',
  });

  const { passages, isLoading: isPassagesLoading } = useAgentPassages({
    agentId: 'agent-0d07e901-64de-4bbd-8a7c-268ce88bc6cb',
  });

  const { agentState } = useAgentState({
    agentId: 'agent-0d07e901-64de-4bbd-8a7c-268ce88bc6cb',
  });

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setMessageToSend('');

      sendMessage({
        messages: [
          {
            role: 'user',
            content: messageToSend,
          },
        ],
      });
    },
    [messageToSend, sendMessage]
  );

  return (
    <main className="messages max-w-[800px]  mx-auto">
      <header className="p-1 bg-gray-100 rounded">
        Talking to: {agentState?.name}
      </header>
      {isPassagesLoading ? (
        <div>Loading passages!</div>
      ) : (
        <ul className="passages">
          {passages?.map((passage) => (
            <li key={passage.id}>{passage.text}</li>
          ))}
        </ul>
      )}
      {hasOlderMessages && (
        <button
          className="border w-full"
          onClick={fetchOlderMessages}
          disabled={isFetching}
        >
          {isFetching ? 'Loading older messages' : 'Load older messages'}
        </button>
      )}

      {isLoading ? (
        <div>Loading messages!</div>
      ) : (
        <ul className="">
          {messages.map((message) => {
            if (message.messageType === 'user_message') {
              return (
                <li
                  className="w-full p-1"
                  key={`${message.id}${message.messageType}`}
                >
                  {typeof message.content === 'string'
                    ? message.content
                    : 'Image'}
                </li>
              );
            }

            if (message.messageType === 'assistant_message') {
              return (
                <li key={`${message.id}${message.messageType}`}>
                  {typeof message.content === 'string'
                    ? message.content
                    : 'Image'}
                </li>
              );
            }

            return null;
          })}
        </ul>
      )}
      {isSending ? 'Sending message...' : null}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          className="border p-1"
          placeholder="Send a message"
          value={messageToSend}
          onChange={(e) => {
            setMessageToSend(e.target.value);
          }}
        />
        <button disabled={isSending}>Send Message</button>
      </form>
    </main>
  );
}
