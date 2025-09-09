import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import Scene from './Scene'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1>Transform Your Digital Vision Into Reality</h1>
          <h2>Premium IT Services for Global Enterprises</h2>
          <p className="hero-description">
            We deliver premium quality assurance, automation, and development solutions with a commitment 
            to tangible business results. Our elite team works across international markets to help you 
            create more competitive and sustainable businesses.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="cta-button primary">Get Started Today</a>
            <a href="#services" className="cta-button secondary">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
