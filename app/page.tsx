"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: number;
  name: string;
  comment: string;
}

export default function MoraiReviewPage() {
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, name: "Alex Rivera", comment: "The API latency is incredibly low. MORAI is the future!" },
    { id: 2, name: "Sarah Chen", comment: "Amazing design and very easy to integrate." },
  ]);

  const [formData, setFormData] = useState({ name: '', comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = { id: Date.now(), ...formData };
    setReviews([newReview, ...reviews]);
    setFormData({ name: '', comment: '' });
  };

  return (
    <div className="min-h-screen bg-[#010816] text-white py-16 px-6 flex flex-col items-center overflow-x-hidden font-sans">
      
      {/* --- Main Topic Section --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-24 mt-10 w-full"
      >
        <h2 className="text-lg md:text-xl font-light tracking-[0.6em] text-cyan-400 uppercase mb-4">
          Future World for
        </h2>
        
        <h1 className="text-7xl md:text-[12rem] font-black uppercase italic leading-none flex justify-center items-center gap-2">
          <span className="bg-gradient-to-r from-blue-500 via-cyan-300 via-green-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,255,255,0.6)] px-4">
            MORAI
          </span>
        </h1>

        <div className="relative mt-8">
          <div className="h-[2px] w-80 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[5px] w-48 bg-cyan-400 blur-md opacity-40"></div>
        </div>
      </motion.div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- Left: Submit Form (Simplified) --- */}
        <div className="lg:col-span-5">
          <motion.div 
            className="sticky top-10 bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-2xl shadow-2xl"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <h3 className="text-2xl font-bold mb-8 tracking-tight text-white">Share Your Thoughts</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm text-cyan-400 ml-1 uppercase tracking-widest font-semibold">Your Name</label>
                <input 
                  type="text" placeholder="Enter your name" required 
                  className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-cyan-500 outline-none transition text-white"
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-cyan-400 ml-1 uppercase tracking-widest font-semibold">Message</label>
                <textarea 
                  placeholder="Tell us what you think..." required 
                  className="w-full bg-black/50 border border-white/10 p-4 rounded-xl h-40 focus:border-blue-500 outline-none transition text-white"
                  value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-4 rounded-xl font-black tracking-[0.2em] uppercase hover:brightness-125 transition-all shadow-[0_0_20px_rgba(0,180,255,0.3)] mt-4"
              >
                Post Review
              </button>
            </form>
          </motion.div>
        </div>

        {/* --- Right: Reviews List --- */}
        <div className="lg:col-span-7">
          <h3 className="text-xl font-light tracking-[0.3em] text-gray-400 uppercase mb-8 ml-2">Recent Reviews</h3>
          
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {reviews.map((rev) => (
                <motion.div
                  key={rev.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 relative group hover:bg-white/[0.08] transition-all"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{rev.name}</h4>
                    <span className="text-[10px] text-cyan-500 uppercase tracking-widest font-bold border border-cyan-500/30 px-3 py-1 rounded-full">Community</span>
                  </div>
                  
                  <p className="text-gray-300 italic leading-relaxed text-lg font-light">
                    "{rev.comment}"
                  </p>
                  
                  {/* Bottom line decor */}
                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="fixed bottom-1/4 -right-20 w-96 h-96 bg-green-600/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>
    </div>
  );
}