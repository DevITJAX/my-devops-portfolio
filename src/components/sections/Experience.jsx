import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react'
import { experience } from '../../data/experience'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="section bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="font-mono text-primary-400">.experience()</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto rounded mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              My professional journey and the experiences that shaped me
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-400 transform md:-translate-x-0.5"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-400 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-700 p-6 rounded-lg hover-lift"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-gray-400 text-sm">
                            <div className="flex items-center space-x-1">
                              <ExternalLink size={16} />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 text-primary-400 text-sm font-mono">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-600 text-gray-300 rounded-full text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                          <Award size={16} className="mr-1" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm flex items-start"
                            >
                              <span className="text-primary-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Terminal-style Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gray-900 p-6 rounded-lg font-mono text-sm"
          >
            <div className="text-gray-500 mb-2">
              <span className="text-primary-400">abdessamad@portfolio:~$</span> cat experience.txt
            </div>
            <div className="text-gray-300 space-y-1">
              <div>Total Experience: {experience.length} positions</div>
              <div>Current Role: DevOps & Cloud Engineer</div>
              <div>Cloud Platforms: Azure, Docker, Kubernetes</div>
              <div>CI/CD Tools: GitHub Actions, Docker, Azure App Services</div>
              <div>DevOps Technologies: {new Set(experience.flatMap(exp => exp.technologies).filter(tech => 
                ['Docker', 'Kubernetes', 'GitHub Actions', 'Azure', 'LDAP', 'Spring Boot', 'CI/CD'].includes(tech)
              )).size}+</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
