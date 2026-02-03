export const blogPosts = [
  {
    id: 1,
    slug: "getting-started-with-react-hooks",
    title: "Getting Started with React Hooks: A Complete Guide",
    excerpt: "Learn how to use React Hooks to manage state and side effects in functional components. This comprehensive guide covers useState, useEffect, and custom hooks.",
    content: `# Getting Started with React Hooks

React Hooks revolutionized the way we write React components. In this guide, we'll explore the most commonly used hooks and how to create your own custom hooks.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components.

## useState Hook

The useState hook allows you to add state to functional components:

\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

## useEffect Hook

The useEffect hook lets you perform side effects in function components:

\`\`\`javascript
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

## Creating Custom Hooks

You can create your own hooks to reuse stateful logic:

\`\`\`javascript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
\`\`\`

## Conclusion

React Hooks make your code more readable and reusable. Start using them in your projects today!`,
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "JavaScript", "Web Development", "Hooks"],
    author: "Your Name",
    coverImage: "/images/blog/react-hooks.jpg",
    published: true,
  },
  {
    id: 2,
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: Tips and Tricks",
    excerpt: "Discover advanced techniques and best practices for using Tailwind CSS effectively in your projects.",
    content: `# Mastering Tailwind CSS

Tailwind CSS is a utility-first CSS framework that can dramatically speed up your development process. Here are some tips and tricks to help you master it.

## Why Tailwind CSS?

- Utility-first approach
- Highly customizable
- Rapid development
- Smaller bundle sizes in production

## Custom Configuration

Customize Tailwind to match your design system:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
      }
    }
  }
}
\`\`\`

## Using @apply for Reusable Components

Create reusable component classes:

\`\`\`css
.btn {
  @apply px-4 py-2 rounded-lg font-semibold transition;
}
\`\`\`

## Responsive Design

Tailwind makes responsive design simple:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
\`\`\`

## Conclusion

With these tips, you'll be able to build beautiful, responsive websites faster than ever!`,
    date: "2023-12-20",
    readTime: "6 min read",
    category: "CSS",
    tags: ["CSS", "Tailwind", "Web Development", "Design"],
    author: "Your Name",
    coverImage: "/images/blog/tailwind.jpg",
    published: true,
  },
  {
    id: 3,
    slug: "building-restful-apis-with-nodejs",
    title: "Building RESTful APIs with Node.js and Express",
    excerpt: "A step-by-step guide to creating robust and scalable REST APIs using Node.js and Express framework.",
    content: `# Building RESTful APIs with Node.js

Learn how to build production-ready REST APIs using Node.js and Express.

## Setting Up

First, initialize your project:

\`\`\`bash
npm init -y
npm install express mongoose dotenv
\`\`\`

## Creating Your First Route

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ message: 'Get all users' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\`

## Middleware

Use middleware for common tasks:

\`\`\`javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
\`\`\`

## Error Handling

Implement proper error handling:

\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

## Conclusion

Following REST principles and best practices will help you build APIs that are easy to maintain and scale.`,
    date: "2023-11-10",
    readTime: "10 min read",
    category: "Backend",
    tags: ["Node.js", "Express", "API", "Backend"],
    author: "Your Name",
    coverImage: "/images/blog/nodejs.jpg",
    published: true,
  },
];

export const blogCategories = [
  "All",
  "React",
  "CSS",
  "Backend",
  "JavaScript",
  "Web Development",
];
