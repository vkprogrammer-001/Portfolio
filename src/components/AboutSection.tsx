import { scrollToSection } from '@/lib/utils';
import { Code, GraduationCap, Laptop } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative">
              <div className="w-full max-w-md glass-card p-6 animate-fade-in">
                <img 
                  src="/Portfolio/personal/vk1.jpg" 
                  alt="Vipin Kumar working" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-lg py-2 px-4 text-sm font-medium">
                  <span className="text-primary">2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 animate-fade-in">
            <h3 className="text-2xl font-bold font-montserrat mb-4">
              Software Engineer & Open Source Contributor
            </h3>
            
            <p className="text-foreground/80 mb-6">
              I'm a dedicated software engineer with a passion for building robust, user-friendly applications. 
              My journey in technology began with a curiosity about how digital solutions can solve real-world problems, 
              which led me to pursue computer science and specialize in artificial intelligence and machine learning.
            </p>
            
            <p className="text-foreground/80 mb-6">
              My most significant achievement has been my contribution to Google Summer of Code 2024, 
              where I collaborated with AOSSIE to enhance the "Monumento" project. This experience has 
              sharpened my skills in integrating augmented reality features and improving user interfaces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="glass-card p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary">
                  <Code size={24} />
                </div>
                <h4 className="font-bold text-lg mb-1">Development</h4>
                <p className="text-sm text-foreground/70">Frontend & Backend Solutions</p>
              </div>
              
              <div className="glass-card p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-secondary/10 text-secondary">
                  <Laptop size={24} />
                </div>
                <h4 className="font-bold text-lg mb-1">AI & ML</h4>
                <p className="text-sm text-foreground/70">Intelligent Applications</p>
              </div>
              
              <div className="glass-card p-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent/10 text-accent">
                  <GraduationCap size={24} />
                </div>
                <h4 className="font-bold text-lg mb-1">Open Source</h4>
                <p className="text-sm text-foreground/70">Community Contributions</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                View Projects
              </a>
              <a href="https://drive.google.com/file/d/1ivFH8XDOMdynT1Pw_cLQI9yAMJLBDdVs/view?usp=sharing" className="btn-outline" target="_blank" rel="noopener noreferrer">
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
