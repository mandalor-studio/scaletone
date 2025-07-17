# Scaletone

A beautiful, accessible theme generator for **shadcn/ui** and **Radix UI** components using **Radix Colors**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mandalor-studio/scaletone)

## ✨ Features

- 🎨 **Real-time theme preview** with interactive component showcase
- 🌈 **Radix Colors integration** for consistent, accessible color palettes
- 🎯 **Three theme types**: Neutral, Monotone, and Neutral + Brand combinations
- 📱 **Fully responsive** design with mobile-optimized controls
- 🌙 **Dark mode support** with automatic theme adaptation
- 📋 **One-click CSS export** for production-ready themes
- ♿ **Accessibility-first** color combinations and contrast ratios
- 🚀 **SEO optimized** with OpenGraph images and meta tags

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Bun (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mandalor-studio/scaletone.git
cd scaletone

# Install dependencies
bun install

# Start development server
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000) to start generating themes!

## 🎯 How It Works

### Theme Types

**1. Neutral Themes**
- Pure grayscale palettes (gray, slate, sage, olive, sand, mauve)
- No accent colors, perfect for minimal designs

**2. Monotone Themes** 
- Single brand color used throughout the interface
- Cohesive, brand-focused color schemes

**3. Neutral + Brand Themes**
- Gray base palette combined with brand accent colors
- Natural color pairings following Radix Colors principles

### Color Mapping

Scaletone automatically maps Radix color scales to shadcn/ui CSS variables:

```css
/* Example output */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  /* ... and more */
}
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Colors**: [Radix Colors](https://www.radix-ui.com/colors)
- **Animations**: [Motion](https://motion.dev/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── (landing)/               # Landing page routes
│   ├── generator/               # Theme generator page
│   ├── api/                     # API routes (Mailchimp)
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── layout/                  # Layout components
│   └── providers/               # Context providers
├── lib/                         # Utility libraries
│   ├── colors/                  # Theme generation logic
│   └── utils.ts                 # Shared utilities
├── public/                      # Static assets
│   └── themes/                  # Pre-generated CSS themes
└── generate-themes.ts           # Theme generation script
```

## 🎨 Customization

### Adding New Color Palettes

1. Extend the `allRadixPalettes` object in `lib/colors/themes.ts`
2. Update the `naturalPairings` for compatible combinations
3. Add destructive color mappings in `destructivePairings`

### Custom Theme Generation

```typescript
import { generateThemeCSS } from '@/lib/colors/theme-generator'

const customTheme = generateThemeCSS({
  base: 'slate',
  brand: 'blue', 
  primaryIntensity: 'vibrant'
})
```

## 🔧 Scripts

```bash
# Development
bun run dev          # Start dev server with Turbopack
bun run build        # Build for production
bun run start        # Start production server

# Code Quality
bun run lint         # Run ESLint
bun run typecheck    # Type checking

# Theme Generation
bun run themes       # Generate static CSS themes
```

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mandalor-studio/scaletone)

1. Fork this repository
2. Import to Vercel
3. Deploy automatically

### Manual Deployment

```bash
# Build the application
bun run build

# Deploy the .next folder to your preferred platform
```

### Environment Variables

For the contact form functionality:

```env
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_LIST_ID=your_mailchimp_list_id  
MAILCHIMP_SERVER_PREFIX=us1
```

## 🤝 Contributing

We welcome contributions! However, this is primarily a showcase project for Mandalor Studio.

### Development Guidelines

1. Follow the existing code style and conventions
2. Use TypeScript for all new files
3. Test your changes thoroughly
4. Update documentation as needed

### Reporting Issues

If you find a bug or have a feature request, please open an issue with:
- Clear description of the problem/feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Screenshots if applicable

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🏢 About Mandalor Studio

Scaletone is built by [Mandalor Studio](https://mandalor.studio), a digital studio creating custom tools and design systems for modern web applications.

### Our Services

- 🎨 **Custom Design Systems**
- 🛠️ **Mini-App Development** 
- 🚀 **Web Application Development**
- 📱 **Mobile-First Solutions**

[Visit our website](https://mandalor.studio) to learn more about our services.

## 🔗 Links

- **Live Demo**: [scaletone.mandalor.studio](https://scaletone.mandalor.studio)
- **Documentation**: [Radix Colors Docs](https://www.radix-ui.com/colors)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com)
- **Contact**: [mandalor.studio](https://mandalor.studio)

---

Made with ❤️ by [Mandalor Studio](https://mandalor.studio)