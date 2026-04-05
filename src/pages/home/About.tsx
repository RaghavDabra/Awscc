import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Cpu, Zap, Users } from 'lucide-react';

const focusAreas = [
  { icon: Cloud, label: 'AWS & Cloud Computing', desc: 'Hands-on experience with Amazon Web Services — from EC2 to serverless architectures.' },
  { icon: Cpu, label: 'Artificial Intelligence', desc: 'Explore ML, generative AI, and how modern AI systems are built on cloud infrastructure.' },
  { icon: Zap, label: 'Modern Software Systems', desc: 'Learn DevOps, CI/CD, containers, and the engineering practices powering today\'s tech.' },
  { icon: Users, label: 'Community & Career', desc: 'Connect with like-minded students, mentors, and industry professionals across Melbourne.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Where Cloud Meets Campus
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              AWS Cloud Club – UniMelb is a student-led community at the University of Melbourne dedicated to
              making cloud computing, AI, and modern software accessible to every student — no matter your background.
              We believe the best way to learn is to build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area) => (
              <motion.div
                key={area.label}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{area.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
