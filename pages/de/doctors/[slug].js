//C:\Users\Shanon\al-rajjak\pages\de\doctors\[slug].js

import { useRouter } from 'next/router';
import medicalData from '../../../data/medical_leads.json';
import { useState } from 'react';

export default function DoctorProfile() {
  const router = useRouter();
  const { slug } = router.query;
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false); 

  const doctor = medicalData.leads.find((doc) => doc.slug === slug);

  if (!doctor) return <div style={{padding: '50px'}}>Praxis wird geladen...</div>;

  const handleChat = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const userMsg = input;
    setInput('');
    setChat((prev) => [...prev, { role: 'user', text: userMsg }]);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, slug: slug }),
      });
      const data = await res.json();
      if (data.reply) {
        setChat((prev) => [...prev, { role: 'ai', text: data.reply }]);
      }
    } catch (error) {
      setChat((prev) => [...prev, { role: 'ai', text: "Entschuldigung, es gab einen Fehler." }]);
    } finally {
      setLoading(false);
    }
  };

  const formInputStyle = { width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd', boxSizing: 'border-box' };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Segoe UI, sans-serif', border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', position: 'relative' }}>
      
      {/* 🚀 Header with integrated Book Now button */}
      <div style={{ 
        background: '#0055aa', 
        color: 'white', 
        padding: '15px 20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ margin: 0, fontSize: '18px' }}>{doctor.name}</h2>
          <p style={{ margin: '3px 0 0', opacity: 0.9, fontSize: '13px' }}>{doctor.specialty} Specialist - AI</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          style={{ 
            background: '#28a745', 
            color: 'white', 
            border: 'none', 
            padding: '10px 18px', 
            borderRadius: '25px', 
            cursor: 'pointer', 
            fontWeight: 'bold', 
            fontSize: '13px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          📅 Book Now
        </button>
      </div>

      {/* Chat Area */}
      <div style={{ height: '400px', overflowY: 'auto', padding: '20px', background: '#fcfcfc' }}>
        {chat.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888', marginTop: '150px' }}>Guten Tag! Wie kann ich Ihnen heute helfen?</p>
        )}
        {chat.map((msg, i) => (
          <div key={i} style={{ marginBottom: '15px', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
            <div style={{ 
              display: 'inline-block', padding: '10px 15px', borderRadius: '18px', maxWidth: '80%',
              background: msg.role === 'user' ? '#0055aa' : '#e9e9eb',
              color: msg.role === 'user' ? 'white' : 'black', fontSize: '14px'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <p style={{ fontSize: '12px', color: '#0055aa' }}>KI antwortet...</p>}
      </div>

      {/* Input Area */}
      <div style={{ padding: '15px', background: 'white', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
        <input 
          style={{ flex: 1, padding: '12px', borderRadius: '25px', border: '1px solid #ddd', outline: 'none' }}
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && handleChat()}
          placeholder="Ihre Nachricht..." 
        />
        <button onClick={handleChat} style={{ background: '#0055aa', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}>
          Senden
        </button>
      </div>

      {/* Appointment Modal Form */}
      {showForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', width: '90%', maxWidth: '400px' }}>
            <h3 style={{ marginTop: 0, color: '#0055aa' }}>Termin buchen</h3>
            <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>Bitte füllen Sie das Formular aus.</p>
            
            <input type="text" placeholder="Full Name (Name)" style={formInputStyle} />
            <input type="email" placeholder="Email (E-Mail)" style={formInputStyle} />
            <input type="date" style={formInputStyle} />
            <textarea placeholder="Message (Nachricht)" style={{ ...formInputStyle, height: '70px', resize: 'none' }}></textarea>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => setShowForm(false)} style={{ flex: 1, padding: '12px', background: '#eee', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Abbrechen</button>
              <button onClick={() => { alert('Erfolgreich gesendet!'); setShowForm(false); }} style={{ flex: 1, padding: '12px', background: '#0055aa', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>Senden</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* git add . 
git commit -m "HU"
git push origin main
*/