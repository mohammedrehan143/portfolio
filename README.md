# Mohammed Rehan | Data Engineering & AI/ML Portfolio

A premium, interactive personal portfolio website showcasing modern web development, data engineering pipelines, and AI/ML projects. Built with a dark minimalist theme, fluid canvas lines, custom cursor hovers, 3D rotating displays, and rich GSAP animations.

---

## 🚀 Key Features

*   **Premium Minimalist Design**: Editorial serif typography (`Breton`), high-contrast dark theme, custom preloader, and clean transitions.
*   **3D Project Showcase**: A custom 3D rotating cube on the Work page to cycle through featured projects.
*   **Curated Project Details**: Overlays that slide in on click with custom horizontal thumbnail galleries, active image previews, tags, and direct external project links.
*   **Interactive Cursors**: Context-aware custom cursors that morph into project screenshot previews when hovering over certifications or achievements.
*   **Internationalization (i18n)**: Structured language translation system with fallback support.
*   **Vercel-Ready Deployment**: Includes optimized routing, trailing slashes, clean URLs, and static asset caching headers.

---

## 📁 Featured Projects

1.  **YogaWeb** (2026) — A modern Next.js Yoga Studio Management platform featuring class scheduling, online member registrations, instructor profiles, and tailored packages for yoga & meditation.
2.  **Compact Weddings** (2026) — Premium client-facing portal for luxury photography & cinematography showcasing service offerings, client testimonials, and curated project galleries.
3.  **Agentathon 2026** (2026) — Official website for the 2-day immersive workshop and hackathon presented by Epoch Society at BMSIT&M on intelligent AI agents.
4.  **CognitiveX** (2025) — Official website for the 16-hour Gen AI hackathon presented by Epoch Society at BMSIT in collaboration with IBM SkillBridge, SmartBridge, and IEEE.
5.  **EVFlow Booking App** (2025) — Smart EV charging station booking platform featuring real-time node maps, location-based booking restrictions (2km limit), live telemetry, and employee/admin dashboards.

---

## 🛠️ Tech Stack

*   **Build Tool & Dev Server**: [Vite](https://vitejs.dev/)
*   **Frontend & Logic**: Vanilla HTML5, Vanilla CSS3, JavaScript (ES6)
*   **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform), ScrollTrigger
*   **Scroll Mechanics**: [Lenis](https://lenis.darkroom.engineering/) (Smooth Scrolling)
*   **Hosting Configuration**: Vercel Routing Configuration (`vercel.json`)

---

## 🗂️ Project Structure

```bash
├── contact/
│   └── index.html         # Contact page
├── info/
│   └── index.html         # About (info) page
├── works/
│   └── index.html         # Work showcase page (contains 3D cube)
├── public/
│   ├── assets/
│   │   ├── favicon/       # Custom MR initials favicon
│   │   ├── fonts/         # Breton, Machine (other), and Zirena typography
│   │   └── images/        # Project covers and detail screenshots
│   ├── js/
│   │   ├── i18n.js        # Internationalization & translations
│   │   ├── index.js       # Main homepage scroll animations & details overlay
│   │   └── works.js       # 3D rotating projects cube logic
│   └── styles/
│       ├── index.css      # Core styles, variables, preloader, and overlays
│       └── works.css      # 3D cube and Work page specific layout
├── index.html             # Homepage
├── package.json           # Build scripts and dependencies
├── vercel.json            # Vercel-ready clean URLs and caching headers
└── vite.config.js         # Multi-page Rollup bundle resolution configuration
```

---

## 💻 Local Development Setup

To run this portfolio locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone the repository and navigate to the directory
```bash
git clone <your-repo-link>
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```
Open **`http://localhost:5173/`** in your browser.

### 4. Build for production
To compile and minify the assets into the production bundle (`dist` folder):
```bash
npm run build
```

---

## ☁️ Vercel Deployment

This project is pre-configured for deployment on **Vercel** with optimized routes.

1.  Connect your Git repository (GitHub, GitLab, or Bitbucket) to Vercel.
2.  Import the project.
3.  Vercel will auto-detect the project as a **Vite** application.
4.  Confirm the following settings:
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
5.  Click **Deploy**. Clean URLs and performance headers configured in `vercel.json` will be applied automatically!
