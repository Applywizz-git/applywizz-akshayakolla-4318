import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Cloud-Native Healthcare Management Platform',
    description: 'Secure healthcare web application with patient data access and scheduling workflows optimized for clinical interoperability.',
    image: 'https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=1200',
    technologies: ['React', 'Spring Boot', 'REST APIs', 'Apache Kafka', 'Azure AKS'],
    highlights: [
      'Built patient scheduling and care coordination using React, Spring Boot, and REST APIs, cutting workflows by 32%',
      'Implemented microservices with Apache Kafka on Azure AKS for scalable event handling',
      'Configured CI/CD pipelines with Docker, Jenkins, and Terraform for automated deployments',
    ],
  },
  {
    title: 'Real-Time Banking Fraud Detection System',
    description: 'Backend transaction processing system with high-volume event analysis and real-time visualization dashboards.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    technologies: ['Java', 'Kafka', 'Spark', 'React', 'Angular', 'PostgreSQL'],
    highlights: [
      'Developed backend services using Java, Kafka, and Spark for real-time transaction analysis',
      'Created secure REST APIs and analyst dashboards to visualize transaction risk signals',
      'Optimized streaming pipelines for near real-time fraud monitoring without impacting core performance',
    ],
  },
  {
    title: 'Airline Operations Monitoring Dashboard',
    description: 'Real-time operations dashboard with live flight status, gate activity, and geospatial tracking for operations teams.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=1200',
    technologies: ['React', 'WebSockets', 'Spring Boot', 'AWS', 'Kubernetes', 'Geospatial APIs'],
    highlights: [
      'Implemented real-time dashboard using React and WebSockets for live flight status and delay management',
      'Integrated backend services with geospatial APIs for mapping flight movements and airport activity',
      'Deployed on AWS using Kubernetes with autoscaling, sustaining 99.9% uptime during peak periods',
    ],
  },
];

export const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden bg-midnight/50">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading mb-6">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left - Image */}
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <div className="absolute inset-0 bg-luxury-gold/10 group-hover:bg-luxury-gold/0 transition-smooth z-10" />
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-[350px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80'; // Reliable tech placeholder
                  }}
                />
              </div>

              {/* Right - Details */}
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl lg:text-4xl font-heading text-luxury-gold"
                >
                  {currentProject.title}
                </motion.h3>
                <p className="text-xl text-foreground font-medium leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-muted-silver uppercase tracking-wider">Key Highlights:</h4>
                  <ul className="space-y-3">
                    {currentProject.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-luxury-gold mt-1 text-lg">✦</span>
                        <span className="text-base sm:text-lg">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-luxury-gold/5 border border-luxury-gold/20 rounded-xl text-sm text-luxury-gold font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${index === currentIndex ? 'bg-luxury-gold w-12' : 'bg-luxury-gold/20 w-4'
                    }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handlePrev}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-2xl border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold hover:text-midnight transition-elastic"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={handleNext}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-2xl border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold hover:text-midnight transition-elastic"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
