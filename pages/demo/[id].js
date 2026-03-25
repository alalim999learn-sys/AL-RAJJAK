import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { shopsData } from '../../data/shops';

export default function ShopDemo() {
  const router = useRouter();
  const { id } = router.query;
  const [shop, setShop] = useState(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // অটোমেটিক স্ক্রল ডাউন করার জন্য
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (id && shopsData[id]) {
      setShop(shopsData[id]);
      // শুরুতে একটি ওয়েলকাম মেসেজ (জার্মান ভাষায়)
      setMessages([{ role: 'ai', content: `Hallo! Willkommen bei ${shopsData[id].name}. Wie kann ich Ihnen heute helfen?` }]);
    }
  }, [id]);

  useEffect(scrollToBottom, [messages]);

  if (!id) return <p style={{ textAlign: 'center', padding: '50px' }}>Laden...</p>;
  if (!shop) return <p style={{ textAlign: 'center', padding: '50px' }}>Shop not found! (data/shops.js চেক করুন)</p>;

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, shopId: id }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "Entschuldigung, etwas ist schief gelaufen." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        
        {/* Header */}
        <div style={{ backgroundColor: '#007bff', color: '#fff', padding: '20px', textAlign: 'center' }}>
          <h2 style={{ margin: 0 }}>{shop.name}</h2>
          <small>AI Assistant (Deutsch)</small>
        </div>

        {/* Chat Area */}
        <div style={{ height: '450px', overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {messages.map((m, i) => (
            <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
              <div style={{ 
                padding: '12px 16px', 
                borderRadius: '15px', 
                backgroundColor: m.role === 'user' ? '#007bff' : '#e9ecef', 
                color: m.role === 'user' ? '#fff' : '#333',
                fontSize: '14px',
                lineHeight: '1.4'
              }}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && <p style={{ fontSize: '12px', color: '#888' }}>AI schreibt...</p>}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '20px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
          <input 
            style={{ flex: 1, padding: '12px', borderRadius: '25px', border: '1px solid #ddd', outline: 'none' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Fragen Sie etwas..."
          />
          <button 
            onClick={handleSend}
            style={{ padding: '10px 20px', borderRadius: '25px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Senden
          </button>
        </div>
      </div>
      <p style={{ textAlign: 'center', fontSize: '12px', marginTop: '20px', color: '#888' }}>Powered by lemonskn.com AI</p>
    </div>
  );
}