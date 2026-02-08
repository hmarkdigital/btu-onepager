# Project Constitution (gemini.md)

## 1. Data Schemas

### Product
```typescript
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  category: 'protein' | 'vitamin' | 'supplement' | 'snack';
  available: boolean;
}
```

### Brief
```typescript
interface Brief {
  id: string;
  month: string; // e.g., "2026-02"
  title: string;
  steps: BriefStep[];
  deadline: Date;
  status: 'active' | 'completed' | 'upcoming';
}

interface BriefStep {
  stepNumber: number;
  title: string;
  description: string;
  completed: boolean;
}
```

### Content Submission
```typescript
interface ContentSubmission {
  id: string;
  influencerId: string;
  briefId: string;
  uploadDate: Date;
  fileUrl: string;
  fileType: 'image' | 'video';
  status: 'pending' | 'approved' | 'rejected';
  feedback?: string;
}
```

### Shoot Booking
```typescript
interface ShootBooking {
  id: string;
  influencerId: string;
  date: Date;
  type: 'photo' | 'video';
  location: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}
```

### Coupon Payment
```typescript
interface CouponPayment {
  id: string;
  influencerId: string;
  month: string;
  couponCode: string;
  usageCount: number;
  earningsPerUse: number;
  totalEarnings: number;
  status: 'pending' | 'paid';
  paidDate?: Date;
}
```

### FAQ Item
```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ordering' | 'briefs' | 'content' | 'shoots' | 'payments' | 'general';
  order: number;
}
```

## 2. Behavioral Rules
- **No Guessing**: Never guess at business logic.
- **Reliability First**: Prioritize reliability over speed.
- **Protocol Adherence**: Follow B.L.A.S.T. (Blueprint, Link, Architect, Stylize, Trigger) and A.N.T. 3-layer architecture.
- **Halt Execution**: Do not write `tools/` scripts until Schema is defined and Blueprint is approved.
- **Responsive Design**: All components must work on mobile (375px), tablet (768px), and desktop (1024px+).
- **Accessibility**: Maintain WCAG AA standards (4.5:1 contrast ratio minimum).
- **Performance**: Use CSS transforms for animations, not position changes.

## 3. Architectural Invariants
- **A.N.T. Architecture**:
    - **A (layer 1)**: Abstract / API - Data structures and interfaces
    - **N (layer 2)**: Network / Node - Component logic and state management
    - **T (layer 3)**: Tools / Translation - UI components and rendering
- **Self-Healing**: Automation must be deterministic and self-healing.
- **Component Structure**: Each section is a self-contained component.
- **State Management**: Use vanilla JavaScript with data attributes for state (no framework overhead for one-pager).
- **CSS Architecture**: Use CSS custom properties for theming, BEM naming convention for classes.
