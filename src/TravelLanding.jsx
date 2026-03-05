import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Particles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white/20 rounded-full blur-[1px]"
        initial={{ 
          x: Math.random() * 100 + "%", 
          y: Math.random() * 100 + "%", 
        }}
        animate={{
          y: ["0%", "100%"],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5
        }}
        style={{ width: Math.random() * 3 + 1 + 'px', height: Math.random() * 3 + 1 + 'px' }}
      />
    ))}
  </div>
);

export default function TravelLanding() {
  return (
    <div className="min-h-screen bg-[#051122] text-white relative font-sans overflow-x-hidden">
      <Particles />
      
      {/* Background radial glow to match target */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,_#1a3a5f_0%,_transparent_60%)] opacity-40 z-0" />

      {/* Header Section */}
      <header className="relative z-20 text-center pt-12 pb-10 px-4">
        <div className="flex items-center justify-center gap-3 md:gap-5 mb-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white distressed-text">KOCHI</h1>
          <div className="flex flex-col items-center">
            <div className="h-[1.5px] w-full bg-white opacity-40" />
            <span className="text-xl md:text-3xl font-bold italic py-1 px-2">TO</span>
            <div className="h-[1.5px] w-full bg-white opacity-40" />
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#facc15] distressed-text">KOCHI</h1>
        </div>
        
        <div className="relative inline-block mb-6">
          <div className="bg-[#facc15] text-black px-10 py-1 font-black tracking-widest text-lg md:text-xl">
            BACKPACKING ADVENTURE
          </div>
          {/* Subtle distress lines on the yellow bar */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 h-1 w-4 bg-[#facc15]/50 blur-[1px]" />
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-1 w-4 bg-[#facc15]/50 blur-[1px]" />
        </div>
        
        <p className="text-xs md:text-base tracking-[0.5em] font-bold uppercase opacity-90 text-white/80">
          Vagamon • Thekkady • Alappuzha
        </p>
      </header>

      {/* Pillars Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full max-w-[1400px] mx-auto group">
        
        {/* TOP GRADIENT MASK: Makes the top of images transparent/faded into background */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#051122] to-transparent z-20" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 h-full relative">
          {[
            { label: "HILLS", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4" },
            { label: "WILDLIFE", img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44" },
            { label: "BACKWATERS", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944" },
            { label: "FORT KOCHI", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220" }
          ].map((col, idx) => (
            <div key={idx} className="relative h-full overflow-hidden border-r border-white/5 last:border-r-0">
              <Swiper
                direction="vertical"
                modules={[Autoplay]}
                autoplay={{ delay: 3500 + (idx * 400) }}
                loop={true}
                speed={1200}
                className="h-full"
              >
                {[col.img + "?w=600&auto=format", col.img + "?w=601&auto=format"].map((src, i) => (
                  <SwiperSlide key={i}>
                    <img src={src} className="w-full h-full object-cover brightness-[0.85]" alt={col.label} />
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Bottom Label Overlay */}
              <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-[2px] py-10 text-center z-10 border-t border-white/5">
                <span className="text-2xl md:text-3xl font-black tracking-[0.25em] text-white uppercase">{col.label}</span>
              </div>
            </div>
          ))}

          {/* Price Ribbon: Centered and elevated z-index */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[280px] md:w-[380px]">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#facc15] text-black py-5 shadow-[0_25px_60px_rgba(0,0,0,0.7)] border-y border-yellow-300/30"
              style={{ clipPath: 'polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0 50%)' }}
            >
              <div className="text-center font-black">
                <span className="text-4xl md:text-6xl tracking-tighter">₹13,999</span>
                <p className="text-[11px] tracking-[0.2em] uppercase mt-1">PER PERSON</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Fade Mask */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#051122] to-transparent z-20" />
      </div>

      {/* Footer Activities */}
      <footer className="bg-[#051122] py-24 px-8 relative z-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          {[
            { t: "KAYAKING & STANDUP PADDLING", s: "KOCHI BACKWATERS" },
            { t: "CAMP & RESORT STAYS", s: "PREMIUM ACCOMMODATION" },
            { t: "TREKS & BOATING", s: "GUIDED ADVENTURES" },
            { t: "MEALS & ACTIVITIES", s: "ALL INCLUSIVE" }
          ].map((act, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <h4 className="text-[#facc15] font-black text-xs md:text-sm tracking-tighter mb-2 max-w-[150px] leading-tight">{act.t}</h4>
              <p className="text-[10px] text-gray-500 font-bold tracking-[0.15em] uppercase">{act.s}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-[10px] tracking-[0.6em] text-white/40 mb-6 font-bold uppercase">Limited Slots Available</p>
          <button className="bg-white text-black font-black px-16 py-4 tracking-[0.3em] text-sm hover:bg-[#facc15] transition-all duration-300 uppercase shadow-xl">
            Book Now
          </button>
        </div>
      </footer>
    </div>
  );
}