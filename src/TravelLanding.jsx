import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Animated Frosted Particles Component
const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white/20 rounded-full"
        initial={{ 
          x: Math.random() * 100 + "%", 
          y: Math.random() * 100 + "%", 
          opacity: 0,
          scale: Math.random() * 0.5 + 0.5
        }}
        animate={{
          y: ["100%", "-10%"], // Drifts upward
          opacity: [0, 0.4, 0.4, 0], // Fades in and out
        }}
        transition={{
          duration: Math.random() * 20 + 15,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 10
        }}
        style={{ 
          width: Math.random() * 4 + 1 + 'px', 
          height: Math.random() * 4 + 1 + 'px',
          filter: 'blur(1px)' // Frosted effect
        }}
      />
    ))}
  </div>
);

export default function TravelLanding() {
  const columns = [
    { label: "HILLS", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4" },
    { label: "WILDLIFE", img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44" },
    { label: "BACKWATERS", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944" },
    { label: "FORT KOCHI", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220" }
  ];

  return (
    <div className="min-h-screen bg-[#051122] text-white relative font-sans overflow-x-hidden travel-bg-main">
      <Particles />
      
      {/* Header Section */}
      <header className="relative z-20 text-center pt-12 pb-6 px-4">
        <div className="flex items-center justify-center gap-3 md:gap-5 mb-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white distressed-text">KOCHI</h1>
          <div className="flex flex-col items-center">
            <div className="h-[1.5px] w-full bg-white opacity-40" />
            <span className="text-xl md:text-3xl font-bold italic py-1 px-2 uppercase">to</span>
            <div className="h-[1.5px] w-full bg-white opacity-40" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#facc15] distressed-text">KOCHI</h1>
        </div>
        
        <div className="bg-[#facc15] text-black inline-block px-10 py-1 font-black tracking-widest text-lg md:text-xl uppercase mb-4">
          Backpacking Adventure
        </div>
        
        <h2 className="text-xs md:text-base tracking-[0.3em] font-bold uppercase opacity-90 text-[#facc15] flex items-center justify-center gap-2 mb-2">
          🚌 Vagamon • Thekkady • Alappuzha 🌙
        </h2>

        {/* Missing detail: 4 Days & 3 Nights */}
        <div className="text-2xl md:text-3xl font-black italic tracking-widest uppercase text-white mb-2">
          4 Days & 3 Nights
        </div>
      </header>

      {/* Pillars Section */}
      <div className="relative h-[65vh] md:h-[75vh] w-full max-w-[1400px] mx-auto group">
        {/* Top Gradient Mask for transparency fade */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#051122] to-transparent z-20" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 h-full relative">
          {columns.map((col, idx) => (
            <div key={idx} className="relative h-full overflow-hidden border-r border-white/5 last:border-r-0">
              <Swiper
                direction="vertical"
                modules={[Autoplay]}
                autoplay={{ delay: 3500 + (idx * 400) }}
                loop={true}
                speed={1200}
                className="h-full"
              >
                {[col.img + "?w=800", col.img + "?w=801"].map((src, i) => (
                  <SwiperSlide key={i}>
                    <img src={src} className="w-full h-full object-cover brightness-[0.85]" alt={col.label} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm py-10 text-center z-10 border-t border-white/5">
                <span className="text-2xl md:text-3xl font-black tracking-[0.25em] text-white uppercase">{col.label}</span>
              </div>
            </div>
          ))}

          {/* Price Ribbon and Corporates Banner */}
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[300px] md:w-[400px]">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#facc15] text-black py-5 shadow-2xl"
              style={{ clipPath: 'polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%)' }}
            >
              <div className="text-center font-black">
                <span className="text-4xl md:text-6xl tracking-tighter">₹13,999</span>
                <p className="text-[11px] tracking-[0.2em] uppercase mt-1">PER PERSON</p>
              </div>
            </motion.div>
            
            {/* Corporates & Students Banner */}
            <div className="mt-4 bg-black/80 backdrop-blur-md text-white py-2 px-4 text-center text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase border-y border-white/10">
              Corporates & Students | Groups of 25-30
            </div>
          </div>
        </div>
      </div>

      {/* Footer Activities */}
      <footer className="bg-[#051122] py-20 px-8 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center">
          {[
            { label: "KAYAKING & STANDUP PADDLING", sub: "KOCHI BACKWATERS" },
            { label: "CAMP & RESORT STAYS", sub: "PREMIUM ACCOMMODATION" },
            { label: "TREKS & BOATING", sub: "GUIDED ADVENTURES" },
            { label: "MEALS & ACTIVITIES", sub: "ALL INCLUSIVE" }
          ].map((act, i) => (
            <div key={i}>
              <h4 className="text-[#facc15] font-black text-xs md:text-sm tracking-tighter mb-1 leading-tight">{act.label}</h4>
              <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{act.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button className="bg-white text-black font-black px-16 py-4 tracking-[0.3em] hover:bg-[#facc15] transition-all uppercase">
            Book Now
          </button>
        </div>
      </footer>
    </div>
  );
}