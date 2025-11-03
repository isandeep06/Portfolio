# Data Scientist Portfolio Website

A modern, responsive portfolio website designed specifically for Data Scientists to showcase their skills, projects, and professional experience. Built with HTML, CSS, and JavaScript, this portfolio is optimized for GitHub Pages deployment.

## 🌟 Features

- **Modern & Clean Design**: Minimalist UI with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme**: Toggle between dark and light modes with persistent preference
- **Interactive Navigation**: Smooth scrolling, active link highlighting, and mobile-friendly menu
- **Project Showcase**: Highlight your data science projects with descriptions, tech stacks, and links
- **Skills Section**: Organized display of programming languages, frameworks, and tools
- **Resume Section**: Embedded resume preview with download option
- **Contact Form**: Built-in contact form (ready for backend integration)
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized**: Fast loading with lazy image loading and optimized code

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling with responsive design
├── script.js           # JavaScript for interactivity
├── profile-placeholder.png    # Profile image placeholder
├── project-placeholder.png    # Project image placeholder
├── favicon.png         # Website favicon
├── resume.pdf          # Your resume (add your own)
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Git (for version control and deployment)
- A GitHub account (for GitHub Pages deployment)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Portfolio.git
   cd Portfolio
   ```

2. **Open the website locally**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```
   
   **Using Node.js:**
   ```bash
   npx http-server -p 8000
   # Then visit http://localhost:8000
   ```
   
   **Using VS Code:**
   - Install the "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **Customize the content**
   - Edit `index.html` to update your personal information
   - Replace placeholder images with your own
   - Add your resume as `resume.pdf`
   - Modify colors and styles in `styles.css` if desired

## 🎨 Customization Guide

### Personal Information

Edit the following sections in `index.html`:

1. **Hero Section**: Update name, title, and description
2. **About Section**: Write your professional bio and update statistics
3. **Skills Section**: Add/remove skills and technologies
4. **Projects Section**: Add your projects with descriptions and links
5. **Resume Section**: Add your work experience and education
6. **Contact Section**: Update email and social media links

### Profile Image

Replace `profile-placeholder.png` with your own professional photo. Recommended specifications:
- Format: PNG or JPG
- Size: 400x400 pixels (square)
- File size: < 200KB for optimal loading

### Project Images

Replace `project-placeholder.png` with screenshots or images of your projects. Recommended specifications:
- Format: PNG or JPG
- Dimensions: 600x400 pixels (3:2 ratio)
- File size: < 300KB per image

### Resume

Add your resume as `resume.pdf` in the root directory, or update the link in the Resume section to point to your resume file.

### Color Scheme

To change the color scheme, modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;       /* Darker shade */
    --primary-light: #3b82f6;      /* Lighter shade */
    --secondary-color: #10b981;    /* Accent color */
    --accent-color: #8b5cf6;       /* Additional accent */
}
```

## 📤 Deployment to GitHub Pages

### Option 1: Deploy from Main Branch

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Select "/ (root)" as the folder
   - Click "Save"

3. **Access your website**
   - Your site will be available at: `https://yourusername.github.io/Portfolio/`
   - It may take a few minutes for the site to be published

### Option 2: Deploy from gh-pages Branch

1. **Create and push to gh-pages branch**
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```

2. **Enable GitHub Pages**
   - Follow the same steps as Option 1, but select "gh-pages" branch

### Option 3: Custom Domain

If you have a custom domain:

1. Add a `CNAME` file to your repository:
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. Configure DNS settings with your domain provider:
   - Add an A record pointing to GitHub's IPs
   - Or add a CNAME record pointing to `yourusername.github.io`

3. In GitHub Pages settings, enter your custom domain

## 🛠️ Advanced Features

### Contact Form Integration

The contact form is currently set up with a basic JavaScript handler. To make it fully functional:

1. **Using FormSpree** (recommended for beginners):
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using EmailJS**:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Follow their documentation to integrate

3. **Using Netlify Forms** (if deploying to Netlify):
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

### Analytics Integration

To track visitors, add Google Analytics:

1. Sign up at [Google Analytics](https://analytics.google.com/)
2. Get your tracking ID
3. Add to `index.html` before closing `</head>` tag:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🧪 Testing

### Browser Compatibility

Test your portfolio on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Design Testing

Test on various screen sizes:
- Desktop: 1920x1080, 1366x768
- Tablet: 768x1024
- Mobile: 375x667, 414x896

Use browser DevTools to test different viewports.

### Accessibility Testing

- Use browser extensions like WAVE or axe DevTools
- Test keyboard navigation (Tab, Enter, Escape)
- Test with screen readers (NVDA, JAWS, VoiceOver)

## 📊 SEO Optimization

To improve search engine visibility:

1. **Update meta tags** in `index.html`:
   ```html
   <meta name="description" content="Your unique description">
   <meta name="keywords" content="data science, machine learning, python">
   <meta property="og:title" content="Your Name - Data Scientist">
   <meta property="og:description" content="Portfolio of a Data Scientist">
   <meta property="og:image" content="URL to your image">
   ```

2. **Add a sitemap.xml** (optional for single-page sites)

3. **Submit to Google Search Console**

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For questions or suggestions, feel free to reach out:
- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Icons from SVG sources
- Color palette optimized for accessibility

---

**Happy coding!** 🚀 If you found this portfolio template helpful, please consider giving it a ⭐️ on GitHub!