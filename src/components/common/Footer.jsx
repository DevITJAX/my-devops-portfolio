import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../../data/personal'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: personalInfo.social.email, label: 'Email' }
  ]

  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1f1f1f]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left — Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[#7d7568] text-sm"
          >
            <span className="font-serif italic text-[#b8b2a6]">aa<span className="text-[#c8ff00]">.</span></span>
            <span className="text-[#2a2a2a]">|</span>
            <span>© {currentYear} {personalInfo.name}</span>
          </motion.div>

          {/* Center — Credit */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xs text-[#5e574e]"
          >
            Inspired by{' '}
            <a 
              href="https://meryem-ajmani.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#7d7568] hover:text-[#c8ff00] transition-colors"
            >
              yemery
            </a>
            {' '}🖤
          </motion.div>

          {/* Right — Social */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex gap-3"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -1 }}
                className="text-[#5e574e] hover:text-[#c8ff00] transition-colors"
                aria-label={label}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
