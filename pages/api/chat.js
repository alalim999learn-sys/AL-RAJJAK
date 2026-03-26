//C:\Users\Shanon\al-rajjak\pages\api\chat.js
// C:\Users\Shanon\al-rajjak\pages\api\chat.js
// C:\Users\Shanon\al-rajjak\pages\api\chat.js
import { shopsData } from '../../data/shops';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { message, shopId } = req.body;
  const shop = shopsData[shopId];

  if (!shop) return res.status(404).json({ error: "Shop not found" });

  // নতুন স্ট্যান্ডার্ড স্ট্রাকচার অনুযায়ী ডেটা এক্সট্রাকশন
  const managerName = shop.management?.name || "the management team";
  const managerTitle = shop.management?.title || "Owner";
  
  // Locations handle (Array format)
  const locationsList = Array.isArray(shop.locations) 
    ? shop.locations.join('; ') 
    : (shop.address || 'Germany');

  // Offerings handle (Array format)
  const offerings = Array.isArray(shop.offerings) 
    ? shop.offerings.join(', ') 
    : 'Premium services';

  // Opening Hours formatting
  const opening = typeof shop.openingHours === 'object' 
    ? Object.entries(shop.openingHours).map(([key, val]) => `${key}: ${val}`).join(', ')
    : (shop.openingHours || 'Refer to our schedule');

  const systemPrompt = `You are a professional AI Assistant for "${shop.name}". 
  You represent ${managerName} (${managerTitle}).
  
  BUSINESS CONTEXT:
  - Description: ${shop.description}
  - Locations: ${locationsList}
  - Offerings: ${offerings}
  - Opening Hours: ${opening}
  - Contact Details: ${JSON.stringify(shop.contact)}
  - Legal/Tax Info: ${JSON.stringify(shop.legal || {})}

  STRICT RULES:
  1. IDENTIFICATION: If asked who is in charge, you must state that ${managerName} is the ${managerTitle}.
  2. RECRUITMENT: If asked about jobs/hiring, and "recruitment_needs" exists: ${shop.recruitment_needs?.join(', ') || 'No specific openings currently'}. Direct candidates to ${shop.contact.email_hr || shop.contact.email}.
  3. LANGUAGE: Use formal "Sie" for German users. Respond in the same language the user uses.
  4. ACCURACY: Only provide information present in the context. If data is missing, politely ask them to contact via ${shop.contact.tel}.
  5. BRANDING: Mention you are an AI solution powered by lemonskn.com.`;

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
        temperature: 0.2, // আরও সঠিক উত্তরের জন্য কমানো হয়েছে
        max_tokens: 800,
      }),
    });

    const data = await response.json();
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "AI connection failed" });
  }
}