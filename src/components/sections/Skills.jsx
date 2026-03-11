import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('fullstack')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const categoryKeys = Object.keys(skillCategories)

  // Combine current category skills with additional skills
  const additionalSkills = [
    'Infrastructure as Code',
    'CI/CD Pipelines',
    'Container Orchestration',
    'Cloud Security',
    'Monitoring & Logging',
    'Microservices Architecture',
    'Automation Scripting',
    'Cloud Migration'
  ]

  return (
    <section id="skills" className="section bg-[#161616] dot-grid">
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
              02 — Skills
            </span>
            <h2 className="heading-serif text-5xl md:text-6xl text-[#f0ede6] mb-4">
              What I Use
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-12">
            {categoryKeys.map((categoryKey) => {
              const category = skillCategories[categoryKey]
              return (
                <button
                  key={categoryKey}
                  onClick={() => setActiveCategory(categoryKey)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeCategory === categoryKey
                      ? 'bg-[#c8ff00] text-[#0d0d0d]'
                      : 'bg-[#1e1e1e] text-[#b8b2a6] border border-[#2a2a2a] hover:border-[#c8ff00]/30 hover:text-[#f0ede6]'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.title}</span>
                </button>
              )
            })}
          </motion.div>

          {/* Skills Tag Cloud */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="group px-5 py-3 bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg cursor-default transition-all duration-200 hover:border-[#c8ff00] hover:shadow-[0_0_20px_rgba(200,255,0,0.06)]"
              >
                <span className="text-[#f0ede6] text-sm font-medium group-hover:text-[#c8ff00] transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="font-mono text-xs text-[#7d7568] tracking-widest uppercase mb-6">
              Also Experienced With
            </h3>
            <div className="flex flex-wrap gap-2">
              {additionalSkills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.04 }}
                  className="px-4 py-2 bg-[#0d0d0d] border border-[#1f1f1f] rounded text-[#7d7568] text-sm hover:text-[#b8b2a6] hover:border-[#2a2a2a] transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
