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
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-5xl">
            <motion.h1 className="hero-title" {...fadeUp(0)}>
              Transform Dynamics 365 & Power Platform into Business Growth
            </motion.h1>

            <motion.p
              className="hero-subtitle mx-auto mt-4 max-w-3xl text-balance"
              {...fadeUp(0.08)}
            >
              Purpose-built apps and add-ons that drive measurable productivity.
            </motion.p>

            <motion.div
              className="mx-auto mt-5 grid max-w-3xl gap-2 text-center text-base leading-relaxed sm:text-lg"
              style={{ color: 'var(--text-secondary)' }}
              {...fadeUp(0.16)}
            >
              <p>Make Dataverse simpler. Accelerate decision-making. Automate the busywork.</p>
              <p>We help you move beyond configuration—into sustainable innovation.</p>
            </motion.div>

            <div
              className="mx-auto mt-8 h-px w-40"
              style={{ backgroundColor: 'var(--border-subtle)' }}
            />

            <motion.ul
              className="mt-8 grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4"
              {...fadeUp(0.2)}
              aria-label="Key product highlights"
            >
              <li className="h-full">
                <div className="module-card flex h-full flex-col">
                  <div className="module-icon">
                    <CircleStackIcon className="h-8 w-8" aria-hidden />
                  </div>
                  <div className="text-center">
                    <h3 className="module-title">Metadata Browser</h3>
                    <p className="module-description">
                      Explore and export Dataverse tables, columns and relationships with ease.
                    </p>
                  </div>
                </div>
              </li>
              <li className="h-full">
                <div className="module-card flex h-full flex-col">
                  <div className="module-icon">
                    <BanknotesIcon className="h-8 w-8" aria-hidden />
                  </div>
                  <div className="text-center">
                    <h3 className="module-title">Commission 365</h3>
                    <p className="module-description">
                      Flexible commissions, incentives and bonus plans.
                    </p>
                  </div>
                </div>
              </li>
              <li className="h-full">
                <div className="module-card flex h-full flex-col">
                  <div className="module-icon">
                    <SparklesIcon className="h-8 w-8" aria-hidden />
                  </div>
                  <div className="text-center">
                    <h3 className="module-title">AI Autocloser</h3>
                    <p className="module-description">Resolve non-actionable cases with AI.</p>
                  </div>
                </div>
              </li>
              <li className="h-full">
                <div className="module-card flex h-full flex-col">
                  <div className="module-icon">
                    <ArrowPathRoundedSquareIcon className="h-8 w-8" aria-hidden />
                  </div>
                  <div className="text-center">
                    <h3 className="module-title">Flow Monitor</h3>
                    <p className="module-description">
                      Track and optimize Power Automate flows across environments.
                    </p>
                  </div>
                </div>
              </li>
            </motion.ul>

            <motion.div className="mt-8 flex items-center justify-center gap-4" {...fadeUp(0.24)}>
              <Link
                href="/products"
                aria-label="Explore all products"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: 'var(--color-brand)',
                  color: 'var(--color-brand-foreground)',
                }}
              >
                Explore All Products
              </Link>
              <Link
                href="https://teams.microsoft.com/l/chat/0/0?users=satish@pascalcase.com,likitha@pascalcase.com&topicName=Website%20Inquiry"
                aria-label="Chat with us on Microsoft Teams"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-default)',
                }}
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
