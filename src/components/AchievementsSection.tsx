import { scrollToSection } from "@/lib/utils";
import { Award, Code, Trophy } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center group hover:border-primary/20 transition-all animate-fade-in">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-md transform group-hover:scale-110 transition-transform"></div>
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-white shadow-md">
                <Code size={32} className="text-primary" />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              Google Summer of Code 2024
            </h3>
            <p className="text-foreground/70 mb-4">
              Successfully collaborated with AOSSIE to enhance the "Monumento"
              project, integrating augmented reality features and improving the
              UI/UX.
            </p>
            <a
              href="https://gist.github.com/vkprogrammer-001/d3058d0c50c29507a5fd692cd5f140c9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary hover:text-primary/80 font-medium"
            >
              View Project Details →
            </a>
          </div>

          <div
            className="glass-card p-6 text-center group hover:border-primary/20 transition-all animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-md transform group-hover:scale-110 transition-transform"></div>
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-white shadow-md">
                <Trophy size={32} className="text-secondary" />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
              Tech Blitz – Game of Codes
            </h3>
            <p className="text-foreground/70 mb-4">
              Secured 3rd place in the competitive coding competition,
              demonstrating strong problem-solving abilities and algorithmic
              thinking.
            </p>
            <div className="mt-4 text-lg font-bold text-secondary">
              3rd Place
            </div>
          </div>

          <div
            className="glass-card p-6 text-center group hover:border-primary/20 transition-all animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-accent/10 rounded-full blur-md transform group-hover:scale-110 transition-transform"></div>
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-white shadow-md">
                <Award size={32} className="text-accent" />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
              Leetcode Problem Solving
            </h3>
            <p className="text-foreground/70 mb-4">
              Consistently practicing and improving problem-solving skills by
              tackling challenging algorithms and data structure problems.
            </p>
            <div className="mt-4">
              <div className="inline-flex items-center bg-accent/10 rounded-full px-4 py-2">
                <span className="text-xl font-bold text-accent">200+</span>
                <span className="ml-2 text-sm text-foreground/70">
                  Problems Solved
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Want to collaborate on exciting projects?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              I'm always open to new opportunities and challenges. Let's create
              something amazing together!
            </p>
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
