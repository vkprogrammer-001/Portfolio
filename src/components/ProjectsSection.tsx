
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "ShoppingHut",
      description: "A modern shopping app built with Flutter, connected to the Fake Store API for dynamic product listing and smooth user interaction.",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Flutter", "Dart", "Dio"],
      features: ["Cart Management", "Wishlist", "User Authentication"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
    },
    {
      title: "FluttyCalc",
      description: "A minimalist calculator app to solve basic arithmetic with a clean user interface.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Flutter", "Dart"],
      features: ["Addition", "Subtraction", "Multiplication", "Division"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
    },
    {
      title: "GitHub Account Finder",
      description: "A web-based tool to search and display GitHub profiles, built with React.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React.js", "HTML", "CSS"],
      features: ["Profile Search", "API Integration", "Responsive Design"],
      githubLink: "https://github.com",
      demoLink: "https://demo.com",
    }
  ];

  return (
    <section id="projects" className="section bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
            Notable <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
            Each project is built with a focus on user experience and clean code.
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"} animate-fade-in`}>
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <div className="flex space-x-4">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"} animate-fade-in`}>
                <div className="glass-card p-6 md:p-8">
                  <h3 className="text-2xl font-bold font-montserrat mb-3">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-5">
                    {project.description}
                  </p>
                  
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/60 mb-2">
                      Key Features
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-foreground/80">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
