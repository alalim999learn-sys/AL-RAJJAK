//C:\Users\Shanon\al-rajjak\pages\api\chat.js
// C:\Users\Shanon\al-rajjak\pages\api\chat.js
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

  // AI-এর জন্য প্রফেশনাল এবং ডাইনামিক সিস্টেম প্রম্পট
  const systemPrompt = `You are a professional AI Assistant for "${shop.name}". 
  Your primary goal is to help customers of this shop located in Germany.
  You are representing the owner/management: ${shop.owner || 'the team'}.

  CONTEXT FOR "${shop.name}":
  - About: ${shop.description || 'A high-quality business in Germany.'}
  - Offerings: ${shop.products?.join(', ') || shop.services?.join(', ') || 'Premium Quality Services'}
  - Opening Hours: ${JSON.stringify(shop.openingHours || 'Refer to our official schedule')}
  - Address: ${shop.address || 'Heidelberg, Germany'}
  - Contact Info: ${JSON.stringify(shop.contact || {})}

  CORE RULES:
  1. LANGUAGE MATCHING: Detect the user's language. 
     - If German: Use professional "Sie" (formal German). 
     - If English/Bengali/Other: Respond accurately in that EXACT language.
  2. PERSONALITY: Be polite, efficient, and represent "${shop.name}" with excellence.
  3. SPECIFICITY: Use the provided Context to answer. Do not give generic business advice. If you don't know a specific detail, politely ask them to contact the shop directly at ${shop.contact?.email || 'our office'}.
  4. BRANDING: You are a custom AI solution powered by lemonskn.com.`;

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
        temperature: 0.5, // কমানো হয়েছে যাতে AI তথ্য নিয়ে ভুল না করে (Hallucination রোধ করতে)
        max_tokens: 1024,
      }),
    });

    const data = await response.json();

    if (data.choices && data.choices[0]) {
      res.status(200).json({ reply: data.choices[0].message.content });
    } else {
      console.error("AI Response structure error:", data);
      res.status(500).json({ error: "AI response error" });
    }
  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({ error: "Connection to AI failed" });
  }
}