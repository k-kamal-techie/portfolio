import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload } from 'react-icons/fa';
import { siteConfig } from '../data/config';
import { aboutData } from '../data/about';
import { skillsData, technologyEcosystem } from '../data/skills';
import { projectsData } from '../data/projects';
import SEO from '../components/common/SEO';

const Home = () => {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 4);

  return (
    <>
      <SEO
        title="Home"
        description={siteConfig.description}
      />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-secondary font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-bold text-primary mb-6"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-heading text-gray-600 mb-6"
            >
              {siteConfig.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium"
              >
                Get In Touch
                <FaArrowRight />
              </Link>
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              >
                <FaDownload />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4"
            >
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-secondary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-2xl text-gray-600 hover:text-secondary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {aboutData.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">
                  {highlight.number}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {highlight.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Technology Ecosystem
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A snapshot of the technologies I work with daily at Pabbly Connect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Object.entries(technologyEcosystem).slice(0, 6).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading font-semibold text-primary mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-gray-600 text-sm">{value}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors"
            >
              View All Skills
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key projects and achievements at Pabbly Connect
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-primary mt-4 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium"
            >
              View All Projects
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, technical challenges, or opportunities to be part of your vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors font-medium text-lg"
          >
            Get In Touch
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
