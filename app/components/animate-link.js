'use client'

import { motion } from 'framer-motion'

export default function BounceLink({ href, children, className = '', ...props }) {
  return (
    <motion.a
      href={href}
      className={`inline-block ${className}`}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'tween', duration: 0.1, ease: 'easeInOut' }}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </motion.a>
  );
}
