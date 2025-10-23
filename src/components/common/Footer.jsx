import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { personalInfo } from '../../data/personal'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: personalInfo.social.email, label: 'Email' }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0"
          >
            <span>© {currentYear} {personalInfo.name}</span>
            <Heart size={16} className="text-red-500" />
            <span>Made with React & Vite</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Terminal-style signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center"
        >
          <div className="font-mono text-xs text-gray-500">
            <div className="terminal-prompt">echo "Thanks for visiting!"</div>
            <div className="text-primary-400">Thanks for visiting!</div>
          </div>
           <div className="mt-2 text-xs text-gray-500">
             Inspired by my dear friend <a href="https://meryem-ajmani.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">yemery</a> 🖤
           </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
