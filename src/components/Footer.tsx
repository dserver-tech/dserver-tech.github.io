
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-minecraft-grass">D</span>
              <span>Server</span>
            </Link>
            <p className="text-muted-foreground mt-2 mb-4 max-w-md">
              DServer bietet dir einzigartige Minecraft-Spielmodi, eine freundliche Community und regelmäßige Events für das ultimative Spielerlebnis.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="https://youtube.com" icon={<Youtube size={20} />} label="YouTube" />
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Startseite" />
              <FooterLink to="/game-modes" label="Spielmodi" />
              <FooterLink to="/community" label="Community" />
              <FooterLink to="/contact" label="Kontakt" />
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <FooterLink to="/impressum" label="Impressum" />
              <FooterLink to="/datenschutz" label="Datenschutz" />
              <FooterLink to="/agb" label="AGB" />
            </ul>
            <p className="text-sm text-muted-foreground mt-6">
              Serveradresse: dserver.hopto.org
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} DServer. Alle Rechte vorbehalten.</p>
          <p className="mt-1">
            Minecraft ist eine eingetragene Marke von Mojang Studios. Wir sind nicht mit Mojang verbunden.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink = ({ to, label }: FooterLinkProps) => (
  <li>
    <Link 
      to={to} 
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </Link>
  </li>
);

export default Footer;
