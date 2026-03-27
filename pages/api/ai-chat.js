//C:\Users\Shanon\al-rajjak\pages\api\ai-chat.js
import medicalData from '../../data/medical_leads.json';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { message, slug } = req.body;
  const doctor = medicalData.leads.find(doc => doc.slug === slug);

  if (!doctor) return res.status(404).json({ error: "Medical Practice not found" });

  const systemPrompt = `You are a professional, empathetic Medical AI Receptionist for "${doctor.name}".
  PRACTICE CONTEXT:
  - Specialty: ${doctor.specialty}
  - Focus Area: ${doctor.target_pain_point || "General Healthcare"}
  - Website: ${doctor.website || "Contact via Email"}
  - Official Email: ${doctor.email}

  STRICT RULES:
  1. Detect user's language and respond in the SAME (German, Spanish, etc.). Use formal "Sie" for German.
  2. Identify as AI assistant for ${doctor.name}.
  3. GDPR: NEVER store sensitive health data.
  4. NO MEDICAL DIAGNOSIS. For emergencies, call 112.
  5. APPOINTMENTS: Direct to website ${doctor.website} or email ${doctor.email}.
  6. POWERED BY: Mention lemonskn.com subtly if asked about the technology.`;

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
        temperature: 0.3,
      }),
    });

    const data = await response.json();
    
    if (data.choices && data.choices[0]) {
        res.status(200).json({ reply: data.choices[0].message.content });
    } else {
        throw new Error("Invalid API response from Groq");
    }

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "AI connection failed. Check your GROQ_API_KEY." });
  }
}