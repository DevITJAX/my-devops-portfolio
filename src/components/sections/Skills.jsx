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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const categoryKeys = Object.keys(skillCategories)

  return (
    <section id="skills" className="section bg-gray-900">
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
              <span className="font-mono text-primary-400">.skills()</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto rounded mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categoryKeys.map((categoryKey) => {
              const category = skillCategories[categoryKey]
              return (
                <button
                  key={categoryKey}
                  onClick={() => setActiveCategory(categoryKey)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                    activeCategory === categoryKey
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.title}</span>
                </button>
              )
            })}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg hover-lift"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span className="text-primary-400 font-mono text-sm">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full"
                  />
                </div>

                {/* Skill Level Indicator */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < Math.floor(skill.level / 20)
                          ? 'bg-primary-400'
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Additional Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Infrastructure as Code',
                'CI/CD Pipelines',
                'Container Orchestration',
                'Cloud Security',
                'Monitoring & Logging',
                'Microservices Architecture',
                'Automation Scripting',
                'Cloud Migration'
              ].map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 p-4 rounded-lg text-center hover-lift"
                >
                  <span className="text-gray-300 text-sm font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Terminal-style Command */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gray-900 p-6 rounded-lg font-mono text-sm"
          >
            <div className="text-gray-500 mb-2">
              <span className="text-primary-400">abdessamad@portfolio:~$</span> npm list --depth=0
            </div>
            <div className="text-gray-300 space-y-1">
              {skillCategories[activeCategory].skills.slice(0, 5).map((skill) => (
                <div key={skill.name}>
                  ├── {skill.name.toLowerCase()}@{skill.level}%
                </div>
              ))}
              <div>└── ... and more!</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
