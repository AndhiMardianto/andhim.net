'use client';

import styles from '../styles/ChatWidget.module.css';
import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Untuk mencegah double click
  const messagesEndRef = useRef(null);
  const firstRender = useRef(true); 

  const sendMessage = async () => {
    const trimmed = input.trim();
    // Cegah kirim jika input kosong atau sedang loading
    if (!trimmed || isLoading) return;

    // 1. Tambahkan pesan user ke UI
    setMessages(prev => [...prev, { from: 'user', text: trimmed }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('https://api.andhim.net/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) throw new Error('Network response was not ok');

      const data = await res.json();

      // 2. Tambahkan pesan bot saja ke UI
      setMessages(prev => [
        ...prev,
        { from: 'bot', text: data.response },
      ]);
    } catch (error) {
      console.error('Gagal menghubungi API:', error);
      setMessages(prev => [
        ...prev,
        { from: 'bot', text: '⚠️ Maaf, terjadi kesalahan koneksi.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.ChatWidget}>
      <div className={styles.ChatContainer} role="main">
        <h3>Chatbot Andhim</h3>
        <div
          className={styles.messages}
          id="messages"
          role="log"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.message} ${msg.from === 'user' ? styles['user-message'] : styles['bot-message']}`}
            >
              <strong>{msg.from === 'user' ? 'Anda: ' : 'Bot Andhim: '}</strong>
              {msg.text}
            </div>
          ))}
          {/* Indikator loading saat menunggu jawaban */}
          {isLoading && (
            <div className={`${styles.message} ${styles['bot-message']}`}>
              <em>Sedang mengetik...</em>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className={styles.InputBox}>
          <input
            type="text"
            placeholder={isLoading ? "Menunggu jawaban..." : "Ketik Pertanyaan..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button 
            onClick={sendMessage} 
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? '...' : 'Kirim'}
          </button>
        </div>
      </div>
    </div>
  );
}