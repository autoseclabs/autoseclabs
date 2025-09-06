import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import GlobalPresence from './components/GlobalPresence'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles.css'
import Landing from "./Landing";




function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(target.getAttribute('href')!)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          })
        }
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  useEffect(() => {
    // Scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in')
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', animateOnScroll)
    animateOnScroll() // Initial check

    return () => window.removeEventListener('scroll', animateOnScroll)
  }, [])

  return (
    <div className="App">
      <Navbar scrollY={scrollY} />
      <Hero />
      <Features />
      <Services />
      <Industries />
      <Testimonials />
      <Process />
      <GlobalPresence />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
  function App() {
  return <Landing />;
}

}

export default App
