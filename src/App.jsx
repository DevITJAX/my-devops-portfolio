import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/common/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <ScrollToTop />
        <Header />
        <main id="main-content" role="main" aria-label="Main content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

