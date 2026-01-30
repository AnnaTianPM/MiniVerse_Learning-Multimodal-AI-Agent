import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const MissionSection = () => {
  return (
    <section className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
      
      <div className="max-w-5xl w-full text-center space-y-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-xl" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200">
              Curiosity
            </span> leads to learning
          </h2>
        </motion.div>

        {/* Subtext Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-2xl md:text-3xl font-semibold text-blue-100/90 tracking-tight">
            A real-time AI teacher for any question or challenge
          </p>
          <p className="text-lg md:text-xl font-medium text-white/70 max-w-3xl mx-auto leading-relaxed">
            Hands-on, adaptive, interactive learning with multimodal AI learning agent
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-6"
        >
          <a
            href="https://miniverse-ai.com/explore" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#5c56f2] to-blue-600 text-white font-bold text-xl rounded-full shadow-[0_20px_50px_-12px_rgba(92,86,242,0.5)] hover:shadow-[0_25px_60px_-12px_rgba(92,86,242,0.7)] hover:-translate-y-1 transition-all duration-300"
          >
            <span>Start Free</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
          </a>
        </motion.div>

        {/* Video Module */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 w-full max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/K-0FZRQ3bCg"
              title="Miniverse Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            {/* Glossy Overlay for the container */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Floating Symbols - Modern UI feel */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
        
      </div>
      <div className="absolute right-10 bottom-1/4 opacity-20 hidden lg:block">
        
      </div>
    </section>
  );
};
