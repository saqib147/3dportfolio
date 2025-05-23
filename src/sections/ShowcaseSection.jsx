import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  
 

  useGSAP(() => {
    const projects = [
        project1Ref.current,
        project2Ref.current,
        project3Ref.current,
      ];
    projects.forEach((project, index) => {
        gsap.fromTo(
          project,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1), scrollTrigger: { trigger: project, start: "top bottom-=100" } }
        );
      });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1,delay: 1, duration: 1 }
    );
  }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" />
            </div>
            <div className="text-content">
              <h2>
                Zentry is a dynamic Web3 ecosystem that aims to bridge the gap
                between people's digital and physical lives.
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React.js, Tailwind, Node.js, GSAP and Frammer
                motion.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="project-list-wrapper overflow-hidden">
          <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" />
              </div>
              <h2>Gadget Gizmo - An Ecommerce Tech Platform</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" />
              </div>
              <h2>Ecommerce Admin Dasboard using React</h2>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
