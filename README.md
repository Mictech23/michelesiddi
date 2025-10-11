# Michele Siddi - Portfolio Website

Modern, responsive portfolio website with **dynamic blog system** for Michele Siddi - IT Expert, Software Engineer, and Cybersecurity Specialist.

## 🚀 Features

### Portfolio & Design
- 🎨 **Modern 2025 Design**: Clean, professional design with glassmorphism effects and vibrant colors
- 🌓 **Dark Mode**: Full dark mode support with smooth transitions
- 🌐 **Multilingual**: Support for Italian (IT) and English (EN)
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance Optimized**: Lazy loading images, minified CSS
- ✨ **Modern Fonts**: Inter for body text, Poppins for headings
- 🎯 **Micro-interactions**: Smooth animations and hover effects

### Blog System (NEW! 🎉)
- 📝 **Jekyll-Powered Blog**: Markdown-based articles with automatic HTML generation
- 🔍 **Search Functionality**: Real-time search across all blog posts
- 🏷️ **Tag System**: Filter articles by categories (Cybersecurity, AI, Tech, etc.)
- 📊 **Dynamic Homepage**: Latest articles displayed automatically
- 🔗 **Social Sharing**: Share buttons for LinkedIn, Twitter, Facebook
- 📰 **RSS Feed**: Automatic feed generation for subscribers
- 🗺️ **SEO Optimized**: Automatic sitemap, meta tags, structured data (schema.org)

### Backend & Integration
- 🤖 **Working AI Chatbot**: Interactive AI assistant with real backend API integration
- 📄 **Article Management**: Easy-to-update Markdown files for blog posts
- 🔐 **GitHub Pages Compatible**: Static site generation ready for deployment

## 📁 Project Structure

```
.
├── index.html              # Main portfolio page (Jekyll-enabled)
├── blog.html               # Blog listing page with search & filters
├── styles.css              # Main CSS stylesheet
├── _config.yml             # Jekyll configuration
├── Gemfile                 # Ruby dependencies for Jekyll
├── server.js               # Backend API server (Node.js/Express)
├── package.json            # Node.js dependencies
├── foto-profilo.jpg        # Profile picture
│
├── _layouts/               # Jekyll layouts
│   ├── default.html        # Base layout with SEO tags
│   └── post.html           # Blog post layout
│
├── _posts/                 # Blog articles (Markdown)
│   ├── 2025-01-15-crittografia-internet.md
│   └── 2025-01-20-tendenze-ai-2025.md
│
├── articles/               # Legacy article pages (HTML)
│   ├── cybersecurity-2025.html
│   └── intelligenza-artificiale.html
│
└── _site/                  # Generated static site (auto-generated)
    ├── index.html
    ├── blog/
    ├── feed.xml            # RSS feed
    └── sitemap.xml         # SEO sitemap
```

## CSS Architecture

The `styles.css` file is organized into logical sections:

1. **CSS Variables** - Color scheme, spacing, and design tokens
2. **Base Styles** - HTML and body defaults
3. **Dark Mode** - Dark theme overrides
4. **Components**:
   - Language & Mode Switch
   - Hero Section
   - Navigation
   - Container
   - About Section
   - Timeline
   - Services
   - Portfolio
   - Articles (with clickable cards and hover effects)
   - Contact Form
   - Footer
   - AI Chatbot
5. **Responsive Design** - Media queries for different screen sizes

## API Documentation

### Chat Endpoint

**POST** `/api/chat`

Request body:
```json
{
  "question": "Come posso migliorare la cybersecurity?"
}
```

Response:
```json
{
  "answer": "La cybersecurity è fondamentale nel 2025...",
  "timestamp": "2025-10-09T20:53:39.273Z"
}
```

The chatbot includes smart keyword matching for IT-related topics:
- Cybersecurity
- Cloud computing
- AI/Machine Learning
- Web/App development
- DevOps & Automation

## 🛠️ Technologies Used

### Frontend
- **HTML5** with Jekyll Liquid templating
- **CSS3** with CSS Variables and modern features
- **JavaScript (Vanilla)** for interactions
- **Jekyll** - Static site generator
- **Markdown** for blog posts
- **Font Awesome Icons**
- **Google Fonts** (Inter, Poppins, Fira Code)

### Jekyll Plugins
- `jekyll-feed` - Automatic RSS feed generation
- `jekyll-seo-tag` - SEO meta tags and Open Graph
- `jekyll-sitemap` - Automatic sitemap.xml

### Backend (Optional - for AI Chatbot)
- **Node.js**
- **Express.js**
- **CORS middleware**

## 🚀 Getting Started

### Prerequisites
- Ruby 2.7+ (for Jekyll)
- Bundler gem
- Node.js 14+ (optional, for AI chatbot)

### Installation & Local Development

#### 1. Clone the repository
```bash
git clone https://github.com/Mictech23/michelesiddi.git
cd michelesiddi
```

#### 2. Install Jekyll dependencies
```bash
bundle install
```

#### 3. Build and serve the site locally
```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000/michelesiddi/`

#### 4. (Optional) Start the AI chatbot backend
In a separate terminal:
```bash
npm install
npm start
```

The API server will run on `http://localhost:5000`

### Building for Production
```bash
bundle exec jekyll build
```

The static site will be generated in the `_site/` directory.

### Deploy to GitHub Pages
Simply push to the `main` branch. GitHub Pages will automatically build and deploy the Jekyll site.

## ✍️ Adding New Blog Posts

### Create a new post

1. Create a new Markdown file in `_posts/` with the naming format: `YYYY-MM-DD-title.md`
2. Add front matter at the top:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-01-20 14:30:00 +0100
author: Michele Siddi
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
image: https://example.com/image.jpg
description: "Short description for SEO and previews"
---

Your content here in Markdown format...
```

3. Write your content using Markdown
4. Save the file
5. Build the site: `bundle exec jekyll build`
6. Push to GitHub

### Markdown Features Supported
- Headings (H1-H6)
- Bold, italic, code
- Lists (ordered and unordered)
- Links and images
- Code blocks with syntax highlighting
- Blockquotes
- Tables

## 🎯 Features Details

### 📝 Blog System
- **Markdown-based**: Write posts in simple Markdown format
- **Automatic processing**: Jekyll converts MD to HTML automatically
- **SEO optimized**: Meta tags, Open Graph, Twitter Cards, schema.org
- **Search**: Real-time client-side search across all posts
- **Tags & Categories**: Filter articles by topic
- **Social sharing**: Built-in share buttons for major platforms
- **RSS feed**: Automatic feed generation at `/feed.xml`
- **Sitemap**: Auto-generated at `/sitemap.xml` for SEO

### 🤖 AI Chatbot
- Fixed position launcher button
- Animated popup with smooth transitions
- Message history display
- Error handling with graceful fallback
- **Working backend API** (Node.js/Express on port 5000)
- Endpoint: `/api/chat` with mock AI responses
- Smart keyword matching for IT-related questions

### 🌓 Dark Mode
- Persistent theme selection (localStorage)
- Smooth color transitions
- Optimized contrast ratios
- All components fully styled (including blog)

### 📱 Responsive Design
Breakpoints:
- Desktop: > 1100px
- Tablet: 900px - 1100px
- Mobile: < 700px
- Small Mobile: < 500px

### ⚡ Performance Optimizations
- Lazy loading images
- Minified CSS in production
- Static site generation (fast loading)
- CDN-ready for images
- Optimized font loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Customization

### Site Configuration
Edit `_config.yml` to customize:
- Site title, description, URL
- Author information
- Social media links
- Google Analytics ID
- Jekyll settings

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #1864ab;
    --accent: #00b4d8;
    --accent2: #ffbe3b;
    /* ... more variables */
}
```

### Content
Edit the HTML content in `index.html` and update the translations object in the JavaScript section.

## Contact

- **Email**: michelesiddi.ms@gmail.com
- **LinkedIn**: [Michele Siddi](https://www.linkedin.com/in/michele-siddi-776172131/)

## License

© 2025 Michele Siddi. All rights reserved.
