'use client';
import { useAgentMessages, useAgentState } from '@letta-ai/letta-react';
import { FormEvent, useCallback, useState } from 'react';

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
    agentId: 'agent-db79f7fb-e86e-4820-a5d6-a75215433fcc',
  });

  const { agentState } = useAgentState({
    agentId: 'agent-db79f7fb-e86e-4820-a5d6-a75215433fcc',
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
