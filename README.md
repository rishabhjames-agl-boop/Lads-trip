# Lads Trip '27

A one page site where the lads vote on where to go, how many days they can get off, and which months next year work. Live results on the same page. Hosted free on GitHub Pages, votes stored free in Firebase.

**What's in here**

| File | What it is |
|---|---|
| `index.html` | The whole site. You shouldn't need to touch it. |
| `config.js` | The only file you edit. Firebase keys, names, destinations, budgets, photos. |
| `firestore.rules` | Security rules for the Firebase database. You paste these into Firebase once. |
| `.nojekyll` | Tells GitHub Pages to serve the files as is. Leave it. |

Until you paste your Firebase config in, the site runs in **preview mode**: it works fully but votes only save in your own browser. Handy for checking it looks right before you go live.

---

## Setup (about 15 minutes)

### 1. Firebase (where the votes live)

1. Go to https://console.firebase.google.com and sign in with any Google account.
2. **Create a project.** Call it `lads-trip` or whatever. Turn Google Analytics **off** when it asks (you don't need it). Wait for it to finish.
3. In the left menu open **Build > Firestore Database > Create database**.
   - Location: pick `australia-southeast1` (Sydney) or anything close.
   - Start in **production mode**. Click Create.
4. Still in Firestore, click the **Rules** tab. Delete everything in the box, paste the entire contents of `firestore.rules` from this folder, then click **Publish**.
5. Now get your keys. Click the **gear icon > Project settings** (top left, next to Project Overview). Scroll down to **Your apps** and click the **`</>`** (web) icon.
   - App nickname: `lads trip site`. Don't tick Firebase Hosting. Click **Register app**.
   - You'll see a block of code with `const firebaseConfig = { apiKey: "...", ... }`.
6. Open `config.js` and replace the placeholder `firebase: { ... }` block with those values. It should end up looking like:

```js
firebase: {
  apiKey: "AIzaSy...",
  authDomain: "lads-trip-xxxxx.firebaseapp.com",
  projectId: "lads-trip-xxxxx",
  storageBucket: "lads-trip-xxxxx.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
},
```

That's Firebase done. The `apiKey` is fine to be public, it only identifies the project. The rules file is what stops randoms messing with it.

### 2. GitHub Pages (where the site lives)

1. Go to https://github.com/new. Name the repo `lads-trip`. Make it **Public** (Pages is free on public repos). Tick **Add a README** so the repo isn't empty. Create it.
2. On the repo page click **Add file > Upload files**. Drag in `index.html`, `config.js`, `.nojekyll` and `firestore.rules` (the last one isn't needed by the site, it's just handy to keep). Click **Commit changes**.
   - If GitHub's uploader hides `.nojekyll` because it starts with a dot, skip it. It's only there to be safe.
3. Click **Settings** (top of the repo) **> Pages** (left menu).
   - Under **Build and deployment > Source** pick **Deploy from a branch**.
   - Branch: `main`, folder: `/ (root)`. Save.
4. Wait a minute, refresh the Pages settings page and you'll get a link like `https://YOURNAME.github.io/lads-trip/`. That's the site. Send it to the chat.

To change anything later (add a destination, fix a name), edit `config.js` on GitHub directly (click the file > pencil icon > commit) and the site updates in about a minute.

### 3. Check it's live

Open the link. The pill top right should say **Live** with a pulsing dot. If it says **Preview** the Firebase config in `config.js` didn't stick. If it says **Error**, the rules probably weren't published (step 1.4).

---

## Changing things

Everything is in `config.js`:

- **`lads`**: the names that show as tap to pick chips. Also drives the "still waiting on" list. I've put in everyone from the chat, fix any I got wrong (Tasmanian Tiger, I'm looking at you).
- **`destinations`**: name, a short "where" line, a blurb, who shouted it, and a photo URL. Add, remove or reorder freely. Photos are from Unsplash (free to use, no credit needed). To swap one, find a photo on unsplash.com, right click the image, copy image address, paste it in.
- **`budgets`**, **`vibes`**, **`currency`**: change the wording, the site picks it up.
- **`minDays` / `maxDays`**: the slider range.
- **`year`**: shows on the month buttons and in the hero.

The copy in `index.html` (the headings, the hints) is plain text if you want to change a line, just search for it.

## How votes work

- One vote per name. Same name submitted again overwrites the old one, so people can change their mind.
- Top 3 scoring: 3 points for first, 2 for second, 1 for third.
- "Everyone can do" on the board is the smallest number of days anyone said. That's the real ceiling for the trip.
- Wildcards (destinations someone typed in) show up on the leaderboard and as chips for everyone else to vote on too.
- Nobody can delete a vote from the site. If you need to nuke one, do it in Firebase console > Firestore Database > `responses` collection.

## If something's off

- **Photos not loading**: the Unsplash link is probably dead. Swap it in `config.js`.
- **"Firebase said no" when submitting**: rules not published, or you edited them and broke something. Re-paste `firestore.rules` and publish.
- **Site shows old content after an edit**: GitHub Pages caches for a minute or two. Hard refresh.
