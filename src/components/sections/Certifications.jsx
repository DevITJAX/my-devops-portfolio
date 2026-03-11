import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, Building2, ExternalLink } from 'lucide-react'
import { certifications } from '../../data/certifications'

const Certifications = () => {
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

  const sortedCertifications = [...certifications].sort((a, b) => {
    if (a.status === 'in-progress' && b.status !== 'in-progress') return -1
    if (a.status !== 'in-progress' && b.status === 'in-progress') return 1
    return 0
  })

  const getStatusBadge = (status) => {
    if (status === 'preparing') {
      return (
        <span className="px-2 py-0.5 bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 rounded text-xs font-mono">
          preparing
        </span>
      )
    }
    if (status === 'in-progress') {
      return (
        <span className="px-2 py-0.5 bg-[#c8ff00]/10 text-[#c8ff00] border border-[#c8ff00]/20 rounded text-xs font-mono">
          in progress
        </span>
      )
    }
    if (status === 'earned') {
      return (
        <span className="px-2 py-0.5 bg-[#c8ff00]/10 text-[#c8ff00] border border-[#c8ff00]/20 rounded text-xs font-mono">
          earned
        </span>
      )
    }
    return null
  }

  return (
    <section id="certifications" className="section bg-[#0d0d0d]">
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
              05 — Certifications
            </span>
            <h2 className="heading-serif text-5xl md:text-6xl text-[#f0ede6] mb-4">
              Credentials
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {sortedCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group bg-[#161616] border border-[#2a2a2a] rounded-lg p-5 hover:border-[#c8ff00]/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-[#c8ff00] mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-[#f0ede6] leading-tight">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[#7d7568] text-xs mt-1">
                        <Building2 size={12} />
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#7d7568] text-sm mb-3 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[#7d7568] border border-[#1f1f1f] rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {cert.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-[#5e574e] text-xs">
                      +{cert.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-[#1f1f1f]">
                  <div className="flex items-center gap-3">
                    <span className="text-[#7d7568] text-xs font-mono flex items-center gap-1">
                      <Calendar size={11} />
                      {cert.date}
                    </span>
                    {getStatusBadge(cert.status)}
                  </div>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7d7568] hover:text-[#c8ff00] transition-colors"
                      aria-label="Verify certification"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {certifications.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-16"
            >
              <Award className="w-12 h-12 text-[#2a2a2a] mx-auto mb-3" />
              <p className="text-[#7d7568]">No certifications found.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
