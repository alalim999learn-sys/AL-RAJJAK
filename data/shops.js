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
  }

};