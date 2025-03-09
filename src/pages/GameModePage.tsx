
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Trophy, Shield, Leaf, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const GameModePage = () => {
  const location = useLocation();
  const [activeMode, setActiveMode] = useState<string>('bedwars');
  
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['bedwars', 'skyblock', 'smp'].includes(hash)) {
      setActiveMode(hash);
      
      // Scroll to the section with a small delay
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    document.title = "DServer - Spielmodi";
  }, [location]);
  
  const gameModes = [
    {
      id: 'bedwars',
      title: 'Bedwars',
      description: 'Ein strategisches PvP-Spiel, bei dem Teams um Ressourcen kämpfen und die Betten der Gegner zerstören müssen.',
      icon: <Shield size={32} />,
      color: 'bg-red-500/10 text-red-600',
      details: {
        playerCount: '2-16 Spieler',
        gameLength: '10-20 Minuten',
        difficulty: 'Mittel',
        features: [
          'Verschiedene Karten mit einzigartigen Layouts',
          'Vier verschiedene Teams: Rot, Blau, Grün und Gelb',
          'Itemshops zum Kaufen von Ausrüstung und Upgrades',
          'Teambasierte Strategie und Verteidigung',
          'Spezielle Power-Ups und Events'
        ]
      }
    },
    {
      id: 'skyblock',
      title: 'Skyblock',
      description: 'Beginne auf einer kleinen, schwebenden Insel und baue dein eigenes Imperium in den Wolken.',
      icon: <Leaf size={32} />,
      color: 'bg-sky-500/10 text-sky-600',
      details: {
        playerCount: 'Einzelspieler oder Multiplayer',
        gameLength: 'Unbegrenzt',
        difficulty: 'Variabel',
        features: [
          'Individuelle Inseln mit Anpassungsmöglichkeiten',
          'Quests und Herausforderungen für Belohnungen',
          'Handel mit anderen Spielern',
          'Wirtschaftssystem mit Insel-Level',
          'Spezialisierte Handels-Inseln und Minions'
        ]
      }
    },
    {
      id: 'smp',
      title: 'Survival SMP',
      description: 'Eine riesige Welt zum Erkunden, Bauen und Überleben mit Freunden in einer Semi-Vanilla-Umgebung.',
      icon: <Compass size={32} />,
      color: 'bg-green-500/10 text-green-600',
      details: {
        playerCount: 'Unbegrenzt',
        gameLength: 'Unbegrenzt',
        difficulty: 'Mittel',
        features: [
          'Große, handgefertigte Welt zum Erkunden',
          'Gebietsschutz und Claim-System',
          'Wirtschaftssystem und Spielershops',
          'Regelmäßige Community-Events',
          'Minimale Plug-ins für ein nahezu Vanilla-Erlebnis'
        ]
      }
    }
  ];
  
  const activeGameMode = gameModes.find(mode => mode.id === activeMode) || gameModes[0];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Link>
          
          <h1 className="text-4xl font-bold mb-6">Unsere Spielmodi</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            Entdecke die verschiedenen Spielmodi auf DServer. Von intensiven PvP-Schlachten in Bedwars bis zu friedlichem Survival in unserer SMP-Welt.
          </p>
          
          {/* Game mode tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 border-b border-border pb-2">
            {gameModes.map((mode) => (
              <a
                key={mode.id}
                href={`#${mode.id}`}
                className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                  mode.id === activeMode 
                    ? 'bg-primary/10 text-primary font-medium' 
                    : 'hover:bg-secondary'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveMode(mode.id);
                  window.history.replaceState(null, '', `#${mode.id}`);
                }}
              >
                <span className={`p-1.5 rounded-md ${mode.color}`}>
                  {mode.icon}
                </span>
                {mode.title}
              </a>
            ))}
          </div>
          
          {/* Game mode details */}
          {gameModes.map((mode) => (
            <section 
              key={mode.id}
              id={mode.id}
              className={`${mode.id === activeMode ? 'block' : 'hidden'}`}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                key={mode.id}
              >
                <div className="glass rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <div className={`inline-flex items-center justify-center ${mode.color} p-3 rounded-lg mb-4`}>
                        {mode.icon}
                      </div>
                      <h2 className="text-3xl font-bold mb-3">{mode.title}</h2>
                      <p className="text-lg text-muted-foreground mb-6">
                        {mode.description}
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4">Features</h3>
                      <ul className="space-y-2 mb-6">
                        {mode.details.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="minecraft-button mt-4">
                        Jetzt spielen
                      </button>
                    </div>
                    
                    <div className="md:w-1/3 glass-dark rounded-lg p-6 self-start">
                      <h3 className="text-xl font-semibold mb-4">Details</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Users className="h-5 w-5 mr-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Spieler:</span>
                          <span className="ml-auto font-medium">{mode.details.playerCount}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Spieldauer:</span>
                          <span className="ml-auto font-medium">{mode.details.gameLength}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Trophy className="h-5 w-5 mr-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Schwierigkeit:</span>
                          <span className="ml-auto font-medium">{mode.details.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GameModePage;
