
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const ADMIN_PASSWORD = "pixdkg17%";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: "Authentifizierung erfolgreich",
        description: "Du kannst jetzt Blog-Einträge erstellen.",
      });
    } else {
      toast({
        title: "Authentifizierung fehlgeschlagen",
        description: "Das eingegebene Passwort ist falsch.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Fehler beim Speichern",
        description: "Bitte fülle alle Felder aus.",
        variant: "destructive",
      });
      return;
    }
    
    // Create new blog entry
    const newEntry = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      date: new Date().toISOString(),
    };
    
    // Get existing entries or initialize empty array
    const existingEntries = JSON.parse(localStorage.getItem('blogEntries') || '[]');
    
    // Add new entry and save to localStorage
    const updatedEntries = [newEntry, ...existingEntries];
    localStorage.setItem('blogEntries', JSON.stringify(updatedEntries));
    
    // Reset form
    setTitle('');
    setContent('');
    
    toast({
      title: "Blog-Eintrag gespeichert",
      description: "Dein Eintrag wurde erfolgreich gespeichert und wird jetzt angezeigt.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-8 max-w-3xl mx-auto"
          >
            {!isAuthenticated ? (
              <>
                <div className="flex items-center justify-center mb-6">
                  <Lock className="h-12 w-12 text-primary mr-4" />
                  <h1 className="text-3xl font-bold">Admin-Bereich</h1>
                </div>
                
                <form onSubmit={handleAuthentication} className="space-y-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                      Passwort
                    </label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Bitte gib das Admin-Passwort ein"
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <motion.button
                      type="submit"
                      className="minecraft-button px-6 py-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Einloggen
                    </motion.button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-6 neon-text">Blog-Eintrag erstellen</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                      Titel
                    </label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Titel des Blog-Eintrags"
                      className="w-full"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium mb-2">
                      Inhalt
                    </label>
                    <Textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Inhalt des Blog-Eintrags"
                      className="w-full min-h-[200px]"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end">
                    <motion.button
                      type="submit"
                      className="bg-primary hover:bg-primary/90 text-white rounded-md px-4 py-2 flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Save className="mr-2 h-4 w-4" />
                      Speichern
                    </motion.button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminPage;
