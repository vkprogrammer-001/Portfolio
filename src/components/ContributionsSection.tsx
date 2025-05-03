
import { Github } from 'lucide-react';

const ContributionsSection = () => {
  return (
    <section id="contributions" className="section bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
            Open Source <span className="gradient-text">Contributions</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            I'm passionate about contributing to open-source projects that make a positive impact on the developer community.
          </p>
        </div>
        
        <div className="glass-card p-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <img 
                src="/Portfolio/monumento.png" 
                alt="Google Summer of Code" 
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
            
            <div className="md:col-span-8">
              <div className="flex items-center mb-4">
                <div className="bg-white shadow-md rounded-full p-2 mr-4">
                  <img 
                    src="https://summerofcode.withgoogle.com/assets/media/logo.svg" 
                    alt="GSoC Logo" 
                    className="h-10 w-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold">Google Summer of Code 2024</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="font-semibold mr-2">Organization:</span>
                  <span>AOSSIE (Australian Open Source Software Innovation and Education)</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Project:</span>
                  <span>Monumento - Augmented Reality Features & UI/UX Improvements</span>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6">
                As a GSoC contributor, I worked on enhancing the Monumento project, which aims to 
                preserve cultural heritage through technology. My contributions focused on implementing 
                augmented reality features that allow users to explore historical monuments virtually 
                and improving the overall user interface and experience.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold">Key Contributions:</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  <li>Implemented AR view for monuments using Flutter AR libraries</li>
                  <li>Redesigned the user interface for better navigation and accessibility</li>
                  <li>Optimized database queries for faster data retrieval</li>
                  <li>Added multilingual support for global users</li>
                  <li>Fixed critical bugs and improved overall application stability</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/AOSSIE-Org/Monumento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 btn-primary"
                >
                  <Github size={18} />
                  View Repository
                </a>
                <a 
                  href="https://summerofcode.withgoogle.com/archive/2024/projects/54jsoOFK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  GSoC Project Page
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-10 pt-10">
            <h3 className="text-xl font-bold mb-6">Other Contributions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-border p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Github size={20} className="mr-2" />
                  <h4 className="font-semibold">Flutter Packages</h4>
                </div>
                <p className="text-foreground/80 text-sm mb-3">
                  Contributed to several Flutter packages, focusing on UI components and state management solutions.
                </p>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  View Contributions
                </a>
              </div>
              
              <div className="bg-white rounded-lg border border-border p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Github size={20} className="mr-2" />
                  <h4 className="font-semibold">React Component Library</h4>
                </div>
                <p className="text-foreground/80 text-sm mb-3">
                  Created reusable React components and fixed accessibility issues in an open-source UI library.
                </p>
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  View Contributions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionsSection;
