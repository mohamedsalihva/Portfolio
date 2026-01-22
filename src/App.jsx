import About from './components/About/About'
import Contact from './components/contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/projects/projects'

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="pt-16">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App