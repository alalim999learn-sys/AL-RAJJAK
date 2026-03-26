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
};