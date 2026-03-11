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
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section id="experience" className="section bg-[#0d0d0d]">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="font-mono text-xs text-[#c8ff00] tracking-widest uppercase mb-3 block">
              03 — Experience
            </span>
            <h2 className="heading-serif text-5xl md:text-6xl text-[#f0ede6] mb-4">
              Where I've Been
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-[#2a2a2a]"></div>

            {/* Experience Items */}
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[18px] md:left-[26px] top-2 w-3 h-3 rounded-full border-2 border-[#c8ff00] bg-[#0d0d0d] z-10"></div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-6 hover-border-accent"
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[#f0ede6] mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="text-[#b8b2a6] flex items-center gap-1">
                            <ExternalLink size={13} />
                            {exp.company}
                          </span>
                          <span className="text-[#7d7568] flex items-center gap-1">
                            <MapPin size={13} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-[#c8ff00] flex items-center gap-1 whitespace-nowrap">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-[#b8b2a6] text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-[#0d0d0d] text-[#7d7568] border border-[#1f1f1f] rounded text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-[#b8b2a6] text-sm flex items-start"
                          >
                            <span className="text-[#c8ff00] mr-2 mt-0.5 text-xs">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
