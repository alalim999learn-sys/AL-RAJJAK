//C:\Users\Shanon\al-rajjak\data\shops.js
// C:\Users\Shanon\al-rajjak\data\shops.js
// C:\Users\Shanon\al-rajjak\data\shops.js

export const shopsData = {
  // 1. Zellerbäck - Bakery
  "zellerbaeck": {
    name: "Zellerbäck GmbH & Co. KG",
    logo: "/images/logos/zellerbaeck.png",
    description: "Bäckerei und Konditorei Zeller aus Friedrichshafen – Ein Familienbetrieb gegründet im Jahre 1899. Seit over 120 Jahren bewährter Handwerksbrauch.",
    owner: "Beate Zeller",
    management_title: "Geschäftsführer",
    openingHours: {
      mon_fri: "05:30 - 17:00 Uhr",
      sat: "06:00 - 12:00 Uhr",
      note: "Frühstücksangebote in Filialen Ailingen, Kitzenwiese und Meersburg."
    },
    products: ["Brotsorten", "Kleingebäck", "Torten", "Catering"],
    address: "Siemensstraße 9, D-88048 Friedrichshafen",
    contact: { tel: "07541 525 50", email: "hallo@zellerbaeck.de", web: "www.zellerbaeck.de" },
    legal: { ustId: "DE259342347", registry: "HR A Nr.:720841" }
  },

  // 2. Zierat - Concept Store
  "zierat": {
    name: "Zierat GmbH",
    logo: "/images/logos/zierat.png",
    description: "Concept Store für skandinavische Mode, Interieur und Pflanzen. Inklusive Café in Meersburg.",
    owner: "Smilla Schülke",
    status_note: "Winterpause bis März 2026!",
    locations: {
      meersburg: "Steigstraße 19, 88709 Meersburg",
      langenargen: "Schulstraße 5, 88085 Langenargen"
    },
    contact: { tel: "07532 414512", email: "hallo@zierat.de", web: "www.zierat.de" },
    legal: { hrb: "HRB 581394", registry: "Amtsgericht Freiburg" }
  },

  // 3. Akam’s - Oriental Cuisine
  "akams-heidelberg": {
    name: "Akam’s Heidelberg",
    logo: "/images/logos/akams.png",
    description: "Authentische orientalische Küche. Spezialisiert auf Falafel, Hummus und Halal Fleischgerichte.",
    owner: "Hamad Amin Chrakhan",
    openingHours: { mon_fri: "08:00-22:00", sat_sun: "11:00-22:00" },
    dietary_info: "100% Halal, Vegan & Glutenfrei Optionen.",
    address: "Rudolf-Diesel-Straße 9, 69115 Heidelberg",
    contact: { tel: "+49 6221 4384009", email: "info@akams-heidelberg.de" },
    legal: { stnr: "32322/43727" }
  },

  // 4. Wirtshaus zum Spreisel - Traditional German
  "wirtshaus-zum-spreisel": {
    name: "Wirtshaus zum Spreisel",
    logo: "/images/logos/wirt.png",
    description: "Traditionelle Odenwälder Küche. Seit over 40 Jahren Familienerfahrung.",
    owner: "Peter und Maria Ueberle",
    openingHours: { tue_fri: "17:00-23:00", sat_sun: "12:00-15:00 & 17:00-23:00", mon: "Ruhetag" },
    menu_highlights: ["Haxe", "Sauerbraten", "Schnitzel", "Wildgulasch"],
    address: "Neckarstaden 66, 69117 Heidelberg",
    contact: { tel: "06221 23543", email: "info@wirtshaus-zum-spreisel.de" }
  },

  // 5. Das Bootshaus - Bar & Grill
  "das-bootshaus": {
    name: "Das Bootshaus - Bar & Grill",
    logo: "/images/logos/dasboothaus.png",
    description: "Maritimes Flair im Ruder-Bootshaus mit historischem Interieur direkt am Neckar.",
    openingHours: { mon_sat: "16:00-23:00", sun: "Ruhetag" },
    features: ["Sonnendeck", "Event-Location", "Rudersport-Ambiente"],
    address: "Schurmanstr. 2, 69115 Heidelberg",
    contact: { tel: "+49 6221 25396", email: "info@dasbootshaus.com" }
  },

  // 6. Löwenbräu Heidelberg - Bavarian Style
  "loewenbraeu-heidelberg": {
    name: "Löwenbräu Heidelberg",
    logo: "/images/logos/llwen.png",
    description: "Bayerische Gastfreundschaft und herzhafte Küche in der Heidelberger Hauptstraße.",
    owner: "Hans-Otto Gieser",
    openingHours: { daily: "11:00 - 23:00 Uhr" },
    features: ["GastroApp", "Zentrale Lage", "Durchgehend warme Küche"],
    address: "Hauptstrasse 127, 69117 Heidelberg",
    contact: { tel: "+49 6221 28450", email: "info@löwenbräu-heidelberg.de" }
  },

  // 7. Palmyra - Syrian Restaurant


  "palmyra-heidelberg": {
    name: "Restaurant Palmyra Heidelberg",
    logo: "/images/logos/palmyra.avif",
    description: "Authentische syrisch-orientalische Spezialitäten wie Fattoush, Kebbeh und Lammhaxe.",
    owner: "Bahij Makdisi",
    address: "Kurfürsten-Anlage 53, 69115 Heidelberg",
    menu_highlights: ["Mix-Grillplatte", "Hummus", "Halawet el Jibn"],
    contact: { tel: "06221 4557555", web: "www.palmyra-heidelberg.de" }
  },

  // 8. Annoir - Modern Asian Fusion
  "annoir-restaurant": {
    name: "Annoir - Modern Asian Kitchen",
    logo: "/images/logos/annoir.webp",
    description: "Indochinesische Fusion Cuisine. Symbiose aus asiatischem Erbe und moderner Haute Cuisine.",
    openingHours: { mon_fri: "11:00-22:30", sat_sun: "11:30-23:30" },
    features: ["Sushi & Sashimi", "Private Dining", "Catering Service"],
    contact: { tel: "0176 63088711", email: "info@annoir.restaurant" }
  },

  
  //9
  "ristorante-giardino": {
    name: "Ristorante Giardino",
    logo: "/images/logos/giardino.png",
    description: "Authentische italienische Küche im Herzen von Heidelberg. Seit 1999 bereiten Giorgio Giaimo und sein Team mit Herzblut feine Nudelspezialitäten, frische Pizza und traditionelle italienische Gerichte zu.",
    
    // মালিকানা ও ব্যবস্থাপনা (Impressum অনুযায়ী)
    owner: "Giorgio Giaimo",
    management_title: "Inhaber",
    
    // খোলার সময় (Öffnungszeiten)
    openingHours: {
      mon_tue: "17:30 – 22:30 Uhr",
      thu_sun: "12:00 – 15:00 Uhr & 17:30 – 22:30 Uhr",
      closed: "Mittwoch (Ruhetag)",
      note: "Vorbestellung unter (06221) 314 100 möglich."
    },

    // খাবারের বিশেষত্ব
    menu_highlights: [
      "Feine Nudelspezialitäten",
      "Frische Pizza aus dem Ofen",
      "Traditionelle italienische Fleisch- und Fischgerichte",
      "Große Auswahl an Antipasti"
    ],

    // অতিরিক্ত সেবা
    services: [
      "Organisation von Festen und Feiern",
      "Dolce Vita Ambiente",
      "Catering & Vorbestellung"
    ],

    // ঠিকানা ও যোগাযোগ
    address: "Rohrbacher Str. 166, 69126 Heidelberg",
    contact: {
      tel: "06221 314 100",
      email: "info@ristorante-giardino.de",
      web: "www.ristorante-giardino.de",
      social: {
        facebook: "ristorante.giardino.heidelberg"
      }
    },

    // আইনি তথ্য (Impressum)
    legal: {
      ustId: "DE202238570",
      responsible_person: "Giorgio Giaimo"
    }
  },
  "fragrance_of_the_heart": {
    name: "The Fragrance of the Heart Restaurant-Café",
    logo: "/images/logos/fragrance.png", // Placeholder path
    description: "Hausgemachte vegane & vegetarische Küche in Heidelberg. Inspiriert von der Philosophie Sri Chinmoys – Essen, das Körper, Herz und Seele nährt.",
    owner: "Ellen Brandt",
    management_title: "Einzelunternehmen / Inhaberin",
    openingHours: {
      mon_tue_thu_fri: "11:00 - 18:00 Uhr",
      sat_sun: "09:00 - 18:00 Uhr",
      wed: "Ruhetag",
      note: "ACHTUNG: Ab Mo., 16.3. wegen Umbauarbeiten für ca. 2 Wochen geschlossen!"
    },
    products: ["Burger", "Burritos", "Veggie Bowls", "Quesadillas", "Vegane Torten", "Spezialitätenkaffee"],
    address: "Bahnhofstraße 7, 69115 Heidelberg",
    contact: { 
      tel: "06221 7248558", 
      email: "info@fragranceoftheheart.de", 
      web: "www.fragranceoftheheart.de" 
    },
    legal: { 
      ustId: "DE425928615", 
      responsible_content: "Ellen Brandt" 
    },
    mission_status: "Target 20/33"
  },
"katzentempel_gmbh": {
    name: "Katzentempel GmbH (Franchise Zentrale)",
    logo: "/images/logos/katzentempel.png",
    description: "Deutschlands erstes Katzen-Restaurant-Konzept. Vegane Speisen in Gesellschaft von Tierschutzkatzen. Ein Ort für Nachhaltigkeit und Tierwohl.",
    owner: "Thomas Leidner",
    management_title: "Geschäftsführer",
    locations: [
      "Augsburg", "Berlin Mitte", "Bochum", "Bremen", "Dortmund", 
      "Erlangen", "Freiburg", "Hamburg", "Heidelberg", "Köln", 
      "Leipzig", "München", "Nürnberg", "Regensburg"
    ],
    products: ["Hausgemachtes Dinkelbrot", "Vegane Burger", "Vegane Torten", "Frühstück", "Merchandise"],
    address: "Eichenweg 4a, 85774 Unterföhring, Deutschland",
    contact: { 
      tel: "089 20077076", 
      email: "info@katzentempel.de", 
      web: "www.katzentempel.de" 
    },
    legal: { 
      ustId: "DE307018475", 
      hrb: "225021 (Amtsgericht München)",
      responsible_content: "Thomas Leidner"
    },
    mission_status: "Target 21/33"
  },
  "papi_heidelberg": {
    name: "PAPI Heidelberg - Neapolitanische Küche",
    logo: "/images/logos/papi.png",
    description: "Authentische neapolitanische Küche im Herzen von Heidelberg. Ein Ort für beste Zutaten, Leidenschaft und Gastfreundschaft.",
    owner: "Suna Kilic",
    management_title: "Geschäftsführerin (GLADIO 1461 GmbH & Co. KG)",
    openingHours: {
      mon_wed_sun: "11:00 – 23:00 Uhr",
      thu_sat: "11:00 – 01:00 Uhr"
    },
    products: ["Neapolitanische Pizza", "Pasta", "Events & Feiern", "Drinks"],
    address: "Hauptstraße 202, 69117 Heidelberg",
    contact: { 
      tel: "06221 6563098", 
      email: "info@papi-heidelberg.de", 
      web: "www.papi-heidelberg.de" 
    },
    legal: { 
      hrb: "Amtsgericht Mannheim",
      company: "GLADIO 1461 GmbH & Co. KG",
      responsible_content: "Suna Kilic"
    },
    mission_status: "Target 23/33"
  },
  "restaurant_darwisch": {
    name: "Restaurant Darwisch",
    logo: "/images/logos/darwisch.png",
    description: "Authentische persische Küche in Heidelberg. Ein traditionsreiches Restaurant, das Gastfreundschaft und orientalische Spezialitäten vereint.",
    owner: "Afsaneh Dargahi",
    management_title: "Inhaberin",
    openingHours: {
      mon_fri: "17:30 – 22:30 Uhr",
      sat_sun_holidays: "12:00 – 22:30 Uhr"
    },
    products: ["Persische Grillspezialitäten", "Traditionelle Reisgerichte", "Vegetarische Vorspeisen", "Hausgemachte Desserts"],
    address: "Rohrbacher Straße 22, 69115 Heidelberg",
    contact: { 
      tel: "06221 619333", 
      fax: "06221 619329",
      email: "darwischrestaurant@gmail.com", 
      web: "www.darwisch.com" 
    },
    legal: { 
      ustId: "DE406798587", 
      responsible_content: "Afsaneh Dargahi",
      supervisory_authority: "Gesundheitsamt"
    },
    social: {
      facebook: "https://www.facebook.com/pages/Darwisch/118100231580257",
      instagram: "https://www.instagram.com/darwisch_heidelberg/"
    },
    mission_status: "Target 24/33"
  },

  "golden_spoon_germany": {
    id: "golden_spoon_heidelberg",
    name: "Golden Spoon - Indian & Persian Cuisine",
    description: "Authentische indische und persische Spezialitäten im Herzen von Heidelberg. Fokus auf South Indian Specials, Biryanis und traditionelle Grillgerichte.",
    brand_identity: "Fusion of two vibrant cultures (Indian & Persian)",
    owner: "NOT LISTED (Missing Impressum)",
    management_title: "Inhaber",
    address: "Rohrbacher Str. 65, 69115 Heidelberg, Germany",
    contact: {
      tel: "+49 176 43878034",
      email: "goldenspoongermany@gmail.com",
      web: "http://www.goldenspoongermany.de",
      whatsapp: "+4917643878034"
    },
    opening_hours: {
      mon_sat: "11:30 – 15:00, 17:30 – 22:00",
      sun: "Closed"
    },
    menu_highlights: {
      veg_starters: ["Samosa", "Masala Papad", "Veg Manchurian", "Gobi Manchurian", "Mixed Veg Pakora"],
      non_veg_starters: ["Chilli Chicken", "Chicken 65"],
      specials: ["Masala Dosa", "Chicken Biryani", "Persian Specials", "South Indian Specials"],
      desserts: ["Gulab Jamun", "Kulfi"]
    },
    technical_audit: {
      security_status: "RISKY - No HTTPS (Insecure)",
      legal_compliance: "FAILED - Missing Impressum (Required by § 5 TMG)",
      content_errors: "Critical typo: 'Visit Our Brunch' instead of 'Branch'",
      developer_info: "Design and Developed by Designcomm.in",
      tech_stack_recommendation: "Migrate to Next.js for SEO and Security"
    },
    marketing_opportunities: [
      "AI Booking Bot to replace manual 'Call us to order' process",
      "Professional Email setup (info@goldenspoongermany.de)",
      "GDPR & Legal compliance fix (Impressum & Privacy Policy update)"
    ],
    mission_status: "Target 25/33"
  },
  "le_petit_chef_heidelberg": {
    "id": "le_petit_chef_959",
    "name": "Le Petit Chef - Heidelberg",
    "brand_concept": "The World's Smallest Chef - 3D Cinema Dining",
    "description": "Einzigartige Dinnershow in Kooperation zwischen 2Spicy Entertainment GmbH und 959 Heidelberg Stadtgarten.",
    "operator": {
      "company": "2Spicy Entertainment GmbH",
      "address": "Otto-Volger-Str. 9B, 65843 Sulzbach (Taunus), Germany",
      "management": "Christian Bagaric",
      "hrb": "Amtsgericht Frankfurt am Main, HRB 134988",
      "ust_id": "DE320400383"
    },
    "location_in_heidelberg": "959 Heidelberg Stadtgarten, Friedrich-Ebert-Anlage 2, 69117 Heidelberg",
    "contact": {
      "tel": "+49 6190 8089370",
      "email": "info@2spicy.com",
      "web": "https://lepetitchef.com/Heidelberg"
    },
    "pricing_models": {
      "grand_menu": "149,00 €",
      "vegetarian_menu": "139,00 €",
      "kids_menu": "89,00 €"
    },
    "technical_audit_notes": {
      "broken_features": "WhatsApp Button is non-functional",
      "legal_structure": "Imprint points to 2Spicy GmbH outside Heidelberg",
      "accessibility_issue": "Located on the 1st floor, not barrier-free",
      "conversion_gap": "High-ticket item requires 24/7 AI assistance"
    },
    "pitch_strategy": [
      "Fix the broken WhatsApp integration",
      "Add an AI-powered Concierge for dietary and group queries",
      "Optimize mobile booking conversion"
    ],
    "mission_status": "Target 26/33"
  },
  
  "river_cafe_heidelberg": {
    "id": "river_cafe_hd",
    "name": "River Café",
    "description": "Kreative Frische-Küche in entspannter Atmosphäre am Neckar. Kombination aus Tradition und Moderne mit Fokus auf Spitzen-Weine.",
    "capacity": {
      "indoor": "40 Personen",
      "terrace": "45 Personen"
    },
    "owner_management": {
      "names": "Oliver Antes & Joachim v. der Linde",
      "title": "Geschäftsführer",
      "company": "River Café"
    },
    "address": "Bergstraße 2, 69120 Heidelberg",
    "contact": {
      "tel": "06221 7274651",
      "email": "mail@river-cafe-hd.de",
      "web": "https://www.river-cafe-hd.de/"
    },
    "legal": {
      "ust_id": "DE273882060",
      "hosting": "MACSTORAGE"
    },
    "technical_audit": {
      "status": "Older website structure",
      "conversion_gap": "Lunch menu (Mittagstisch) is manual, needs AI automation for quick queries",
      "opportunity": "AI Concierge for table reservations and wine recommendations"
    },
    "mission_status": "Target 27/33"
  
},

  "keisari_group_germany": {
    "id": "keisari_group_01",
    "name": "Keisari Sinsheim GmbH (Group HQ)",
    "locations": ["Heidelberg", "Sinsheim", "Stuttgart", "Heilbronn"],
    "description": "Exklusive Sushi & Fusion Restaurantkette in Baden-Württemberg. Fokus auf High-End Gastronomie und modernes Mitarbeiter-Management.",
    "operator": {
      "company": "Keisari Sinsheim GmbH",
      "address": "Bahnhofstrasse 30, 74889 Sinsheim",
      "management": "Philipp Strähle",
      "hrb": "Amtsgericht Mannheim, HRB 744769",
      "ust_id": "DE355774422",
      "tax_number": "44079/00354"
    },
    "contact": {
      "tel": "06221 7239067",
      "email_general": "info@keisari.de",
      "email_hr": "personal@keisari.de",
      "whatsapp_hr": "+49 177 1870252",
      "web": "https://keisari.de/karriere/"
    },
    "recruitment_needs": [
      "Servicekraft",
      "Serviceleitung",
      "Sushi Koch (m/w/d)",
      "Küchenmitarbeiter",
      "Betriebsassistenz",
      "Betriebsleitung"
    ],
    "technical_audit_notes": {
      "recruitment_gap": "Currently using manual email/WhatsApp for hiring. Needs an AI Recruitment Bot to filter candidates.",
      "brand_design": "Design by Max Waidelich - high visual standards required for any UI integration.",
      "opportunity": "Multi-location AI support to handle bookings for all 4 cities from one interface."
    },
    "pitch_strategy": [
      "AI Recruitment: Automate the first stage of hiring via WhatsApp to save Philipp Strähle's time.",
      "Multi-city Booking: A centralized AI agent to manage reservations across Heidelberg, Sinsheim, Stuttgart, and Heilbronn."
    ],
    "mission_status": "Target 29/33"
  }

};

