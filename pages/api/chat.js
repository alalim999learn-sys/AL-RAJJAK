import { shopsData } from '../../data/shops';

export default async function handler(req, res) {
  // শুধুমাত্র POST রিকোয়েস্ট গ্রহণ করবে
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message, shopId } = req.body;
  
  // shopsData থেকে নির্দিষ্ট দোকানের তথ্য খুঁজে বের করা
  const shop = shopsData[shopId];

  if (!shop) {
    return res.status(404).json({ error: "Shop not found in data/shops.js" });
  }

  // AI-এর জন্য কাস্টম ইনস্ট্রাকশন (জার্মান ভাষায় কথা বলার জন্য)
  const systemPrompt = `You are a professional AI assistant for "${shop.name}". 
  Store context: ${shop.info}. 
  Offerings: ${shop.menu || shop.services}. 
  IMPORTANT: You must always respond in German (Deutsch) language. 
  Be polite, helpful, and act as a local staff member.`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`, // আপনার Netlify-তে সেট করা Key
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // সেই শক্তিশালী Llama মডেল
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        temperature: 0.7, // উত্তরগুলো একটু ন্যাচারাল হওয়ার জন্য
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