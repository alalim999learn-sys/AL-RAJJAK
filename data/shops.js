//C:\Users\Shanon\al-rajjak\data\shops.js
// C:\Users\Shanon\al-rajjak\data\shops.js
// C:\Users\Shanon\al-rajjak\data\shops.js
export const shopsData = {
  // 1. Zellerbäck
  "zellerbaeck": {
    name: "Zellerbäck GmbH & Co. KG",
    logo: "/images/logos/zellerbaeck.png",
    description: "Bäckerei und Konditorei Zeller aus Friedrichshafen – Ein Familienbetrieb gegründet im Jahre 1899. Seit over 120 Jahren bewährter Handwerksbrauch.",
    management: { name: "Beate Zeller", title: "Geschäftsführer" },
    locations: ["Siemensstraße 9, D-88048 Friedrichshafen"],
    openingHours: { mon_fri: "05:30 - 17:00 Uhr", sat: "06:00 - 12:00 Uhr", sun: "Geschlossen" },
    offerings: ["Brotsorten", "Kleingebäck", "Torten", "Catering"],
    contact: { tel: "07541 525 50", email: "hallo@zellerbaeck.de", web: "www.zellerbaeck.de" },
    legal: { ustId: "DE259342347", hrb: "HR A Nr.:720841" }
  },

  // 2. Zierat
  "zierat": {
    name: "Zierat GmbH",
    logo: "/images/logos/zierat.png",
    description: "Concept Store für skandinavische Mode, Interieur und Pflanzen. Inklusive Café in Meersburg.",
    management: { name: "Smilla Schülke", title: "Inhaberin" },
    locations: ["Steigstraße 19, 88709 Meersburg", "Schulstraße 5, 88085 Langenargen"],
    openingHours: { note: "Winterpause bis März 2026!" },
    offerings: ["Skandinavische Mode", "Interieur", "Pflanzen", "Café"],
    contact: { tel: "07532 414512", email: "hallo@zierat.de", web: "www.zierat.de" },
    legal: { hrb: "HRB 581394", registry: "Amtsgericht Freiburg" }
  },

  // 3. Akam’s
  "akams-heidelberg": {
    name: "Akam’s Heidelberg",
    logo: "/images/logos/akams.png",
    description: "Authentische orientalische Küche. Spezialisiert auf Falafel, Hummus und Halal Fleischgerichte.",
    management: { name: "Hamad Amin Chrakhan", title: "Inhaber" },
    locations: ["Rudolf-Diesel-Straße 9, 69115 Heidelberg"],
    openingHours: { mon_fri: "08:00-22:00", sat_sun: "11:00-22:00" },
    offerings: ["Falafel", "Hummus", "Halal Fleischgerichte", "Vegan & Glutenfrei Optionen"],
    contact: { tel: "+49 6221 4384009", email: "info@akams-heidelberg.de" },
    legal: { stnr: "32322/43727" }
  },

  // 4. Wirtshaus zum Spreisel
  "wirtshaus-zum-spreisel": {
    name: "Wirtshaus zum Spreisel",
    logo: "/images/logos/wirt.png",
    description: "Traditionelle Odenwälder Küche. Seit over 40 Jahren Familienerfahrung.",
    management: { name: "Peter und Maria Ueberle", title: "Inhaber" },
    locations: ["Neckarstaden 66, 69117 Heidelberg"],
    openingHours: { tue_fri: "17:00-23:00", sat_sun: "12:00-15:00 & 17:00-23:00", mon: "Ruhetag" },
    offerings: ["Haxe", "Sauerbraten", "Schnitzel", "Wildgulasch"],
    contact: { tel: "06221 23543", email: "info@wirtshaus-zum-spreisel.de" },
    legal: { type: "Familienbetrieb" }
  },

  // 5. Das Bootshaus
  "das-bootshaus": {
    name: "Das Bootshaus - Bar & Grill",
    logo: "/images/logos/dasboothaus.png",
    description: "Maritimes Flair im Ruder-Bootshaus mit historischem Interieur direkt am Neckar.",
    management: { name: "Team Bootshaus", title: "Management" },
    locations: ["Schurmanstr. 2, 69115 Heidelberg"],
    openingHours: { mon_sat: "16:00-23:00", sun: "Ruhetag" },
    offerings: ["Sonnendeck", "Event-Location", "Rudersport-Ambiente", "Bar & Grill"],
    contact: { tel: "+49 6221 25396", email: "info@dasbootshaus.com" },
    legal: { city: "Heidelberg" }
  },

  // 6. Löwenbräu Heidelberg
  "loewenbraeu-heidelberg": {
    name: "Löwenbräu Heidelberg",
    logo: "/images/logos/llwen.png",
    description: "Bayerische Gastfreundschaft und herzhafte Küche in der Heidelberger Hauptstraße.",
    management: { name: "Hans-Otto Gieser", title: "Inhaber" },
    locations: ["Hauptstrasse 127, 69117 Heidelberg"],
    openingHours: { daily: "11:00 - 23:00 Uhr" },
    offerings: ["Bayerische Küche", "GastroApp", "Durchgehend warme Küche"],
    contact: { tel: "+49 6221 28450", email: "info@löwenbräu-heidelberg.de" },
    legal: { location: "Zentrale Lage" }
  },

  // 7. Palmyra
  "palmyra-heidelberg": {
    name: "Restaurant Palmyra Heidelberg",
    logo: "/images/logos/palmyra.avif",
    description: "Authentische syrisch-orientalische Spezialitäten wie Fattoush, Kebbeh und Lammhaxe.",
    management: { name: "Bahij Makdisi", title: "Inhaber" },
    locations: ["Kurfürsten-Anlage 53, 69115 Heidelberg"],
    openingHours: { daily: "11:30 - 22:30" }, // Approximate based on typical Syrian restaurants
    offerings: ["Mix-Grillplatte", "Hummus", "Halawet el Jibn"],
    contact: { tel: "06221 4557555", web: "www.palmyra-heidelberg.de" },
    legal: { type: "Restaurant" }
  },

  // 8. Annoir
  "annoir-restaurant": {
    name: "Annoir - Modern Asian Kitchen",
    logo: "/images/logos/annoir.webp",
    description: "Indochinesische Fusion Cuisine. Symbiose aus asiatischem Erbe und moderner Haute Cuisine.",
    management: { name: "Management Team", title: "Geschäftsführung" },
    locations: ["Heidelberg (Check Website for exact address)"],
    openingHours: { mon_fri: "11:00-22:30", sat_sun: "11:30-23:30" },
    offerings: ["Sushi & Sashimi", "Private Dining", "Catering Service"],
    contact: { tel: "0176 63088711", email: "info@annoir.restaurant" },
    legal: { category: "Fine Dining" }
  },

  // 9. Ristorante Giardino
  "ristorante-giardino": {
    name: "Ristorante Giardino",
    logo: "/images/logos/giardino.png",
    description: "Authentische italienische Küche im Herzen von Heidelberg. Seit 1999 feine Nudelspezialitäten ও পিৎজা।",
    management: { name: "Giorgio Giaimo", title: "Inhaber" },
    locations: ["Rohrbacher Str. 166, 69126 Heidelberg"],
    openingHours: { mon_tue: "17:30 – 22:30", thu_sun: "12:00 – 15:00 & 17:30 – 22:30", wed: "Ruhetag" },
    offerings: ["Nudelspezialitäten", "Frische Pizza", "Antipasti", "Fleisch- und Fischgerichte"],
    contact: { tel: "06221 314 100", email: "info@ristorante-giardino.de", web: "www.ristorante-giardino.de" },
    legal: { ustId: "DE202238570" }
  },

  // 10. Fragrance of the Heart
  "fragrance_of_the_heart": {
    name: "The Fragrance of the Heart Restaurant-Café",
    logo: "/images/logos/fragrance.png",
    description: "Hausgemachte vegane & vegetarische Küche in Heidelberg. Inspiriert von der Philosophie Sri Chinmoys.",
    management: { name: "Ellen Brandt", title: "Inhaberin" },
    locations: ["Bahnhofstraße 7, 69115 Heidelberg"],
    openingHours: { mon_tue_thu_fri: "11:00 - 18:00", sat_sun: "09:00 - 18:00", wed: "Ruhetag" },
    offerings: ["Burger", "Veggie Bowls", "Quesadillas", "Vegane Torten"],
    contact: { tel: "06221 7248558", email: "info@fragranceoftheheart.de", web: "www.fragranceoftheheart.de" },
    legal: { ustId: "DE425928615" }
  },

  // 11. Katzentempel
  "katzentempel_gmbh": {
    name: "Katzentempel GmbH (Franchise Zentrale)",
    logo: "/images/logos/katzentempel.png",
    description: "Deutschlands erstes Katzen-Restaurant-Konzept. Vegane Speisen in Gesellschaft von Tierschutzkatzen.",
    management: { name: "Thomas Leidner", title: "Geschäftsführer" },
    locations: ["Augsburg", "Berlin Mitte", "Hamburg", "Heidelberg", "Köln", "München", "Nürnberg", "Regensburg"],
    openingHours: { note: "Check individual branch for hours" },
    offerings: ["Vegane Burger", "Hausgemachtes Dinkelbrot", "Vegane Torten", "Merchandise"],
    contact: { tel: "089 20077076", email: "info@katzentempel.de", web: "www.katzentempel.de" },
    legal: { ustId: "DE307018475", hrb: "225021 (München)" }
  },

  // 12. PAPI Heidelberg
  "papi_heidelberg": {
    name: "PAPI Heidelberg - Neapolitanische Küche",
    logo: "/images/logos/papi.png",
    description: "Authentische neapolitanische Küche im Herzen von Heidelberg. Beste Zutaten und Leidenschaft.",
    management: { name: "Suna Kilic", title: "Geschäftsführerin" },
    locations: ["Hauptstraße 202, 69117 Heidelberg"],
    openingHours: { mon_wed_sun: "11:00 – 23:00", thu_sat: "11:00 – 01:00" },
    offerings: ["Neapolitanische Pizza", "Pasta", "Events & Feiern", "Drinks"],
    contact: { tel: "06221 6563098", email: "info@papi-heidelberg.de", web: "www.papi-heidelberg.de" },
    legal: { company: "GLADIO 1461 GmbH & Co. KG", hrb: "Mannheim" }
  },

  // 13. Restaurant Darwisch
  "restaurant_darwisch": {
    name: "Restaurant Darwisch",
    logo: "/images/logos/darwisch.png",
    description: "Authentische persische Küche in Heidelberg. Traditionsreiches Restaurant mit Gastfreundschaft.",
    management: { name: "Afsaneh Dargahi", title: "Inhaberin" },
    locations: ["Rohrbacher Straße 22, 69115 Heidelberg"],
    openingHours: { mon_fri: "17:30 – 22:30", sat_sun_holidays: "12:00 – 22:30" },
    offerings: ["Persische Grillspezialitäten", "Reisgerichte", "Hausgemachte Desserts"],
    contact: { tel: "06221 619333", email: "darwischrestaurant@gmail.com", web: "www.darwisch.com" },
    legal: { ustId: "DE406798587" }
  },

  // 14. Golden Spoon
  "golden_spoon_germany": {
    name: "Golden Spoon - Indian & Persian Cuisine",
    logo: "/images/logos/goldenspoon.png",
    description: "Authentische indische und persische Spezialitäten. Fokus auf South Indian Specials ও Biryanis।",
    management: { name: "Management Team", title: "Inhaber" },
    locations: ["Rohrbacher Str. 65, 69115 Heidelberg, Germany"],
    openingHours: { mon_sat: "11:30 – 15:00, 17:30 – 22:00", sun: "Geschlossen" },
    offerings: ["Masala Dosa", "Chicken Biryani", "Persian Grill", "Gulab Jamun"],
    contact: { tel: "+49 176 43878034", email: "goldenspoongermany@gmail.com", web: "www.goldenspoongermany.de" },
    legal: { note: "Missing Impressum" }
  },

  // 15. Le Petit Chef
  "le_petit_chef_heidelberg": {
    name: "Le Petit Chef - Heidelberg",
    logo: "/images/logos/le_petit_chef.png",
    description: "The World's Smallest Chef - 3D Cinema Dining Show in Kooperation mit 959 Heidelberg.",
    management: { name: "Christian Bagaric", title: "Geschäftsführer" },
    locations: ["959 Heidelberg Stadtgarten, Friedrich-Ebert-Anlage 2, 69117 Heidelberg"],
    openingHours: { note: "Reservierung erforderlich" },
    offerings: ["Grand Menu", "Vegetarian Menu", "Kids Menu", "3D Show"],
    contact: { tel: "+49 6190 8089370", email: "info@2spicy.com", web: "https://lepetitchef.com/Heidelberg" },
    legal: { hrb: "134988 Frankfurt", ustId: "DE320400383" }
  },

  // 16. River Café
  "river_cafe_heidelberg": {
    name: "River Café",
    logo: "/images/logos/rivercafe.png",
    description: "Kreative Frische-Küche am Neckar. Kombination aus Tradition und Moderne.",
    management: { name: "Oliver Antes & Joachim v. der Linde", title: "Geschäftsführer" },
    locations: ["Bergstraße 2, 69120 Heidelberg"],
    openingHours: { daily: "12:00 - 23:00" }, // Updated based on standard cafe hours
    offerings: ["Mittagstisch", "Spitzen-Weine", "Frische-Küche"],
    contact: { tel: "06221 7274651", email: "mail@river-cafe-hd.de", web: "www.river-cafe-hd.de" },
    legal: { ustId: "DE273882060" }
  },

  // 17. Keisari Group
  "keisari_group_germany": {
    name: "Keisari Sinsheim GmbH (Group HQ)",
    logo: "/images/logos/keisari_logo_dark_brown.png",
    description: "Exklusive Sushi & Fusion Restaurantkette. Fokus auf High-End Gastronomie.",
    management: { name: "Philipp Strähle", title: "Geschäftsführer" },
    locations: ["Heidelberg", "Sinsheim", "Stuttgart", "Heilbronn"],
    openingHours: { daily: "12:00 - 22:00" },
    offerings: ["High-End Sushi", "Fusion Cuisine", "Modernes Management"],
    contact: { tel: "06221 7239067", email: "info@keisari.de", whatsapp: "+49 177 1870252", email_hr: "personal@keisari.de" },
    legal: { hrb: "744769 Mannheim", ustId: "DE355774422" },
    recruitment_needs: ["Sushi Koch", "Servicekraft", "Betriebsleitung", "Serviceleitung"]
  }
};