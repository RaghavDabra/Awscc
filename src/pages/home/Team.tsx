import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const team = [
  { name: 'Agam Johal', role: 'President', initials: 'AJ', color: 'from-cyan-500 to-blue-600' },
  { name: 'Kaavya Bhatia', role: 'Secretary', initials: 'KB', color: 'from-violet-500 to-purple-700' },
  { name: 'Bhavin Garg', role: 'Treasurer', initials: 'BG', color: 'from-emerald-500 to-teal-700' },
  { name: 'Catherine Ho', role: 'Committee Member', initials: 'CH', color: 'from-pink-500 to-rose-700' },
  { name: 'Manu Malempati', role: 'Committee Member', initials: 'MM', color: 'from-orange-500 to-amber-700' },
  { name: 'Hasith Uwage Don', role: 'Committee Member', initials: 'HU', color: 'from-sky-500 to-indigo-700' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[500px] h-[400px] bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">The Team</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              Meet the Committee
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Driven by curiosity and a passion for cloud technology — the people building this community from the ground up.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group hover:border-white/20 transition-all duration-300"
                data-testid={`card-team-${member.name.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <span className="text-xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="text-white font-semibold text-base">{member.name}</h3>
                <p className="text-white/50 text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
