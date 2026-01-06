'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/ChatWidget.module.css';

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const hasMounted = useRef(false); // penanda render pertama

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setMessages(prev => [...prev, { from: 'user', text: trimmed }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('https://api.andhim.net/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();

      setMessages(prev => [
        ...prev,
        { from: 'bot', text: data.response || 'Tidak ada respons.' },
      ]);

      // kembalikan fokus input TANPA memaksa scroll halaman
      setTimeout(() => {
        if (document.activeElement !== inputRef.current) {
          inputRef.current?.focus();
        }
      }, 50);

    } catch {
      setMessages(prev => [
        ...prev,
        { from: 'bot', text: '⚠️ Gagal terhubung ke server.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // scroll hanya SETELAH ada pesan baru (bukan saat halaman pertama load)
  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, [messages]);

  return (
    <section
      className={styles.ChatWidget}
      aria-label="Jendela Chat Andhim"
    >
      <div className={styles.ChatContainer}>
        <h3 id="chat-title">Chatbot Andhim</h3>

        <div
          className={styles.messages}
          role="log"
          aria-live="polite"
          aria-relevant="additions text"
          aria-atomic="false"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                msg.from === 'user'
                  ? styles['user-message']
                  : styles['bot-message']
              }`}
            >
              <span className="sr-only">
                {msg.from === 'user' ? 'Anda:' : 'Bot:'}
              </span>
              <strong>
                {msg.from === 'user' ? 'Anda: ' : 'Bot: '}
              </strong>
              {msg.text}
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        <div className={styles.InputBox}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ketik pesan..."
            aria-label="Ketik pesan"
            disabled={isLoading}
          />

          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            aria-label="Kirim pesan"
          >
            {isLoading ? '...' : 'Kirim'}
          </button>
        </div>
      </div>
    </section>
  );
}
