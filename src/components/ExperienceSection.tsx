import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ExperienceSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      role: "Software Development Engineer (formerly Intern)",
      company: "Findoc",
      location: "On-site (Gurgaon, India)",
      duration: "Mar 2026 - Present",
      type: "Full-time",
      description: [
        "Architected a standalone IPO Microservice and FinZoom frontend using Golang and Flutter, decoupling workflows to enable seamless NSE/BSE applications across web and mobile.",
        "Developing FinTrader, a high-concurrency platform for real-time intraday and F&O trading, focusing on low-latency data synchronization and live execution for high-frequency users.",
        "Revamped the FinDost partner portal using React.js and Vite, optimizing performance through Nginx and hybrid PostgreSQL/MongoDB storage to reduce data latency by 20%.",
      ],
      technologies: [
        "Golang",
        "Node.js",
        "Flutter",
        "React.js",
        "PostgreSQL",
        "MongoDB",
        "Nginx",
        "Vite",
        "Microservices",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Findoc",
      location: "On-site (Gurgaon, India)",
      duration: "Sept 2025 - Mar 2026",
      type: "Internship",
      description: [
        "Architected and deployed a specialized IPO Microservice, enabling in-house processing of retail investor applications and reducing reliance on external vendors.",
        "Core contributor to 'Finzoom' and 'Findost' (flagship app), developing high-traffic features with ReactJS and Flutter in an agile 8-person team.",
        "Managed full-stack integration for financial services, focusing on secure API communication and optimized database queries.",
      ],
      technologies: [
        "ReactJS",
        "Flutter",
        "Microservices",
        "REST APIs",
        "MySQL",
        "MongoDB",
        "Full-Stack",
        "Nginx",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Classplus",
      location: "On-site (Noida, India)",
      duration: "Nov 2024 - Jan 2025",
      type: "Internship",
      description: [
        "Engineered scalable server infrastructure in Go (Golang), supporting high-concurrency environments for SQL (MySQL) and NoSQL (MongoDB) databases.",
        "Migrated legacy APIs to TypeScript, utilizing ORMs to abstract complex database queries and improve maintainability.",
        "Optimized CI/CD pipelines and automated backend workflows, reducing deployment errors and increasing development velocity.",
      ],
      technologies: [
        "Go",
        "TypeScript",
        "MySQL",
        "MongoDB",
        "CI/CD",
        "ORMs",
        "Backend",
      ],
    },
    {
      role: "GSoC Developer / Open Source Contributor",
      company: "AOSSIE (Google Summer of Code)",
      location: "Remote",
      duration: "May 2024 - Aug 2024",
      type: "Internship",
      description: [
        "Selected for GSoC 2024 to develop 'Monumento,' an AR-integrated social platform; engineered real-time location features by integrating the Geoapify Place Details API.",
        "Built immersive AR experiences and 3D model rendering using Flutter, optimizing mobile performance and UI/UX for seamless user interaction.",
        "Collaborated within an open-source ecosystem to manage version control and peer reviews, delivering production-grade code for global geospatial applications.",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Geoapify API",
        "Firebase",
        "AR Core",
        "Geospatial Data",
        "Git",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (index !== -1) {
            if (entry.isIntersecting) {
              // Add card when it enters viewport
              setVisibleCards((prev) =>
                prev.includes(index) ? prev : [...prev, index],
              );
            } else {
              // Remove card when it leaves viewport
              setVisibleCards((prev) => prev.filter((i) => i !== index));
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      id="experience"
      className="section relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            My journey through different roles and opportunities
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/30 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-20 md:space-y-24 py-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleCards.includes(index);

              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="relative"
                >
                  {/* Connection dot on timeline */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      className={`relative transition-all duration-700 delay-200 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                    >
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
                      <div className="relative w-5 h-5 bg-primary rounded-full border-2 border-background shadow-lg"></div>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`
                      relative md:w-[47%] 
                      ${isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}
                      transition-all duration-700 ease-out
                      ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : isLeft
                            ? "opacity-0 -translate-x-20"
                            : "opacity-0 translate-x-20"
                      }
                    `}
                  >
                    {/* Connector line from card to timeline */}
                    <div
                      className={`
                      hidden md:block absolute top-1/2 h-px -translate-y-1/2
                      ${isLeft ? "right-0 w-8" : "left-0 w-8"}
                      bg-primary/30
                      transition-all duration-700 delay-300
                      ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
                      origin-${isLeft ? "right" : "left"}
                    `}
                    ></div>

                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 md:p-8 group hover:border-primary/30 transition-all hover:shadow-xl">
                      {/* Icon */}
                      <div className="flex items-start justify-between mb-5">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                          <Briefcase size={24} className="text-primary" />
                        </div>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-primary border border-primary/10">
                          {exp.type}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl md:text-2xl font-bold font-montserrat mb-2 text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-4">
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-5">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={16} className="text-gray-500" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-gray-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex gap-3"
                          >
                            <span className="text-primary mt-0.5 flex-shrink-0">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
