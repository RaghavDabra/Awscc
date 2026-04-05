import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    type: 'Workshop',
    typeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    title: 'Building Your First Serverless App on AWS',
    date: 'May 15, 2025',
    time: '6:00 PM – 8:30 PM',
    location: 'Engineering and IT Building, UniMelb',
    desc: 'Get hands-on with AWS Lambda, API Gateway, and DynamoDB. Build and deploy a real serverless application from scratch.',
  },
  {
    type: 'Hackathon',
    typeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    title: 'CloudHacks 2025: Build for Impact',
    date: 'June 7–8, 2025',
    time: '48-hour event',
    location: 'Melbourne Connect',
    desc: 'Two days, real problems, cloud solutions. Compete in teams, win prizes, and build something you\'re proud of. Open to all skill levels.',
  },
  {
    type: 'Networking',
    typeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    title: 'Tech Industry Night with AWS Partners',
    date: 'June 25, 2025',
    time: '5:30 PM – 8:00 PM',
    location: 'UniMelb Campus',
    desc: 'Meet engineers and leaders from AWS partner companies. Hear their stories, ask your questions, and leave with real connections.',
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

export function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="events" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Upcoming Events</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
              What's Coming Up
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              From workshops to hackathons — there's always something to show up for.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {events.map((event) => (
              <motion.div
                key={event.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 group hover:border-white/20 transition-all duration-300 flex flex-col"
                data-testid={`card-event-${event.type.toLowerCase()}`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${event.typeColor}`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg leading-snug mb-3">{event.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">{event.desc}</p>
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <Calendar className="w-3.5 h-3.5 text-primary/70" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <Clock className="w-3.5 h-3.5 text-primary/70" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <a
              href="#join"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold hover:bg-primary/20 transition-all duration-300 group"
              data-testid="button-view-all-events"
            >
              Join Our Community
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
