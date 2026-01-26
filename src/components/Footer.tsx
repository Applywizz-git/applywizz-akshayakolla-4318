import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    link: 'mailto:akshaya23kolla@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    link: 'https://linkedin.com/in/akshaya-kolla',
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-luxury-gold/20">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full flex items-center justify-center text-foreground hover:text-luxury-gold hover:bg-luxury-gold/20 transition-elastic shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-center"
          >
            {new Date().getFullYear()} •{' '}
            <span className="text-gradient-gold font-heading font-semibold animate-pulse-glow">
              Akshaya Kolla
            </span>
            {' '}• All rights reserved
          </motion.p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollLink to="hero" smooth={true} duration={500}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            size="icon"
            className="w-12 h-12 rounded-full bg-luxury-gold text-midnight hover:bg-luxury-gold/90 shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-elastic"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </Button>
        </motion.div>
      </ScrollLink>
    </footer>
  );
};
