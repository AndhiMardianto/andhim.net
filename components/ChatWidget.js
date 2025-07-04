'use client';

import styles from '../styles/ChatWidget.module.css';
import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const firstRender = useRef(true); 

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, { from: 'user', text: trimmed }]);
    setInput('');

    try {
      const res = await fetch('https://api.andhim.net/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();

      setMessages(prev => [
        ...prev,
        { from: 'user', text: trimmed },
        { from: 'bot', text: data.response },
      ]);
    } catch (error) {
      console.error('Gagal menghubungi API:', error);
      setMessages(prev => [...prev, { from: 'bot', text: '⚠️ Maaf, terjadi kesalahan.' }]);
    }
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return; // Lewati scroll saat render pertama
    }

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className={styles.ChatWidget}>
      <div className={styles.ChatContainer} role="main" aria-live="polite">
        <h3>Chatbot Andhim</h3>
        <div
          className={styles.messages}
          id="messages"
          role="log"
          aria-live="polite"
          aria-relevant="additions text"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${msg.from === 'user' ? styles['user-message'] : styles['bot-message']}`}
              tabIndex={msg.from === 'bot' ? -1 : undefined}
            >
              {msg.from === 'user' ? `Anda: ${msg.text}` : `Bot Andhim: ${msg.text}`}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles.InputBox}>
          <input
            type="text"
            placeholder="Ketik Pertanyaan..."
            aria-label="Ketik Pertanyaan"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            tabIndex={0} 
          />
          <button onClick={sendMessage} aria-label="Kirim Pertanyaan">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}
