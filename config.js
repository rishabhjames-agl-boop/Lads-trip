// ============================================================
//  LADS TRIP  ·  config.js
//  This is the only file you need to touch.
//  1) Paste your Firebase config below (see README.md)
//  2) Edit names, destinations, budgets etc if you want
// ============================================================

window.LADS_CONFIG = {

  // ---- Firebase (paste from Firebase console > Project settings > Your apps > Web app) ----
  // Until you paste real values the site runs in preview mode and only saves in your own browser.
  firebase: {
    apiKey: "PASTE_YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.firebasestorage.app",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:0000000000000000"
  },
  firebaseVersion: "12.19.0",
  collection: "responses",

  // ---- The basics ----
  tripName: "Lads Trip '27",
  year: 2027,
  currency: "USD",

  // Everyone in the chat. Shows up as tap to pick name chips, and drives the "still waiting on" list.
  lads: [
    "Aisha", "Andritha", "Kevin", "Raihan", "Rish",
    "Selly", "Tanya", "Tasmanian Tiger", "Troy", "Vikshay"
  ],

  // Days off slider
  minDays: 3,
  maxDays: 21,
  defaultDays: 7,

  // Budget per head, not counting flights
  budgets: ["Under $1.5k", "$1.5k to $3k", "$3k to $5k", "$5k+"],

  // Vibe chips
  vibes: ["Beach", "City", "Adventure", "Party", "Culture", "Food", "Nature", "Road trip", "Chill"],

  // ---- The shortlist ----
  // img: any HD image URL. These are Unsplash (free to use). Swap for your own if you like.
  destinations: [
    {
      name: "Japan",
      where: "Tokyo · Kyoto · Fuji",
      blurb: "The one everyone says they'll do and never does. Andritha reckons she can only do 5 days so it's tight.",
      shout: "The OG plan",
      img: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Brazil",
      where: "Rio · Copacabana · Carnival",
      blurb: "Rio, beaches, Carnival if we time it right. Troy and Tas both shouted it so it's got legs.",
      shout: "Troy + Tas",
      img: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Australia",
      where: "East coast campervan",
      blurb: "Troy's already coming next year. Campervan up the east coast, Rish sorts the route, everyone else just turns up.",
      shout: "Troy (and Rish lives there)",
      img: "https://images.unsplash.com/photo-1596430222039-4a2d7b4cd767?auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "China",
      where: "Beijing · Great Wall · Shanghai",
      blurb: "Great Wall, Shanghai skyline, dumplings at 2am. Visa faff but worth it.",
      shout: "Troy",
      img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Kyrgyzstan",
      where: "Yurts · alpine lakes · horses",
      blurb: "Selly's pick before Selly even woke up. Vikshay called it a mad shout and honestly he's right.",
      shout: "Selly (via Tanya)",
      img: "https://images.unsplash.com/photo-1602529359787-ce7468eaf119?auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Azerbaijan",
      where: "Baku · Caspian · Flame Towers",
      blurb: "Aisha says we can do Baku. Cheap, mad skyline, old city, Caspian nights.",
      shout: "Aisha",
      img: "https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6?auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Mongolia",
      where: "Gobi · steppe · eagle hunters",
      blurb: "Proper off grid. Gers, horses, nothing for miles. Tas said insane shout and meant it.",
      shout: "Tas",
      img: "https://images.unsplash.com/photo-1711127016876-9a1b7e05126f?auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Uzbekistan",
      where: "Samarkand · Bukhara · Silk Road",
      blurb: "Blue domes, Silk Road, plov every night. Other half of Tas's shout. Could pair with Kyrgyzstan.",
      shout: "Tas",
      img: "https://images.unsplash.com/photo-1733586092622-1b3201e802a5?auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Philippines",
      where: "Palawan · El Nido · island hopping",
      blurb: "Lagoons, boats, cheap beers on the beach. Troy's beach option.",
      shout: "Troy",
      img: "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "Vietnam",
      where: "Hanoi · Ha Long Bay · Hoi An",
      blurb: "Ha Long Bay, street food, motorbikes, cheap as. Tanya's one.",
      shout: "Tanya",
      img: "https://images.unsplash.com/photo-1573270689103-d7a4e42b609a?auto=format&fit=crop&w=1400&q=80"
    },
    {
      name: "South Africa",
      where: "Cape Town · safari · Garden Route",
      blurb: "Cape Town, wine country, safari, Garden Route drive. Troy again, the man's got range.",
      shout: "Troy",
      img: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?auto=format&fit=crop&w=1600&q=80"
    }
  ],

  // Hero image
  heroImg: "https://images.unsplash.com/photo-1757330878268-aabaeba00edc?auto=format&fit=crop&w=2000&q=80"
};
