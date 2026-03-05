import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const CONTENT = {
  title: "KOCHI TO KOCHI",
  subtitle: "BACKPACKING ADVENTURE",
  price: "₹13,999",
  columns: [
    { 
      id: 1, 
      label: "HILLS", 
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&h=600&fit=crop"
      ] 
    },
    { 
      id: 2, 
      label: "WILDLIFE", 
      images: [
        "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=400&h=600&fit=crop"
      ] 
    },
    { 
      id: 3, 
      label: "BACKWATERS", 
      images: [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=400&h=600&fit=crop"
      ] 
    },
    { 
      id: 4, 
      label: "FORT KOCHI", 
      images: [
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=600&fit=crop",
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=600&fit=crop"
      ] 
    }
  ],
  activities: [
    { icon: "🚣", label: "Kayaking" },
    { icon: "⛺", label: "Camping" },
    { icon: "🥾", label: "Treks" },
    { icon: "🍽️", label: "Meals" }
  ]
};

export default function TravelLanding() {
  return (
    <div className="min-h-screen bg-[#1a2e44] text-white">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pt-12 pb-8 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-2">
          {CONTENT.title}
        </h1>
        <p className="text-lg md:text-xl tracking-widest text-gray-300">
          {CONTENT.subtitle}
        </p>
      </motion.header>

      {/* 4-Column Vertical Carousel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-4 h-[500px] md:h-[600px] mb-16">
        {CONTENT.columns.map((col, idx) => (
          <motion.div 
            key={col.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative overflow-hidden rounded-lg shadow-2xl"
          >
            <Swiper
              direction="vertical"
              modules={[Autoplay]}
              autoplay={{ delay: 2000 + (idx * 500), disableOnInteraction: false }}
              loop={true}
              speed={1000}
              className="h-full"
            >
              {col.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img 
                    src={img} 
                    className="w-full h-full object-cover" 
                    alt={col.label} 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute bottom-0 w-full bg-black/70 py-4 text-center font-bold tracking-widest text-lg z-10">
              {col.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Yellow Ribbon Price Section */}
      <div className="flex justify-center -mt-10 mb-12 relative z-20 px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-yellow-400 text-black px-8 md:px-12 py-4 font-black text-xl md:text-2xl text-center shadow-xl"
          style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)' }}
        >
          {CONTENT.price} PER PERSON
        </motion.div>
      </div>

      {/* Book Now Button */}
      <div className="flex justify-center mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(59, 130, 246, 0.7)",
              "0 0 0 20px rgba(59, 130, 246, 0)",
            ]
          }}
          transition={{ 
            boxShadow: { duration: 1.5, repeat: Infinity }
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg"
        >
          BOOK NOW
        </motion.button>
      </div>

      {/* Footer Activities Section */}
      <footer className="bg-[#0f1e2e] py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {CONTENT.activities.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + (idx * 0.1) }}
              className="text-center"
            >
              <div className="text-5xl mb-3">{activity.icon}</div>
              <p className="font-semibold tracking-wide">{activity.label}</p>
            </motion.div>
          ))}
        </div>
      </footer>
    </div>
  );
}
