import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Texas',
    period: 'Graduated',
    location: 'Arlington, TX',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-royal-blue/10">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading mb-6">
            <span className="text-gradient-gold">Education</span>
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl hover:glass-gold transition-smooth relative overflow-hidden border border-white/5"
            >
              <div className="absolute top-4 right-4 w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-luxury-gold" />
              </div>

              <div className="relative z-10 pr-20">
                <h3 className="text-2xl font-heading text-luxury-gold mb-3 leading-tight">
                  {edu.degree}
                </h3>
                <p className="text-xl font-semibold text-foreground mb-2">
                  {edu.school}
                </p>
                <div className="text-muted-silver font-medium flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-luxury-gold" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-luxury-gold" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent shadow-inner"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};