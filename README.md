# Kamal Kumar - Portfolio Website

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Personal portfolio website showcasing my work as a **Senior Developer & Technical Lead** at Pabbly Connect. Built with modern web technologies for optimal performance and user experience.

## Live Demo

> Coming soon - deployment in progress

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7.x |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Routing** | React Router v7 |
| **Forms** | React Hook Form |
| **SEO** | React Helmet Async |
| **Icons** | React Icons |
| **Blog** | React Markdown |

## Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Page transitions and scroll animations with Framer Motion
- **Multi-page Navigation** - Clean routing with React Router v7
- **Contact Form** - Client-side validation with React Hook Form
- **Blog Section** - Markdown-powered technical articles
- **Project Filtering** - Filter projects by category (Backend, Frontend, DevOps, AI)
- **SEO Optimized** - Meta tags and Open Graph support
- **Skills Showcase** - Visual progress bars by category
- **Performance** - Fast loading with Vite's optimized builds

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section, highlights, tech stack overview, featured projects |
| About | `/about` | Bio, education, career highlights, interests |
| Skills | `/skills` | Technical skills organized by category with proficiency levels |
| Experience | `/experience` | Work history timeline, leadership responsibilities, team info |
| Projects | `/projects` | Portfolio projects with category filtering |
| Blog | `/blog` | Technical articles and tutorials listing |
| Blog Post | `/blog/:slug` | Individual article with Markdown rendering |
| Contact | `/contact` | Contact form and social links |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/k-kamal-techie/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   ├── images/              # Static images (profile, projects)
│   └── resume.pdf           # Downloadable resume
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Section.jsx
│   │   │   └── SEO.jsx
│   │   └── layout/          # Layout components
│   │       ├── Header.jsx
│   │       ├── Footer.jsx
│   │       └── Layout.jsx
│   ├── data/                # Content data files
│   │   ├── config.js        # Site configuration
│   │   ├── about.js         # Bio and education
│   │   ├── skills.js        # Technical skills
│   │   ├── experience.js    # Work history
│   │   ├── projects.js      # Portfolio projects
│   │   └── blog.js          # Blog articles
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & Tailwind config
├── index.html
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory for email functionality:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization

To customize for your own use:

1. **Personal Info** - Update `src/data/config.js` with your name, title, and social links
2. **About Section** - Edit bio and education in `src/data/about.js`
3. **Skills** - Modify technical skills in `src/data/skills.js`
4. **Experience** - Update work history in `src/data/experience.js`
5. **Projects** - Add your projects in `src/data/projects.js`
6. **Blog Posts** - Write articles in `src/data/blog.js`
7. **Images** - Replace profile photo at `public/images/profile.jpg`
8. **Resume** - Add your resume at `public/resume.pdf`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Deployment

This project can be deployed to any static hosting service:

- **Vercel** (Recommended) - Connect GitHub repo for automatic deployments
- **Netlify** - Add `_redirects` file for SPA routing
- **GitHub Pages** - Use `gh-pages` branch

## Author

**Kamal Kumar**
Senior Developer & Technical Lead at Pabbly Connect

- Email: [k.kamal.techie@gmail.com](mailto:k.kamal.techie@gmail.com)
- GitHub: [@k-kamal-techie](https://github.com/k-kamal-techie)
- Location: Bhopal, India

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with React & Tailwind CSS
