import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projectsData, projectCategories } from '../data/projects';
import SEO from '../components/common/SEO';

const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
  >
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
          {project.category}
        </span>
        <span className="text-xs text-gray-500">{project.date}</span>
      </div>

      <h3 className="text-xl font-heading font-semibold text-primary mb-3">
        {project.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 5).map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 5 && (
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
            +{project.technologies.length - 5}
          </span>
        )}
      </div>

      <div className="flex gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-secondary hover:text-secondary/80 transition-colors"
          >
            <FaExternalLinkAlt />
            <span>Live</span>
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaGithub />
            <span>Code</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Projects"
        description="Key projects and achievements by Kamal Kumar at Pabbly Connect"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4"
            >
              Projects & Achievements
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Key projects and technical achievements at Pabbly Connect
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No projects found in this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details Modal could be added here for expanded view */}
    </>
  );
};

export default Projects;
