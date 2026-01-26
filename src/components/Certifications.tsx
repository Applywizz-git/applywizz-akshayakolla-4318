import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Meta Front-End Developer Professional Certificate',
    provider: 'Coursera',
    icon: Award,
  },
  {
    title: 'IBM Full Stack Software Developer Professional Certificate',
    provider: 'Coursera',
    icon: Award,
  },
  {
    title: 'Spring Boot Microservices with Spring Cloud',
    provider: 'LinkedIn Learning',
    icon: Award,
  },
  {
    title: 'Docker and Kubernetes: The Complete Guide',
    provider: 'LinkedIn Learning',
    icon: Award,
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    provider: 'Coursera',
    icon: Award,
  },
  {
    title: 'Building Scalable Java Microservices with Spring Boot',
    provider: 'Coursera',
    icon: Award,
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-10 lg:py-15 relative overflow-hidden">
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
            <span className="text-gradient-gold">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group perspective-1000"
            >
              <div className="glass p-8 rounded-2xl h-full flex flex-col items-center text-center relative overflow-hidden transform-gpu transition-all duration-300 ">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <div className="w-20 h-20 bg-luxury-gold rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,215,0,0.4)] group-hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] transition-all relative z-10">
                  <cert.icon className="w-10 h-10 text-midnight" />
                </div>

                <h3 className="text-xl font-heading text-foreground mb-3 relative z-10">
                  {cert.title}
                </h3>
                <p className="text-muted-silver font-medium relative z-10">
                  {cert.provider}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
