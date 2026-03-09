import About from './components/About/About'
import Contact from './components/contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/projects/projects'

function App() {
  return (
    <div className="min-h-screen app-shell">
      <div className="ambient-layer" aria-hidden="true">
        <span className="orb orb-one"></span>
        <span className="orb orb-two"></span>
        <span className="orb orb-three"></span>
      </div>
      <Navbar />
      <div className="pt-16 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
