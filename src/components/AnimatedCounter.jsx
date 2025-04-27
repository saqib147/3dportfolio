import React, { useEffect, useRef } from "react";
import { counterItems } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);

  useEffect(() => {
    const cards = counterRef.current.querySelectorAll(".counter-card");

    // Animate cards (fade up)
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger:  0.2,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animate counter values
    const counters = counterRef.current.querySelectorAll(".counter-number");
    counters.forEach((counter) => {
      const endValue = counter.getAttribute("data-end");

      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 2.5,
          delay: 0.7,
          scrollTrigger: {
            trigger: counter,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
          snap: { innerText: 1 }, 
          onUpdate: function () {
            counter.innerText = `${Math.ceil(this.targets()[0].innerText)}+`; 
          },
        }
      );
    });
  }, []);

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32" ref={counterRef}>
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="counter-card bg-zinc-900 rounded-lg p-8 flex flex-col items-center justify-center gap-4"
          >
            <div
              className="counter-number text-white text-5xl font-bold mb-2"
              data-end={item.value} // Store the end value as a data attribute
            >
              0
            </div>
            <div className="counter-label text-white-50 text-lg font-medium">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
