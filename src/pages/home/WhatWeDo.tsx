import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Trophy, GraduationCap, Briefcase } from 'lucide-react';

const activities = [
  {
    icon: BookOpen,
    title: 'Workshops',
    description: 'Hands-on technical workshops covering AWS services, cloud architecture, containerization, serverless computing, and more. Learn by doing — not just watching.',
    tags: ['AWS', 'Hands-on', 'Weekly'],
    color: 'from-cyan-500/10 to-cyan-500/0',
    border: 'hover:border-cyan-500/30',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    glow: 'shadow-[0_0_40px_rgba(6,182,212,0.08)]',
  },
  {
    icon: Trophy,
    title: 'Hackathons',
    description: 'Compete and collaborate in intense build sprints. Solve real-world problems using cloud technology, win prizes, and build projects for your portfolio.',
    tags: ['Build', 'Compete', 'Win'],
    color: 'from-violet-500/10 to-violet-500/0',
    border: 'hover:border-violet-500/30',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
    glow: 'shadow-[0_0_40px_rgba(139,92,246,0.08)]',
  },
  {
    icon: GraduationCap,
    title: 'Certification Study Groups',
    description: 'Prepare for AWS certifications — Cloud Practitioner, Solutions Architect, Developer — with structured study sessions, practice exams, and peer support.',
    tags: ['AWS Cert', 'Study', 'Exam Prep'],
    color: 'from-emerald-500/10 to-emerald-500/0',
    border: 'hover:border-emerald-500/30',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    glow: 'shadow-[0_0_40px_rgba(52,211,153,0.08)]',
  },
  {
    icon: Briefcase,
    title: 'Industry Networking',
    description: 'Connect with engineers, architects, and leaders from Melbourne\'s tech scene. Guest talks, company visits, and direct pathways to internships and grad roles.',
    tags: ['Networking', 'Industry', 'Careers'],
    color: 'from-orange-500/10 to-orange-500/0',
    border: 'hover:border-orange-500/30',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
    glow: 'shadow-[0_0_40px_rgba(251,146,60,0.08)]',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="activities" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">What We Do</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Built for Builders
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              From your first cloud deployment to landing a cloud engineering role — we've got the programs to get you there.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((act) => (
              <motion.div
                key={act.title}
                variants={itemVariants}
                className={`relative glass-card rounded-2xl p-8 group ${act.border} transition-all duration-300 overflow-hidden ${act.glow}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${act.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${act.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <act.icon className={`w-7 h-7 ${act.iconColor}`} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{act.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">{act.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {act.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
