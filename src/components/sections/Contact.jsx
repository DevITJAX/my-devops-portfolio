import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../../data/personal'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      
      console.log('Email sent successfully:', result)
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: personalInfo.social.email, label: 'Email' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="contact" className="section bg-[#161616] dot-grid">
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
              06 — Contact
            </span>
            <h2 className="heading-serif text-5xl md:text-6xl text-[#f0ede6] mb-4">
              Let's Connect
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column — Info (2 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              <p className="text-[#b8b2a6] text-lg leading-relaxed">
                I'm currently looking for a PFE opportunity and would love to hear from you. 
                Whether you have a question or just want to say hi — I'll get back to you.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <a 
                  href={personalInfo.social.email}
                  className="flex items-center gap-3 text-[#b8b2a6] hover:text-[#c8ff00] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg flex items-center justify-center group-hover:border-[#c8ff00]/30 transition-colors">
                    <Mail size={16} className="text-[#c8ff00]" />
                  </div>
                  <span className="text-sm">{personalInfo.email}</span>
                </a>

                <div className="flex items-center gap-3 text-[#b8b2a6]">
                  <div className="w-10 h-10 bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg flex items-center justify-center">
                    <MapPin size={16} className="text-[#c8ff00]" />
                  </div>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>

                <div className="flex items-center gap-3 text-[#b8b2a6]">
                  <div className="w-10 h-10 bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg flex items-center justify-center">
                    <MessageCircle size={16} className="text-[#c8ff00]" />
                  </div>
                  <span className="text-sm">Usually within 24 hours</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-mono text-xs text-[#7d7568] tracking-widest uppercase mb-4">
                  Find Me On
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg flex items-center justify-center text-[#7d7568] hover:text-[#c8ff00] hover:border-[#c8ff00]/30 transition-all duration-200"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column — Form (3 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <div className="bg-[#0d0d0d] border border-[#2a2a2a] p-6 md:p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-[#f0ede6] mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-[#7d7568] text-xs font-mono uppercase tracking-wide mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] rounded-lg text-[#f0ede6] text-sm placeholder-[#5e574e] focus:border-[#c8ff00] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#7d7568] text-xs font-mono uppercase tracking-wide mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] rounded-lg text-[#f0ede6] text-sm placeholder-[#5e574e] focus:border-[#c8ff00] focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[#7d7568] text-xs font-mono uppercase tracking-wide mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] rounded-lg text-[#f0ede6] text-sm placeholder-[#5e574e] focus:border-[#c8ff00] focus:outline-none transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#7d7568] text-xs font-mono uppercase tracking-wide mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] rounded-lg text-[#f0ede6] text-sm placeholder-[#5e574e] focus:border-[#c8ff00] focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-[#c8ff00] hover:bg-[#b0e000] disabled:bg-[#2a2a2a] disabled:text-[#7d7568] text-[#0d0d0d] py-3.5 px-6 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#0d0d0d] border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {/* Success */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[#c8ff00]/5 border border-[#c8ff00]/20 text-[#c8ff00] px-4 py-3 rounded-lg text-center text-sm"
                    >
                      ✓ Thanks for your message! I'll get back to you soon.
                    </motion.div>
                  )}

                  {/* Error */}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[#e63946]/5 border border-[#e63946]/20 text-[#e63946] px-4 py-3 rounded-lg text-center text-sm"
                    >
                      ✗ Something went wrong. Please try again or email me directly.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
