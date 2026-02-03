import { motion } from 'framer-motion';
import { FaUsers, FaCheckCircle } from 'react-icons/fa';
import { experienceData, leadershipResponsibilities, teamMembers } from '../data/experience';
import SEO from '../components/common/SEO';

const Experience = () => {
  return (
    <>
      <SEO
        title="Experience"
        description="Work experience of Kamal Kumar - Senior Developer & Technical Lead at Pabbly Connect"
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
              Work Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              My professional journey in software development and technical leadership
            </motion.p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-12 border-l-2 border-secondary last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-secondary rounded-full" />

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-primary">
                        {exp.title}
                      </h3>
                      <p className="text-secondary font-medium text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {exp.current ? 'Current' : exp.endDate}
                      </span>
                      <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="text-secondary">★</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <FaUsers className="text-3xl text-secondary" />
              <h2 className="text-3xl font-heading font-bold text-primary">
                Leadership & Team Management
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(leadershipResponsibilities).map(([key, items], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-heading font-semibold text-primary mb-4 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <FaCheckCircle className="text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-heading font-bold text-primary mb-8"
            >
              Team I Lead
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-100"
                >
                  <span className="text-gray-700 font-medium">{member}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
