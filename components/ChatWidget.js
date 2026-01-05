'use client';

import styles from '../styles/ChatWidget.module.css';
import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null); // Ref tambahan untuk mengontrol fokus

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg = { from: 'user', text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('https://api.andhim.net/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { from: 'bot', text: data.response }]);
      
      // SOLUSI: Kembalikan fokus secara eksplisit setelah state diperbarui
      // Ini mencegah pembaca layar merasa "tersesat"
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

    } catch (error) {
      setMessages(prev => [...prev, { from: 'bot', text: '⚠️ Gagal terhubung.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <section className={styles.ChatWidget} aria-label="Jendela Chat">
      <div className={styles.ChatContainer}>
        <h3 id="chat-title">Chatbot Andhim</h3>
        
        {/* Gunakan aria-live="polite" untuk log agar tidak menginterupsi ketikan */}
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
              className={`${styles.message} ${msg.from === 'user' ? styles['user-message'] : styles['bot-message']}`}
            >
              <span className="sr-only">{msg.from === 'user' ? 'Anda:' : 'Bot:'}</span>
              <strong>{msg.from === 'user' ? 'Anda: ' : 'Bot: '}</strong> 
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.InputBox}>
          <input 
            ref={inputRef} // Hubungkan ref di sini
            type="text"
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault(); // Mencegah form submit default yang bikin lengket
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
            aria-label="Kirim"
          >
            {isLoading ? '...' : 'Kirim'}
          </button>
        </div>
      </div>
    </section>
  );
}