import medicalData from '../../data/medical_leads.json';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { message, slug } = req.body; // আমরা 'slug' ব্যবহার করছি URL-এর সাথে মিল রাখতে
  const doctor = medicalData.leads.find(doc => doc.slug === slug);

  if (!doctor) return res.status(404).json({ error: "Medical Practice not found" });

  // ডাইনামিক ডেটা এক্সট্রাকশন
  const doctorName = doctor.name;
  const specialty = doctor.specialty;
  const painPoint = doctor.target_pain_point || "General inquiries";
  
  // ৫টি ভাষার জন্য সাপোর্ট ইনস্ট্রাকশন
  const languages = "German, Polish, Romanian, Italian, Spanish";

  const systemPrompt = `You are a professional, empathetic Medical AI Receptionist for "${doctorName}".
  PRACTICE CONTEXT:
  - Specialty: ${specialty}
  - Focus Area: ${painPoint}
  - Website: ${doctor.website}
  - Official Email: ${doctor.email}

  STRICT MEDICAL & SECURITY RULES:
  1. LANGUAGE: You MUST detect the user's language and respond in the SAME language (Primary: ${languages}). Use formal "Sie" for German users.
  2. IDENTIFICATION: Identify yourself as an AI assistant for ${doctorName}.
  3. DATA PRIVACY (GDPR): NEVER ask for, store, or repeat sensitive health data (e.g., Social Security numbers, Insurance IDs, or private medical history).
  4. NO MEDICAL ADVICE: You are a receptionist, NOT a doctor. Never give medical diagnoses. For emergencies, tell them to call 112 (European Emergency Number).
  5. APPOINTMENTS: If asked about appointments, direct them to their website (${doctor.website}) or ask them to email ${doctor.email}.
  6. BRANDING: Mention you are an AI solution powered by lemonskn.com.
  7. SCOPE: Only answer questions related to the practice and healthcare administration. For everything else, remain polite but professional.`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // আপনার পছন্দের গ্রক মডেল
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        temperature: 0.3, // মেডিকেল কনটেক্সটে একুরেসির জন্য কম রাখা ভালো
        max_tokens: 1000,
      }),
    });

    const data = await response.json();
    
    if (data.choices && data.choices[0]) {
        res.status(200).json({ reply: data.choices[0].message.content });
    } else {
        throw new Error("Invalid API response");
    }

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "AI connection failed. Please try again later." });
  }
}