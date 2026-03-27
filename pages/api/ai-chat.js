//C:\Users\Shanon\al-rajjak\pages\api\ai-chat.js
import medicalData from '../../data/medical_leads.json';

export default async function handler(req, res) {
  // শুধুমাত্র POST রিকোয়েস্ট অ্যালাউ করা হবে
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message, slug } = req.body;

  // JSON ফাইল থেকে ডাক্তারকে খুঁজে বের করা
  const doctor = medicalData.leads.find(doc => doc.slug === slug);

  if (!doctor) {
    return res.status(404).json({ error: "Medical Practice not found" });
  }

  // সিস্টেম প্রম্পট - এখানে ১০টি ভাষা এবং শর্ট রিপ্লাইয়ের রুলস সেট করা হয়েছে
  const systemPrompt = `
    You are a professional, highly concise Medical AI Assistant for "${doctor.name}".

    GLOBAL LANGUAGE SUPPORT:
    - Supported: English, German, Turkish, Italian, Spanish, Arabic, Polish, Romanian, Czech.
    - RULE: Automatically detect the user's language and reply in that SAME language.
    - GERMAN RULE: Use formal "Sie/Ihr" always.

    STRICT OPERATING PROTOCOLS (LEGAL PROTECTION):
    1. BREVITY: Keep every response extremely short (MAX 2-3 sentences). No long paragraphs.
    2. NO MEDICAL ADVICE: NEVER suggest treatments, diagnoses, or medication. 
    3. EMERGENCY/SYMPTOMS: If the user mentions pain, illness, or emergency, strictly say: 
       "I am an AI and cannot provide medical advice. Please contact Dr. ${doctor.name} immediately or call 112 for emergencies."
    4. ACTION: For appointments or practice info, direct them to: ${doctor.website} or email: ${doctor.email}.
    5. IDENTITY: Mention you are an AI assistant powered by lemonskn.com.

    TONE: Professional, empathetic but brief.
  `;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        temperature: 0.2, // একুরেসি বাড়ানোর জন্য টেম্পারেচার কমানো হয়েছে
        max_tokens: 150,  // রেসপন্স ছোট রাখার জন্য টোকেন লিমিট কমানো হয়েছে
      }),
    });

    const data = await response.json();
    
    if (data.choices && data.choices[0]) {
      res.status(200).json({ reply: data.choices[0].message.content });
    } else {
      console.error("Groq API Error:", data);
      throw new Error("Invalid response from AI engine");
    }

  } catch (error) {
    console.error("AI connection failed:", error);
    res.status(500).json({ error: "AI connection failed. Please ensure your GROQ_API_KEY is set in .env.local" });
  }
}