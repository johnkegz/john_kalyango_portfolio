

import { useState } from 'react'
import './index.css'
import storyboardImage from './assets/storyboard.png'
import uboravibesImage from './assets/uboravibes.png'
import treeocloudImage from './assets/treeocloud.png'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary-600">JK</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-primary-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-primary-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#skills" 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-primary-600">John Kalyango</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex justify-center gap-4">
              <a href="#projects" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                View My Work
              </a>
              <a href="#contact" className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm a passionate full-stack developer with experience in creating robust web applications and innovative solutions. 
              I focus on writing clean, efficient code and building user-friendly interfaces that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently working at Treeo, I contribute to cloud-based solutions and help build tools that make a difference. 
              I'm always eager to learn new technologies and take on challenging projects.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular', 'Redux', 'React Native', 'HTML5', 'CSS / Tailwind CSS'].map((skill) => (
                  <span key={skill} className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'NestJS', 'Python', 'FastAPI', 'Flask', 'Django', 'REST APIs'].map((skill) => (
                  <span key={skill} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'PostGIS', 'MongoDB', 'SQLite', 'Sequelize', 'SQLAlchemy'].map((skill) => (
                  <span key={skill} className="bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cloud & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Google Cloud Platform (GCP)', 'Docker', 'GitHub Actions', 'CI/CD', 'Google Cloud Run', 'Google Cloud Storage', 'Pub/Sub'].map((skill) => (
                  <span key={skill} className="bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-orange-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing & Monitoring */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Testing & Monitoring</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Jest', 'Supertest', 'Sentry', 'Grafana'].map((skill) => (
                  <span key={skill} className="bg-red-50 text-red-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Modern Development */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI & Modern Development</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Cursor', 'Claude Code', 'GitHub Copilot', 'Ollama', 'LLM integration', 'Prompt Engineering'].map((skill) => (
                  <span key={skill} className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Other</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'OAuth2 / OIDC', 'JWT', 'Mapbox', 'Stripe', 'PostGIS / Geospatial APIs'].map((skill) => (
                  <span key={skill} className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Storyboard Project */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={storyboardImage} alt="Storyboard Reporting" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">TRREO Storyboard</h3>
                <p className="text-gray-600 mb-4">
                Organizations can view reports on carbon impact, tree growth, and expected carbon capture, helping them track results and plan ahead
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Reports</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Data Visualization</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Analytics</span>
                </div>
                <a 
                  href="https://storyboard.treeo.one/stihl/report" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Uboravibes Project */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={uboravibesImage} alt="Uboravibes" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Uboravibes</h3>
                <p className="text-gray-600 mb-4">
                  Helps people discover events, places, and experiences wherever they are, while giving businesses and organizers a simple way to list and promote what they offer.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Optical Character Recognition</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Large Language Model</span>
                </div>
                <a 
                  href="http://uboravibes.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Treeo Project */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={treeocloudImage} alt="Treeo Cloud Platform" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">TREEO cloud</h3>
                <p className="text-gray-600 mb-4">
                  TREEO Cloud brings tree data together in one place for easy collection, visualization, and analysis.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Data Visualization</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Data Collection</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Farmer Profiling</span>
                </div>
                <a 
                  href="https://cloud.treeo.one/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  View Project →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Get In Touch</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-600 text-center mb-8">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="mailto:john@example.com" 
                className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 John Kalyango.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
