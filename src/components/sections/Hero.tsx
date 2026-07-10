import { motion } from 'framer-motion';
import { ArrowRight, FolderGit2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { staggerContainer, fadeUp } from '../../lib/motion';
import profilePhoto from '../../assets/profile.png';

const tickerStack = ['Python', 'Go', 'gRPC', 'GCP', 'AWS', 'Bigtable', 'Terraform', 'Docker'];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-4 md:pt-28 md:pb-8">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.12, 0.1)}
            className="text-center lg:text-left"
          >
            <motion.p variants={fadeUp()} className="font-mono text-sm text-ink-faint mb-3">
              Álvaro Lucas Castillo Calabacero
            </motion.p>

            <motion.div variants={fadeUp()} className="flex items-center justify-center lg:justify-start gap-3 mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              <span>Backend Engineer</span>
              <span className="text-ink-faint">·</span>
              <span>Cloud &amp; DevOps</span>
              <span className="text-ink-faint">·</span>
              <span>IA</span>
            </motion.div>

            <motion.h1
              variants={fadeUp()}
              className="max-w-3xl mx-auto lg:mx-0 text-4xl md:text-6xl font-extrabold leading-[1.1] text-ink text-balance"
            >
              Construyo plataformas backend que corren en producción, a gran escala.
            </motion.h1>

            <motion.p variants={fadeUp()} className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-ink-muted leading-relaxed">
              Diseño y construyo plataformas cloud, APIs escalables y productos impulsados por IA que resuelven
              problemas reales.
            </motion.p>

            <motion.div variants={fadeUp()} className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button href="#stack" icon={<ArrowRight size={16} />}>
                Ver stack
              </Button>
              <Button href="#contact" variant="secondary" icon={<FolderGit2 size={16} />}>
                Hablemos
              </Button>
            </motion.div>

            <motion.div variants={fadeUp()} className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3">
              {tickerStack.map((tech) => (
                <span key={tech} className="font-mono text-xs text-ink-faint">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative mx-auto lg:mx-0 shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-accent/25 blur-3xl scale-90" />
            <img
              src={profilePhoto}
              alt="Álvaro Lucas Castillo Calabacero"
              className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-base-borderHover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
