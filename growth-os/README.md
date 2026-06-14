# Growth OS 🚀

> **AI-powered business intelligence for Nigerian SMEs**
> Turn daily transactions into growth insights, health scores, and credit readiness.

---

## What is Growth OS?

Growth OS is an AI-powered business operating system built for Nigerian SME merchants aligned with the OPay ecosystem. It transforms merchant transaction data into:

- 📊 **Business Health Score** — weekly performance score (0–100)
- 🤖 **Growth Copilot** — AI-like recommendations from transaction patterns
- 🪪 **Credit Passport** — lender-ready loan readiness profile

---

## Quick Start (Zero Setup)

### Option A — Open Directly in Browser (No Server Needed)
1. Open the `growth-os` folder
2. Double-click `index.html`
3. The app opens instantly in your browser

> ✅ No Node.js required. No installation. No build step.

### Option B — Run with a Local Server (Recommended)
If you have Node.js installed:
```bash
cd growth-os
npx serve .
# or
npx http-server .
```
Then open [http://localhost:3000](http://localhost:3000)

---

## Features Included

| Feature | Status |
|---|---|
| Landing / Intro Screen | ✅ |
| Merchant selector (3 demo merchants) | ✅ |
| Dashboard with metrics + charts | ✅ |
| Business Health Score (0–100) | ✅ |
| Score breakdown (5 dimensions) | ✅ |
| Growth Copilot (AI-like chat) | ✅ |
| Dynamic prompt responses | ✅ |
| Free-form message handling | ✅ |
| Credit Passport generation | ✅ |
| Animated passport reveal | ✅ |
| Export / Print button | ✅ |
| Transactions table with filters | ✅ |
| Search by name / category | ✅ |
| Pitch / Demo Mode | ✅ |
| Narration overlays in Demo Mode | ✅ |
| Merchant switching with loading animation | ✅ |
| Responsive (desktop + mobile) | ✅ |
| Nigerian Naira formatting | ✅ |
| 5 weeks of realistic mock transaction data | ✅ |

---

## Demo Merchants

| Merchant | Category | Location | Weekly Revenue |
|---|---|---|---|
| Mama Tolu Food Store | Food & Groceries | Lagos Island | ₦450K–₦600K |
| Bariga POS & Mini Mart | POS / Retail | Bariga, Lagos | ₦700K–₦1.2M |
| Campus Prints & Stationery | Printing / Stationery | Yaba, Lagos | ₦250K–₦400K |

---

## Demo Flow (for Hackathon Video)

**Step 1 — Landing Page**
> Open the app. Show the landing screen. Click **"Open Demo Dashboard"**.

**Step 2 — Dashboard**
> Select "Mama Tolu Food Store". Show weekly revenue, health score preview, sales trend chart, and top insights.

**Step 3 — Business Health Score**
> Navigate to "Health Score". Show the animated score ring, breakdown bars, and merchant-friendly status explanation.

**Step 4 — Growth Copilot**
> Navigate to "Growth Copilot". Click "Why did sales drop?" — show the dynamic response. Then try "Am I ready for a loan?".

**Step 5 — Credit Passport**
> Navigate to "Credit Passport". Click **"Generate Credit Passport"**. Show the dark lender-ready card with loan range.

**Step 6 — Switch Merchant**
> Switch to "Bariga POS & Mini Mart". Show the loading animation, then different metrics.

**Step 7 — Pitch Mode**
> Click the **"Pitch Mode"** button. Step through all 3 features using Next — perfect for recording a clean 3-minute walkthrough.

---

## Scoring Formula

The Business Health Score is calculated on a 100-point scale:

| Dimension | Max | Formula |
|---|---|---|
| Revenue Consistency | 25 | Lower week-to-week variance = higher score |
| Transaction Volume | 20 | Higher avg weekly transaction count = higher score |
| Growth Trend | 25 | Positive week-over-week revenue growth = higher score |
| Customer Return Rate | 20 | Higher % of repeat customer transactions = higher score |
| Risk Level | 10 | Fewer sudden revenue drops = higher score |

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 (via CDN) |
| Styling | Tailwind CSS (via CDN) |
| Charts | Recharts (via CDN) |
| Build | None required — pure browser |
| Data | Local JavaScript mock data |
| Fonts | DM Sans (Google Fonts) |

---

## Project Structure

```
growth-os/
├── index.html          ← Complete app (single file)
├── public/
│   └── favicon.svg
├── package.json        ← For optional Vite build
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Primary Green | `#00B875` | Buttons, active states, success |
| Deep Navy | `#071827` | Headings, sidebar, dark elements |
| Light Surface | `#F6F8FA` | Page background |
| Card White | `#FFFFFF` | Cards |
| Warning Amber | `#F59E0B` | Watchlist status, risk |
| Risk Red | `#EF4444` | At Risk status, alerts |
| Success Green | `#10B981` | Growing status, positive deltas |
| Accent Cyan | `#0EA5E9` | Stable status, info |

---

## Built for

**OPay Hackathon 2026** · 🇳🇬 Made in Nigeria

> OPay helps businesses receive money. Growth OS helps businesses grow money.
