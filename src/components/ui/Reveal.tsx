import { motion } from 'framer-motion';
import type { HTMLMotionProps, Variants } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
  delay?: number;
  variants?: Variants;
}

export function Reveal({ delay = 0, variants, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants ?? fadeUp(delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
