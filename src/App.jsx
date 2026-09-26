

import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary-600">JK</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-600 hover:text-primary-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-primary-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
            </div>
          </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'JavaScript', 'React', 'Node.js', 'Python', 
              'Django', 'PostgreSQL', 'Git', 'Docker',
              'REST APIs', 'HTML/CSS', 'TypeScript', 'MongoDB'
            ].map((skill) => (
              <div key={skill} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <span className="text-gray-800 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Storyboard Project */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">S</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Storyboard Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Developed reporting features for storyboard.treeo.one, including the STIHL report system with advanced data visualization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Dashboard</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Reports</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Data Viz</span>
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
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">U</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Uboravibes</h3>
                <p className="text-gray-600 mb-4">
                  A personal project showcasing modern web development practices and creating engaging user experiences.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Full Stack</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Web App</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Personal</span>
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
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">T</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Treeo Cloud Platform</h3>
                <p className="text-gray-600 mb-4">
                  Contributing to the development of cloud.treeo.one, a comprehensive cloud-based platform for business solutions.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Cloud</span>
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

            {/* CCMAS Project */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-6xl font-bold">C</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">CCMAS</h3>
                <p className="text-gray-600 mb-4">
                  A web application deployed on Netlify, demonstrating modern deployment practices and responsive design.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Web App</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Netlify</span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Responsive</span>
                </div>
                <a 
                  href="https://ccmas.netlify.app/" 
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
            © 2024 John Kalyango. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
