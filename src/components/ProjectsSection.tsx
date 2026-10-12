
import { useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  category: "Backend & Systems" | "Interactive & Web" | "Mobile";
  badgeText: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projects: Project[] = [
    {
      title: "Short Track",
      subtitle: "High-Performance URL Shortener",
      category: "Backend & Systems",
      badgeText: "Go / Systems",
      description: "A fast, production-grade URL shortening engine built in Go (Golang), architected for low latency with two-tier Redis caching and PostgreSQL persistence.",
      image: "/Portfolio/projects/shorttrack.png",
      technologies: ["Go", "Redis", "PostgreSQL", "Docker", "React 19", "TypeScript"],
      features: [
        "Base62 alphanumeric URL shortening algorithm from database primary keys",
        "Sub-millisecond resolution via Redis cache with 24-hour TTL & Postgres fallback",
        "Built-in connection retry loop resilience for containerized microservices",
        "Fully containerized multi-service setup with Docker Compose"
      ],
      githubLink: "https://github.com/vkprogrammer-001/Short-Track",
      demoLink: "https://short-track-v1.vercel.app/",
    },
    {
      title: "BugHunt Daily",
      subtitle: "Interactive Spot-The-Bug Game",
      category: "Interactive & Web",
      badgeText: "Devvit / Web",
      description: "A daily interactive code-puzzle application for Reddit developer communities, challenging members to spot syntax bugs in multi-language code snippets.",
      image: "/Portfolio/projects/bughunt_daily.png",
      technologies: ["Reddit Devvit", "React 19", "TypeScript", "Hono", "Tailwind CSS", "Vite"],
      features: [
        "Daily puzzle snippets across JS, TS, Python, Go, Rust, Java, C, and SQL",
        "Automated daily 12:00 UTC post scheduler & subreddit moderation tools",
        "Community leaderboards, streak rewards & spoiler-free result sharing",
        "Cross-platform responsive gameplay embedded directly inside Reddit feeds"
      ],
      demoLink: "https://www.reddit.com/r/bughunt_daily_dev/",
    },
    {
      title: "ShoppingHut",
      subtitle: "Modern Cross-Platform E-Commerce",
      category: "Mobile",
      badgeText: "Flutter / Mobile",
      description: "A modern shopping mobile application developed in Flutter, connected to the Fake Store API for dynamic catalog browsing and seamless order workflows.",
      image: "/Portfolio/projects/shoppinghut.png",
      technologies: ["Flutter", "Dart", "Dio", "Bloc", "REST API"],
      features: [
        "Predictable state management architecture powered by BLoC",
        "Dynamic product search, category browsing, and wishlist syncing",
        "Persistent cart management with real-time price calculations",
        "Responsive, fluid animations tailored for iOS and Android"
      ],
      githubLink: "https://github.com/vkprogrammer-001/ShoppingHut.git",
    },
    {
      title: "GitHub Account Finder",
      subtitle: "Profile & Repository Explorer",
      category: "Interactive & Web",
      badgeText: "React / Tooling",
      description: "A web-based developer utility to search, inspect, and analyze GitHub user profiles, repositories, and engagement metrics in real time.",
      image: "/Portfolio/projects/githubfinder.png",
      technologies: ["React.js", "REST APIs", "Tailwind CSS", "JavaScript"],
      features: [
        "Real-time user profile & repository discovery using the GitHub REST API",
        "In-depth inspection of public repos, follower counts, and language stats",
        "Graceful API rate-limit handling and error states",
        "Clean, responsive glassmorphic UI optimized for all screen sizes"
      ],
      githubLink: "https://github.com/vkprogrammer-001/GitHubFinder.git",
    },
  ];

  const categories = ["All", "Backend & Systems", "Interactive & Web", "Mobile"] as const;

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section bg-muted/40">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
            Notable <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            A curated showcase of production-ready systems, full-stack applications, and open-source software 
            built with a strong focus on architecture, performance, and clean code.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => {
            const count = category === "All"
              ? projects.length
              : projects.filter((p) => p.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                    : "bg-white/80 hover:bg-white text-foreground/75 hover:text-foreground border border-border/70 hover:border-primary/30"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-muted text-foreground/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="glass-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 hover:border-primary/40 bg-card/70 hover:bg-card/95 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 animate-fade-in"
            >
              {/* Media Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-background/90 backdrop-blur-md text-foreground border border-white/30 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {project.badgeText}
                  </span>
                </div>

                {/* Top Quick Action Buttons */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="p-2 rounded-full bg-background/90 backdrop-blur-md text-foreground/80 hover:text-primary hover:bg-background border border-white/30 shadow-sm transition-all hover:scale-110"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live link`}
                      className="p-2 rounded-full bg-background/90 backdrop-blur-md text-foreground/80 hover:text-primary hover:bg-background border border-white/30 shadow-sm transition-all hover:scale-110"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 md:p-7 flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-primary mb-1 block">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold font-montserrat text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-2.5 flex items-center gap-1.5">
                      <Sparkles size={13} className="text-primary" /> Key Features
                    </h4>
                    <ul className="space-y-1.5 text-xs md:text-sm text-foreground/80">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Pills & Bottom Actions */}
                <div className="space-y-5 pt-4 border-t border-border/60">
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md border border-primary/15 transition-colors hover:bg-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-200 shadow-sm"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
