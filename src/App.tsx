import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      {/* Scanline overlay effect */}
      <div className="scanlines"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-cyber-darker border-t border-cyber-primary/30 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-mono text-cyber-primary/60 text-sm">
            {'>'} CYBER.DEV © 2077 | <span className="text-cyber-secondary">ALL RIGHTS RESERVED</span>
          </p>
          <p className="font-mono text-cyber-primary/40 text-xs mt-2">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;