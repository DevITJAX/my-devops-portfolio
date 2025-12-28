import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { projects } from '../../data/projects'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  // Get unique categories from projects
  const allCategories = [...new Set(projects.map(project => project.category))]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

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

  return (
    <section id="projects" className="section bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="font-mono text-primary-400">.projects()</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto rounded mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setFilter('all')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === 'all'
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                All Projects
                <span className="ml-2 px-2 py-0.5 bg-black/20 rounded-full text-xs">
                  {projects.length}
                </span>
              </button>
              {allCategories.map((category) => {
                const count = projects.filter(p => p.category === category).length
                return (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === category
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                  >
                    {category}
                    <span className="ml-2 px-2 py-0.5 bg-black/20 rounded-full text-xs">
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-lg overflow-hidden hover-lift group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-700 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                      <div className="text-6xl opacity-20">
                        {project.technologies[0] === 'React' ? '⚛️' :
                          project.technologies[0] === 'Vue.js' ? '💚' :
                            project.technologies[0] === 'Node.js' ? '🟢' : '💻'}
                      </div>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </div>
                  )}

                  {/* Overlay Links */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-400 transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-2 px-4 rounded text-sm font-semibold transition-colors"
                      >
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <div className="text-gray-400 text-lg">
                No projects found with the selected technology.
              </div>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 text-primary-400 hover:text-primary-300 font-semibold"
              >
                Show all projects
              </button>
            </motion.div>
          )}

          {/* Terminal-style Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gray-800 p-6 rounded-lg font-mono text-sm"
          >
            <div className="text-gray-500 mb-2">
              <span className="text-primary-400">abdessamad@portfolio:~$</span> ls -la projects/
            </div>
            <div className="text-gray-300 space-y-1">
              <div>Total Projects: {projects.length}</div>
              <div>Featured: {projects.filter(p => p.featured).length}</div>
              <div>Categories: {allCategories.length}</div>
              <div>Status: All projects deployed and maintained</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
