
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import useServerStatus from '@/hooks/useServerStatus';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const serverStatus = useServerStatus('dserver.hopto.org');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled 
          ? "py-2 glass shadow-md" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight flex items-center gap-2 animate-fade-in"
        >
          <span className="neon-text">D</span>
          <span>Server</span>
        </Link>
        
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <nav 
          className={cn(
            "fixed lg:static top-[60px] right-0 h-[calc(100vh-60px)] lg:h-auto w-full lg:w-auto transition-all duration-300 ease-in-out transform lg:translate-x-0 bg-background/95 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col lg:flex-row items-center justify-center h-full lg:h-auto gap-8 lg:gap-6 p-8 lg:p-0">
            <NavItem to="/" label="Home" onClick={closeMenu} />
            <NavItem to="/game-modes" label="Game Modes" onClick={closeMenu} />
            <NavItem to="/community" label="Community" onClick={closeMenu} />
            <NavItem to="/contact" label="Contact" onClick={closeMenu} />
          </ul>
        </nav>
        
        <div className="hidden lg:flex items-center space-x-4">
          <div 
            className={cn(
              "flex items-center gap-2 py-1 px-3 rounded-full transition-all duration-300 animate-fade-in",
              serverStatus.online 
                ? "bg-primary/20 text-primary" 
                : "bg-red-500/10 text-red-600",
              serverStatus.isLoading && "opacity-50"
            )}
          >
            <Globe size={16} className="animate-pulse-slow" />
            <span className="text-sm font-medium">
              {serverStatus.isLoading ? (
                "Checking..."
              ) : serverStatus.online ? (
                <>
                  <span className="inline-block h-2 w-2 rounded-full bg-primary mr-1.5 animate-pulse"></span>
                  Online {serverStatus.players?.online && serverStatus.players?.max && 
                    `(${serverStatus.players.online}/${serverStatus.players.max})`
                  }
                </>
              ) : (
                <>
                  <span className="inline-block h-2 w-2 rounded-full bg-red-500 mr-1.5"></span>
                  Offline
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavItemProps {
  to: string;
  label: string;
  onClick?: () => void;
}

const NavItem = ({ to, label, onClick }: NavItemProps) => (
  <li className="w-full lg:w-auto text-center">
    <NavLink 
      to={to} 
      onClick={onClick}
      className={({ isActive }) => cn(
        "block py-2 font-medium text-lg lg:text-base relative transition-all duration-200",
        "after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300",
        "hover:text-primary hover:after:w-full",
        isActive ? "text-primary after:w-full" : "text-foreground after:w-0"
      )}
    >
      {label}
    </NavLink>
  </li>
);

export default Header;
