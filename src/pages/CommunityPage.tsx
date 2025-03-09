
import { useEffect } from 'react';
import { ArrowLeft, Users, MessageSquare, CalendarDays, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsCalendar from '@/components/EventsCalendar';
import { motion } from 'framer-motion';

const CommunityPage = () => {
  useEffect(() => {
    document.title = "DServer - Community";
  }, []);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl font-bold mb-6">Unsere Community</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Werde Teil unserer lebendigen Gemeinschaft, nimm an Events teil, diskutiere über das Spiel und finde neue Freunde zum Spielen.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeIn} className="glass rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-indigo-500/10 text-indigo-600 p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Discord Community</h2>
                    <p className="text-muted-foreground mb-4">
                      Tritt unserem Discord-Server bei, um dich mit anderen Spielern zu unterhalten, Teams zu finden und über bevorstehende Events informiert zu werden.
                    </p>
                    <a 
                      href="https://discord.gg/UAXWKbtT" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                    >
                      Discord beitreten
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="glass rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-amber-500/10 text-amber-600 p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Forum</h2>
                    <p className="text-muted-foreground mb-4">
                      Diskutiere über Spielstrategien, melde Bugs, teile deine besten Builds und bleibe auf dem Laufenden mit Server-Ankündigungen.
                    </p>
                    <a 
                      href="https://frost.cat/blog" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors"
                    >
                      Forum besuchen
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} id="events" className="glass rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-rose-500/10 text-rose-600 p-3 rounded-lg mr-4">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Community Events</h2>
                    <p className="text-muted-foreground mb-4">
                      Nimm an regelmäßigen Turnieren, speziellen Spielmodi und saisonalen Events teil. Gewinne exklusive Belohnungen und habe Spaß mit anderen Spielern.
                    </p>
                    <p className="mb-4">
                      Unsere Events sind eine großartige Möglichkeit, neue Leute kennenzulernen und deine Fähigkeiten zu verbessern. Schau dir den Event-Kalender an, um zu sehen, was als nächstes kommt.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <EventsCalendar />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-8 max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Bist du bereit, Teil unserer Community zu werden?</h2>
            <p className="text-muted-foreground mb-6">
              Wir freuen uns darauf, dich auf dem Server zu begrüßen. Tritt noch heute bei und starte dein Abenteuer mit uns!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="minecraft-button">
                Jetzt beitreten
              </button>
              <a 
                href="/contact" 
                className="px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors"
              >
                Kontaktiere uns
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CommunityPage;
