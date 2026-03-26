//C:\Users\Shanon\al-rajjak\pages\demo\[id].js
// C:\Users\Shanon\al-rajjak\pages\demo\[id].js
// C:\Users\Shanon\al-rajjak\pages\demo\[id].js
import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { shopsData } from '../../../data/shops';

export default function ShopDemo() {
  const router = useRouter();
  const { id } = router.query;
  const [shop, setShop] = useState(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (id && shopsData[id]) {
      const currentShop = shopsData[id];
      setShop(currentShop);
      
      if (messages.length === 0) {
        // মালিকের নাম থাকলে পার্সোনালাইজড ওয়েলকাম মেসেজ
        const ownerName = currentShop.owner || "Team";
        setMessages([{ 
          role: 'ai', 
          content: `Hallo! Ich bin der KI-Assistent von ${ownerName}. Willkommen bei ${currentShop.name}. Wie kann ich Ihnen heute helfen?` 
        }]);
      }
    }
  }, [id, messages.length]);

  useEffect(scrollToBottom, [messages]);

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
        body: JSON.stringify({ message: userMsg, shopId: id, lang: 'de' }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "Entschuldigung, etwas ist schief gelaufen." }]);
    } finally {
      setLoading(false);
    }
  };

  if (!id) return <p style={{ textAlign: 'center', padding: '50px' }}>Laden...</p>;
  if (!shop) return <p style={{ textAlign: 'center', padding: '50px' }}>Shop nicht gefunden!</p>;

  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
        
        {/* Black Header */}
        <div style={{ 
          backgroundColor: '#000000', // কালার পরিবর্তন: Black
          color: '#fff', 
          padding: '15px 20px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: '15px' 
        }}>
          {shop.logo && (
            <img 
              src={shop.logo} 
              alt={`${shop.name} Logo`} 
              style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                backgroundColor: '#fff', 
                objectFit: 'cover',
                border: '2px solid rgba(255,255,255,0.2)'
              }} 
            />
          )}
          
          <div style={{ textAlign: 'left' }}>
            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>{shop.name}</h2>
            <small style={{ opacity: 0.7 }}>Premium KI-Assistent</small>
          </div>
        </div>

        {/* Chat Area */}
        <div style={{ height: '450px', overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: '#f4f4f4' }}>
          {messages.map((m, i) => (
            <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
              <div style={{ 
                padding: '12px 16px', 
                borderRadius: '15px', 
                backgroundColor: m.role === 'user' ? '#000000' : '#ffffff', // ইউজার মেসেজ এখন কালো
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                color: m.role === 'user' ? '#ffffff' : '#333',
                fontSize: '14px',
                lineHeight: '1.5'
              }}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && <p style={{ fontSize: '12px', color: '#666', marginLeft: '10px' }}>KI denkt nach...</p>}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ padding: '20px', borderTop: '1px solid #eee', display: 'flex', gap: '10px', backgroundColor: '#fff' }}>
          <input 
            style={{ flex: 1, padding: '12px 20px', borderRadius: '25px', border: '1px solid #ddd', outline: 'none', fontSize: '14px' }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Schreiben Sie eine Nachricht..."
          />
          <button 
            onClick={handleSend}
            style={{ 
              padding: '10px 25px', 
              borderRadius: '25px', 
              border: 'none', 
              backgroundColor: '#000000', // বাটন কালার: Black
              color: '#fff', 
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#333333'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#000000'}
          >
            Senden
          </button>
        </div>
      </div>
      <p style={{ textAlign: 'center', fontSize: '11px', marginTop: '20px', color: '#555', letterSpacing: '1px' }}>
        POWERED BY <b>LEMONSKN.COM</b> AI SOLUTIONS
      </p>
    </div>
  );
}