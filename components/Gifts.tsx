import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GIFTS } from '../constants';

const Gifts: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % GIFTS.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + GIFTS.length) % GIFTS.length);
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="mt-12 mb-16 scroll-mt-24 overflow-hidden" id="gift">
      <div className="text-center px-4 pb-10 pt-5">
        <h2 className="font-display text-primary text-4xl md:text-5xl drop-shadow-sm">
          A Few Surprises!
        </h2>
        <p className="mt-2 text-accent font-medium text-lg">
          Swipe to reveal what I've planned for you.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto h-[450px] md:h-[500px] flex items-center justify-center perspective-1000">

        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {GIFTS.map((gift, index) => {
            let offset = index - activeIndex;
            
            const isActive = index === activeIndex;
            const absOffset = Math.abs(offset);

            if (absOffset > 2) return null;

            const translateX = offset * 60;
            const translateZ = -absOffset * 100;
            const rotateY = offset * 45;
            const scale = 1 - absOffset * 0.1;
            const opacity = isActive ? 1 : 0.6;
            const zIndex = 10 - absOffset;

            return (
              <div
                key={gift.id}
                onClick={() => handleCardClick(index)}
                className={`
                  absolute w-[280px] md:w-[340px] aspect-[3/4] 
                  bg-white rounded-2xl shadow-xl border-4 border-white
                  transition-all duration-500 ease-out
                  cursor-pointer
                  flex flex-col
                `}
                style={{
                  transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  willChange: 'transform, opacity',
                }}
              >
                <div
                  className="w-full h-3/5 bg-cover bg-center rounded-t-xl border-b border-background-light"
                  style={{ backgroundImage: `url("${gift.imageUrl}")` }}
                />

                <div className="p-6 flex flex-col flex-grow text-center bg-white rounded-b-xl">
                  <h3 className="text-accent text-2xl font-bold mb-2 font-display leading-tight">
                    {gift.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {gift.description}
                  </p>
                  
                  {isActive && (
                    <div className="mt-auto pt-4">
                       <span className="inline-block px-4 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-sm">
                         GIFT {index + 1}
                       </span>
                    </div>
                  )}
                </div>
                {!isActive && (
                  <div className="absolute inset-0 bg-white/30 rounded-2xl pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-primary transition-all hover:scale-110 active:scale-95"
          aria-label="Previous Gift"
        >
          <ChevronLeft size={32} />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg text-primary transition-all hover:scale-110 active:scale-95"
          aria-label="Next Gift"
        >
          <ChevronRight size={32} />
        </button>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
          {GIFTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all duration-300
                ${idx === activeIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'}
              `}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gifts;