import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Wishes: React.FC = () => {
  const fullText = "On this special day, November 21st, your birthday, I wish you endless beauty, great success in your studies, and abundant luck in all your academic endeavors and future plans.And most of all, I hope we continue to love each other for a long, long time, celebrating many, many more birthdays together.";
  const [displayedText, setDisplayedText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [zIndexAdjustment, setZIndexAdjustment] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const slideTimeout = setTimeout(() => {
        setZIndexAdjustment(true);
      }, 300); 

      const typingStartTimeout = setTimeout(() => {
        if (displayedText.length < fullText.length) {
          const typingInterval = setInterval(() => {
            setDisplayedText((prev) => {
              if (prev.length < fullText.length) {
                return fullText.slice(0, prev.length + 1);
              } else {
                clearInterval(typingInterval);
                return prev;
              }
            });
          }, 50);
          return () => clearInterval(typingInterval);
        }
      }, 800);

      return () => {
        clearTimeout(slideTimeout);
        clearTimeout(typingStartTimeout);
      };
    }
  }, [isOpen]);
  useEffect(() => {
    if (displayedText.length === fullText.length && isOpen) {
      const cursorTimeout = setTimeout(() => setShowCursor(false), 2000);
      return () => clearTimeout(cursorTimeout);
    }
  }, [displayedText, fullText.length, isOpen]);

  return (
    <section className="mt-16 mb-32 flex justify-center px-4 min-h-[420px] items-center relative" id="wish">
      <div className="perspective-1000 w-full max-w-[420px] mx-auto relative group cursor-pointer transition-transform" onClick={() => !isOpen && setIsOpen(true)}>
        
        {}
        <div className={`absolute -top-16 w-full text-center transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
           <h2 className="font-display text-primary text-3xl md:text-4xl drop-shadow-sm">Birthday Wishes</h2>
        </div>

        {}
        <div className={`
          relative w-full aspect-[1.5/1] 
          bg-[#f5d0e4] rounded-3xl shadow-xl 
          transition-transform duration-700 ease-in-out 
          ${isOpen ? 'translate-y-24' : 'hover:scale-105 hover:-rotate-1'}
        `}>
          
          {}
          <div className={`
            absolute left-3 right-3 bg-[#fffdf5] rounded-lg shadow-sm
            transition-all duration-[1.2s] ease-in-out
            flex flex-col p-5 md:p-6
            origin-bottom
            ${isOpen ? '-translate-y-[200px] h-auto min-h-[280px] opacity-100 z-30' : 'bottom-3 top-3 opacity-0 z-0'}
          `}
          style={{
            backgroundImage: `linear-gradient(transparent 1.4rem, #e5e7eb 1.4rem, #e5e7eb 1.5rem, transparent 1.5rem)`,
            backgroundSize: '100% 1.5rem',
          }}
          >
             {isOpen && (
                <div className="flex flex-col h-full">
                  <div className="font-handwriting text-xl md:text-2xl text-accent leading-[1.5rem] tracking-wide flex-grow">
                      {displayedText}
                      {showCursor && displayedText.length < fullText.length && (
                          <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse align-middle"/>
                      )}
                  </div>
                  
                  {}
                  <div className={`mt-4 text-right transition-opacity duration-1000 ${displayedText.length === fullText.length ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="font-handwriting text-lg text-gray-500">With love💖,</p>
                    <p className="font-handwriting text-3xl text-primary font-bold mt-0">Le Trong Khanh</p>
                  </div>
                </div>
             )}
          </div>

          {}
          
          {}
          <div className="absolute inset-0 z-20 bg-[#fadbef] rounded-l-3xl pointer-events-none" style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}></div>
          
          {}
          <div className="absolute inset-0 z-20 bg-[#fadbef] rounded-r-3xl pointer-events-none" style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' }}></div>
          
          {}
          <div className="absolute inset-0 z-30 bg-[#f8e8f2] rounded-b-3xl pointer-events-none shadow-[0_-2px_10px_rgba(0,0,0,0.05)]" style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }}></div>

          {}
          <div 
              className={`
                absolute inset-0 bg-[#ecaecf] rounded-t-3xl origin-top
                transition-all duration-700 ease-in-out
                ${isOpen ? 'rotate-x-180 z-10' : 'rotate-0 z-40'}
              `}
              style={{ 
                clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
                transformStyle: 'preserve-3d'
              }}
          >
             {}
             <div className="absolute inset-0 bg-[#df9bbb] rounded-t-3xl" style={{ backfaceVisibility: 'hidden', transform: 'rotateX(180deg)' }}></div>
          </div>

          {}
          <div className={`
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
            flex flex-col items-center gap-2
            transition-all duration-300
            ${isOpen ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100 delay-100'}
          `}>
             <div className="bg-[#ff4d6d] w-12 h-12 rounded-full shadow-lg border-[3px] border-[#f8e8f2] flex items-center justify-center animate-bounce">
                <Heart className="text-[#f8e8f2] w-6 h-6 fill-current" />
             </div>
             <span className="font-display text-primary bg-white/90 px-3 py-1 rounded-full text-xs tracking-widest shadow-sm">
               OPEN ME
             </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Wishes;