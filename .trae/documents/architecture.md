## 1. Architecture Design
```mermaid
graph TD
    "Frontend (React + Vite)" --> "Tailwind CSS (Styling)"
    "Frontend (React + Vite)" --> "Formik/React Hook Form (State Management)"
    "Frontend (React + Vite)" --> "Framer Motion (Animations)"
    "Frontend (React + Vite)" --> "External Service (Email Delivery)"
```

## 2. Technology Description
- Frontend: React@18 + tailwindcss@3 + vite
- Styling: Tailwind CSS for utility-first design and responsive layouts.
- Animations: Framer Motion for smooth transitions in the wizard and scroll effects.
- Icons: Lucide React for clean, modern iconography.
- Forms: React Hook Form for efficient wizard state management.
- Deployment: Vercel (recommended for SEO and speed).

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | Home page containing all sections and the wizard. |

## 4. Components Structure
- `Navbar`: Responsive navigation with logo and CTA.
- `Hero`: Hero section containing the `Wizard` component.
- `Wizard`: Multi-step form with state management and validation.
- `Services`: Section highlighting Solar and EV charging.
- `Finance`: Comparison section for finance options.
- `Footer`: SEO-optimized footer with links and contact info.

## 5. SEO Strategy
- Use `react-helmet-async` for managing meta tags.
- Semantic HTML structure (h1-h6, main, section, article).
- Image optimization with descriptive alt tags.
- Fast performance via Vite and optimized assets.
- Clean URL structure.
