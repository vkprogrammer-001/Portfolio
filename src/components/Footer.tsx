
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-foreground text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold font-montserrat mb-2">
              Vipin Kumar
            </h3>
            <p className="text-white/70 text-sm">
              Software Engineer | Open Source Contributor | AI/ML Enthusiast
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="bg-white text-foreground p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} Vipin Kumar. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#about" className="text-sm text-white/70 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-white/70 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#blog" className="text-sm text-white/70 hover:text-white transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
