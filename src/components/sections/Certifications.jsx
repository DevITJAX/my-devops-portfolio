import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react'
import { certifications } from '../../data/certifications'

const Certifications = () => {
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
    <section id="certifications" className="section bg-gray-800">
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
              <span className="font-mono text-primary-400">.certifications()</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto rounded mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional certifications that validate my expertise in cloud computing, DevOps, and system administration.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-700 rounded-lg p-6 hover-lift relative"
              >
                {/* Preparing Badge */}
                {cert.status === 'preparing' && (
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    In Progress
                  </div>
                )}

                {/* Certificate Icon */}
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-primary-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Building2 size={14} className="mr-1" />
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {cert.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs font-mono">
                      +{cert.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Certificate Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-2" />
                    Issued: {cert.date}
                  </div>
                  <div className="text-gray-400 text-sm font-mono">
                    ID: {cert.credentialId}
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>

          {/* No Certifications Message */}
          {certifications.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No certifications found.</p>
            </motion.div>
          )}

          {/* Terminal-style Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gray-900 p-6 rounded-lg font-mono text-sm"
          >
            <div className="text-gray-500 mb-2">
              <span className="text-primary-400">abdessamad@portfolio:~$</span> ls -la certifications/
            </div>
            <div className="text-gray-300 space-y-1">
              <div>Total Certifications: {certifications.length}</div>
              <div>Completed: {certifications.filter(c => !c.status).length}</div>
              <div>Preparing: {certifications.filter(c => c.status === 'preparing').length}</div>
              <div>Cloud & DevOps: {certifications.filter(c => 
                c.technologies.some(t => ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Cloud', 'DevOps'].includes(t))
              ).length}</div>
              <div>Latest: {Math.max(...certifications.map(c => parseInt(c.date)))}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
