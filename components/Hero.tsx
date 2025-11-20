import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden" id="memory">
      <div
        className="relative flex min-h-[70vh] flex-col items-center justify-center p-4"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(248, 232, 242, 1) 0%, rgba(248, 232, 242, 0) 50%), repeating-linear-gradient(45deg, #FADBEF, #FADBEF 10px, #F8E8F2 10px, #F8E8F2 20px)`,
        }}
      >
        {/* Floating Character - Top Left */}
        <div className="absolute top-[15%] left-[10%] md:left-[15%] transform -translate-x-1/2 -translate-y-1/2 opacity-90 animate-bounce duration-[3000ms]">
          <img
            alt="Cartoon characters flying"
            className="w-32 md:w-64 drop-shadow-xl"
            src={IMAGES.heroChar}
          />
        </div>

        {/* Floating Cake - Bottom Right */}
        <div className="absolute bottom-[15%] right-[5%] md:right-[15%] transform translate-x-0 translate-y-0">
          <img
            alt="Birthday cake illustration"
            className="w-40 md:w-72 drop-shadow-xl"
            src={IMAGES.heroCake}
          />
        </div>

        {/* Main Text */}
        <div className="z-10 text-center relative">
          <h1 className="font-display text-7xl md:text-9xl text-white text-stroke tracking-wide drop-shadow-lg hover:scale-105 transition-transform cursor-default">
            HAPPY
          </h1>
          <h1 className="font-display text-7xl md:text-9xl text-white text-stroke mt-2 tracking-wide drop-shadow-lg hover:scale-105 transition-transform cursor-default">
            BIRTHDAY
          </h1>
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 flex w-full justify-between px-4 md:px-12 pointer-events-none">
          <button className="pointer-events-auto bg-white/80 hover:bg-white rounded-full p-3 shadow-lg text-primary transition-all hover:scale-110 active:scale-95">
            <ChevronLeft size={32} strokeWidth={3} />
          </button>
          <button className="pointer-events-auto bg-white/80 hover:bg-white rounded-full p-3 shadow-lg text-primary transition-all hover:scale-110 active:scale-95">
            <ChevronRight size={32} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;