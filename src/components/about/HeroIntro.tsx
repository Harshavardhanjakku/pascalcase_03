'use client';
import { motion } from 'framer-motion';

export default function HeroIntro() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-4 sm:px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-green-500/20 to-blue-600/20 blur-3xl"></div>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 text-center"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-3 flex items-center justify-center gap-3"
          >
            <motion.div
              initial={{ rotate: -6, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white drop-shadow-sm"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2C8.134 2 5 5.134 5 9c0 2.4 1.178 4.515 3 5.8V17c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-2.2c1.822-1.285 3-3.4 3-5.8 0-3.866-3.134-7-7-7zm2.5 12.1l-.5.35V16h-4v-1.55l-.5-.35C8.3 13.02 7.5 11.57 7.5 10c0-2.485 2.015-4.5 4.5-4.5S16.5 7.515 16.5 10c0 1.57-.8 3.02-2 4.1z" />
                <rect x="9" y="19" width="6" height="1" rx="0.5" />
                <rect x="10" y="21" width="4" height="1" rx="0.5" />
              </svg>
            </motion.div>
            <h1
              className="text-4xl font-bold sm:text-5xl lg:text-6xl"
              style={{ color: 'var(--text-primary)' }}
            >
              Why Pascalcase?
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-lg leading-relaxed sm:text-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            We are ex-Microsoft employees. We have unparalleled product knowledge.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
