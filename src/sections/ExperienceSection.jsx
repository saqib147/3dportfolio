import React from "react";
import TitleHeader from "../components/TitleHeader";
import { skillCards } from "../constants";
import GlowCard from "../components/GlowCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(() => {
     // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray(".timeline-card").forEach((card) => {
        // Animate the card coming in from the left
        // and fade in
        gsap.from(card, {
          // Move the card in from the left
          xPercent: -100,
          // Make the card invisible at the start
          opacity: 0,
          // Set the origin of the animation to the left side of the card
          transformOrigin: "left left",
          // Animate over 1 second
          duration: 1,
          // Use a power2 ease-in-out curve
          ease: "power2.inOut",
          // Trigger the animation when the card is 80% of the way down the screen
          scrollTrigger: {
            // The card is the trigger element
            trigger: card,
            // Trigger the animation when the card is 80% down the screen
            start: "top 80%",
          },
        });
      });
  
      // Animate the timeline height as the user scrolls
      // from the top of the timeline to 70% down the screen
      // The timeline height should scale down from 1 to 0
      // as the user scrolls up the screen
      gsap.to(".timeline", {
        // Set the origin of the animation to the bottom of the timeline
        transformOrigin: "bottom bottom",
        // Animate the timeline height over 1 second
        ease: "power1.inOut",
        // Trigger the animation when the timeline is at the top of the screen
        // and end it when the timeline is at 70% down the screen
        scrollTrigger: {
          trigger: ".timeline",
          start: "top center",
          end: "70% center",
          // Update the animation as the user scrolls
          onUpdate: (self) => {
            // Scale the timeline height as the user scrolls
            // from 1 to 0 as the user scrolls up the screen
            gsap.to(".timeline", {
              scaleY: 1 - self.progress,
            });
          },
        },
      });

      gsap.utils.toArray(".expText").forEach((text) => {
        // Animate the card coming in from the left
        // and fade in
        gsap.from(text, {
          // Move the card in from the left
          xPercent: 0,
          // Make the card invisible at the start
          opacity: 0,
          // Animate over 1 second
          duration: 1,
          // Use a power2 ease-in-out curve
          ease: "power2.inOut",
          // Trigger the animation when the card is 80% of the way down the screen
          scrollTrigger: {
            // The card is the trigger element
            trigger: text,
            // Trigger the animation when the card is 80% down the screen
            start: "top 60%",
          },
        });
      });
  
 
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:p-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Professional Experties" sub="My Skills Overview" />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {skillCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index} />
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} className="h-10 md:h-14 w-10 md:w-14" alt="logo" />
                      </div>
                      <div className="">
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="text-[#839cb5] italic">Responsibilites</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((item, index) => (
                            <li key={index} className="text-[#839cb5] text-lg">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
