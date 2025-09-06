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
          <h1>Your Trusted Partner for QA, Security & Automation</h1>
          <h2>Helping SaaS & Startups deliver reliable, secure, and scalable products</h2>
          <a href="#contact" className="cta-button">Get Free Consultation</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
