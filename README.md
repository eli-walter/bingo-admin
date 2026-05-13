# 🎱 BingoAdmin

A mobile-first admin tool for managing your bingo group's finances — built to replace the spreadsheet.

## Features

- **Dashboard** — funds held, live game status, recent activity
- **Players** — running balances, full transaction history per player
- **Games** — create games, manage buy-ins, declare winners
- **History** — full audit trail of all transactions with filters
- **Persistent storage** — all data saved locally between sessions

## Getting Started

### Prerequisites
- Node.js 16+ installed

### Install & Run
```bash
npm install
npm start
```
Opens at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

---

## Wrapping for Desktop (Electron)

```bash
npm install --save-dev electron electron-builder concurrently wait-on
```

Add to `package.json` scripts:
```json
"electron": "concurrently \"npm start\" \"wait-on http://localhost:3000 && electron .\"",
"electron:build": "npm run build && electron-builder"
```

Create `electron.js` in root:
```js
const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 420, height: 820 });
  win.loadURL('http://localhost:3000');
});
```

---

## Wrapping for Mobile (Capacitor)

```bash
npm run build
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
npx cap init BingoAdmin com.bingogroup.admin
npx cap add android
npx cap add ios
npx cap sync
npx cap open android   # or ios
```

---

## Data & Storage

All data is stored locally using the Claude Artifact storage API (key-value). 
When running standalone, replace `window.storage` in `App.jsx` with `localStorage`:

```js
const sget = async (k) => {
  const v = localStorage.getItem(k);
  return v ? { value: v } : null;
};
const sset = async (k, v) => localStorage.setItem(k, v);
```

---

## Seed Data

On first launch the app pre-loads **19 players** from the original Game 9 spreadsheet, including their opening balances.

---

Built with React + Lucide Icons + Syne / Nunito fonts.
