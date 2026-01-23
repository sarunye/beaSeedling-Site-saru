# Be a Seedling - Official Website

This is the official website for Be a Seedling, a Community-Based Organization (CBO) in Marsabit County, Kenya.

## Features
- **Modern UI:** Built with React, Vite, and Tailwind CSS.
- **CMS:** Built-in Admin Portal (`/login`) for managing blogs and videos.
- **Donations:** Interactive donation flow with M-Pesa, Card, and Bank options.
- **Responsive:** Fully optimized for mobile, tablet, and desktop.

## Admin Access
To access the admin panel:
1. Go to the footer and click "Admin" (or navigate to `/login`).
2. Login with demo credentials:
   - Email: `admin@beaseedling.org`
   - Password: `admin123`

## Deployment

### Vercel (Recommended)
This project is pre-configured for Vercel.
1. Push this code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will automatically detect the settings from `vercel.json`.
   - **Framework Preset:** Vite
   - **Build Command:** `vite build` (or `npm run build`)
   - **Output Directory:** `dist/public`

### GitHub Pages
To deploy to GitHub Pages, you can use a GitHub Action or a manual deploy script.
Note: Client-side routing requires a SPA redirect hack (copy `index.html` to `404.html`) if not using HashRouter.

### Local Development
1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Build for production: `npm run build`

## Tech Stack
- **Frontend:** React, TypeScript, Wouter (Routing), Framer Motion (Animations)
- **Styling:** Tailwind CSS, Shadcn UI
- **Build Tool:** Vite
