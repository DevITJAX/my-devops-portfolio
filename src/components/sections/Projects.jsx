import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter, X } from 'lucide-react'
import { projects } from '../../data/projects'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))]
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.technologies.includes(filter))

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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="font-mono text-primary-400">.projects()</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto rounded mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Filter Controls */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                <Filter size={20} />
                <span>Filter by Technology</span>
              </button>

              {/* Active Filter Display */}
              {filter !== 'all' && (
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Filtered by:</span>
                  <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-mono">
                    {filter}
                  </span>
                  <button
                    onClick={() => setFilter('all')}
                    className="text-gray-400 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Filter Options */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 bg-gray-800 rounded-lg"
              >
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1 rounded-full text-sm font-mono transition-colors ${filter === 'all'
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                  >
                    All Projects
                  </button>
                  {allTechnologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setFilter(tech)}
                      className={`px-3 py-1 rounded-full text-sm font-mono transition-colors ${filter === tech
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
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
              <div>Technologies: {allTechnologies.length}+</div>
              <div>Status: All projects deployed and maintained</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
