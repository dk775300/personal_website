# Static Portfolio Website

A fast, SEO-friendly static portfolio website for showcasing professional experience, projects, and certifications.

## Features

- **Dynamic Experience Calculator** - Automatically calculates years of experience from August 2020
- **Dark/Light Mode Toggle** - Persists user preference in localStorage
- **Responsive Design** - Mobile-first with Tailwind CSS
- **SEO Optimized** - Semantic HTML, meta tags, Open Graph support
- **Sub-2-second Load Time** - Lightweight, no backend dependencies

## Quick Start

### Local Development

1. Open `index.html` in your browser, or
2. Start a local server:

```bash
# Using Python
cd portfolio
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Visit `http://localhost:8000` (or appropriate port).

## Folder Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # Custom styles
├── js/
│   ├── experience.js      # Dynamic experience calculator
│   └── theme.js           # Dark/light mode toggle
├── assets/
│   ├── pdf/
│   │   ├── resume.pdf     # Place your resume PDF here
│   │   └── certifications.pdf  # Place certifications PDF here
│   └── images/
│       ├── profile.jpg    # Profile photo
│       └── linkedin-preview.png  # LinkedIn preview image
└── README.md
```

## Setup Instructions

### 1. Add Your Assets

Place the following files in the appropriate directories:

- `assets/pdf/resume.pdf` - Your resume (optimized, < 500KB)
- `assets/pdf/certifications.pdf` - Certifications document
- `assets/images/profile.jpg` - Professional headshot
- `assets/images/linkedin-preview.png` - LinkedIn profile preview

### 2. Customize Content

Edit `index.html` to update:

- Personal information (name, title, bio)
- Contact links (email, LinkedIn, GitHub)
- Experience timeline
- Project descriptions
- Skills and certifications

## Deployment

### GitHub Pages (Recommended)

1. Initialize Git repository:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Push to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to Repository Settings → Pages
   - Select source branch: `main`
   - Save and wait for deployment

4. Your site will be live at: `https://yourusername.github.io/portfolio/`

### Alternative Platforms

**Netlify:**
- Drag and drop the `portfolio` folder to netlify.com
- Or connect GitHub repository for auto-deploy

**Vercel:**
- Import GitHub repository
- Deploy as static site

## Performance Optimization

### Image Optimization

```bash
# Convert images to WebP
cwebp profile.jpg -o profile.webp -q 80

# Resize large images
convert profile.jpg -resize 400x400 profile.jpg
```

### PDF Optimization

```bash
# Compress PDF
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dBATCH -sOutputFile=output.pdf input.pdf
```

## Lighthouse Score Targets

| Category | Target |
|----------|--------|
| Performance | > 90 |
| Accessibility | > 90 |
| Best Practices | > 90 |
| SEO | > 90 |

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

---

**Built with:** HTML5, CSS3, Vanilla JavaScript, Tailwind CSS
