# Aurora Luxe Travel

A production-ready, visually stunning single-page website for a fictional ultra-premium travel brand. Built with Next.js 16+, TypeScript, Tailwind CSS 4, and Framer Motion.

**🌐 Live Demo:** [View on GitHub Pages](https://karthik77-kk.github.io/TEST/)

## 🌟 Features

- **Futuristic Luxury Design**: Dark mode, glassmorphism, neon accents, animated gradients
- **Responsive**: Mobile-first design that looks excellent on iPhone to 4K displays
- **Accessible**: Good contrast, focus states, keyboard navigation, semantic HTML
- **Performant**: Optimized images, smooth animations, lazy loading
- **Interactive**: Micro-interactions, hover effects, scroll animations

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx      # Sticky glass navigation
│   ├── Hero.tsx        # Cinematic hero section
│   ├── DestinationGrid.tsx  # Destination cards with modal
│   ├── ExperienceList.tsx   # Signature experiences
│   ├── Tiers.tsx       # Membership tier cards
│   ├── Testimonials.tsx     # Client testimonials
│   ├── ConciergeForm.tsx    # Contact form with validation
│   └── Footer.tsx      # Footer with links
├── data/
│   ├── destinations.ts # Mock destination data
│   ├── experiences.ts  # Mock experience data
│   ├── tiers.ts        # Membership tier data
│   └── testimonials.ts # Testimonial data
└── utilities/
    └── classnames.ts   # Utility functions
```

## 🎨 Design System

### Colors
- **Background**: Near-black (#050510)
- **Text**: Icy white (#f0f4f8)
- **Accent Gradients**: Cyan (#00d4ff) → Purple (#a855f7) → Magenta (#ff00aa)
- **Gold Highlights**: #ffd700

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter

## 📸 Image Credits

All images are sourced from [Unsplash](https://unsplash.com) and are used for demonstration purposes only. The images are loaded remotely and are not committed to the repository.

## 🛠 Tech Stack

- [Next.js 16+](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [next/image](https://nextjs.org/docs/app/api-reference/components/image) - Optimized Images

## 📧 Contact Form

The contact form sends inquiries to: `iammr2002vip@gmail.com`

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages. The deployment is triggered on every push to the `main` branch.

### GitHub Pages Setup

1. Go to your repository's Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to the `main` branch to trigger the deployment
4. Your site will be available at: `https://<username>.github.io/<repository-name>/`

### Manual Deployment

You can also build and export the static site manually:

```bash
# Build the static site
npm run build

# The static files will be in the ./out directory
```

## 📄 License

This project is for demonstration purposes only. Aurora Luxe Travel is a fictional brand.
