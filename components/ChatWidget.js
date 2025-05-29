'use client';
import styles from '../styles/ChatWidget.module.css';

import React, { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const sendMessage = async () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        // Tambahkan pesan pengguna
        setMessages(prev => [...prev, { from: 'user', text: trimmed }]);
        setInput('');

        try {
            const res = await fetch('https://api.andhim.net/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: trimmed }),
            });
            const data = await res.json();

            setMessages(prev => [...prev, { from: 'user', text: trimmed }, { from: 'bot', text: data.response }]);
        } catch (error) {
            console.error('Gagal menghubungi API:', error);
            setMessages(prev => [...prev, { from: 'bot', text: '⚠️ Maaf, terjadi kesalahan.' }]);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <div className="chat-widget">
            <div className="chat-container" role="main" aria-live="polite">
                <h3 id="help">Chatbot</h3>
                <div className="messages" id="messages" role="log" aria-live="polite" aria-relevant="additions text">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.from === 'user' ? 'user-message' : 'bot-message'}`}
                            tabIndex={msg.from === 'bot' ? -1 : undefined}
                        >
                            {msg.from === 'user' ? `Anda: ${msg.text}` : `Asisten Andhim: ${msg.text}`}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Ketik pesan Anda..."
                        aria-label="Ketik pesan Anda"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                    />
                    <button onClick={sendMessage} aria-label="Kirim pesan">Kirim</button>
                </div>
            </div>
        </div>
    );
}
