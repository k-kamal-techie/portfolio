# Kamal Kumar - Portfolio Website

Personal portfolio website showcasing my work as a **Senior Developer & Technical Lead** at Pabbly Connect.

## Tech Stack

- **Frontend:** React 19, Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Routing:** React Router v7
- **Forms:** React Hook Form
- **SEO:** React Helmet Async
- **Icons:** React Icons

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Multi-page navigation with React Router
- Contact form with validation
- Blog section with Markdown support
- Project filtering by category
- SEO optimized with meta tags
- Skills showcase with progress bars

## Pages

| Page | Description |
|------|-------------|
| Home | Hero section, highlights, tech stack, featured projects |
| About | Bio, education, interests, achievements |
| Skills | Technical skills organized by category |
| Experience | Work history, leadership responsibilities |
| Projects | Portfolio projects with filtering |
| Blog | Technical articles and tutorials |
| Contact | Contact form and social links |

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

### Build for Production

```bash
npm run build
```

## Project Structure

```
portfolio/
├── public/
│   └── images/           # Static images
├── src/
│   ├── components/
│   │   ├── common/       # Reusable components
│   │   └── layout/       # Layout components
│   ├── data/             # Content data files
│   ├── pages/            # Page components
│   └── App.jsx           # Main app with routing
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Customization

To customize for your own use:

1. Update personal info in `src/data/config.js`
2. Edit bio and education in `src/data/about.js`
3. Modify skills in `src/data/skills.js`
4. Update work experience in `src/data/experience.js`
5. Add your projects in `src/data/projects.js`
6. Write blog posts in `src/data/blog.js`

## Author

**Kamal Kumar**
Senior Developer & Technical Lead at Pabbly Connect

- Email: k.kamal.techie@gmail.com
- Location: Bhopal, India

---

Built with React & Tailwind CSS
