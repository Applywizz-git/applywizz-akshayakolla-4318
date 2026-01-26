import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Redux Toolkit', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate/JPA', 'Node.js', 'Express.js'],
  },
  {
    title: 'Cloud/DevOps',
    skills: ['AWS (EC2, S3, EKS, SQS, RDS)', 'Azure (AKS, Blob Storage)', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis'],
  },
  {
    title: 'Messaging',
    skills: ['Apache Kafka', 'AWS SQS', 'RabbitMQ'],
  },
  {
    title: 'Testing & Tools',
    skills: ['JUnit', 'Mockito', 'Selenium', 'Postman', 'Swagger', 'SonarQube', 'Git', 'Maven', 'Gradle'],
  },
];

const topSkills = [
  { name: 'Java', percentage: 95 },
  { name: 'Spring Boot', percentage: 92 },
  { name: 'React', percentage: 88 },
  { name: 'AWS', percentage: 85 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-10 lg:py-15 relative overflow-hidden bg-gradient-to-b from-royal-blue/10 to-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading mb-6">
            Technical <span className="text-gradient-gold">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto" />
        </motion.div>

        {/* Progress Rings for Top Skills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="hsl(var(--muted))"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="hsl(var(--luxury-gold))"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 352" }}
                    whileInView={{
                      strokeDasharray: `${(skill.percentage / 100) * 352} 352`,
                    }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-heading text-luxury-gold">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
              <span className="text-lg font-semibold text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-2xl hover:glass-gold transition-smooth"
            >
              <h3 className="text-xl font-heading text-luxury-gold mb-4 border-b border-luxury-gold/30 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 bg-luxury-gold/10 rounded-lg text-sm text-foreground font-medium hover:bg-luxury-gold hover:text-midnight transition-smooth cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
