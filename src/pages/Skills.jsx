import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaUsers, FaBrain } from 'react-icons/fa';
import { skillsData, technologyEcosystem } from '../data/skills';
import SEO from '../components/common/SEO';

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 font-medium">{name}</span>
      <span className="text-gray-500 text-sm">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-secondary h-2 rounded-full"
      />
    </div>
  </div>
);

const SkillCategory = ({ title, icon: Icon, skills, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="flex items-center gap-3 mb-6">
      <Icon className="text-2xl text-secondary" />
      <h3 className="text-xl font-heading font-semibold text-primary">{title}</h3>
    </div>
    <div>
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    { title: "Backend Development", icon: FaServer, skills: skillsData.backend },
    { title: "Frontend Development", icon: FaCode, skills: skillsData.frontend },
    { title: "Databases", icon: FaDatabase, skills: skillsData.databases },
    { title: "Web Servers", icon: FaServer, skills: skillsData.webServers },
    { title: "DevOps & Cloud", icon: FaCloud, skills: skillsData.devops },
    { title: "AI & Machine Learning", icon: FaBrain, skills: skillsData.ai },
    { title: "Tools & Version Control", icon: FaTools, skills: skillsData.tools },
  ];

  return (
    <>
      <SEO
        title="Skills"
        description="Technical skills and expertise of Kamal Kumar - Backend, Frontend, Databases, DevOps, and more"
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
              Technical Skills
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Technologies and tools I use to build high-performance systems
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technology Ecosystem Overview */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-center mb-10">
              Technology Ecosystem at Pabbly Connect
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(technologyEcosystem).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                  <h3 className="font-semibold text-secondary mb-1 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="text-gray-300 text-sm">{value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <SkillCategory
                  key={index}
                  title={category.title}
                  icon={category.icon}
                  skills={category.skills}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills / Leadership */}
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
              <FaUsers className="text-3xl text-secondary" />
              <h2 className="text-3xl font-heading font-bold text-primary">
                Leadership & Soft Skills
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {skillsData.other.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold">{skill.level}%</span>
                  </div>
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-heading font-bold text-primary mb-8 text-center"
            >
              Monitoring & Observability
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {skillsData.monitoring.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-4xl font-heading font-bold text-secondary mb-2">
                    {skill.level}%
                  </div>
                  <div className="text-gray-700 font-medium">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
