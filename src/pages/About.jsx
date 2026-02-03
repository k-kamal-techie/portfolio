import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaHeart } from 'react-icons/fa';
import { aboutData } from '../data/about';
import { siteConfig } from '../data/config';
import SEO from '../components/common/SEO';

const About = () => {
  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about Kamal Kumar - Senior Developer & Technical Lead at Pabbly Connect"
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
              {aboutData.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              {aboutData.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Profile Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:col-span-1"
              >
                <div className="bg-gradient-to-br from-secondary to-primary rounded-lg aspect-square flex items-center justify-center text-white text-6xl font-heading font-bold shadow-lg">
                  {siteConfig.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="mt-6 text-center">
                  <a
                    href={siteConfig.resumeUrl}
                    download
                    className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium"
                  >
                    <FaDownload />
                    Download Resume
                  </a>
                </div>
              </motion.div>

              {/* Bio Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="md:col-span-2 space-y-6"
              >
                {aboutData.bio.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">
                    {highlight.number}
                  </div>
                  <div className="text-sm text-gray-300">
                    {highlight.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <FaGraduationCap className="text-3xl text-secondary" />
              <h2 className="text-3xl font-heading font-bold text-primary">
                Education
              </h2>
            </motion.div>

            <div className="space-y-6">
              {aboutData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary"
                >
                  <h3 className="text-xl font-heading font-semibold text-primary">
                    {edu.degree}
                  </h3>
                  <p className="text-secondary font-medium mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {edu.year}
                  </p>
                  <p className="text-gray-600 mt-3">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <FaHeart className="text-3xl text-secondary" />
              <h2 className="text-3xl font-heading font-bold text-primary">
                What I'm Passionate About
              </h2>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {aboutData.interests.map((interest, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 border border-gray-200 hover:border-secondary hover:text-secondary transition-colors"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Me Section */}
      {aboutData.whatDrivesMe && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary to-gray-800 p-8 md:p-12 rounded-lg text-white"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                  What Drives Me
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed italic">
                  "{aboutData.whatDrivesMe}"
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
