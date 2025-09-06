import { useEffect, useState } from 'react'

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  return (
    <nav style={{
      background: scrollY > 100 ? 'rgba(10, 10, 15, 0.95)' : 'rgba(10, 10, 15, 0.9)'
    }}>
      <div className="nav-container">
        <div className="logo">AutoSecLabs</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
