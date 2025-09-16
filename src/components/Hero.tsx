'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CircleStackIcon,
  BanknotesIcon,
  SparklesIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/react/24/outline';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-5xl space-y-10">
            <motion.h1 className="hero-title" {...fadeUp(0)}>
              Transform Dynamics 365 & Power Platform into Business Growth
            </motion.h1>

            <motion.p className="hero-subtitle" {...fadeUp(0.08)}>
              From smarter sales commissions to AI-powered case resolution, Pascalcase delivers
              tools that make Dynamics 365 and Power Platform work harder for your business.
            </motion.p>

            <motion.p
              className="mx-auto max-w-3xl text-base sm:text-lg"
              style={{ color: 'var(--text-secondary)' }}
              {...fadeUp(0.14)}
            >
              Trusted by thousands of users, we build productivity-driven apps and add-ons that
              simplify processes, boost performance, and unlock the true value of Dataverse. Our
              expertise helps you go beyond configuration—into innovation.
            </motion.p>

            <motion.ul
              className="grid gap-3 text-left sm:grid-cols-2"
              {...fadeUp(0.2)}
              aria-label="Key product highlights"
            >
              <li className="flex items-start gap-3 rounded-lg border border-slate-200/50 bg-white/60 p-3 dark:border-slate-700/50 dark:bg-slate-800/60">
                <CircleStackIcon
                  className="mt-0.5 h-5 w-5 text-blue-600 dark:text-blue-400"
                  aria-hidden
                />
                <span className="text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                  <strong>Metadata Browser</strong> – Explore and export Dataverse tables, columns &
                  relationships
                </span>
              </li>
              <li className="flex items-start gap-3 rounded-lg border border-slate-200/50 bg-white/60 p-3 dark:border-slate-700/50 dark:bg-slate-800/60">
                <BanknotesIcon
                  className="mt-0.5 h-5 w-5 text-emerald-600 dark:text-emerald-400"
                  aria-hidden
                />
                <span className="text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                  <strong>Commission 365</strong> – Flexible commission, incentive & bonus plans
                </span>
              </li>
              <li className="flex items-start gap-3 rounded-lg border border-slate-200/50 bg-white/60 p-3 dark:border-slate-700/50 dark:bg-slate-800/60">
                <SparklesIcon
                  className="mt-0.5 h-5 w-5 text-violet-600 dark:text-violet-400"
                  aria-hidden
                />
                <span className="text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                  <strong>AI Autocloser</strong> – Automatically resolve non-actionable cases with
                  AI
                </span>
              </li>
              <li className="flex items-start gap-3 rounded-lg border border-slate-200/50 bg-white/60 p-3 dark:border-slate-700/50 dark:bg-slate-800/60">
                <ArrowPathRoundedSquareIcon
                  className="mt-0.5 h-5 w-5 text-cyan-600 dark:text-cyan-400"
                  aria-hidden
                />
                <span className="text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                  <strong>Flow Monitor</strong> – Track and optimize Power Automate flows across
                  environments
                </span>
              </li>
            </motion.ul>

            <motion.div
              className="flex flex-row items-center justify-center gap-3 pt-2 sm:gap-4"
              {...fadeUp(0.28)}
            >
              <Link href="/products" aria-label="Explore all products" className="btn-primary">
                Explore All Products
              </Link>
              <Link
                href="https://teams.microsoft.com/l/chat/0/0?users=satish@pascalcase.com,likitha@pascalcase.com&topicName=Website%20Inquiry"
                aria-label="Chat with us on Microsoft Teams"
                className="btn-secondary"
              >
                Chat with Us on Microsoft Teams
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
