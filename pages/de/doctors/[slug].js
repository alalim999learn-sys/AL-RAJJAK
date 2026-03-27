import { useRouter } from 'next/router';
import medicalData from '../../../data/medical_leads.json';
import { useState } from 'react';

export default function DoctorProfile() {
  const router = useRouter();
  const { slug } = router.query;
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const doctor = medicalData.leads.find((doc) => doc.slug === slug);

  if (!doctor) return <div style={{padding: '50px'}}>Praxis wird geladen...</div>;

  const handleChat = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const userMsg = input;
    setInput('');
    
    // ইউজারের মেসেজ চ্যাটে দেখানো
    setChat((prev) => [...prev, { role: 'user', text: userMsg }]);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, context: doctor.specialty, doctorName: doctor.name }),
      });
      const data = await res.json();
      setChat((prev) => [...prev, { role: 'ai', text: data.reply }]);
    } catch (error) {
      console.error("Fehler:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      {/* Header */}
      <div style={{ background: '#0055aa', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ margin: 0 }}>{doctor.name}</h2>
        <p style={{ margin: '5px 0 0', opacity: 0.9 }}>{doctor.specialty} Specialist - AI Assistant</p>
      </div>

      {/* Chat Window */}
      <div style={{ height: '400px', overflowY: 'auto', padding: '20px', background: '#fcfcfc' }}>
        {chat.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888', marginTop: '150px' }}>Guten Tag! Wie kann ich Ihnen heute helfen?</p>
        )}
        {chat.map((msg, i) => (
          <div key={i} style={{ marginBottom: '15px', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
            <div style={{ 
              display: 'inline-block', 
              padding: '10px 15px', 
              borderRadius: '18px', 
              maxWidth: '80%',
              background: msg.role === 'user' ? '#0055aa' : '#e9e9eb',
              color: msg.role === 'user' ? 'white' : 'black',
              fontSize: '14px'
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
        <button 
          onClick={handleChat}
          style={{ background: '#0055aa', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Senden
        </button>
      </div>
    </div>
  );
}