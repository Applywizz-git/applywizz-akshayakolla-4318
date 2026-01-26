// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { Mail, Linkedin, Github, Send } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { toast } from '@/hooks/use-toast';

// const socialLinks = [
//   {
//     name: 'Email',
//     icon: Mail,
//     link: 'mailto:mamidiraginireddy@gmail.com',
//     color: 'hover:text-luxury-gold',
//   },
//   {
//     name: 'LinkedIn',
//     icon: Linkedin,
//     link: 'https://linkedin.com/in/ragini-reddy-345a37370',
//     color: 'hover:text-luxury-gold',
//   },
//   {
//     name: 'GitHub',
//     icon: Github,
//     link: 'https://github.com',
//     color: 'hover:text-luxury-gold',
//   },
// ];

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulating form submission
//     toast({
//       title: "Message Sent! 🎉",
//       description: "Thank you for reaching out. I'll get back to you soon!",
//     });
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-radial opacity-30" />

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl lg:text-5xl font-heading mb-6">
//             Get in <span className="text-gradient-gold">Touch</span>
//           </h2>
//           <div className="w-20 h-1 bg-luxury-gold mx-auto mb-6" />
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Let's collaborate on your next project. Feel free to reach out!
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Left - Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
//               <div className="space-y-2">
//                 <label htmlFor="name" className="text-sm font-medium text-foreground">
//                   Your Name
//                 </label>
//                 <Input
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="bg-background/50 border-luxury-gold/30 focus:border-luxury-gold transition-smooth"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="email" className="text-sm font-medium text-foreground">
//                   Your Email
//                 </label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="bg-background/50 border-luxury-gold/30 focus:border-luxury-gold transition-smooth"
//                   placeholder="john@example.com"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="message" className="text-sm font-medium text-foreground">
//                   Your Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className="bg-background/50 border-luxury-gold/30 focus:border-luxury-gold transition-smooth resize-none"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 size="lg"
//                 className="w-full bg-luxury-gold text-midnight hover:bg-luxury-gold/90 hover:scale-105 transition-elastic font-semibold shadow-[0_0_20px_rgba(255,215,0,0.4)]"
//               >
//                 <Send className="mr-2 h-5 w-5" />
//                 Send Message
//               </Button>
//             </form>
//           </motion.div>

//           {/* Right - Contact Info & Social */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             {/* Email Box */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="glass p-8 rounded-2xl hover:glass-gold transition-smooth"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <motion.div
//                   animate={{ y: [0, -10, 0] }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.4)]"
//                 >
//                   <Mail className="w-8 h-8 text-midnight" />
//                 </motion.div>
//                 <div>
//                   <h3 className="text-xl font-heading text-luxury-gold mb-1">Email</h3>
//                   <a
//                     href="mailto:mamidiraginireddy@gmail.com"
//                     className="text-muted-foreground hover:text-foreground transition-smooth"
//                   >
//                     mamidiraginireddy@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Social Links */}
//             <div className="glass p-8 rounded-2xl">
//               <h3 className="text-2xl font-heading text-luxury-gold mb-6">Connect With Me</h3>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={social.name}
//                     href={social.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     whileHover={{ scale: 1.2, rotate: 5 }}
//                     className={`w-14 h-14 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full flex items-center justify-center text-foreground ${social.color} transition-elastic shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]`}
//                     aria-label={social.name}
//                   >
//                     <social.icon className="w-6 h-6" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             {/* Location Info */}
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="glass p-8 rounded-2xl"
//             >
//               <h3 className="text-xl font-heading text-luxury-gold mb-4">Location</h3>
//               <p className="text-muted-foreground">
//                 Currently based in Plymouth, MN, USA
//               </p>
//               <p className="text-muted-silver text-sm mt-2">
//                 Open to remote and hybrid opportunities
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };






























import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    link: 'mailto:akshaya23kolla@gmail.com',
    color: 'hover:text-luxury-gold',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    link: 'https://linkedin.com/in/akshaya-kolla',
    color: 'hover:text-luxury-gold',
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-10 lg:py-15 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4 sm:mb-6">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto mb-4 sm:mb-6" />
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Let's collaborate on your next project. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass p-6 sm:p-8 rounded-2xl space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-luxury-gold/30 focus:border-luxury-gold transition-smooth"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-luxury-gold/30 focus:border-luxury-gold transition-smooth"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 border-luxury-gold/30 focus:border-luxury-gold transition-smooth resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-luxury-gold text-midnight hover:bg-luxury-gold/90 hover:scale-105 transition-elastic font-semibold shadow-[0_0_20px_rgba(255,215,0,0.4)]"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Right - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Email Box */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-6 sm:p-8 rounded-2xl hover:glass-gold transition-smooth"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-luxury-gold rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                >
                  <Mail className="w-5 h-5 sm:w-8 sm:h-8 text-midnight" />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-heading text-luxury-gold mb-1">Email</h3>
                  <a
                    href="mailto:akshaya23kolla@gmail.com"
                    className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-smooth break-words"
                  >
                    akshaya23kolla@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="glass p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-heading text-luxury-gold mb-4 sm:mb-6">Connect With Me</h3>
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-luxury-gold/10 border border-luxury-gold/30 rounded-full flex items-center justify-center text-foreground ${social.color} transition-elastic shadow-[0_0_15px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)]`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass p-6 sm:p-8 rounded-2xl"
            >
              <h3 className="text-lg sm:text-xl font-heading text-luxury-gold mb-3 sm:mb-4">Location</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Currently based in New York, NY, USA
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};