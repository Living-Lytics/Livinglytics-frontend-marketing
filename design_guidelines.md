# Living Lytics Design Guidelines

## Design Approach
**System-Based**: Drawing from Linear's precision, Stripe's professional restraint, and Material Design's data hierarchy principles. This creates a trustworthy, data-focused aesthetic perfect for business analytics platforms.

## Typography System
- **Primary Font**: Inter (Google Fonts) - entire application
- **Hero Headline**: text-6xl md:text-7xl lg:text-8xl, font-bold, tracking-tight
- **Section Headlines**: text-4xl md:text-5xl, font-bold
- **Subsection Titles**: text-2xl md:text-3xl, font-semibold
- **Metric Numbers**: text-5xl md:text-6xl, font-bold, tabular-nums
- **Metric Labels**: text-sm, font-medium, uppercase, tracking-wide
- **Body Text**: text-base md:text-lg, leading-relaxed
- **Small Text/Captions**: text-sm, leading-normal

## Layout & Spacing System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 24 (p-4, gap-8, mt-16, etc.)
- **Section Padding**: py-16 md:py-24 lg:py-32
- **Container**: max-w-7xl mx-auto px-6 md:px-8
- **Component Spacing**: gap-8 md:gap-12 between major elements
- **Card Padding**: p-6 md:p-8
- **Grid Gaps**: gap-6 for cards, gap-4 for compact lists

## Hero Section (Full Design)
**Layout**: Full-width, min-h-screen with centered content over background image
- **Container**: max-w-5xl mx-auto px-6 text-center z-10 relative
- **Headline**: "Real-Time Analytics. Real Business Impact." style with tracking-tight
- **Subheadline**: Below headline, max-w-3xl mx-auto, text-xl opacity treatment
- **CTA Group**: Flex row with gap-4, justify-center, mt-12
  - Primary button: "Start Free Trial" (px-8 py-4, text-lg, font-semibold, rounded-lg, backdrop-blur-xl with translucent background)
  - Secondary button: "See Live Demo" (same sizing, different treatment)
- **Trust Badge Row**: Below CTAs (mt-8), "Trusted by 500+ marketing teams" with small company logos (h-8)
- **Image**: Abstract data visualization, flowing charts/graphs, professional business context with depth, gradient overlay from bottom

## Features Grid Section
**Layout**: 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Section Header**: Centered, "Everything You Need to Track Marketing ROI"
- **Feature Cards**: Each card with rounded-xl, p-8, border treatment
  - Icon area: w-12 h-12, rounded-lg, flex items-center justify-center
  - Title: text-xl font-semibold, mt-6
  - Description: text-base, mt-4, leading-relaxed
- **6 Features**: Real-Time Dashboards, Multi-Source Integration, Custom Reports, Team Collaboration, Automated Alerts, Performance Forecasting

## Live Metrics Showcase
**Layout**: Full-width section with max-w-6xl container
- **Grid**: 4 metric cards in 2x2 grid (grid-cols-2 lg:grid-cols-4, gap-6)
- **Metric Card Structure**:
  - Large number: text-5xl font-bold tabular-nums
  - Change indicator: Small badge showing +12% with up arrow
  - Label: text-sm uppercase tracking-wide, mt-2
  - Sparkline placeholder: Small line graph visualization hint, h-12 mt-4
- **Metrics**: "Website Traffic", "Conversion Rate", "Revenue", "Campaign ROI"

## Integration Partners Section
**Layout**: Centered content with logo grid
- **Headline**: "Connect Your Entire Marketing Stack"
- **Subtext**: "Seamless integrations with 100+ platforms"
- **Logo Grid**: grid-cols-3 md:grid-cols-4 lg:grid-cols-6, gap-8
  - Each logo container: aspect-square, flex items-center justify-center, grayscale treatment
  - 12 placeholder logos: Google Analytics, HubSpot, Salesforce, Mailchimp, Facebook Ads, LinkedIn, Shopify, Stripe, Slack, Zapier, ActiveCampaign, Marketo
- **CTA**: "View All Integrations" link below grid

## Social Proof Section
**Layout**: 2-column grid for testimonials (grid-cols-1 lg:grid-cols-2, gap-8)
- **Testimonial Cards**: Each card with p-8, rounded-xl
  - Quote: text-lg, leading-relaxed, mb-6
  - Author section: Flex row with gap-4
    - Avatar placeholder: w-12 h-12 rounded-full
    - Name + Title: font-semibold name, text-sm title with company
  - Company logo: Small logo in top-right corner
- **4 Testimonials**: From CMO, Marketing Director, Growth Lead, VP Marketing

## Dashboard Preview Section
**Layout**: Asymmetric split with text left, visual right
- **Text Column (40%)**: 
  - Eyebrow: "Powerful Analytics"
  - Headline: "Make Data-Driven Decisions in Real-Time"
  - Feature bullets: 4 items with checkmark icons, gap-4
  - CTA button below
- **Visual Column (60%)**: 
  - Dashboard screenshot mockup showing metric cards, charts, data tables
  - Slight perspective tilt (transform rotate-1)
  - Subtle shadow for depth

## Pricing Preview/CTA Section
**Layout**: Centered, max-w-4xl
- **Headline**: "Start Tracking Better Today"
- **Price Tease**: "From $49/month" with text-4xl pricing
- **Feature List**: 3-column grid of key features (grid-cols-1 md:grid-cols-3)
- **CTA Button**: Large, centered, "Start Free 14-Day Trial"
- **Fine Print**: "No credit card required • Cancel anytime"

## Footer
**Layout**: 4-column grid (grid-cols-2 md:grid-cols-4, gap-12)
- **Column 1**: Logo + tagline + social icons row
- **Column 2**: Product links (Features, Integrations, Pricing, Changelog)
- **Column 3**: Resources (Documentation, API, Blog, Case Studies)
- **Column 4**: Company (About, Careers, Contact, Privacy)
- **Bottom Bar**: flex justify-between, border-top, pt-8, mt-16
  - Copyright text left
  - Legal links right (Terms, Privacy, Security)

## Component Library
- **Buttons**: px-6 py-3 rounded-lg font-semibold, backdrop-blur-xl for hero
- **Cards**: rounded-xl with border, p-6 md:p-8
- **Badges**: px-3 py-1 rounded-full text-xs font-medium
- **Icons**: Heroicons via CDN, w-6 h-6 standard sizing
- **Form Inputs**: rounded-lg, px-4 py-3, border treatment

## Images
- **Hero Background**: Full-width abstract data visualization with gradient charts, professional business analytics aesthetic, soft gradient overlay
- **Dashboard Preview**: Clean screenshot of analytics dashboard showing charts, metrics, and data tables in the Dashboard Preview Section

## Animations
**Minimal**: Subtle hover scale on cards (hover:scale-105 transition-transform), fade-in on scroll for sections only