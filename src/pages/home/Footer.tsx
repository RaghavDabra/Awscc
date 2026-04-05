import { FaLinkedinIn } from 'react-icons/fa';
import { SiInstagram, SiGithub } from 'react-icons/si';
import { Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-white">AWS Cloud Club</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                A student-run community at the University of Melbourne dedicated to cloud computing, AI, and modern software.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label="LinkedIn"
                  data-testid="link-linkedin"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label="Instagram"
                  data-testid="link-instagram"
                >
                  <SiInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  aria-label="GitHub"
                  data-testid="link-github"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Activities', href: '#activities' },
                  { name: 'Team', href: '#team' },
                  { name: 'Events', href: '#events' },
                  { name: 'Join the Club', href: '#join' },
                ].map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/50 text-sm hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href="mailto:awscloudclubunimelb@gmail.com"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors group"
                  data-testid="link-email"
                >
                  <Mail className="w-4 h-4 text-primary/70 flex-shrink-0" />
                  <span>awscloudclubunimelb@gmail.com</span>
                </a>
                <a
                  href="https://linktr.ee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 text-sm hover:text-white transition-colors"
                  data-testid="link-linktree"
                >
                  <ExternalLink className="w-4 h-4 text-primary/70 flex-shrink-0" />
                  <span>Linktree</span>
                </a>
                <p className="text-white/30 text-sm mt-4 leading-relaxed">
                  University of Melbourne<br />
                  Parkville, Victoria 3010
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} AWS Cloud Club – University of Melbourne. All rights reserved.
            </p>
            <p className="text-white/20 text-xs">
              Made with passion at UniMelb
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
