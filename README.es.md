# AutOps[IA] - Landing Page de Automatización Operativa con IA

![Estado del Proyecto](https://img.shields.io/badge/Estado-Listo--para--Producción-brightgreen)
![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-black)
![Tailwind CSS](https://img.shields.io/badge/Estilo-Tailwind%20v4-blue)

**AutOps[IA]** es una landing page de alto rendimiento y estética premium construida con las tecnologías más recientes del ecosistema React. Diseñada como pieza de portafolio, demuestra patrones avanzados de UI/UX, seguridad de grado industrial y capacidades fullstack mediante Server Actions de Next.js.

## 🚀 Stack Tecnológico de Vanguardia

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Runtime**: [React 19](https://react.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/) - Utilizando el nuevo motor `@theme`.
- **Componentes**: [shadcn/ui](https://ui.shadcn.com/) - Personalizados para una estética cyberpunk/tecnológica.
- **Optimización**: Typescript, ESLint y Metadata API de Next.js.
- **Animaciones**: Keyframes de CSS nativo y transiciones de Tailwind.

## ✨ Características Principales

- 💎 **Estética Premium**: Diseño inspirado en cyberpunk con fondos de malla, glass-morphism y efectos de brillo neón.
- ⚡ **Formulario Fullstack**: Implementado con **Next.js Server Actions** para una captación de leads fluida sin necesidad de rutas API manuales.
- 📱 **Totalmente Responsive**: Grid tipo Bento modular para servicios y layouts fluidos para todos los dispositivos.
- 🔍 **SEO y Rendimiento**:
  - Arquitectura orientada a Server Components (RSC) para carga instantánea.
  - Generación dinámica de `sitemap.xml` y `robots.txt`.
  - Metadata configurada para Open Graph y JSON-LD.
- 🔒 **Seguridad**:
  - CSP (Content Security Policy) implementada.
  - Protección contra XSS y Clickjacking mediante headers personalizados en `next.config.ts`.
- ♿ **Accesibilidad (a11y)**:
  - Enlace "Saltar al contenido" para usuarios de teclado.
  - Ratios de contraste altos (cumple WCAG AAA).
  - Estructura HTML5 semántica.

## 🛠️ Estructura de Carpetas

```
/src
  /app           # Next.js App Router (Páginas, Layouts, Actions, SEO)
  /components    # Arquitectura Modular
    /layout      # Header, Footer, Navegación Global
    /sections    # Bloques de la página (Hero, Servicios, Contacto, etc.)
    /ui          # Componentes atómicos base (shadcn)
  /lib           # Funciones de utilidad (cn, etc.)
  /styles        # Tokens globales y variables CSS
```

## 🏎️ Inicio Rápido

Primero, instala las dependencias:

```bash
npm install
```

Luego, inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

_Este proyecto fue desarrollado por **Antigravity AI** como una demostración de portafolio de alto nivel para desarrolladores profesionales._
