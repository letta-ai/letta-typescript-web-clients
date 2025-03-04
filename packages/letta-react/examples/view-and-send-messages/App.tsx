import React, { FormEvent, useCallback } from 'react';
import { useState } from 'react';
import { useAgentMessages } from '../../src';
import './App.css';
import { useAgentState } from '../../src/hooks/useAgentState/useAgentState';

function App() {
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
    agentId: 'agent-ed85493d-2164-4404-b52e-119ccbc987b4',
  });

  const { agentState } = useAgentState({
    agentId: 'agent-ed85493d-2164-4404-b52e-119ccbc987b4',
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
    <main>
      <header>Talking to: {agentState?.name}</header>
      {hasOlderMessages && (
        <button onClick={fetchOlderMessages} disabled={isFetching}>
          {isFetching ? 'Loading older messages' : 'Load older messages'}
        </button>
      )}

      {isLoading ? (
        <div>Loading messages!</div>
      ) : (
        <ul className="messages">
          {messages.map((message) => {
            if (message.messageType === 'user_message') {
              return (
                <li key={`${message.id}${message.messageType}`}>
                  {message.content}
                  {message.id}
                </li>
              );
            }

            if (message.messageType === 'assistant_message') {
              return (
                <li key={`${message.id}${message.messageType}`}>
                  {message.content}
                </li>
              );
            }

            return null;
          })}
        </ul>
      )}
      {isSending ? 'Sending message...' : null}
      <form onSubmit={handleSubmit} className="send-message">
        <input
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

export default App;
