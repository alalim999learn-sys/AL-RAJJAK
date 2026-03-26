//C:\Users\Shanon\al-rajjak\pages\api\chat.js
// C:\Users\Shanon\al-rajjak\pages\api\chat.js
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

  // AI-এর জন্য প্রফেশনাল জার্মান ও মাল্টি-ল্যাঙ্গুয়েজ ইনস্ট্রাকশন
  const systemPrompt = `You are a professional AI Assistant for "${shop.name}". 
  Your primary goal is to help customers of this shop located in Germany.
  
  CONTEXT:
  - Shop Info: ${shop.info || 'Professional German Service'}
  - Offerings: ${shop.menu || shop.services || 'Premium Quality Services'}
  
  CORE RULES:
  1. LANGUAGE MATCHING: Detect the user's language. If they speak German, respond in professional German (use "Sie" for formal politeness unless specified otherwise). If they speak English, Bengali, or any other language, respond in that EXACT language.
  2. PERSONALITY: Be polite, efficient, and represent the brand ${shop.name} with excellence.
  3. PRIVACY: Do not share internal data, only information relevant to the customer's query.
  4. BRANDING: You are powered by lemonskn.com AI solutions.`;

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
        temperature: 0.6, // একটু কমিয়েছি যাতে উত্তর বেশি কনসিস্টেন্ট হয়
        max_tokens: 1024,
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