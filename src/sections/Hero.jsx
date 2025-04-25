import React, { use } from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(()=>{
    gsap.fromTo('.hero-text h1',{
      y: 50,
      opacity: 0,

    },{
      y: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 1,
      ease: "power2.inOut",
    }
  )
  })
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="top-0 left-0 z-10 absolute">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Left */}

        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-4">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-3 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results.</h1>
            </div>
              <p className="text-white-50 md:text-xl relative z-10">
                Hi, I'm Saqib Arshad. A developer based in Pakistan with a
                passion for Coding.
              </p>
              <Button className="md:w-80 md:h-16 w-60 h-12" id='button' text="See my Work" />
          </div>
        </header>

        {/* Right */}
        <figure>
            <div className="hero-3d-layout">

                <HeroExperience />
            </div>
        </figure>
      </div>
      <AnimatedCounter />
      
    </section>
  );
};

export default Hero;
