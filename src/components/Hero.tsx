import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';

const FloatingElements = () => {
  const floatingItems = [
    { icon: '☕', x: '5%', y: '15%' },
    { icon: '⚛️', x: '95%', y: '25%' },
    { icon: '☁️', x: '10%', y: '85%' },
    { icon: '🐳', x: '90%', y: '75%' },
    { icon: '⚙️', x: '25%', y: '5%' },
    { icon: '🛡️', x: '75%', y: '95%' },
  ];

  return (
    <>
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-xl lg:text-2xl text-luxury-gold opacity-80 z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.4, 0.9, 0.4],
            scale: [0.8, 1.3, 0.8],
            y: [-15, 15, -15],
            x: [-8, 8, -8],
          }}
          transition={{
            duration: 4 + index * 0.5,
            delay: index * 0.3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "easeInOut",
          }}
          style={{
            left: item.x,
            top: item.y,
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A234208_1px,transparent_1px),linear-gradient(to_bottom,#0A234208_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <motion.h1
            className="text-5xl lg:text-7xl font-heading mb-4 leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block text-2xl md:text-2xl font-semibold lg:text-2xl text-foreground mb-1">
              Hello, I'm
            </span>
            <span className="bg-gradient-to-r from-luxury-gold via-yellow-500 to-amber-600 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl block mb-6 font-bold">
              <TypeAnimation
                sequence={[
                  'Akshaya Kolla',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
              />
            </span>

            <span className="md:text-4xl lg:text-5xl leading-tight font-heading">
              Building Scalable{' '}
              <span className="text-gradient-gold">Enterprise Systems</span>{' '}
              with Modern Tech
            </span>
          </motion.h1>

          <div className="text-xl lg:text-2xl mb-4 h-8 text-luxury-gold font-semibold">
            <TypeAnimation
              sequence={[
                'Java',
                2000,
                'Spring Boot',
                2000,
                'React.js',
                2000,
                'Microservices',
                2000,
                'AWS/Azure',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            className="text-lg text-muted-foreground mb-6 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Senior Full Stack Software Engineer with 5+ years of experience building and scaling enterprise web applications across healthcare, banking, and airline domains.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <ScrollLink to="projects" smooth={true} offset={-80} duration={500}>
              <Button
                size="lg"
                className="bg-luxury-gold text-midnight hover:bg-luxury-gold/90 hover:scale-105 transition-elastic font-semibold shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)]"
              >
                View Projects
              </Button>
            </ScrollLink>
            <Button
              size="lg"
              variant="outline"
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-midnight transition-elastic font-semibold"
              asChild
            >
              <a href="/Akshaya_Kolla_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 w-80 h-80 lg:w-[28rem] lg:h-[28rem] -inset-4 pointer-events-none">
              <FloatingElements />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-luxury-gold/30 shadow-2xl z-10 cursor-pointer"
            >
              <img
                src="/profile.png"
                alt="Akshaya Kolla"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-luxury-gold/10 blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ScrollLink to="about" smooth={true} offset={-80} duration={500}>
          <ChevronDown className="w-8 h-8 text-luxury-gold cursor-pointer" />
        </ScrollLink>
      </motion.div>
    </section>
  );
};
