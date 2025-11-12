import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-accent">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 text-center text-white px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Creative Collective
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          A professional collective of talented creators bringing your vision to life
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
          We are a curated group of designers, developers, artists, and storytellers 
          united by our passion for exceptional creative work. Our diverse expertise 
          allows us to tackle any project with innovation and excellence.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
