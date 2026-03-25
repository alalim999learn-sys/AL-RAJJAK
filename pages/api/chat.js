import { shopsData } from '../../data/shops';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message, shopId } = req.body;
  const shop = shopsData[shopId];

  if (!shop) {
    return res.status(404).json({ error: "Shop not found in data/shops.js" });
  }

  // AI-এর জন্য একদম সঠিক মাল্টি-ল্যাঙ্গুয়েজ ইনস্ট্রাকশন
  const systemPrompt = `You are a professional and friendly AI assistant for "${shop.name}". 
  Store context: ${shop.info}. 
  Offerings: ${shop.menu || shop.services}. 
  
  CRITICAL RULE: You are a multi-language expert. 
  1. Detect the user's language automatically (Bengali, English, German, Spanish, French, Italian, Polish, Turkish, and all EU languages).
  2. You MUST respond in the EXACT same language the user is using. 
  3. Keep the conversation helpful, polite, and strictly related to the shop's services.`;

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
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (data.choices && data.choices[0]) {
      res.status(200).json({ reply: data.choices[0].message.content });
    } else {
      res.status(500).json({ error: "AI response error", details: data });
    }
  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({ error: "Connection to AI failed" });
  }
}