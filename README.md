# AutOps[IA] - Operational AI Automation Landing Page

![Project Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen)
![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black)
![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind%20v4-blue)

**AutOps[IA]** is a high-performance, premium landing page built with the latest technologies in the React ecosystem. Designed as a portfolio piece, it showcases advanced UI/UX patterns, industrial-grade security, and fullstack capabilities using Next.js Server Actions.

## 🚀 Built with the Latest Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Runtime**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Leveraging the new `@theme` engine.
- **Components**: [shadcn/ui](https://ui.shadcn.com/) - Custom-tailored for a cyberpunk/tech aesthetic.
- **Optimization**: Typescript, ESLint, and Next.js Metadata API.
- **Animations**: native CSS Keyframes & Tailwind transitions.

## ✨ Key Features

- 💎 **Premium Aesthetic**: Cyberpunk-inspired design with grid backgrounds, glass-morphism, and neon glow effects.
- ⚡ **Fullstack Contact Form**: Implemented using **Next.js Server Actions** for seamless lead generation without manual API routing.
- 📱 **Fully Responsive**: Modular Bento Grid for services and fluid layouts for all devices.
- 🔍 **SEO & Performance**:
  - 100/100 Lighthouse-ready (RSC architecture).
  - Dynamic `sitemap.xml` and `robots.txt` generation.
  - JSON-LD and Open Graph metadata configured.
- 🔒 **Security First**:
  - CSP (Content Security Policy) implemented.
  - Protection against XSS and Clickjacking via custom headers.
- ♿ **Accessibility (a11y)**:
  - Skip Navigation Link for keyboard users.
  - High contrast ratios (WCAG AAA compliant).
  - Semantic HTML5 structure.

## 🛠️ Folder Structure

```
/src
  /app           # Next.js App Router (Pages, Layouts, Actions, SEO)
  /components    # Modular Architecture
    /layout      # Global Header, Footer, Navigation
    /sections    # Landing Page Blocks (Hero, Services, Contact, etc.)
    /ui          # Base Atomic Components (shadcn)
  /lib           # Utility functions (cn, etc.)
  /styles        # Global tokens and CSS variables
```

## 🏎️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

_This project was developed by **Antigravity AI** as a high-end portfolio demonstration for professional developers._
