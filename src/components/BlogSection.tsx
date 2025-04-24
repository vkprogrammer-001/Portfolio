
import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable Backends with Golang",
      excerpt: "Learn how to create high-performance backend systems using Go, focusing on concurrency and efficient memory management.",
      date: "June 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "https://medium.com",
      category: "Backend Development"
    },
    {
      title: "An Introduction to Flutter for Cross-Platform Development",
      excerpt: "Discover how Flutter simplifies the process of building beautiful, natively compiled applications for mobile, web, and desktop.",
      date: "May 22, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "https://medium.com",
      category: "Mobile Development"
    },
    {
      title: "Getting Started with Machine Learning in Python",
      excerpt: "A beginner-friendly guide to understanding and implementing machine learning algorithms with Python and scikit-learn.",
      date: "April 10, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "https://medium.com",
      category: "AI & Machine Learning"
    }
  ];

  return (
    <section id="blog" className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat">
            Blog & <span className="gradient-text">Articles</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            I share my insights and experiences in software development, AI, machine learning, 
            and personal growth as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="project-card animate-fade-in transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-foreground/60 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium text-sm">
                    Read Article <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center"
          >
            View All Articles <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
