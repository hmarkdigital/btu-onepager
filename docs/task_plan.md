# Task Plan - BioTechUSA Influencer Onboarding One-Pager

## Phase 1: Discovery & Blueprinting ✅
- [x] Define Project Goal
- [x] Define Data Schema
- [x] Create Blueprint
- [x] Approve Blueprint ✅

---

## Phase 2: Blueprint (B) - Architecture Design

### 2.1 File Structure
```
BTU-onepager/
├── index.html                 # Main HTML structure
├── css/
│   ├── reset.css             # CSS reset
│   ├── variables.css         # CSS custom properties (colors, spacing, fonts)
│   ├── base.css              # Base styles (typography, layout)
│   ├── components.css        # Component styles (cards, buttons, forms)
│   └── sections.css          # Section-specific styles
├── js/
│   ├── data.js               # Mock data (products, briefs, FAQs, etc.)
│   ├── components.js         # Reusable component functions
│   ├── sections.js           # Section-specific logic
│   └── main.js               # App initialization and event handlers
├── assets/
│   ├── images/               # Product images, hero background
│   └── logo.jpg              # BioTechUSA logo
└── docs/                     # Project documentation (gemini.md, findings.md, etc.)
```

### 2.2 Component Architecture (A.N.T. Layers)

#### Layer A (Abstract/API) - Data Structures
- Defined in `docs/gemini.md`
- Mock data in `js/data.js`

#### Layer N (Network/Node) - Component Logic
- `js/components.js`: Reusable functions
  - `createProductCard(product)`
  - `createBriefStep(step)`
  - `createContentSubmissionCard(submission)`
  - `createShootBookingCard(booking)`
  - `createPaymentDashboard(payments)`
  - `createFAQItem(faq)`
  
#### Layer T (Tools/Translation) - UI Rendering
- `js/sections.js`: Section rendering
  - `renderHeroSection()`
  - `renderOrderingSection(products)`
  - `renderBriefsSection(briefs)`
  - `renderProductsForBriefs(products)`
  - `renderContentApprovalSection(submissions)`
  - `renderShootsSection(bookings)`
  - `renderPaymentsSection(payments)`
  - `renderFAQSection(faqs)`

### 2.3 Design System Implementation

#### CSS Variables (`css/variables.css`)
```css
:root {
  /* Colors */
  --color-bg-primary: #00151C;
  --color-bg-card: #00232E;
  --color-accent: #33C5F3;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #90A4AE;
  
  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Roboto', sans-serif;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  
  /* Effects */
  --glass-blur: blur(10px) saturate(180%);
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
}
```

#### Glassmorphism Components
- Hero section background
- Product cards
- Brief workflow cards
- Content approval cards
- Payment dashboard panels

#### Liquid Glass Elements
- Section dividers (SVG blobs)
- CTA buttons with animated gradients
- Hover effects on interactive elements

---

## Phase 3: Link (L) - Integration Points

### 3.1 External Resources
- **Google Fonts**: Montserrat (900), Roboto (300, 400)
- **Icons**: Heroicons or Lucide (SVG)
- **Logo**: `Design guideline/logo.jpg`

### 3.2 Internal Dependencies
- Each section depends on `js/data.js` for mock data
- All sections use shared components from `js/components.js`
- CSS cascade: reset → variables → base → components → sections

### 3.3 State Management
- Use `data-*` attributes for component state
- Event delegation for dynamic content
- LocalStorage for user preferences (optional future enhancement)

---

## Phase 4: Architect (A) - Implementation Plan

### 4.1 HTML Structure (`index.html`)
- Semantic HTML5 structure
- 8 main sections with unique IDs
- Smooth scroll navigation
- Mobile-first responsive layout

### 4.2 CSS Implementation
1. **Reset & Base** (`reset.css`, `base.css`)
   - Normalize browser defaults
   - Set base typography and layout

2. **Variables** (`variables.css`)
   - Define all design tokens
   - Enable easy theming

3. **Components** (`components.css`)
   - Glass cards with backdrop-filter
   - Buttons with hover effects
   - Form inputs with focus states
   - Accordion for FAQ

4. **Sections** (`sections.css`)
   - Hero section with parallax background
   - Product grid (responsive)
   - Brief workflow (step-by-step cards)
   - Content approval UI (upload + status)
   - Shoots calendar/list view
   - Payments dashboard (charts using CSS)
   - FAQ accordion

### 4.3 JavaScript Implementation
1. **Data Layer** (`js/data.js`)
   - Mock products (12-15 items)
   - Mock briefs (current month)
   - Mock content submissions (3-5 items)
   - Mock shoot bookings (calendar data)
   - Mock payment data (earnings chart)
   - Mock FAQs (8-10 items)

2. **Component Layer** (`js/components.js`)
   - Reusable card creators
   - Form handlers
   - Animation utilities

3. **Section Layer** (`js/sections.js`)
   - Render each section with data
   - Handle section-specific interactions

4. **Main App** (`js/main.js`)
   - Initialize app on DOMContentLoaded
   - Set up event listeners
   - Handle smooth scrolling
   - Parallax scroll handler

### 4.4 Animations & Interactions
- **Parallax**: Hero background moves at 0.5x scroll speed
- **Card Hover**: Lift + shadow + subtle tilt
- **Accordion**: Smooth expand/collapse with max-height transition
- **Form Upload**: Drag-and-drop visual feedback
- **Chart Animation**: CSS keyframe animations for payment charts

---

## Phase 5: Stylize (S) - Design Polish

### 5.1 Glassmorphism Effects
- Apply to all cards and panels
- Ensure readability with proper contrast
- Test on different backgrounds

### 5.2 Liquid Glass Elements
- SVG blob dividers between sections
- Animated gradient borders on CTAs
- Smooth morphing transitions

### 5.3 Responsive Design
- **Mobile (375px-767px)**: Single column, stacked sections
- **Tablet (768px-1023px)**: 2-column grid for products
- **Desktop (1024px+)**: 3-column grid, side-by-side layouts

### 5.4 Accessibility
- WCAG AA contrast ratios
- Keyboard navigation support
- Focus indicators on all interactive elements
- ARIA labels for screen readers
- Reduced motion media query support

---

## Phase 6: Trigger (T) - Deployment & Testing

### 6.1 Testing Checklist
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Accessibility audit (WAVE, axe DevTools)
- [ ] Performance audit (Lighthouse)
- [ ] Animation smoothness (60fps target)
- [ ] Form interactions (upload, accordion, etc.)
- [ ] Parallax scroll effect
- [ ] All hover states working

### 6.2 Deployment
- Static hosting (Netlify, Vercel, GitHub Pages)
- No build process required (vanilla HTML/CSS/JS)
- Single `index.html` entry point

### 6.3 Future Enhancements (Optional)
- Backend integration for real data
- User authentication
- Real file upload to cloud storage
- Email notifications for content approval
- Calendar integration for shoots
- Payment gateway integration

---

## Verification Plan

### Manual Testing
1. **Visual Inspection**:
   - Open `index.html` in browser
   - Verify all 8 sections render correctly
   - Check glassmorphism effects are visible
   - Verify brand colors match specification

2. **Responsive Testing**:
   - Use browser DevTools to test at 375px, 768px, 1024px, 1440px
   - Verify layout adapts correctly at each breakpoint
   - Check that no horizontal scroll appears on mobile

3. **Interaction Testing**:
   - Hover over product cards → verify lift + shadow effect
   - Click FAQ items → verify accordion expand/collapse
   - Scroll page → verify parallax effect on hero background
   - Test all CTA buttons → verify they are clickable

4. **Accessibility Testing**:
   - Tab through page → verify focus indicators visible
   - Use WAVE browser extension → check for contrast issues
   - Test with screen reader (optional)

### Automated Testing
- Run Lighthouse audit in Chrome DevTools
  - Target: Performance > 90, Accessibility > 95
  - Command: Open DevTools → Lighthouse tab → Generate report

### Browser Testing
- Test in Chrome, Firefox, Safari (if on Mac)
- Verify glassmorphism `backdrop-filter` support
- Check for any layout breaking issues

---

## Current Status
**BLOCKED**: Awaiting Blueprint approval before proceeding to Phase 4 (Implementation).
