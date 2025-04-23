import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0   mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div className="bg-zinc-900 rounded-lg p-8 flex flex-col items-center justify-center gap-4">
            <div
              key={counterItems.label}
              className="counter-number text-white text-5xl font-bold  mb-2"
            >
              
                <CountUp
                    suffix={item.suffix}
                    end={item.value}
                    duration={2.75}
                    delay={0}
                    className="text-white text-5xl font-bold mb-2"
                />
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
