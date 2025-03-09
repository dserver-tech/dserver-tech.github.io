
import React from 'react';
import { Clock, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogEntry {
  id: number;
  title: string;
  content: string;
  date: string;
}

const EventsCalendar = () => {
  // Retrieve blog entries from localStorage
  const blogEntries: BlogEntry[] = JSON.parse(localStorage.getItem('blogEntries') || '[]');
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="glass rounded-xl p-6 md:p-8 h-full overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Blog</h3>
      </div>
      
      {blogEntries.length > 0 ? (
        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {blogEntries.map((entry) => (
            <motion.div 
              key={entry.id}
              className="backdrop-blur-xl bg-black/30 rounded-lg p-6 border border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                boxShadow: "0 0 15px 2px rgba(157, 78, 221, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center text-muted-foreground mb-2">
                <CalendarDays className="h-4 w-4 mr-2" />
                <span className="text-sm">{formatDate(entry.date)}</span>
              </div>
              
              <h4 className="text-xl font-bold mb-2">{entry.title}</h4>
              
              <p className="text-muted-foreground whitespace-pre-line">
                {entry.content}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div 
          className="flex flex-col items-center justify-center h-64 backdrop-blur-xl bg-black/30 rounded-lg p-8 border border-primary/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{
            boxShadow: "0 0 25px 5px rgba(157, 78, 221, 0.25)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
          >
            <Clock className="text-primary h-12 w-12 mb-4" />
          </motion.div>
          
          <motion.h4 
            className="text-2xl font-bold neon-text mb-2"
            animate={{ 
              textShadow: [
                "0 0 5px rgba(157, 78, 221, 0.7), 0 0 10px rgba(157, 78, 221, 0.5)",
                "0 0 10px rgba(157, 78, 221, 0.9), 0 0 20px rgba(157, 78, 221, 0.7)",
                "0 0 5px rgba(157, 78, 221, 0.7), 0 0 10px rgba(157, 78, 221, 0.5)"
              ]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          >
            Keine Blog-Einträge
          </motion.h4>
          
          <motion.p 
            className="text-center text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Momentan sind keine Blog-Einträge vorhanden. Schau später noch einmal vorbei!
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default EventsCalendar;
