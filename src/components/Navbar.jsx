import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants/index.js'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 10;
          setScrolled(isScrolled);
        };
      
        window.addEventListener("scroll", handleScroll);
      
        // Proper cleanup function
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
            <a href="#hero" className="logo">Saqib Arshad</a>
            <nav className='desktop'>
                <ul>
                    {navLinks.map((link, name) => (
                       <li key={name} className='group'>
                        <a href={link.link}>
                            <span>{link.name}</span>
                            <span className='underline' />
                        </a>
                       </li> 
                    ))}
                </ul>
            </nav>
            <a href="$contact" className='contact-btn group'>
                <div className="inner">
                    <span>Contact Me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar