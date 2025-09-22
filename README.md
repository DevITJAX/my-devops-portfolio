# Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Inspired by Stormix.co with a developer-focused design featuring code-style elements and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with code-style elements
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Sections**: 
  - Hero with animated typing effect
  - Skills with categorized technology stack
  - Experience timeline
  - Projects showcase with filtering
  - Contact form with validation
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/personal.js`:
- Name, title, bio
- Contact information
- Social media links
- Resume file path

### Skills
Modify your skills in `src/data/skills.js`:
- Add/remove skill categories
- Update skill levels (0-100)
- Change category icons

### Experience
Update your work experience in `src/data/experience.js`:
- Job titles and companies
- Descriptions and achievements
- Technologies used
- Time periods

### Projects
Showcase your projects in `src/data/projects.js`:
- Project descriptions and images
- Technologies used
- Live demo and GitHub links
- Featured project status

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🎨 Design System

### Colors
- Primary: Green (#00ff88)
- Secondary: Red (#ff6b6b)
- Background: Dark gray (#0a0a0a)
- Text: White/Gray variants

### Typography
- Headers: JetBrains Mono (monospace)
- Body: Inter (sans-serif)

### Components
- Code-style navigation
- Terminal-style elements
- Glass morphism effects
- Hover animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Your Name - [@yourhandle](https://twitter.com/yourhandle) - your.email@example.com

Project Link: [https://github.com/yourusername/my-portfolio](https://github.com/yourusername/my-portfolio)