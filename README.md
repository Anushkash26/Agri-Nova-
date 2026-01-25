# Agri-Nova: Digital Agricultural Marketplace Platform

A modern, multilingual agricultural marketplace platform built with Next.js that connects farmers, buyers, and equipment owners in a seamless digital ecosystem.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features in Detail](#features-in-detail)
- [Languages Supported](#languages-supported)
- [Accessibility](#accessibility)
- [Contributing](#contributing)
- [License](#license)

## Overview

Agri-Nova is a comprehensive digital marketplace platform designed to revolutionize agricultural commerce in India and South Asia. It bridges the gap between farmers, buyers, and agricultural equipment owners by providing a unified platform for buying, selling, and renting farming resources.

The platform emphasizes accessibility through multilingual support (6 languages), voice input/output capabilities, and responsive design that works seamlessly on mobile and desktop devices.

## Key Features

### 🛒 Digital Marketplace
- Browse and purchase agricultural products directly from farmers
- Real-time product listings with pricing and availability
- Load more functionality for infinite scrolling
- Product search and filtering capabilities
- Seller ratings and reviews

### 🚜 Equipment Rental System
- Rent agricultural equipment (tractors, harvesters, sprayers, etc.)
- Equipment availability tracking
- Owner contact information
- Booking and reservation system
- Equipment owner dashboards for managing listings

### 👥 Farmer Community
- Discussion forums for knowledge sharing
- Upcoming events and workshops
- Local farmer groups and networking
- Member joining/leaving capabilities
- Community-based peer support

### 📚 Learning Resources
- Tutorial videos and educational content
- Government schemes and subsidy information
- Expert Q&A section
- Agriculture best practices
- Text-to-speech audio accessibility

### 🎯 User Dashboard
- Sell products and manage listings
- Rent out equipment
- Track transactions
- Manage account settings
- View analytics and insights

### 🌐 Multilingual Support
- Complete language support for 6 languages:
  - English (en)
  - Hindi (hi)
  - Marathi (mr)
  - Gujarati (gu)
  - Punjabi (pa)
  - Bengali (bn)
- Dynamic language switching across entire platform
- Persistent language preference storage

### 🎙️ Voice Features
- Voice input recognition for hands-free interaction
- Text-to-speech audio output
- Automatic voice feedback on recordings
- Multilingual voice support

### 🌓 Theme Support
- Light and dark mode toggle
- System theme detection
- Persistent theme preferences

### 📱 Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Touch-friendly interfaces

## Tech Stack

### Frontend
- **Framework**: Next.js 15.5.9 with React 19
- **Styling**: Tailwind CSS 3.4.17
- **Component Library**: shadcn/ui with Radix UI
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form with Zod validation
- **State Management**: React hooks with custom context
- **Theme**: Next-themes

### Features & Libraries
- **Accessibility**: ARIA attributes, semantic HTML
- **UI Components**: Radix UI (Dialog, Dropdown, Tabs, etc.)
- **Forms**: Input validation, file handling
- **Date Handling**: date-fns
- **Analytics**: Vercel Analytics

### Development
- **Language**: TypeScript
- **Build Tool**: Next.js
- **CSS Processing**: PostCSS, Autoprefixer
- **Linting**: ESLint

## Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/agri-nova.git
cd agri-nova
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000` to see the application.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
agri-nova/
├── app/
│   ├── layout.tsx              # Root layout with theme and language providers
│   ├── page.tsx                # Home page with hero section
│   ├── globals.css             # Global styles and design tokens
│   ├── auth/
│   │   ├── page.tsx            # Login/authentication page
│   │   └── forgot-password/    # Password recovery
│   ├── marketplace/
│   │   ├── page.tsx            # Digital marketplace
│   │   └── loading.tsx         # Marketplace loading state
│   ├── equipment/
│   │   ├── page.tsx            # Equipment rental page
│   │   └── loading.tsx         # Equipment loading state
│   ├── community/
│   │   └── page.tsx            # Community forums and groups
│   ├── resources/
│   │   └── page.tsx            # Learning resources and tutorials
│   └── dashboard/
│       └── page.tsx            # User dashboard
├── components/
│   ├── navbar.tsx              # Navigation bar with language switcher
│   ├── theme-toggle.tsx        # Dark/light mode toggle
│   ├── language-provider.tsx   # Language context and translations
│   ├── voice-support.tsx       # Voice input/output component
│   ├── dashboard-*.tsx         # Dashboard sub-components
│   ├── ui/                     # shadcn/ui components
│   └── theme-provider.tsx      # Theme provider setup
├── hooks/
│   └── use-mobile.ts           # Mobile detection hook
├── lib/
│   └── utils.ts                # Utility functions
├── public/
│   ├── hero-farming.jpg        # Hero section image
│   ├── product-*.jpg           # Product images
│   ├── equipment-*.jpg         # Equipment images
│   └── agri-nova-logo.jpg      # Brand logo
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.mjs             # Next.js configuration
```

## Features in Detail

### Marketplace (`/marketplace`)
Browse agricultural products, view seller information, ratings, and pricing. Features infinite scroll with "Load More" functionality for exploring large product catalogs. Each product includes images, detailed descriptions, and direct seller contact information.

### Equipment Rental (`/equipment`)
Rent agricultural machinery including tractors, harvesters, sprayers, and seeders. View availability, pricing per day, and equipment owner details. Easy booking interface with confirmation system.

### Community (`/community`)
- **Discussion Forum**: Ask questions and share farming knowledge
- **Upcoming Events**: Agricultural workshops and training sessions
- **Local Groups**: Join regional farmer communities
- Interactive group joining/leaving system

### Resources (`/resources`)
- **Tutorials & Videos**: Learn farming best practices
- **Government Schemes**: Explore subsidies and financial assistance
- **Expert Advice**: Get answers from agricultural experts
- Text-to-speech for accessibility

### Dashboard (`/dashboard`)
Comprehensive user dashboard with:
- Product management for sellers
- Equipment rental listings
- Transaction history
- Settings and profile management
- Overview analytics

### Authentication (`/auth`)
Secure login/signup system with password recovery options for user account management.

## Languages Supported

Agri-Nova supports complete localization for 6 regional languages used across India:

| Language | Code | Native |
|----------|------|--------|
| English | en | English |
| Hindi | hi | हिंदी |
| Marathi | mr | मराठी |
| Gujarati | gu | ગુજરાતી |
| Punjabi | pa | ਪੰਜਾਬੀ |
| Bengali | bn | বাংলা |

Language preference is saved locally and applied across all pages automatically.

## Accessibility

Agri-Nova is built with accessibility as a core principle:

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **ARIA Labels**: Screen reader support with proper ARIA attributes
- **Voice Support**: Voice input and text-to-speech capabilities
- **Color Contrast**: WCAG AA compliant color ratios
- **Keyboard Navigation**: Full keyboard support for all features
- **Responsive Design**: Usable on all device sizes
- **Mobile Optimization**: Touch-friendly interfaces

## Voice Features

### Voice Input
- Click the microphone button to start voice recognition
- Speak clearly in your selected language
- System transcribes speech in real-time
- Automatic voice feedback after recording

### Text-to-Speech
- Available on tutorial cards and resources
- Read content in selected language
- Play/pause controls
- Adjustable speech rate

**Supported Languages for Voice**:
- English (US)
- Hindi (India)
- Marathi (India)
- Gujarati (India)
- Punjabi (India)
- Bengali (India)

## Design System

### Color Palette
- **Primary**: Green (#16a34a) - Agriculture theme
- **Neutrals**: Gray scale for UI elements
- **Accent**: Gold tones for highlights
- **Semantic**: Success, warning, error colors

### Typography
- **Headings**: Bold sans-serif for hierarchy
- **Body**: Readable sans-serif for content
- **Monospace**: For technical elements

### Spacing & Sizing
- 4px baseline grid system
- Consistent padding and margin scales
- Responsive breakpoints for mobile/tablet/desktop

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Next.js image optimization
- CSS-in-JS with Tailwind CSS
- Code splitting and lazy loading
- Font optimization
- Analytics integration

## Future Enhancements

- Payment gateway integration (Razorpay/Stripe)
- Real-time notifications
- Advanced search and filters
- Messaging system between users
- Rating and review system
- GPS-based location services
- Weather integration
- Crop pricing analytics
- Mobile app (React Native)

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Guidelines
- Follow TypeScript best practices
- Use meaningful variable/function names
- Add comments for complex logic
- Test responsive design across devices
- Maintain accessibility standards

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Environment Variables
Create a `.env.local` file with any required environment variables.

### Build Optimization
```bash
npm run build
```
## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact the development team
- Visit our community forums

**Agri-Nova** - Empowering Farmers Through Digital Innovation 🌾
