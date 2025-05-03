import { cn, scrollToSection } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Achievements", id: "achievements" },
    { label: "Contributions", id: "contributions" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-xl font-bold font-montserrat">
          <span className="gradient-text">Vipin</span> Kumar
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => handleScrollToSection(link.id)} 
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
          <a 
            href="#contact" 
            className="ml-4 btn-primary"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('contact');
            }}
          >
            Let's Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => handleScrollToSection(link.id)} 
                className="text-left py-2 px-4 hover:bg-muted rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => handleScrollToSection('contact')}
              className="btn-primary mt-4 text-center"
            >
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
