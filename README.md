# Patient Confidence Hub

A modern Next.js frontend application for medical tourism, featuring a dark green theme and comprehensive patient management interface.

## Features

- **Dashboard**: Overview with KPI cards, featured clinic, and treatment quotes
- **Clinics**: Browse and view detailed information about accredited medical facilities
- **Quote System**: Get treatment quotes with cost comparisons
- **Consent Management**: Track consent checklists and informed consent documentation
- **Aftercare Support**: Healing tips, symptom checker, and follow-up management

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- lucide-react icons
- framer-motion (optional animations)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── dashboard/       # Main dashboard page
│   ├── clinics/         # Clinic listing and detail pages
│   ├── quote/           # Treatment quote page
│   ├── consent/         # Consent checklist page
│   ├── aftercare/       # Aftercare support page
│   └── layout.tsx        # Root layout with navigation
├── components/
│   ├── cards/           # KPI card component
│   ├── clinics/         # Clinic card component
│   ├── quote/           # Quote form component
│   ├── consent/         # Consent checklist component
│   ├── aftercare/       # Aftercare card component
│   ├── nav/             # Top navigation component
│   └── ui/              # shadcn/ui components
├── data/
│   ├── clinics.ts      # Mock clinic data
│   ├── procedures.ts    # Treatment procedures data
│   └── aftercare.ts     # Aftercare tips and symptoms
└── lib/
    └── utils.ts         # Utility functions
```

## Pages

- `/dashboard` - Main dashboard with KPIs and overview
- `/clinics` - List of all clinics
- `/clinics/[id]` - Individual clinic detail page
- `/quote` - Treatment quote form and clinic options
- `/consent` - Consent checklist and documentation
- `/aftercare` - Aftercare support and symptom checker

## Styling

The app uses a dark green theme with:
- CSS variables for theming (defined in `app/globals.css`)
- Tailwind CSS for utility classes
- Rounded corners (2xl) on cards
- Glassy, elevated card appearance
- Responsive grid layouts

## Deployment

Ready to deploy on Vercel:

```bash
npm run build
```

The app is frontend-only with mocked data - no backend or database required.
