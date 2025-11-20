# Hubzone Careers Frontend

A modern, AI-powered job portal frontend built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Multiple Theme Presets**: Corporate Blue (default), Warm Trust, and more
- 🤖 **AI Integration**: Ready for OpenAI, Anthropic, and other AI SDKs
- ✨ **Modern Animations**: Framer Motion and GSAP for smooth interactions
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🔄 **Workflow Separation**: Separate Applicant and Employer workflows
- 🎭 **Dark Mode**: Full dark mode support with theme switching

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd HubzoneCareersFrontEnd
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```env
NEXT_PUBLIC_THEME_PRESET=corporate-blue
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Theme Configuration

The application uses **Corporate Blue** as the default theme. To change it:

1. **Via Environment Variable** (recommended for production):
   - Set `NEXT_PUBLIC_THEME_PRESET` in your `.env` file
   - Available options: `corporate-blue`, `warm-trust`, `emerald-tech`, `royal-purple`, `neutral-executive`, `neutral`

2. **Via URL Parameter** (for testing):
   - Add `?palette=warm-trust` to any URL
   - The selection will be saved to localStorage

3. **Via Code**:
   - Default is set in `src/components/providers/app-providers.tsx`
   - Change `DEFAULT_PRESET` constant

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── applicant/         # Applicant workflow pages
│   └── employer/          # Employer workflow pages
├── components/
│   ├── layout/            # Headers, footers, navigation
│   ├── sections/          # Page sections (hero, features, etc.)
│   └── ui/                # Reusable UI components
├── lib/
│   └── theme/             # Theme presets and utilities
└── hooks/                 # Custom React hooks
```

## Available Themes

- **Corporate Blue** (default) - Professional blue theme
- **Warm Trust** - Orange/warm theme
- **Emerald Tech** - Green/tech theme
- **Royal Purple** - Purple/elegant theme
- **Neutral Executive** - Minimal gray theme
- **Neutral** - Basic neutral theme

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, GSAP
- **UI Components**: Radix UI, shadcn/ui
- **State Management**: React Query, Zustand
- **Theme Management**: next-themes

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

Private - All rights reserved
