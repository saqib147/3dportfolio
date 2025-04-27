import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../constants/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const TechStack = () => {
 
  useGSAP(()=>{
    gsap.fromTo('.tech-card', {
      y: 50, 
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#skills',
        start: 'top center',
        
      },
    })
  })


  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-10'>
        <TitleHeader 
        title="My Preferred Tech Stack"
        sub="What I use to build amazing things"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div className=" card-border tech-card overflow-hidden group xl:rounded-4xl rounded-lg" key={icon.title}>
              <div className='tech-card-animated-bg' />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default TechStack