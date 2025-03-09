
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion'; 

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1619098075310-1eb8bb8ee0c1?auto=format&fit=crop&w=1600&q=80")', 
          filter: 'brightness(0.4)' 
        }}
      />
      
      {/* Animated floating cubes in background */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary opacity-20 animate-float" 
             style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-2/3 left-1/5 w-12 h-12 bg-primary/40 opacity-20 animate-float" 
             style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary/60 opacity-20 animate-float" 
             style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-1/4 right-1/5 w-14 h-14 bg-primary/80 opacity-20 animate-float" 
             style={{ animationDelay: '1.5s' }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Willkommen bei <span className="neon-text">DServer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Erlebe das beste Minecraft-Spielerlebnis mit unseren benutzerdefinierten Spielmodi und einer großartigen Community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#game-modes" 
              className="minecraft-button text-lg px-8 py-3"
            >
              Spielmodi entdecken
            </a>
            
            <a 
              href="#community" 
              className="px-8 py-3 bg-primary/10 backdrop-blur-sm border border-primary/30 text-white text-lg rounded-md transition-all hover:bg-primary/20 hover:border-primary/50"
            >
              Community beitreten
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
        onClick={scrollToContent}
      >
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
