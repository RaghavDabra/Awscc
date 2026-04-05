import { Suspense, lazy, Component, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import splineScene from '../../assets/scene.spline?url';

const Spline = lazy(() => import('@splinetool/react-spline'));

function SplineFallback() {
  return (
    <div className="absolute inset-0 w-full h-full bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-background to-blue-900/10" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,240,255,0.04) 0%, transparent 70%)',
      }} />
      {/* Animated dots grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            style={{
              left: `${(i % 6) * 20 + 10}%`,
              top: `${Math.floor(i / 6) * 20 + 10}%`,
              animation: `pulse ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
              animationDelay: `${(i * 0.15) % 2}s`,
              opacity: 0.3 + (i % 5) * 0.1,
            }}
          />
        ))}
      </div>
    </div>
  );
}

interface ErrorBoundaryState { hasError: boolean }

class SplineErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <SplineFallback />;
    return this.props.children;
  }
}

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-70">
        <SplineErrorBoundary>
          <Suspense fallback={<SplineFallback />}>
            <Spline scene={splineScene} />
          </Suspense>
        </SplineErrorBoundary>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background z-0 pointer-events-none" />
      {/* Radial glow behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)] z-0 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="flex w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-pulse" />
          <span className="text-xs font-medium text-white/80 uppercase tracking-wider">University of Melbourne</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">AWS Cloud Club</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-12"
        >
          Learn Cloud. Build Real Projects. Connect with Industry.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#join"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
            data-testid="button-join-club"
          >
            Join the Club
          </a>
          <a
            href="#events"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2"
            data-testid="button-explore-events"
          >
            Explore Events
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
