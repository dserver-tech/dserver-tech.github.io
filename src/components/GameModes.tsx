
import { Shield, Leaf, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GameModes = () => {
  const gameModes = [
    {
      id: 'bedwars',
      title: 'Bedwars',
      description: 'Verteidige dein Bett und zerstöre die Betten der anderen Teams. Der Letzte mit einem Bett gewinnt!',
      icon: <Shield size={40} />,
      color: 'bg-primary/20 text-primary',
      link: '/game-modes#bedwars'
    },
    {
      id: 'skyblock',
      title: 'Skyblock',
      description: 'Beginne auf einer schwebenden Insel und baue dein Imperium in den Wolken. Meistere Herausforderungen und erweitere deine Insel.',
      icon: <Leaf size={40} />,
      color: 'bg-primary/20 text-primary',
      link: '/game-modes#skyblock'
    },
    {
      id: 'smp',
      title: 'Survival SMP',
      description: 'Überlebe in einer weitläufigen Welt mit Freunden. Baue, erkunde und schaffe eine blühende Gemeinschaft.',
      icon: <Compass size={40} />,
      color: 'bg-primary/20 text-primary',
      link: '/game-modes#smp'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="game-modes" className="section-container">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary mb-3">
          Spielmodi
        </span>
        <h2 className="text-4xl font-bold mb-4 neon-text">Entdecke unsere Welten</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Von intensiven PvP-Schlachten bis hin zu entspanntem Survival-Gameplay - für jeden ist etwas dabei.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {gameModes.map((mode) => (
          <motion.div 
            key={mode.id}
            variants={item}
            className="glass rounded-xl p-6 card-hover relative overflow-hidden"
          >
            <div className={`${mode.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
              {mode.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{mode.title}</h3>
            <p className="text-muted-foreground mb-6">{mode.description}</p>
            <Link
              to={mode.link}
              className="inline-flex items-center font-medium text-primary hover:underline"
            >
              Mehr erfahren
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <Link
          to="/game-modes"
          className="minecraft-button"
        >
          Alle Spielmodi anzeigen
        </Link>
      </div>
    </section>
  );
};

export default GameModes;
