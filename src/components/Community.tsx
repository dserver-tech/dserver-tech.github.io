
import { Users, MessageSquare, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Community = () => {
  const communityLinks = [
    {
      title: 'Discord',
      description: 'Chatte mit anderen Spielern, finde Teams und bleibe über Events informiert.',
      icon: <Users className="h-6 w-6" />,
      color: 'bg-primary/20 text-primary',
      link: 'https://discord.gg/UAXWKbtT',
      linkText: 'Discord beitreten'
    },
    {
      title: 'Forum',
      description: 'Diskutiere über Spielstrategien, melde Bugs und teile deine besten Builds.',
      icon: <MessageSquare className="h-6 w-6" />,
      color: 'bg-primary/20 text-primary',
      link: 'https://frost.cat/blog',
      linkText: 'Forum besuchen'
    },
    {
      title: 'Kontakt',
      description: 'Hast du Fragen oder Anregungen? Kontaktiere uns direkt.',
      icon: <Calendar className="h-6 w-6" />,
      color: 'bg-primary/20 text-primary',
      link: 'https://frost.cat/contact',
      linkText: 'Kontaktseite besuchen'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(157, 78, 221, 0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="community" className="section-container bg-gradient-to-b from-background to-secondary/40 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/20 text-primary mb-3 animate-pulse-slow">
            Community
          </span>
          <h2 className="text-4xl font-bold mb-4 neon-text">Werde Teil unserer Gemeinschaft</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bei DServer geht es nicht nur ums Spielen – es geht darum, Freundschaften zu schließen und gemeinsam Spaß zu haben.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {communityLinks.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover="hover"
              className="glass rounded-xl p-6 flex flex-col relative overflow-hidden border border-white/5"
            >
              <motion.div 
                className={`${item.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{item.description}</p>
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-primary hover:underline"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {item.linkText}
                <ExternalLink className="ml-1 h-4 w-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 p-8 glass rounded-xl neon-border relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ boxShadow: "0 0 20px 5px rgba(157, 78, 221, 0.3)" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 neon-text">Bereit zum Spielen?</h3>
              <p className="text-muted-foreground">
                Tritt unserem Server bei und werde Teil der Community!
              </p>
            </div>
            <motion.button 
              className="minecraft-button px-6 py-3 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt spielen
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
