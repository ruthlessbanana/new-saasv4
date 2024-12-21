# SaaS Landing Page Documentation

## Phase 1: Introduction

### Overview
This documentation outlines the implementation of a modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion. The landing page features a clean, professional design with interactive elements and smooth animations.

### Technologies Used
- **Next.js 14**: React framework for production
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **TypeScript**: Type-safe JavaScript
- **Remix Icons**: Icon library

### Features
- Responsive design
- Interactive animations
- Modern UI components
- SEO optimized
- Performance optimized
- Accessibility compliant

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager
- Basic knowledge of React and TypeScript
- Code editor (VS Code recommended)

### Getting Started
1. Clone the repository
```bash
git clone https://github.com/yourusername/saas-landing.git
cd saas-landing
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start development server
```bash
npm run dev
# or
yarn dev
```

4. Open browser
```
Navigate to http://localhost:3000
```

## Project Overview
A modern, responsive SaaS landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Phase 1: Project Setup

### Step 1.1: Create Next.js Project
```bash
npx create-next-app@latest new-saasv3 --typescript --tailwind --eslint
cd new-saasv3
```

### Step 1.2: Install Dependencies
```bash
npm install \
  framer-motion \
  remixicon \
  @types/node \
  @types/react \
  @types/react-dom \
  typescript \
  tailwindcss \
  postcss \
  autoprefixer
```

## Phase 2: Project Overview

### Architecture
The project follows a component-based architecture using Next.js 14's App Router. Each section of the landing page is implemented as a separate component, promoting modularity and reusability.

### Key Components
1. **Header**: Navigation bar with mobile responsiveness
2. **Hero**: Main landing section with call-to-action
3. **Features**: Product features showcase
4. **Analytics**: Interactive analytics dashboard
5. **Integrations**: Available integrations display
6. **Testimonials**: Customer testimonials
7. **Pricing**: Pricing plans comparison
8. **CallToAction**: Final conversion section
9. **Footer**: Site footer with navigation

### Design System
- **Colors**: Primary color scheme with slate accents
- **Typography**: Inter font family
- **Spacing**: Consistent spacing scale
- **Shadows**: Subtle shadows for depth
- **Animations**: Smooth transitions and hover effects

### Performance Optimization
- Image optimization
- Component lazy loading
- CSS optimization
- Bundle size optimization
- Code splitting

### SEO Considerations
- Meta tags
- Open Graph tags
- Twitter cards
- Structured data
- Semantic HTML
- Sitemap
- Robots.txt

### Accessibility
- ARIA labels
- Semantic HTML
- Keyboard navigation
- Color contrast
- Focus management
- Screen reader support

## Phase 2: Project Structure

```
saas-landing/
├── public/
│   ├── logos/           # Integration logos
│   ├── testimonials/    # User testimonials
│   └── companies/       # Company logos
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── metadata.ts
│   │   ├── page.tsx
│   │   └── startup.css
│   └── components/
│       ├── Analytics.tsx
│       ├── CallToAction.tsx
│       ├── Features.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Integrations.tsx
│       ├── Pricing.tsx
│       ├── SectionTitle.tsx
│       └── Testimonials.tsx
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Phase 3: Configuration Files

### Step 3.1: Package Configuration (package.json)
```json
{
  "name": "new-saasv3",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@types/node": "^20.10.5",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "framer-motion": "^10.16.16",
    "next": "^14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "remixicon": "^4.6.0",
    "typescript": "^5.3.3"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^6.15.0",
    "@typescript-eslint/parser": "^6.15.0",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.0.4",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0"
  }
}
```

### Step 3.2: Tailwind Configuration (tailwind.config.ts)
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        secondary: '#0f172a',
        accent: '#06b6d4',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

### Step 3.3: TypeScript Configuration (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Step 3.4: PostCSS Configuration (postcss.config.mjs)
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;
```

### Step 3.5: ESLint Configuration (eslint.config.mjs)
```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
```

## Phase 4: Core Files

### Step 4.1: Layout File (src/app/layout.tsx)
```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './startup.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SaaS Landing - Modern SaaS Landing Page',
  description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
  keywords: 'saas, landing page, next.js, tailwind css, framer motion',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'SaaS Landing - Modern SaaS Landing Page',
    description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
    siteName: 'SaaS Landing'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Landing - Modern SaaS Landing Page',
    description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
    creator: '@yourusername'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### Step 4.2: Page File (src/app/page.tsx)
```typescript
import Analytics from '@/components/Analytics';
import CallToAction from '@/components/CallToAction';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Analytics />
      <Integrations />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
  );
}
```

### Step 4.3: Metadata File (src/app/metadata.ts)
```typescript
import type { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: 'SaaS Landing - Modern SaaS Landing Page',
  description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
  keywords: 'saas, landing page, next.js, tailwind css, framer motion',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'SaaS Landing - Modern SaaS Landing Page',
    description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
    siteName: 'SaaS Landing'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Landing - Modern SaaS Landing Page',
    description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
    creator: '@yourusername'
  }
};

export default defaultMetadata;
```

### Step 4.4: Global Styles (src/app/globals.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #2563eb;
  --primary-light: #3b82f6;
  --primary-dark: #1d4ed8;
  --secondary: #0f172a;
  --accent: #06b6d4;
}

@layer base {
  body {
    @apply text-slate-600;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply text-slate-900 font-bold tracking-tight;
  }
}

@layer components {
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .section {
    @apply py-16 sm:py-24;
  }

  .btn {
    @apply inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50;
  }

  .btn-primary {
    @apply btn bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary;
  }

  .btn-secondary {
    @apply btn bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:ring-primary;
  }

  .card {
    @apply bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 transition duration-200;
  }

  .card-hover {
    @apply hover:shadow-md hover:-translate-y-1;
  }
}

/* Animations */
.fade-up {
  animation: fadeUp 0.5s ease-out forwards;
}

.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Text Gradients */
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary-light;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-slate-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-slate-300 rounded-full hover:bg-slate-400;
}
```

### Step 4.5: Analytics Component (src/components/Analytics.tsx)
```typescript
'use client';

import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const metrics = [
  {
    label: 'Revenue Growth',
    value: '$2.4M',
    trend: '+28%',
    chart: 'revenue',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    icon: 'money-dollar-circle-line'
  },
  {
    label: 'Active Users',
    value: '18.6K',
    trend: '+15%',
    chart: 'users',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    icon: 'user-line'
  },
  {
    label: 'Conversion Rate',
    value: '4.3%',
    trend: '+23%',
    chart: 'conversion',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    icon: 'line-chart-line'
  }
];

const insights = [
  {
    title: 'User Engagement',
    description: 'Average session duration increased by 45%',
    icon: 'timer-line',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10'
  },
  {
    title: 'Revenue Streams',
    description: 'New subscription plans driving 32% growth',
    icon: 'funds-line',
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10'
  },
  {
    title: 'Market Expansion',
    description: 'Successfully launched in 12 new markets',
    icon: 'global-line',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10'
  }
];

export default function Analytics() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-slate-900/[0.03] via-slate-900/[0.01] to-slate-900/[0.03] blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header Section */}
        <div className="max-w-xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6"
          >
            <i className="ri-bar-chart-box-line" />
            <span className="text-sm font-medium">Analytics & Insights</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Make data-driven decisions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Get real-time insights into your business performance. Monitor key metrics, 
            track growth, and identify opportunities for optimization.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition duration-300">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${metric.bgColor} rounded-xl flex items-center justify-center`}>
                    <i className={`ri-${metric.icon} text-xl ${metric.color}`} />
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                    <i className="ri-arrow-up-line" />
                    {metric.trend}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="text-sm text-slate-600 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-4">
                    {metric.value}
                  </div>
                </div>

                {/* Chart Area */}
                <div className="h-24 bg-slate-50 rounded-lg overflow-hidden">
                  {metric.chart === 'revenue' && (
                    <div className="w-full h-full flex items-end justify-between px-2 pb-2">
                      {[40, 25, 35, 30, 45, 35, 55, 50, 45, 60, 55, 65].map((height, i) => (
                        <div
                          key={i}
                          className="w-[6%] bg-emerald-500/20 hover:bg-emerald-500/30 rounded-t transition-all duration-300"
                          style={{ height: `${height}%` }}
                        >
                          <div
                            className="w-full bg-emerald-500"
                            style={{ height: '2px', marginTop: '-1px' }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {metric.chart === 'users' && (
                    <div className="w-full h-full flex items-end justify-between px-2 pb-2">
                      <div className="w-full h-full relative">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path
                            d="M0 100 C20 80, 40 90, 60 70 S80 60, 100 50 L100 100 Z"
                            className="fill-blue-500/20"
                          />
                          <path
                            d="M0 100 C20 80, 40 90, 60 70 S80 60, 100 50"
                            className="stroke-blue-500 fill-none"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                  {metric.chart === 'conversion' && (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 relative">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            className="stroke-current text-purple-500/20"
                            strokeWidth="8"
                            fill="none"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="36"
                            className="stroke-current text-purple-500"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={`${4.3 * 36} ${100 * 36}`}
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-white opacity-50 transform rotate-12 translate-x-16 -translate-y-16 rounded-full group-hover:translate-x-20 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Analytics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          <div className="relative bg-white rounded-2xl p-8 shadow-lg ring-1 ring-slate-200/50">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Performance Overview
                </h3>
                <p className="text-slate-600">
                  Last 30 days metrics and trends
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                  <i className="ri-download-line" />
                </button>
                <button className="px-4 py-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                  <i className="ri-filter-line" />
                </button>
              </div>
            </div>

            {/* Chart Area */}
            <div className="aspect-[21/9] bg-slate-50 rounded-xl mb-8 overflow-hidden">
              <div className="w-full h-full p-6">
                <div className="w-full h-full relative">
                  {/* Value Labels */}
                  <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-sm text-slate-400 py-6">
                    <div className="flex items-center gap-2">
                      <span className="w-12 text-right">100K</span>
                      <div className="w-2 h-px bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 text-right">75K</span>
                      <div className="w-2 h-px bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 text-right">50K</span>
                      <div className="w-2 h-px bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 text-right">25K</span>
                      <div className="w-2 h-px bg-slate-200" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 text-right">0</span>
                      <div className="w-2 h-px bg-slate-200" />
                    </div>
                  </div>

                  {/* Grid Lines */}
                  <div className="absolute inset-0 grid grid-cols-3 gap-x-0 pl-20 pr-8 py-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="border-l border-slate-200 h-full" />
                    ))}
                  </div>
                  <div className="absolute inset-0 grid grid-rows-4 gap-y-0 pl-20 pr-8 py-6">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="border-t border-slate-200 w-full" />
                    ))}
                  </div>

                  {/* Chart Content */}
                  <div className="absolute inset-0 pl-20 pr-8 py-6">
                    {/* Revenue Line */}
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 1000">
                      <defs>
                        <linearGradient id="revenue-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgb(37, 99, 235)" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="rgb(37, 99, 235)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 900 C250 850, 500 750, 750 600 S900 400, 1000 300"
                        className="stroke-blue-600"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 900 C250 850, 500 750, 750 600 S900 400, 1000 300 L1000 1000 L0 1000 Z"
                        fill="url(#revenue-gradient)"
                      />
                    </svg>
                  </div>

                  {/* Time Labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-slate-400 pl-20 pr-8">
                    {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((label) => (
                      <div key={label} className="text-center">
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="absolute top-0 right-8 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="text-xs text-slate-600">Revenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Insights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors">
                    <div className={`w-10 h-10 ${insight.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <i className={`ri-${insight.icon} text-lg ${insight.color}`} />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {insight.title}
                    </h4>
                    <p className="text-sm text-slate-600">
                      {insight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-indigo-100/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-blue-100/20 to-blue-900/20 rounded-full blur-2xl" />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://example.com/analytics"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            <span>View detailed analytics</span>
            <i className="ri-arrow-right-line" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

### Step 5.2: CallToAction Component (src/components/CallToAction.tsx)
```typescript
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const features = [
  { text: 'Free 14-day trial', icon: 'time-line' },
  { text: 'No credit card required', icon: 'bank-card-line' },
  { text: 'Cancel anytime', icon: 'close-circle-line' },
  { text: '24/7 Support', icon: 'customer-service-2-line' }
];

const companies = [
  {
    name: 'TechCorp',
    icon: 'ri-cloud-fill',
    color: 'text-blue-500'
  },
  {
    name: 'StartupX',
    icon: 'ri-database-2-fill',
    color: 'text-indigo-500'
  },
  {
    name: 'InnovateLabs',
    icon: 'ri-terminal-box-fill',
    color: 'text-purple-500'
  },
  {
    name: 'FutureScale',
    icon: 'ri-server-fill',
    color: 'text-sky-500'
  },
  {
    name: 'MetaTech',
    icon: 'ri-code-s-slash-fill',
    color: 'text-cyan-500'
  }
];

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-800 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-800 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-slate-900/[0.3] via-slate-800/[0.1] to-slate-900/[0.3] opacity-30 blur-3xl" />
      </div>

      <div className="container relative">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-light mb-6"
          >
            <i className="ri-rocket-line" />
            <span className="text-sm font-medium">Get Started Today</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Ready to transform your business?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-300 mb-12"
          >
            Join thousands of satisfied customers who have already taken their business to the next level.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://example.com/signup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                <span>Start your free trial</span>
                <i className="ri-arrow-right-line" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://example.com/demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              >
                <i className="ri-play-circle-line text-xl" />
                <span>Watch demo</span>
              </Link>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <i className={`ri-${feature.icon} text-xl text-primary-light`} />
                </div>
                <span className="text-slate-300">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Companies Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-slate-400 mb-8"
          >
            Trusted by leading companies worldwide
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative w-20 h-20 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                  <div className={`w-full h-full rounded-2xl bg-white/5 flex items-center justify-center backdrop-blur-sm ${company.color} hover:scale-110 transition-transform duration-300`}>
                    <i className={`${company.icon} text-4xl`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Step 5.3: Features Component (src/components/Features.tsx)
```typescript
'use client';

import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const features = [
  {
    name: 'Smart Automation',
    description: 'Automate repetitive tasks with AI-powered workflows',
    icon: 'robot-line',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    category: 'AI & Automation',
    details: [
      'Custom workflow builder',
      'AI task suggestions',
      'Automated reporting',
      'Smart notifications'
    ]
  },
  {
    name: 'Real-time Analytics',
    description: 'Get instant insights with powerful analytics tools',
    icon: 'line-chart-line',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    category: 'Data & Insights',
    details: [
      'Live dashboards',
      'Custom reports',
      'Data visualization',
      'Trend analysis'
    ]
  },
  {
    name: 'Team Collaboration',
    description: 'Work together seamlessly with your team',
    icon: 'team-line',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    category: 'Collaboration',
    details: [
      'Real-time editing',
      'Version control',
      'Team chat',
      'File sharing'
    ]
  }
];

const highlights = [
  { value: '10x', label: 'Faster Development', trend: '+120% YoY' },
  { value: '85%', label: 'Time Saved', trend: '+45% YoY' },
  { value: '99%', label: 'Customer Satisfaction', trend: '+12% YoY' }
];

export default function Features() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/10 via-transparent to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container relative">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6">
              <i className="ri-rocket-line" />
              <span className="text-sm font-medium">Powerful Features</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Everything you need to scale your business
            </h2>
            
            <p className="text-lg text-slate-600 mb-8">
              Our platform provides all the tools you need to manage your business efficiently. 
              From automation to analytics, we've got you covered.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm text-slate-600 mb-2">
                    {item.label}
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    <i className="ri-arrow-up-line" />
                    {item.trend}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Preview */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 ring-1 ring-slate-200/50 overflow-hidden p-8">
                <div className="absolute inset-0 bg-grid opacity-[0.02]" />
                
                {/* Preview Content */}
                <div className="relative h-full rounded-xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/50 p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 rounded bg-slate-100" />
                    <div className="h-4 w-1/2 rounded bg-slate-100" />
                    <div className="h-32 rounded bg-slate-100" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-100/20 rounded-lg blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-blue-100/20 to-blue-900/20 rounded-lg blur-2xl" />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition duration-300">
                {/* Icon */}
                <div className={`relative w-16 h-16 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`ri-${feature.icon} text-2xl ${feature.color}`} />
                  <div className={`absolute inset-0 ${feature.bgColor} blur-xl opacity-20`} />
                </div>

                {/* Content */}
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-4">
                    <i className={`ri-${feature.icon} text-xs opacity-50`} />
                    {feature.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.name}
                  </h3>
                  
                  <p className="text-slate-600 mb-6">
                    {feature.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <i className="ri-checkbox-circle-line text-green-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-white opacity-50 transform rotate-12 translate-x-16 -translate-y-16 rounded-full group-hover:translate-x-20 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://example.com/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            <span>Explore all features</span>
            <i className="ri-arrow-right-line" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

### Step 5.4: Footer Component (src/components/Footer.tsx)
```typescript
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const navigation = {
  product: [
    { name: 'Features', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Changelog', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Download', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Customers', href: '#' },
    { name: 'Brand', href: '#' },
    { name: 'Contact', href: '#' }
  ],
  resources: [
    { name: 'Community', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Settings', href: '#' }
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: 'twitter-x-line'
    },
    {
      name: 'GitHub',
      href: '#',
      icon: 'github-line'
    },
    {
      name: 'Discord',
      href: '#',
      icon: 'discord-line'
    }
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-400">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </div>

      <div className="container relative">
        {/* Main Footer */}
        <div className="py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {/* Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-white mb-6">Product</h3>
              <ul className="space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-2 md:col-span-1"
            >
              <h3 className="text-sm font-semibold text-white mb-6">Subscribe to our newsletter</h3>
              <p className="text-sm mb-6">
                Get the latest news and updates delivered straight to your inbox.
              </p>

              <form className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 rounded-lg bg-slate-800 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              {/* Social Links */}
              <div className="flex gap-4">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <i className={`ri-${item.icon} text-xl`} />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <i className="ri-code-s-slash-line text-primary" />
              </div>
              <span className="text-white font-semibold">SaaS Landing</span>
            </div>

            <div className="text-sm">
              &copy; {new Date().getFullYear()} SaaS Landing. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### Step 5.5: Header Component (src/components/Header.tsx)
```typescript
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Integrations', href: '#integrations' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Company', href: '#company' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container relative flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <i className="ri-code-s-slash-line text-xl text-primary" />
          </div>
          <span className={`font-semibold ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            SaaS Landing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://example.com/login"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-300 hover:text-white'
            }`}
          >
            Log in
          </Link>
          <Link
            href="https://example.com/signup"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            <span>Get Started</span>
            <i className="ri-arrow-right-line" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white backdrop-blur-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <i className="ri-menu-line text-2xl" />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Panel */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white md:hidden"
              >
                <div className="flex items-center justify-between h-20 px-6">
                  <span className="font-semibold text-slate-900">Menu</span>
                  <button
                    type="button"
                    className="p-2 rounded-lg text-slate-400 hover:text-slate-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <i className="ri-close-line text-2xl" />
                  </button>
                </div>

                <div className="px-6 py-4">
                  <div className="flex flex-col gap-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4">
                    <Link
                      href="https://example.com/login"
                      className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link
                      href="https://example.com/signup"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white text-base font-medium hover:bg-primary-dark transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Get Started</span>
                      <i className="ri-arrow-right-line" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
```

### Step 5.6: Hero Component (src/components/Hero.tsx)
```typescript
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const features = [
  { text: 'Free 14-day trial', icon: 'time-line' },
  { text: 'No credit card required', icon: 'bank-card-line' },
  { text: 'Cancel anytime', icon: 'close-circle-line' }
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-conic from-slate-900/[0.3] via-slate-800/[0.1] to-slate-900/[0.3] opacity-30 blur-3xl" />
      </div>

      <div className="container relative">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-light mb-6"
          >
            <i className="ri-rocket-line" />
            <span className="text-sm font-medium">Introducing SaaS Landing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-8"
          >
            Build your next{' '}
            <span className="relative">
              <span className="relative z-10">SaaS product</span>
              <div className="absolute -bottom-2 left-0 right-0 h-4 bg-primary/20 -skew-x-6 -z-10" />
            </span>{' '}
            faster
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 mb-12"
          >
            The ultimate landing page template for your SaaS product.
            Built with Next.js 14, Tailwind CSS, and Framer Motion.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://example.com/signup"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
              >
                <span>Start your free trial</span>
                <i className="ri-arrow-right-line" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="https://example.com/demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
              >
                <i className="ri-play-circle-line text-xl" />
                <span>Watch demo</span>
              </Link>
            </motion.div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-slate-600"
              >
                <i className={`ri-${feature.icon} text-primary`} />
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto"
        >
          <div className="relative">
            {/* Browser Window */}
            <div className="aspect-[4/3] max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 ring-1 ring-slate-200/50 overflow-hidden p-8">
              <div className="absolute inset-0 bg-grid opacity-[0.02]" />
              
              {/* Preview Content */}
              <div className="relative h-full rounded-xl bg-white/80 backdrop-blur-sm ring-1 ring-slate-200/50 p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 w-3/4 rounded bg-slate-100" />
                  <div className="h-4 w-1/2 rounded bg-slate-100" />
                  <div className="h-32 rounded bg-slate-100" />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-purple-100/20 rounded-lg blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-blue-100/20 to-blue-900/20 rounded-lg blur-2xl" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-purple-100/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-blue-900/30 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

### Step 5.7: Integrations Component (src/components/Integrations.tsx)
```typescript
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const integrations = [
  {
    name: 'Slack',
    description: 'Connect with your team and get notified about important updates',
    icon: 'slack-line',
    color: 'text-[#E01E5A]',
    bgColor: 'bg-[#E01E5A]/10',
    category: 'Communication',
    features: [
      'Real-time notifications',
      'Custom alerts',
      'Channel integration',
      'Direct messaging'
    ]
  },
  {
    name: 'Stripe',
    description: 'Process payments securely with industry-leading tools',
    icon: 'bank-card-line',
    color: 'text-[#635BFF]',
    bgColor: 'bg-[#635BFF]/10',
    category: 'Payments',
    features: [
      'Secure transactions',
      'Multiple currencies',
      'Payment analytics',
      'Subscription management'
    ]
  }
];

export default function Integrations() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/10 via-transparent to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6"
          >
            <i className="ri-plug-line" />
            <span className="text-sm font-medium">Powerful Integrations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Connect with your favorite tools
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Integrate with popular tools and services to streamline your workflow
            and boost productivity.
          </motion.p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Slack Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition duration-300">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 ${integrations[0].bgColor} rounded-xl flex items-center justify-center`}>
                  <i className={`ri-${integrations[0].icon} text-2xl ${integrations[0].color}`} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-1">
                    <i className={`ri-${integrations[0].icon} text-xs opacity-50`} />
                    {integrations[0].category}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {integrations[0].name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6">
                {integrations[0].description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {integrations[0].features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <i className="ri-checkbox-circle-line text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Large Icon */}
              <div className="flex justify-center py-6">
                <i className={`ri-${integrations[0].icon} text-[150px] ${integrations[0].color} opacity-10 animate-pulse`} />
              </div>

              {/* Learn More Link */}
              <div className="absolute bottom-8 left-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  <span>Learn more</span>
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative h-full bg-primary rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <i className="ri-apps-2-line text-2xl text-white" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-white text-xs font-medium mb-1 backdrop-blur-sm">
                    <i className="ri-apps-2-line text-xs opacity-50" />
                    Integrations
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    View All
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/80 mb-6">
                Explore all available integrations and find the perfect tools for your workflow.
              </p>

              {/* Badge */}
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-white text-xs font-medium mb-8 backdrop-blur-sm">
                <span>50+ Integrations</span>
              </div>

              {/* Large Icon */}
              <div className="flex justify-center py-6">
                <i className="ri-apps-2-line text-[150px] text-white opacity-10 animate-pulse" />
              </div>

              {/* Learn More Link */}
              <div className="absolute bottom-8 left-8">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors"
                >
                  <span>View catalog</span>
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

### Step 5.8: Pricing Component (src/components/Pricing.tsx)
```typescript
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for startups and small businesses',
    price: 29,
    features: [
      'Up to 5 team members',
      '5GB storage',
      'Basic analytics',
      'Email support',
      'API access',
      'Basic integrations'
    ],
    cta: {
      text: 'Start with Starter',
      href: 'https://example.com/signup/starter'
    }
  },
  {
    name: 'Pro',
    description: 'Best for growing companies',
    price: 99,
    features: [
      'Up to 20 team members',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Advanced integrations',
      'Custom workflows',
      'Team training'
    ],
    popular: true,
    cta: {
      text: 'Start with Pro',
      href: 'https://example.com/signup/pro'
    }
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with specific needs',
    price: null,
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'API access',
      'Custom integrations',
      'Custom workflows',
      'Team training',
      'Custom contracts',
      'SLA agreement'
    ],
    cta: {
      text: 'Contact Sales',
      href: 'https://example.com/contact'
    }
  }
];

export default function Pricing() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/10 via-transparent to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6"
          >
            <i className="ri-price-tag-3-line" />
            <span className="text-sm font-medium">Simple Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Choose the perfect plan for your business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Start with our free trial and upgrade anytime. All plans come with a 14-day money-back guarantee.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className={`relative h-full flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition duration-300 ${plan.popular ? 'ring-primary/50' : ''}`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-white text-sm font-medium shadow-sm">
                      <i className="ri-star-line" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    {plan.price !== null ? (
                      <>
                        <span className="text-4xl font-bold text-slate-900">
                          ${plan.price}
                        </span>
                        <span className="text-slate-600">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-slate-900">
                        Custom
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-600">
                        <i className="ri-checkbox-circle-line text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div>
                  <Link
                    href={plan.cta.href}
                    className={`inline-flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-colors ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                  >
                    <span>{plan.cta.text}</span>
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span>Have questions? Check out our FAQ</span>
            <i className="ri-arrow-right-line" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
```

### Step 5.9: SectionTitle Component (src/components/SectionTitle.tsx)
```typescript
'use client';

import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

interface SectionTitleProps {
  badge?: {
    text: string;
    icon: string;
  };
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
  titleSize?: 'sm' | 'md' | 'lg';
}

export default function SectionTitle({
  badge,
  title,
  description,
  alignment = 'center',
  titleSize = 'lg'
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto'
  };

  const titleSizeClasses = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-4xl sm:text-5xl'
  };

  return (
    <div className={`max-w-4xl ${alignmentClasses[alignment]} mb-16`}>
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6"
        >
          <i className={`ri-${badge.icon}`} />
          <span className="text-sm font-medium">{badge.text}</span>
        </motion.div>
      )}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`${titleSizeClasses[titleSize]} font-bold text-slate-900 mb-6`}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-slate-600"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
```

### Step 5.10: Testimonials Component (src/components/Testimonials.tsx)
```typescript
'use client';

import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const testimonials = [
  {
    content:
      "I've tried many SaaS platforms, but this one stands out. The automation features have saved us countless hours, and the analytics provide invaluable insights for our business.",
    author: {
      name: 'Alex Thompson',
      title: 'CEO at MetaTech',
      icon: 'ri-user-smile-line'
    }
  },
  {
    content:
      'The integration capabilities are impressive. We were able to connect all our existing tools seamlessly. The customer support team has been exceptional in helping us maximize the platform.',
    author: {
      name: 'Sarah Chen',
      title: 'CTO at InnovateLabs',
      image: '/testimonials/sarah.jpg'
    }
  },
  {
    content:
      'What impressed me most was how quickly we could deploy. The onboarding process was smooth, and our team was productive from day one. The ROI has been incredible.',
    author: {
      name: 'Michael Carter',
      title: 'Founder at StartupX',
      image: '/testimonials/michael.jpg'
    }
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/10 via-transparent to-transparent opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="container relative">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary mb-6"
          >
            <i className="ri-chat-smile-2-line" />
            <span className="text-sm font-medium">Customer Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
          >
            Trusted by thousands of businesses worldwide
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            See what our customers have to say about their experience with our platform.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm ring-1 ring-slate-200/50 hover:shadow-lg transition duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <i className="ri-double-quotes-l text-primary" />
                </div>

                {/* Content */}
                <div className="relative">
                  <p className="text-slate-600 mb-8">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate-100">
                      {testimonial.author.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={testimonial.author.image}
                          alt={testimonial.author.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                          <i className={`${testimonial.author.icon} text-2xl text-slate-400`} />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonial.author.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Logo */}
                <div className="absolute bottom-8 right-8">
                  {testimonial.author.title.includes('MetaTech') ? (
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                      <i className="ri-code-s-slash-fill text-slate-400" />
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`/companies/${testimonial.author.title.split(' at ')[1].toLowerCase()}.svg`}
                      alt={testimonial.author.title.split(' at ')[1]}
                      className="h-8 w-auto"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Phase 6: Styles

### Step 6.1: Global Styles (src/app/globals.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --primary: #2563eb;
    --primary-light: #3b82f6;
    --primary-dark: #1d4ed8;
    --secondary: #0f172a;
    --accent: #06b6d4;
  }

  body {
    @apply antialiased bg-white text-slate-900;
  }
}

@layer components {
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

@layer utilities {
  .bg-grid {
    background-size: 40px 40px;
    background-image: linear-gradient(to right, rgb(241 245 249 / 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(241 245 249 / 0.1) 1px, transparent 1px);
  }

  .bg-gradient-conic {
    background-image: conic-gradient(var(--tw-gradient-stops));
  }
}
```

### Step 6.2: Startup Styles (src/app/startup.css)
```css
/* Startup Animation */
@keyframes startup {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.startup {
  animation: startup 0.5s ease-out forwards;
}

.startup-delay-1 {
  animation-delay: 0.1s;
}

.startup-delay-2 {
  animation-delay: 0.2s;
}

.startup-delay-3 {
  animation-delay: 0.3s;
}

.startup-delay-4 {
  animation-delay: 0.4s;
}

.startup-delay-5 {
  animation-delay: 0.5s;
}

/* Hover Effects */
.hover-lift {
  transition: transform 0.2s ease-out;
}

.hover-lift:hover {
  transform: translateY(-2px);
}

.hover-scale {
  transition: transform 0.2s ease-out;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Focus Effects */
.focus-ring {
  transition: box-shadow 0.2s ease-out;
}

.focus-ring:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(var(--primary), 0.4);
}

/* Loading States */
.loading {
  position: relative;
}

.loading::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgb(var(--primary) / 0.1);
  border-radius: inherit;
}

.loading::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(var(--primary) / 0.2),
    transparent
  );
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Custom Scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgb(var(--primary) / 0.3) transparent;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgb(var(--primary) / 0.3);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgb(var(--primary) / 0.5);
}

/* Backdrop Blur */
.backdrop-blur {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Glass Effect */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Gradient Text */
.gradient-text {
  background: linear-gradient(to right, rgb(var(--primary)), rgb(var(--primary-light)));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

/* Gradient Border */
.gradient-border {
  position: relative;
  background-clip: padding-box;
  border: 1px solid transparent;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: -1px;
  background: linear-gradient(to right, rgb(var(--primary)), rgb(var(--primary-light)));
  border-radius: inherit;
  z-index: -1;
}

/* Noise Texture */
.noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.05;
}
```

## Phase 7: Configuration Files

### Step 7.1: Tailwind Configuration (tailwind.config.ts)
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          light: 'rgb(var(--primary-light) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)'
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.5s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.5s ease-out forwards'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
```

### Step 7.2: TypeScript Configuration (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Step 7.3: Package Configuration (package.json)
```json
{
  "name": "saas-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "framer-motion": "^10.16.4",
    "next": "14.0.1",
    "react": "^18",
    "react-dom": "^18",
    "remixicon": "^3.5.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

### Step 7.4: ESLint Configuration (.eslintrc.json)
```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": "off"
  }
}
```

### Step 7.5: PostCSS Configuration (postcss.config.js)
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

### Step 7.6: Next.js Configuration (next.config.js)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
```

## Phase 8: Quality Assurance

### Step 8.1: Development Verification
```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build check
npm run build
```

### Step 8.2: Runtime Verification
```bash
# Start development server
npm run dev

# Start production server
npm run build && npm start
```

### Step 8.3: Verification Checklist
- **Code Quality**
- No console errors
- No TypeScript errors
- No ESLint warnings
  - No build errors
  - Code formatting consistent

- **Performance**
  - Lighthouse score > 90
  - First contentful paint < 1.5s
  - Time to interactive < 3.5s
  - Cumulative layout shift < 0.1
  - First input delay < 100ms

- **Functionality**
  - All links working
  - Forms submitting correctly
  - Animations smooth
  - Responsive on all devices
  - Cross-browser compatibility

- **Accessibility**
  - ARIA labels present
  - Semantic HTML
  - Keyboard navigation
  - Color contrast
  - Focus management
  - Screen reader support

- **Assets**
  - Images loading correctly
  - Icons displaying properly
  - Fonts loaded correctly
  - SVGs rendering properly
  - Favicons present

- **SEO**
  - Meta tags present
  - Open Graph tags present
  - Structured data valid
  - Sitemap generated
  - Robots.txt present

### Step 8.4: Browser Testing
- **Desktop Browsers**
  - Chrome (latest)
  - Firefox (latest)
  - Safari (latest)
  - Edge (latest)

- **Mobile Browsers**
  - Chrome for Android
  - Safari for iOS
  - Samsung Internet

### Step 8.5: Device Testing
- **Desktop**
  - Large screens (1920x1080)
  - Standard screens (1366x768)
  - Small screens (1024x768)

- **Mobile**
  - iOS devices
  - Android devices
  - Tablets

### Step 8.6: Performance Testing
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run Lighthouse audit
lighthouse https://example.com --view
```

### Step 8.7: Accessibility Testing
```bash
# Install axe-cli
npm install -g @axe-core/cli

# Run accessibility audit
axe https://example.com
```

## Phase 9: SEO Optimization

### Step 9.1: Meta Tags Configuration
The meta tags are configured in the metadata.ts file to provide essential information for search engines and social media platforms.

```typescript
// src/app/metadata.ts
import type { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: 'SaaS Landing - Modern SaaS Landing Page',
  description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
  keywords: 'saas, landing page, next.js, tailwind css, framer motion',
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'SaaS Landing - Modern SaaS Landing Page',
    description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
    siteName: 'SaaS Landing'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Landing - Modern SaaS Landing Page',
    description: 'A modern SaaS landing page built with Next.js 14, Tailwind CSS, and Framer Motion.',
    creator: '@yourusername'
  }
};

export default defaultMetadata;
```

### Step 9.2: Robots.txt Configuration
Create a robots.txt file in the public directory to guide search engine crawlers.

```txt
# /public/robots.txt

# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://example.com/sitemap.xml
```

### Step 9.3: Sitemap Configuration
Create a sitemap.xml file in the public directory to help search engines discover your content.

```xml
<!-- /public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com</loc>
    <lastmod>2023-11-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/features</loc>
    <lastmod>2023-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/pricing</loc>
    <lastmod>2023-11-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### Step 9.4: SEO Best Practices Implementation

#### Semantic HTML Structure
  - Use proper heading hierarchy (h1-h6)
- Implement semantic elements (nav, main, article, section)
  - Add descriptive alt text to images
- Use meaningful link text

#### Performance Optimization
- Optimize and compress images
- Minify CSS and JavaScript
- Enable GZIP compression
- Implement browser caching
- Use lazy loading for images and components

#### Mobile Optimization
- Implement responsive design
- Ensure touch-friendly elements
- Use readable font sizes
- Configure proper viewport settings
- Follow mobile-first approach

#### Content Optimization
- Create unique title tags
- Write descriptive meta descriptions
- Use relevant keywords naturally
- Produce high-quality content
- Implement proper internal linking

#### Technical SEO
- Enable HTTPS
- Maintain XML sitemap
- Configure robots.txt
- Use canonical URLs
- Create custom 404 page
- Implement proper error handling

### Step 9.5: SEO Monitoring Setup

Install required dependencies:
```bash
npm install --save-dev web-vitals
```

Implement performance monitoring:
```typescript
// src/app/layout.tsx
export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    console.log(metric);
    // Send to analytics
  }
}
```

Monitor key metrics:
- Core Web Vitals
- Page load time
- Time to first byte
- First contentful paint
- Largest contentful paint
- Cumulative layout shift

## Phase 10: Success Criteria

### Performance Metrics
- **Lighthouse Scores**
  - Performance: > 90
  - Accessibility: > 95
  - Best Practices: > 95
  - SEO: > 95

- **Core Web Vitals**
  - First Contentful Paint (FCP): < 1.5s
  - Largest Contentful Paint (LCP): < 2.5s
  - First Input Delay (FID): < 100ms
  - Cumulative Layout Shift (CLS): < 0.1
  - Time to Interactive (TTI): < 3.5s

### Code Quality
- **Static Analysis**
  - No TypeScript errors
  - No ESLint warnings
  - No build errors
  - Consistent code formatting
- No console errors

- **Best Practices**
  - Component modularity
  - Code reusability
  - Clean architecture
  - Proper documentation
  - Type safety

### User Experience
- **Responsiveness**
  - Mobile-friendly design
  - Fluid animations
  - Smooth transitions
  - Touch-friendly interactions
  - Proper spacing

- **Accessibility**
  - WCAG 2.1 compliance
  - Screen reader support
  - Keyboard navigation
  - Color contrast
  - Focus management

### Browser Support
- **Desktop Browsers**
  - Chrome (latest 2 versions)
  - Firefox (latest 2 versions)
  - Safari (latest 2 versions)
  - Edge (latest 2 versions)

- **Mobile Browsers**
  - iOS Safari
  - Chrome for Android
  - Samsung Internet

### SEO Requirements
- **Technical SEO**
  - Valid meta tags
  - Proper heading structure
  - Semantic HTML
  - Optimized images
  - Fast loading speed

- **Content SEO**
  - Relevant keywords
  - Quality content
  - Internal linking
  - Proper URL structure
  - Social media tags

### Testing Coverage
- **Unit Tests**
  - Component rendering
  - State management
  - Event handling
  - Error scenarios
  - Edge cases

- **Integration Tests**
  - Component interactions
  - Form submissions
  - API integrations
  - Navigation flows
  - Error handling

### Documentation
- **Technical Documentation**
  - Setup instructions
  - Component API
  - Code examples
  - Best practices
  - Troubleshooting guide

- **User Documentation**
  - Usage guidelines
  - Feature descriptions
  - FAQs
  - Support information
  - Release notes

## Error Recovery
- Document any errors encountered
- Fix errors before proceeding
- Verify fixes don't break existing functionality
- Re-run verification steps after fixes
- Test in multiple browsers
- Verify mobile responsiveness
- Check all animations and transitions 

## Phase 11: Error Recovery

### Common Issues and Solutions

#### Build Errors
- **Issue**: TypeScript compilation errors
  ```bash
  error TS2307: Cannot find module '@/components/...'
  ```
  **Solution**: Check import paths and ensure tsconfig.json paths are correctly configured
  ```json
  {
    "compilerOptions": {
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }
  ```

- **Issue**: Module not found errors
  ```bash
  Error: Cannot find module 'framer-motion'
  ```
  **Solution**: Install missing dependencies
  ```bash
  npm install framer-motion
  ```

#### Runtime Errors
- **Issue**: Hydration errors
  ```
  Warning: Text content did not match. Server: "Hello" Client: "World"
  ```
  **Solution**: Ensure consistent rendering between server and client
  ```typescript
  'use client';
  // Use useEffect for client-side only code
  useEffect(() => {
    // Client-side code here
  }, []);
  ```

- **Issue**: Memory leaks in animations
  ```
  Warning: Can't perform a React state update on an unmounted component
  ```
  **Solution**: Cleanup animations in useEffect
  ```typescript
  useEffect(() => {
    const animation = // ... animation setup
    return () => animation.stop();
  }, []);
  ```

#### Style Issues
- **Issue**: Tailwind classes not working
  **Solution**: Check Tailwind configuration
  ```typescript
  // tailwind.config.ts
  module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    // ...
  }
  ```

- **Issue**: CSS animations not smooth
  **Solution**: Use hardware acceleration
  ```css
  .animated-element {
    transform: translateZ(0);
    will-change: transform;
  }
  ```

#### Performance Issues
- **Issue**: Slow initial page load
  **Solution**: Implement code splitting and lazy loading
  ```typescript
  const MyComponent = dynamic(() => import('@/components/MyComponent'), {
    loading: () => <LoadingSpinner />
  });
  ```

- **Issue**: Large bundle size
  **Solution**: Analyze and optimize bundles
  ```bash
  # Install analyzer
  npm install --save-dev @next/bundle-analyzer

  # Configure in next.config.js
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
  });
  ```

### Recovery Steps

#### Development Environment
1. Clear development cache
```bash
# Clear Next.js cache
rm -rf .next

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules
npm install
```

2. Reset local environment
```bash
# Reset git changes
git reset --hard HEAD

# Pull latest changes
git pull origin main

# Install dependencies
npm install
```

#### Production Environment
1. Rollback deployment
```bash
# Revert to last working commit
git revert HEAD

# Deploy previous version
npm run build && npm run start
```

2. Emergency fixes
```bash
# Create hotfix branch
git checkout -b hotfix/issue-description

# Apply fix and deploy
git commit -am "fix: description"
git push origin hotfix/issue-description
```

### Prevention Strategies

#### Code Quality
- Implement pre-commit hooks
```bash
# Install husky
npm install --save-dev husky

# Configure hooks
npx husky install
npx husky add .husky/pre-commit "npm run lint"
```

#### Testing
- Add automated tests
```typescript
// Example test
import { render, screen } from '@testing-library/react';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

#### Monitoring
- Implement error tracking
```typescript
// Configure error boundary
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log to error tracking service
    logError(error, errorInfo);
  }

  render() {
    return this.props.children;
  }
}
```

// ... rest of the code ...

## Phase 12: Deployment

### Step 12.1: Preparation

#### Environment Variables
Create a `.env` file for environment variables:
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://example.com
```

#### Build Configuration
Update `next.config.js` for production:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'],
    formats: ['image/avif', 'image/webp']
  }
};

module.exports = nextConfig;
```

#### Production Build
Build the application for production:
```bash
# Install dependencies
npm ci

# Build application
npm run build

# Test production build
npm run start
```

### Step 12.2: Deployment Platforms

#### Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### Netlify Deployment
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Deploy to Netlify:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to production
netlify deploy --prod
```

#### Docker Deployment
Create `Dockerfile`:
```dockerfile
# Base image
FROM node:18-alpine AS base
WORKDIR /app

# Dependencies
FROM base AS deps
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

Build and run Docker container:
```bash
# Build image
docker build -t saas-landing .

# Run container
docker run -p 3000:3000 saas-landing
```

### Step 12.3: CI/CD Setup

#### GitHub Actions
Create `.github/workflows/ci.yml`:
```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run linting
        run: npm run lint
        
      - name: Run type checking
        run: npm run typecheck
        
      - name: Run tests
        run: npm run test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        if: github.ref == 'refs/heads/main'
        run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

### Step 12.4: Monitoring Setup

#### Error Tracking
Install Sentry:
```bash
npm install @sentry/nextjs
```

Configure Sentry:
```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV
});
```

#### Performance Monitoring
Install analytics:
```bash
npm install web-vitals
```

Configure monitoring:
```typescript
// src/app/layout.tsx
export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    // Send to analytics
    console.log(metric);
  }
}
```

### Step 12.5: Post-Deployment Checklist

#### Security
- [ ] Enable HTTPS
- [ ] Configure CSP headers
- [ ] Set up CORS policies
- [ ] Enable rate limiting
- [ ] Implement DDoS protection

#### Performance
- [ ] Enable CDN caching
- [ ] Configure browser caching
- [ ] Enable compression
- [ ] Optimize assets
- [ ] Monitor Core Web Vitals

#### SEO
- [ ] Verify meta tags
- [ ] Submit sitemap
- [ ] Configure robots.txt
- [ ] Set up redirects
- [ ] Register with search consoles

#### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking
- [ ] Enable performance monitoring
- [ ] Set up alerts
- [ ] Monitor server resources

// ... rest of the code ...

## Phase 13: Maintenance

### Step 13.1: Regular Updates

#### Dependencies
Update dependencies regularly:
```bash
# Check outdated packages
npm outdated

# Update packages
npm update

# Update major versions
npx npm-check-updates -u
npm install
```

#### Security Updates
Run security audits:
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Fix breaking changes
npm audit fix --force
```

### Step 13.2: Performance Monitoring

#### Core Web Vitals
Monitor performance metrics:
```typescript
// src/utils/analytics.ts
export function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  const url = 'https://example.com/analytics';

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
}
```

#### Error Tracking
Monitor and log errors:
```typescript
// src/utils/error-tracking.ts
export function logError(error: Error, context?: any) {
  console.error('Error:', error);
  
  // Send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Example: Sentry.captureException(error);
  }
}
```

### Step 13.3: Content Updates

#### Component Updates
Update components with new features:
```typescript
// Example component update
interface FeatureProps {
  title: string;
  description: string;
  icon: string;
  newFeature?: boolean; // New prop
}

export function Feature({ title, description, icon, newFeature }: FeatureProps) {
  return (
    <div className="feature">
      {newFeature && (
        <span className="new-badge">New</span>
      )}
      {/* Existing component content */}
    </div>
  );
}
```

#### Content Management
Update content through CMS or directly:
```typescript
// src/data/content.ts
export const features = [
  {
    title: 'New Feature',
    description: 'Latest addition to our platform',
    icon: 'star',
    newFeature: true
  },
  // Existing features...
];
```

### Step 13.4: Testing

#### Automated Tests
Run tests regularly:
```bash
# Run all tests
npm test

# Run specific tests
npm test -- -t "feature tests"

# Update snapshots
npm test -- -u
```

#### Manual Testing
Checklist for manual testing:
- [ ] Visual regression testing
- [ ] Cross-browser testing
- [ ] Mobile responsiveness
- [ ] Feature functionality
- [ ] Error handling

### Step 13.5: Backup and Recovery

#### Database Backups
```bash
# Example backup script
#!/bin/bash
DATE=$(date +%Y%m%d)
BACKUP_DIR="/backups"

# Create backup
pg_dump -U user -d database > "$BACKUP_DIR/backup_$DATE.sql"

# Compress backup
gzip "$BACKUP_DIR/backup_$DATE.sql"

# Remove old backups
find "$BACKUP_DIR" -type f -mtime +30 -delete
```

#### Code Backups
```bash
# Create git tag for releases
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# Create backup branch
git checkout -b backup/v1.0.0
git push origin backup/v1.0.0
```

### Step 13.6: Documentation

#### API Documentation
Keep API documentation updated:
```typescript
/**
 * @api {post} /api/feature Create new feature
 * @apiName CreateFeature
 * @apiGroup Features
 * @apiVersion 1.0.0
 *
 * @apiParam {String} title Feature title
 * @apiParam {String} description Feature description
 *
 * @apiSuccess {Object} feature Created feature
 * @apiError {Object} error Error object
 */
```

#### Change Log
Maintain CHANGELOG.md:
```markdown
# Changelog

## [1.1.0] - 2023-11-15
### Added
- New feature component
- Performance monitoring

### Changed
- Updated dependencies
- Improved error handling

### Fixed
- Mobile responsiveness issues
- Security vulnerabilities
```

### Step 13.7: Performance Optimization

#### Code Optimization
```typescript
// Optimize imports
import dynamic from 'next/dynamic';

// Lazy load components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

// Optimize images
import Image from 'next/image';

function OptimizedImage() {
  return (
    <Image
      src="/image.jpg"
      alt="Description"
      width={800}
      height={600}
      placeholder="blur"
      priority={true}
    />
  );
}
```

#### Cache Optimization
```typescript
// Configure cache headers
export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://example.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'de-DE': '/de-DE'
      }
    },
    openGraph: {
      images: '/og-image.png'
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true
      }
    }
  };
}
```

// ... rest of the code ...

## Phase 14: Conclusion

### Project Summary
This documentation has covered the implementation of a modern SaaS landing page using Next.js 14, Tailwind CSS, and Framer Motion. The project demonstrates best practices in:

- Modern web development
- Component architecture
- Performance optimization
- SEO implementation
- Accessibility compliance
- Testing strategies
- Deployment workflows
- Maintenance procedures

### Key Achievements
- Responsive design implementation
- Performance optimization (90+ Lighthouse score)
- SEO optimization
- Accessibility compliance (WCAG 2.1)
- Modern animation integration
- Comprehensive documentation
- Automated testing setup
- CI/CD pipeline implementation

### Future Improvements
- **Features**
  - Multi-language support
  - Dark mode implementation
  - Advanced analytics integration
  - A/B testing capability
  - Enhanced personalization

- **Technical**
  - Micro-frontend architecture
  - Server-side analytics
  - Enhanced caching strategies
  - PWA implementation
  - WebAssembly optimization

- **User Experience**
  - Enhanced animations
  - Improved mobile experience
  - Better accessibility features
  - Faster page transitions
  - Offline support

### Resources
- **Documentation**
  - [Next.js Documentation](https://nextjs.org/docs)
  - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
  - [Framer Motion Documentation](https://www.framer.com/motion/)
  - [TypeScript Documentation](https://www.typescriptlang.org/docs/)

- **Tools**
  - [VS Code](https://code.visualstudio.com/)
  - [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
  - [Lighthouse](https://developers.google.com/web/tools/lighthouse)
  - [WebPageTest](https://www.webpagetest.org/)

- **Community**
  - [Next.js GitHub](https://github.com/vercel/next.js)
  - [Tailwind CSS GitHub](https://github.com/tailwindlabs/tailwindcss)
  - [Framer Motion GitHub](https://github.com/framer/motion)
  - [React GitHub](https://github.com/facebook/react)

### Contact Information
For support or inquiries:
- **Email**: support@example.com
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)
- **Twitter**: [@yourusername](https://twitter.com/yourusername)
- **Website**: [example.com](https://example.com)

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2023 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

// End of documentation