import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Code, Coffee } from 'lucide-react'
import { personalInfo } from '../../data/personal'

const About = () => {
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

  const stats = [
    { icon: Code, label: 'Projects', value: '10+' },
    { icon: Coffee, label: 'Coffee Cups', value: '1000+' },
    { icon: Calendar, label: 'Graduated', value: '2026' },
    { icon: MapPin, label: 'Based In', value: 'Rabat' }
  ]

  return (
    <section id="about" className="section bg-[#0d0d0d]">
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
              01 — About
            </span>
            <h2 className="heading-serif text-5xl md:text-6xl text-[#f0ede6] mb-4">
              Who I Am
            </h2>
            <div className="section-divider"></div>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column — Bio (3 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
              <p className="text-[#b8b2a6] text-lg leading-relaxed">
                I'm a passionate and driven Computer Science Engineer, a graduate of EMSI, specializing in DevOps, Cloud Computing, and ServiceNow consulting. I have a strong interest in Infrastructure as Code, CI/CD pipelines, cloud-native solutions, and IT service management, and I enjoy exploring how these technologies can be integrated into modern applications.
              </p>
              
              <p className="text-[#b8b2a6] text-lg leading-relaxed">
                With hands-on experience in cloud platforms, DevOps tools, and the ServiceNow platform, I build robust, scalable, and automated solutions using tools like AWS, Azure, Docker, Kubernetes, Terraform, ServiceNow, and Python, along with solid foundations in Linux administration and software engineering principles.
              </p>

              {/* Tech Stack */}
              <div className="pt-4">
                <h3 className="font-mono text-xs text-[#7d7568] tracking-widest uppercase mb-4">
                  Current Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'Express.js', 'React', 'Node.js', 'Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'ServiceNow', 'Python'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#161616] text-[#b8b2a6] border border-[#2a2a2a] rounded text-sm font-mono hover:border-[#c8ff00] hover:text-[#c8ff00] transition-colors duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column — Stats + Terminal (2 cols) */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.03 }}
                    className="bg-[#161616] border border-[#2a2a2a] p-5 rounded-lg text-center hover-border-accent"
                  >
                    <stat.icon className="w-5 h-5 text-[#c8ff00] mx-auto mb-2" />
                    <div className="text-2xl font-bold text-[#f0ede6] mb-0.5 font-serif">
                      {stat.value}
                    </div>
                    <div className="text-[#7d7568] text-xs font-mono uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Terminal — Signature Element */}
              <motion.div
                variants={itemVariants}
                className="bg-[#141414] border border-[#2a2a2a] p-5 rounded-lg font-mono text-sm"
              >
                <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-[#1f1f1f]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#e63946]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#c8ff00]/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#c8ff00]"></div>
                  <span className="text-[#7d7568] text-xs ml-2">terminal</span>
                </div>
                <div className="space-y-1.5">
                  <div className="text-[#7d7568]">
                    <span className="text-[#c8ff00]">→</span> whoami
                  </div>
                  <div className="text-[#b8b2a6]">
                    {personalInfo.name.toLowerCase().replace(' ', '_')}
                  </div>
                  <div className="text-[#7d7568]">
                    <span className="text-[#c8ff00]">→</span> cat role.txt
                  </div>
                  <div className="text-[#b8b2a6]">
                    Software Engineer | ServiceNow Consultant | Cloud & DevOps
                  </div>
                  <div className="text-[#7d7568]">
                    <span className="text-[#c8ff00]">→</span> echo $STATUS
                  </div>
                  <div className="text-[#c8ff00]">
                    Open to full-time roles ●
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
