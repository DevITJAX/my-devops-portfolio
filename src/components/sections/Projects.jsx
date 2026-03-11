import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const allCategories = [...new Set(projects.map(project => project.category))]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
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
    <section id="projects" className="section bg-[#161616] dot-grid">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <span className="font-mono text-xs text-[#c8ff00] tracking-widest uppercase mb-3 block">
              04 — Projects
            </span>
            <h2 className="heading-serif text-5xl md:text-6xl text-[#f0ede6] mb-4">
              What I've Built
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${filter === 'all'
                  ? 'bg-[#c8ff00] text-[#0d0d0d]'
                  : 'text-[#7d7568] hover:text-[#b8b2a6] border border-[#2a2a2a] hover:border-[#c8ff00]/30'
                  }`}
              >
                All
                <span className="ml-2 text-xs opacity-60">{projects.length}</span>
              </button>
              {allCategories.map((category) => {
                const count = projects.filter(p => p.category === category).length
                return (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${filter === category
                      ? 'bg-[#c8ff00] text-[#0d0d0d]'
                      : 'text-[#7d7568] hover:text-[#b8b2a6] border border-[#2a2a2a] hover:border-[#c8ff00]/30'
                      }`}
                  >
                    {category}
                    <span className="ml-2 text-xs opacity-60">{count}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg overflow-hidden hover:border-[#c8ff00]/40 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-44 bg-[#141414] overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c8ff00]/5 to-[#e63946]/5 flex items-center justify-center">
                      <span className="text-4xl opacity-20">
                        {project.technologies[0] === 'React' ? '⚛️' :
                          project.technologies[0] === 'Vue.js' ? '💚' :
                            project.technologies[0] === 'Node.js' ? '🟢' : '◆'}
                      </span>
                    </div>
                  )}

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 bg-[#c8ff00] text-[#0d0d0d] px-2.5 py-0.5 rounded text-xs font-bold tracking-wide uppercase">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#f0ede6] mb-2 group-hover:text-[#c8ff00] transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-[#7d7568] text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[#7d7568] border border-[#1f1f1f] rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[#5e574e] text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#b8b2a6] hover:text-[#c8ff00] transition-colors group/link"
                    >
                      <Github size={14} />
                      <span>Source</span>
                      <ArrowUpRight size={12} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <p className="text-[#7d7568] text-lg mb-3">No projects in this category.</p>
              <button
                onClick={() => setFilter('all')}
                className="text-[#c8ff00] hover:underline font-medium text-sm"
              >
                Show all projects
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
