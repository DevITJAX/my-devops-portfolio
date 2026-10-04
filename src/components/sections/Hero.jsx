import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Mail } from 'lucide-react'
import { personalInfo } from '../../data/personal'

const Hero = () => {
  const roles = [
    'DevOps Engineer',
    'Cloud Solutions Architect',
    'ServiceNow Consultant',
    'Full-Stack Developer',
    'Kubernetes Specialist',
    'CI/CD Pipeline Expert',
  ]

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d0d0d]">
        <div className="absolute inset-0 dot-grid opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(200,255,0,0.04),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(230,57,70,0.03),transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="font-mono text-sm text-[#c8ff00] tracking-widest uppercase">
              Software Engineer
            </span>
          </motion.div>

          {/* Name — Big Serif */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="heading-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 leading-[0.9] tracking-tight"
          >
            <span className="text-[#f0ede6]">{personalInfo.name.split(' ')[0]}</span>
            <br />
            <span className="text-[#c8ff00] italic">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          {/* Role Rotator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-8 text-xl md:text-2xl text-[#b8b2a6] font-light"
          >
            <span className="text-[#7d7568]">I build as a </span>
            <span className="role-rotator text-[#f0ede6]">
              <span className="role-rotator-inner">
                {roles.map((role, i) => (
                  <span key={i}>{role}</span>
                ))}
              </span>
            </span>
          </motion.div>

          {/* Brief Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-[#b8b2a6] text-lg max-w-2xl leading-relaxed mb-12"
          >
            EMSI computer science engineering graduate specializing in DevOps, Cloud Computing, ServiceNow, and Full-Stack Development. 
            Building robust, scalable infrastructure with Azure, Docker, Kubernetes, Terraform, and ServiceNow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#c8ff00] text-[#0d0d0d] px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2 hover:bg-[#b0e000]"
            >
              <span>View Resume</span>
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href={personalInfo.social.email}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border border-[#2a2a2a] text-[#f0ede6] hover:border-[#c8ff00] hover:text-[#c8ff00] px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Mail size={16} />
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-20 flex items-center space-x-3"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-[#7d7568] hover:text-[#c8ff00] transition-colors duration-200"
              aria-label="Scroll down"
            >
              <ChevronDown size={20} />
            </motion.button>
            <span className="font-mono text-xs text-[#7d7568] tracking-wide">scroll to explore</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
