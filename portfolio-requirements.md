# Static Portfolio Website - Product Requirements Document

**Author:** Deepak Kumar
**Version:** 1.0
**Date:** 2026-03-23

---

## 1. Executive Summary

Build a fully static portfolio website showcasing professional resume, certifications, and LinkedIn presence. The site must be **fast, SEO-friendly, and recruiter-focused** with no backend dependencies.

### Key Differentiator
- Fully static architecture with dynamic JavaScript-based experience calculation
- Sub-2-second load time
- Clean, minimal design with dark/light mode toggle

---

## 2. Objectives

| Goal | Success Metric |
|------|----------------|
| Fast loading | Page load < 2 seconds |
| SEO-friendly | Semantic HTML, meta tags, Open Graph |
| Recruiter-focused | Clear CTAs, easy navigation, downloadable resume |
| Zero backend | 100% static files, client-side rendering only |

---

## 3. Technical Requirements

### 3.1 Tech Stack
- **Core:** HTML5, CSS3, Vanilla JavaScript (or minimal React optional)
- **Styling:** Tailwind CSS (CDN or build step)
- **No Backend:** Pure static file hosting

### 3.2 Folder Structure
```
portfolio/
├── index.html
├── assets/
│   ├── pdf/
│   │   ├── resume.pdf
│   │   └── certifications.pdf
│   └── images/
│       ├── profile.jpg
│       └── linkedin-preview.png
├── css/
│   └── styles.css (if custom CSS needed)
└── js/
    ├── experience.js (dynamic calculation)
    └── theme.js (dark/light toggle)
```

### 3.3 Dynamic Experience Logic
```javascript
// Calculate experience from fixed start date (August 2020)
const startDate = new Date('2020-08-01');
const currentDate = new Date();
const diffTime = Math.abs(currentDate - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// Display as: "X years, Y months of experience"
```

### 3.4 Performance Requirements
- Total page weight: < 500KB (excluding PDFs)
- First Contentful Paint: < 1.5s
- Lighthouse score: > 90 (Performance, Accessibility, SEO)
- Lazy load PDFs and images
- Optimized/compressed images (WebP format preferred)

---

## 4. Site Architecture

### 4.1 Pages/Sections

| Section | Content | Priority |
|---------|---------|----------|
| **Home** | Hero, intro, CTA buttons | Primary |
| **About** | Bio, skills overview | High |
| **Experience** | Dynamic calculator, work history | High |
| **Projects** | 2 featured project cards | High |
| **Certifications** | PDF/cards display | Medium |
| **Resume** | Embedded PDF + download button | High |
| **LinkedIn Snapshot** | Profile preview/images | Medium |
| **Contact** | mailto link, social links | Medium |

### 4.2 Navigation
- Fixed header with smooth scroll to sections
- Mobile hamburger menu
- Anchor links: `#about`, `#experience`, `#projects`, etc.

---

## 5. UI/UX Specifications

### 5.1 Design Principles
- Clean, minimal aesthetic
- Professional typography (Inter, system fonts)
- Consistent spacing (8px grid)
- Clear visual hierarchy

### 5.2 Color Scheme
| Mode | Background | Text | Accent |
|------|------------|------|--------|
| Light | #FFFFFF | #1A1A1A | Blue (#2563EB) |
| Dark | #1A1A1A | #F5F5F5 | Blue (#60A5FA) |

### 5.3 Dark/Light Mode
- Toggle button in header (sun/moon icon)
- State persisted in `localStorage`
- System preference detection (`prefers-color-scheme`)

### 5.4 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 5.5 Metrics Highlight
Display key achievements prominently:
- **2TB/day** data processing
- **50PB indexed** data scale
- Other quantifiable metrics

---

## 6. Features Specification

| Feature | Implementation | Notes |
|---------|---------------|-------|
| Dark mode toggle | localStorage + CSS variables | Persist user preference |
| Smooth scrolling | CSS `scroll-behavior: smooth` | Native browser support |
| Project cards | Grid layout with hover effects | 2 projects featured |
| Resume download | `<a download>` attribute | PDF in /assets/pdf/ |
| Contact link | `mailto:` hyperlink | No backend form |
| Experience calculator | Vanilla JS date calculation | Updates on page load |

---

## 7. Content Requirements

### 7.1 Assets Needed
- [ ] Resume PDF (optimized, < 500KB)
- [ ] Certifications PDF or individual images
- [ ] LinkedIn profile screenshot/preview
- [ ] Profile photo (professional headshot)
- [ ] Project thumbnails (2 images)

### 7.2 Copy Checklist
- [ ] Hero headline (1 sentence value prop)
- [ ] About section bio (3-5 sentences)
- [ ] Experience descriptions (bullet points)
- [ ] Project descriptions (problem, solution, impact)
- [ ] Certification list
- [ ] Contact CTA

---

## 8. Hosting & Deployment

### 8.1 Recommended Platform
**GitHub Pages** (primary recommendation)
- Free hosting
- Custom domain support
- Automatic HTTPS
- Simple CI/CD via git push

### 8.2 Alternatives
- Netlify (drag-and-drop deploy)
- Vercel (static mode)

### 8.3 Deployment Steps
1. Initialize Git repository
2. Push code to GitHub
3. Go to Settings → Pages
4. Select source branch (`main` or `gh-pages`)
5. Live URL generated: `https://<username>.github.io/portfolio/`

### 8.4 Custom Domain (Optional)
- Add `CNAME` file with domain name
- Configure DNS records at registrar

---

## 9. SEO & Meta Tags

```html
<!-- Required meta tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Deepak Kumar - Data Engineer Portfolio">
<meta name="author" content="Deepak Kumar">

<!-- Open Graph -->
<meta property="og:title" content="Deepak Kumar - Data Engineer">
<meta property="og:description" content="Portfolio showcasing data engineering projects">
<meta property="og:image" content="assets/images/og-image.png">
<meta property="og:url" content="https://deepak.github.io/portfolio/">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

---

## 10. Acceptance Criteria

### Functional
- [ ] Experience calculates correctly from August 2020
- [ ] Dark/light mode toggle works and persists
- [ ] Resume PDF downloads correctly
- [ ] All navigation links work
- [ ] Mobile menu functions properly

### Non-Functional
- [ ] Page loads in < 2 seconds on 4G
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Valid HTML/CSS (W3C validator)
- [ ] Cross-browser compatible (Chrome, Firefox, Safari, Edge)

---

## 11. Future Enhancements (Out of Scope for MVP)

- Blog section (requires CMS/backend)
- Contact form (requires backend or third-party service like Formspree)
- Analytics integration (Google Analytics, Plausible)
- Multi-language support
- Interactive charts/visualizations

---

## 12. Success Metrics

| Metric | Target |
|--------|--------|
| Page load time | < 2s |
| Bounce rate | < 40% |
| Resume downloads | Track via analytics |
| Contact clicks | Track via analytics |
| Lighthouse score | > 90 all categories |

---

## 13. Appendix

### 13.1 Sample Experience Calculation Output
```
Start Date: August 2020
Current Date: March 2026
Experience: 5 years, 7 months
```

### 13.2 Color Palette (Tailwind Classes)
```
Light: bg-white, text-gray-900, accent-blue-600
Dark: bg-gray-900, text-gray-100, accent-blue-400
```

### 13.3 Recommended Tailwind Config
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

---

**Document End**
