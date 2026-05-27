## 1. Product Overview
Open Energy Solutions (OES) is a modern solar installer website designed to provide high-quality solar solutions for residential and commercial properties. The site focuses on SEO, aesthetic appeal, and high conversion through a multi-step questionnaire wizard.
- Main purposes: Generate high-quality solar leads, showcase professional solar installation services, and educate potential customers.
- Target Market: Homeowners and business owners in the UK seeking sustainable energy solutions and financial savings.

## 2. Core Features

### 2.1 Feature Module
1. **Home page**: Hero section with wizard, about us, services (Solar, EV Chargers), finance options, and SEO-optimized content.
2. **Questionnaire Wizard**: A multi-step form capturing lead details and sending them to the sales team.

### 2.2 Page Details
| Page Name | Module Name | Feature description |
|-----------|-------------|---------------------|
| Home page | Hero Section | High-impact visuals with the multi-step questionnaire wizard. |
| Home page | About Us | Information about Open Energy Solutions' expertise and commitment. |
| Home page | Services | Detailed sections for Solar Panels and EV Chargers. |
| Home page | Finance | Explanation of CAPEX, PPA, and Finance options. |
| Home page | Footer | Contact info, social links, and SEO-friendly links. |

## 3. Core Process
The primary user flow is the lead generation questionnaire:
1. User arrives on the site and sees the "Get a Quote" wizard in the hero section.
2. User answers a series of questions (Name, Address, Business status, Mobile, Email, EV interest, Roof material, Roof condition, Phase type, Energy spend, Bill upload, Finance choice).
3. On completion, the data is validated and emailed to welcome@openlead.co.uk.
4. User receives a confirmation message.

```mermaid
graph TD
    "User Arrival" --> "Hero Wizard"
    "Hero Wizard" --> "Step 1: Basic Info"
    "Step 1: Basic Info" --> "Step 2: Property Info"
    "Step 2: Property Info" --> "Step 3: Energy & Finance"
    "Step 3: Energy & Finance" --> "Submit"
    "Submit" --> "Email Sent to welcome@openlead.co.uk"
    "Email Sent to welcome@openlead.co.uk" --> "Success Message"
```

## 4. User Interface Design
### 4.1 Design Style
- Primary Colors: Solar Orange (#F97316) or Energy Green (#22C55E) paired with deep Slate (#1E293B) and clean White.
- Button Style: Rounded, modern buttons with subtle gradients and hover scaling.
- Font and sizes: Modern sans-serif (e.g., Montserrat for headers, Inter for body).
- Layout style: Clean, editorial-style layout with generous whitespace and high-quality Unsplash images.
- Icon style: Clean, minimal line icons for solar panels, EV chargers, and financial symbols.

### 4.2 Page Design Overview
| Page Name | Module Name | UI Elements |
|-----------|-------------|-------------|
| Home page | Hero Section | Full-width high-res solar image, centered or split-screen wizard with glassmorphism effects. |
| Home page | Services | Card-based layout with hover animations and detailed icons. |
| Home page | Finance | Simple, clear comparison cards for PPA, Finance, and CAPEX. |

### 4.3 Responsiveness
- Desktop-first design with a focus on high-impact visuals.
- Mobile-adaptive wizard that is easy to navigate with one hand.
- Optimized images for fast loading on all devices (SEO benefit).
