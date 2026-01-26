import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Ascension Health',
    role: 'Senior Java Full Stack Developer',
    period: 'Aug 2024 - Present',
    location: 'St. Louis, MO',
    responsibilities: [
      'Owned full-stack delivery of patient scheduling and care coordination using Java, Spring Boot, React, and REST APIs, cutting manual workflows by 32%',
      'Applied Core Java (Collections, multithreading, concurrency) to build thread-safe Spring Boot services, improving API performance by 41%',
      'Built real-time dashboards with React, TypeScript, Redux Toolkit, and Tailwind CSS, improving workflow efficiency by 28%',
      'Implemented REST and SOAP services aligned with FHIR standards, raising interoperability accuracy by 35%',
      'Ran microservices on Azure AKS and AWS EKS with Docker and Kubernetes, maintaining 99.9% uptime',
      'Optimized JVM performance through memory tuning, connection pooling, and database optimization',
    ],
  },
  {
    company: 'Fifth Third Bank',
    role: 'Software Developer',
    period: 'May 2021 - Jul 2023',
    location: 'Cincinnati, OH',
    responsibilities: [
      'Strengthened core banking services using Core Java (Collections, concurrency, JVM tuning), reducing transaction failures by 29%',
      'Refined digital banking workflows using React, Angular, and JavaScript, improving page load times by 34%',
      'Hardened system integrations through OAuth2, JWT, REST, and SOAP services for regulatory compliance',
      'Implemented Kafka and RabbitMQ event pipelines, reducing fraud detection latency by 42%',
      'Tuned PostgreSQL, Oracle, MongoDB, and Redis queries with indexing and caching, lowering response times by 37%',
      'Standardized Jenkins, Maven, Docker, and Kubernetes workflows, cutting deployment downtime by 46%',
    ],
  },
  {
    company: 'United Airlines',
    role: 'Full Stack Developer',
    period: 'Jun 2019 - May 2021',
    location: 'Chicago, IL',
    responsibilities: [
      'Built booking and reservation services using Core Java (multithreading, synchronization) with Spring Boot, reducing failures by 27%',
      'Delivered real-time flight status dashboards with React, Angular, and WebSockets, enabling 33% faster delay response',
      'Implemented Spring Security with OAuth2 and JWT, maintaining 100% compliance with airline security standards',
      'Developed loyalty rewards and baggage workflows through Spring Boot microservices, improving transaction speed by 29%',
      'Deployed Docker-based services on AWS Kubernetes with autoscaling, sustaining 99.9% uptime',
      'Integrated Apache Kafka and AWS SQS for baggage and flight updates, improving processing speed by 41%',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-royal-blue/10">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading mb-6">
            Professional <span className="text-gradient-gold">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-luxury-gold/30 hidden lg:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 lg:mb-20 ${index % 2 === 0 ? 'lg:pr-[50%] lg:text-left' : 'lg:pl-[50%] lg:text-left'
                }`}
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.5)] hidden lg:flex">
                <Briefcase className="w-6 h-6 text-midnight" />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass p-8 rounded-2xl hover:glass-gold transition-smooth border border-white/5"
              >
                <div className="flex items-start gap-4 lg:hidden mb-4">
                  <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-midnight" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading text-luxury-gold mb-1">{exp.company}</h3>
                    <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                  </div>
                </div>

                <div className="hidden lg:block mb-4">
                  <h3 className="text-2xl font-heading text-luxury-gold mb-1">{exp.company}</h3>
                  <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                </div>

                <div className="text-muted-silver mb-4 font-medium flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-luxury-gold" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-luxury-gold" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-luxury-gold mt-1.5">▸</span>
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
