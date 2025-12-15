import { useEffect } from "react"
import BackToTop from "./components/BackToTop/BackToTop"
import Footer from "./components/layout/Footer/Footer"
import Navbar from "./components/layout/Navbar/Navbar"
import About from "./sections/About/About"
import Contact from "./sections/Contact/Contact"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills"
import Project from "./sections/Project"

const App = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <>
      <div className="flex flex-col font-inter min-h-screen bg-gray-700 text-slate-100">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Project />
          {/* <Projects /> */}
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App
