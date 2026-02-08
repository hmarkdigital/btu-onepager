# Findings

## Project Overview
- **Name**: BioTechUSA Influencer Onboarding One-Pager
- **Purpose**: Smooth onboarding for influencers collaborating with BioTech USA
- **Language**: Hungarian
- **Type**: Responsive single-page website

## Research

### Brand Assets
- **Colors**:
  - Background (Deep Petrol/Black): `#00151C`
  - Accent / CTA (Vibrant Cyan): `#33C5F3`
  - Text (White): `#FFFFFF`
  - Card Background: `#00232E`
  - Secondary Text (Gray): `#90A4AE`
- **Typography**:
  - Headings: `Montserrat` (Weight: ExtraBold/Black 900)
  - Body Text: `Roboto` (Weight: Regular 400 / Light 300)
- **Logo**: Available at `Design guideline/logo.jpg`

### Design Style
- **Primary Style**: Glassmorphism
  - Frosted glass, transparent layers, blurred background, depth
  - Technical: `backdrop-filter: blur(10px)`, rgba backgrounds, layered cards
- **Secondary Style**: Liquid Glass
  - Fluid shapes, blurred transparency, organic movement, glossy
  - Technical: SVG blobs, backdrop-filter, animated transforms

### Animations & Interactions
1. **Glassmorphism Blur**:
   ```css
   backdrop-filter: blur(10px) saturate(180%);
   background: rgba(255, 255, 255, 0.1);
   border: 1px solid rgba(255, 255, 255, 0.2);
   ```

2. **Parallax Scroll**:
   - Hero background: Scroll speed 0.5x
   - Foreground elements: Scroll speed 1.2x
   - Max 20-30px movement
   - Use transform, not position

3. **Card Hover Effects**:
   - Lift + Shadow: `translateY(-4px)` + shadow increase
   - Tilt: 3D perspective tilt (2-3deg)
   - Glow border: Animated gradient border reveal
   - Content reveal: Hidden content slides in
   - Image zoom: Scale 1.05x inside container

## Required Sections (8 Total)

1. **Hero Section**
   - Welcome message: "Üdv a csapatban!"
   - Large background image
   - CTA button

2. **Rendelőfelület (Ordering)**
   - Product grid with images, names
   - "Rendelés" buttons

3. **Havi briefek (Monthly Briefs)**
   - Step-by-step workflow guide card

4. **Termékek a briefekhez**
   - Specific product selection list for current campaigns

5. **Tartalmak jóváhagyása (Content Approval)**
   - UI for uploading content
   - Status display (Pending/Approved)

6. **Forgatások és fotózások (Shoots & Photography)**
   - Calendar view or booking list

7. **Kuponkódos kifizetések (Coupon Payments)**
   - Dashboard panel with earnings
   - Charts and payment status

8. **GYIK (FAQ)**
   - Accordion-style list with common questions

## Discoveries
- **Content Files**: All site copy files in `Content/Site copy/` are empty placeholders
- **Design Assets**: Logo available, brand colors defined
- **UI/UX Skill**: Available at `.agent/skills/ui-ux-pro-max-skill`

## Constraints
- **B.L.A.S.T. Protocol**: Mandatory
- **A.N.T. Architecture**: Mandatory
- **Tech Stack**: To be determined (HTML/Tailwind recommended for one-pager)
- **Responsive**: Must work on mobile, tablet, desktop
- **Language**: All content in Hungarian
