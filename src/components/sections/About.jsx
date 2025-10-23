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
        staggerChildren: 0.2
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

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Calendar, label: 'Academic Year', value: '5th Year' },
    { icon: MapPin, label: 'Location', value: personalInfo.location }
  ]

  return (
    <section id="about" className="section bg-gray-800">
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
              <span className="font-mono text-primary-400">.about()</span>
            </h2>
            <div className="w-24 h-1 bg-primary-400 mx-auto rounded"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate and driven Computer Science Engineering student in my 5th year at EMSI, specializing in DevOps and Cloud Computing. I have a strong interest in Infrastructure as Code, CI/CD pipelines, and cloud-native solutions, and I enjoy exploring how these technologies can be integrated into modern applications.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  With hands-on experience in both cloud platforms and DevOps tools, I build robust, scalable, and automated solutions using tools like AWS, Azure, Docker, Kubernetes, Terraform, and Python, along with solid foundations in Linux administration and software engineering principles.
                </p>
              </div>

              {/* Tech Stack Preview */}
              <motion.div 
                variants={itemVariants}
                className="mt-8"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-400">
                  Current Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'Express.js', 'React', 'Node.js', 'Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Python'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700 p-6 rounded-lg text-center hover-lift"
                  >
                    <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Personal Info Card */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-400">
                  Personal Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary-400" />
                    <span className="text-gray-300">Looking for PFE opportunity</span>
                  </div>
                </div>
              </motion.div>

              {/* Terminal-style Code Block */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-900 p-6 rounded-lg font-mono text-sm"
              >
                <div className="text-gray-500 mb-2">
                  <span className="text-primary-400">abdessamad@portfolio:~$</span> whoami
                </div>
                <div className="text-gray-300 mb-2">
                  {personalInfo.name.toLowerCase().replace(' ', '_')}
                </div>
                <div className="text-gray-500 mb-2">
                  <span className="text-primary-400">abdessamad@portfolio:~$</span> cat skills.txt
                </div>
                <div className="text-gray-300">
                  MERN Stack | DevOps Engineer | AI Enthusiast | Azure | AWS | Docker | Kubernetes
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
