
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import GameModes from '@/components/GameModes';
import Community from '@/components/Community';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "DServer - Minecraft Server";
  }, []);

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GameModes />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
