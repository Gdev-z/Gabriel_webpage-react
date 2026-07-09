import { useLenis } from './hooks/useLenis'
import LoadingOverlay from './components/LoadingOverlay'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Intro from './components/Intro'
import ScrollingImages from './components/ScrollingImages'
import ProjectHighlights from './components/ProjectHighlights'
import Achievements from './components/Achievements'
import VideoReel from './components/VideoReel'
import LogoTicker from './components/LogoTicker'
import Footer from './components/Footer'
import styles from './App.module.css'

function App() {
  useLenis()

  return (
    <div id="top" className={styles.app}>
      <LoadingOverlay />
      <Navigation />
      <main>
        <Hero />
        <Intro />
        <ScrollingImages />
        <ProjectHighlights />
        <Achievements />
        <VideoReel />
        <LogoTicker />
      </main>
      <Footer />
    </div>
  )
}

export default App
