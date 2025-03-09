
import React, { useState, useEffect } from 'react';
import { ArrowLeft, MessageSquare, Calendar, ExternalLink, Github, Mail, MapPin, User, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    document.title = "DServer - Kontakt";
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank! Wir werden uns so schnell wie möglich bei dir melden.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Hast du Fragen, Vorschläge oder möchtest du Teil des Teams werden? Kontaktiere uns über das Formular oder direkt über Discord.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="glass rounded-xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Kontaktformular
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="Dein Name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          E-Mail
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="deine@email.de"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium">
                        Betreff
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Betreff deiner Nachricht"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Nachricht
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                        placeholder="Schreibe hier deine Nachricht..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="minecraft-button flex items-center justify-center w-full"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-2" />
                      ) : (
                        <Send className="mr-2 h-5 w-5" />
                      )}
                      {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                    </button>
                  </form>
                </div>
              </div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold mb-4">Direkte Kontaktmöglichkeiten</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary p-2 rounded-md mr-3">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">E-Mail</p>
                        <a 
                          href="mailto:contact@dserver.de"
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          contact@dserver.de
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-indigo-500/10 text-indigo-600 p-2 rounded-md mr-3">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Discord</p>
                        <a 
                          href="https://discord.gg/UAXWKbtT"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          discord.gg/UAXWKbtT
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary p-2 rounded-md mr-3">
                        <ExternalLink className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Kontaktseite</p>
                        <a 
                          href="https://frost.cat/contact"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          frost.cat/contact
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="glass rounded-xl p-6"
                >
                  <h2 className="text-xl font-bold mb-2">FAQ</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Häufig gestellte Fragen:
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Wie kann ich dem Server beitreten?</p>
                      <p className="text-sm text-muted-foreground">
                        Füge einfach "dserver.hopto.org" zu deiner Serverliste in Minecraft hinzu.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Ist der Server kostenlos?</p>
                      <p className="text-sm text-muted-foreground">
                        Ja, unser Server ist komplett kostenlos spielbar.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Wo finde ich die Serverregeln?</p>
                      <p className="text-sm text-muted-foreground">
                        Die Regeln findest du auf unserem Discord und im Spawn-Bereich des Servers.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
