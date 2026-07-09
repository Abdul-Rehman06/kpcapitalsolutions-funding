# KP Capital Funding. - Commercial Funding Advisory

This project is a pixel-perfect, fully responsive recreation of "KP Capital Funding." website based on provided screenshots. It was built using modern web development practices and focuses on high performance, accessibility, and maintainability.

## Technology Stack
- **HTML5**: Semantic, clean structure.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development. Custom configuration for specific colors and typography.
- **Vanilla JavaScript**: Lightweight ES6+ JS for mobile navigation and UI interactivity.

## Project Structure
```
/
├── index.html          # Home Page
├── about.html          # About Page (The Team)
├── services.html       # Services Page (Capital Stack)
├── contact.html        # Contact / Application Form Page
├── book-call.html      # Book Strategy Call Page
├── assets/             # Directory for static assets
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── logos/
├── css/
│   ├── input.css       # Tailwind entry point with custom @layer components
│   └── style.css       # Compiled production-ready CSS
├── js/
│   └── main.js         # Mobile menu and UI logic
├── package.json        # NPM configuration and build scripts
├── tailwind.config.js  # Custom theme and design system configuration
└── README.md
```

## Features
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop screens.
- **Pixel-Perfect UI**: High fidelity recreation matching colors, typography, spacing, and layout.
- **Design System**: Reusable Tailwind components (e.g., `.btn-primary`, `.btn-outline`).
- **Performance**: Zero heavy libraries, pure CSS/JS approach for lightning-fast loading times.
- **Interactive**: Hover states, transitions, and mobile navigation included.

## Development

To make changes to the styling, you'll need Node.js installed.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Watch for CSS changes during development:
   ```bash
   npm run watch
   ```

3. Build production CSS:
   ```bash
   npm run build
   ```

## Design Assets & Placeholders
All images used are high-quality, royalty-free placeholders from Unsplash matching the aesthetic and tone of the original design. SVG icons are embedded directly into the HTML to reduce HTTP requests and allow for easy color styling via CSS.
