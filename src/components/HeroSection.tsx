
import React from 'react';
import { Github, Linkedin, Book } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Software Engineer | Open Source Contributor | AI/ML Enthusiast
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
                Hi, I'm <span className="gradient-text">Vipin Kumar</span>
              </h1>
              <p className="text-lg text-foreground/80 max-w-2xl">
                A passionate software engineer specializing in AI, Machine Learning, and Full-Stack Development. 
                I love solving complex problems and contributing to open-source projects that make a difference.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-outline">
                  Contact Me
                </a>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <a href="https://github.com/vkprogrammer-001" target="_blank" rel="noopener noreferrer" className="p-2 bg-foreground text-white rounded-full hover:bg-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vipin-kumar-049a7a1a0/" target="_blank" rel="noopener noreferrer" className="p-2 bg-foreground text-white rounded-full hover:bg-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://medium.com/@vipinkumar212003" target="_blank" rel="noopener noreferrer" className="p-2 bg-foreground text-white rounded-full hover:bg-primary transition-colors">
                  <Book size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-float"></div>
              <div className="absolute inset-2 bg-white rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/Portfolio/personal/avatar.jpeg"
                  alt="Vipin Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
