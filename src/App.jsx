import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Hackathons from './components/Hackathons'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VoxelBackground from './components/ui/VoxelBackground'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-night text-white">
      <VoxelBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Hackathons />
        <Experience />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
