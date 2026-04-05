import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Hammer, Heart, Network, Award } from 'lucide-react';

const aims = [
  {
    icon: Hammer,
    title: 'Hands-On Learning',
    description: 'No passive lectures. Every session involves real projects, live coding, and tangible deployments. You leave with something built, not just notes taken.',
  },
  {
    icon: Heart,
    title: 'Beginner-Friendly Environment',
    description: 'Zero prior cloud experience required. We start from the basics and grow together — every question is a good question, every member matters.',
  },
  {
    icon: Network,
    title: 'Industry Connections',
    description: 'Regular interactions with engineers and tech leaders at Melbourne\'s top companies. Real relationships, not just LinkedIn connections.',
  },
  {
    icon: Award,
    title: 'Certification Support',
    description: 'Structured study groups for AWS certification exams. Accountability partners, practice tests, and resources to help you earn credentials that matter.',
  },
];

export function ClubAims() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 leading-tight">
              What We<br />Stand For
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              We're not just a club — we're a launchpad. Our four core pillars guide everything we do,
              from the way we run workshops to how we support each member's individual journey in tech.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-white/60">50+ active members</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-white/60">University of Melbourne</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            {aims.map((aim, i) => (
              <motion.div
                key={aim.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 glass-card rounded-xl p-5 group hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                  <aim.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{aim.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{aim.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
