# Michele Siddi - Portfolio Website

Modern, responsive portfolio website for Michele Siddi - IT Expert, Software Engineer, and Cybersecurity Specialist.

## Features

- 🎨 **Modern Design**: Clean, professional design with glassmorphism effects
- 🌓 **Dark Mode**: Full dark mode support with smooth transitions
- 🌐 **Multilingual**: Support for Italian (IT) and English (EN)
- 🤖 **AI Chatbot**: Interactive AI assistant for IT-related questions
- 📱 **Responsive**: Fully responsive design for all devices
- ⚡ **Performance**: Optimized CSS with external stylesheet

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Dedicated CSS stylesheet
├── foto-profilo.jpg    # Profile picture
└── README.md          # This file
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
   - Articles
   - Contact Form
   - Footer
   - AI Chatbot
5. **Responsive Design** - Media queries for different screen sizes

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts (Roboto, Montserrat, Poppins, Fira Code, Nunito)

## Features Details

### AI Chatbot
- Fixed position launcher button
- Animated popup with smooth transitions
- Message history display
- Error handling with graceful fallback
- Backend API integration ready (endpoint: `/api/ai`)

### Dark Mode
- Persistent theme selection (localStorage)
- Smooth color transitions
- Optimized contrast ratios
- All components fully styled

### Responsive Design
Breakpoints:
- Desktop: > 1100px
- Tablet: 900px - 1100px
- Mobile: < 700px
- Small Mobile: < 500px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. Or use a local server:
   ```bash
   python3 -m http.server 8080
   ```
4. Navigate to `http://localhost:8080`

## Customization

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
