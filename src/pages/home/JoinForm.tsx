import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  studentId: z.string().min(6, 'Please enter a valid student ID'),
  interest: z.string().min(1, 'Please select an area of interest'),
});

type FormValues = z.infer<typeof formSchema>;

export function JoinForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', studentId: '', interest: '' },
  });

  function onSubmit(_values: FormValues) {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  }

  return (
    <section id="join" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/4 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">Get Involved</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Join the Club
            </h2>
            <p className="text-white/60 leading-relaxed">
              Take your first step into cloud computing. Fill in your details and we'll be in touch with next steps.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center py-12 text-center"
                data-testid="success-join-form"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">Welcome aboard!</h3>
                <p className="text-white/60 max-w-sm">
                  Thanks for joining — we'll send your onboarding details to your email shortly. Get ready to build.
                </p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-join">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70 text-sm">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Your full name"
                              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 rounded-xl"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="studentId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/70 text-sm">Student ID</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="e.g. 1234567"
                              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 rounded-xl"
                              data-testid="input-student-id"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70 text-sm">University Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="you@student.unimelb.edu.au"
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary/50 rounded-xl"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/70 text-sm">What interests you most?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger
                              className="bg-white/5 border-white/10 text-white focus:border-primary/50 rounded-xl"
                              data-testid="select-interest"
                            >
                              <SelectValue placeholder="Select an area" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#0d0d14] border-white/10">
                            <SelectItem value="certification">AWS Certification</SelectItem>
                            <SelectItem value="workshops">Workshops & Hands-on Learning</SelectItem>
                            <SelectItem value="hackathons">Hackathons</SelectItem>
                            <SelectItem value="networking">Industry Networking</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-8 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                    data-testid="button-submit-join"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : 'Join AWS Cloud Club'}
                  </button>
                </form>
              </Form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
