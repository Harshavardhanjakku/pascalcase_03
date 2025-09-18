'use client';
import { motion } from 'framer-motion';
import {
  CheckCircledIcon,
  LightningBoltIcon,
  LockClosedIcon,
  RocketIcon,
  InfoCircledIcon,
} from '@radix-ui/react-icons';

type Feature = {
  Icon: React.ElementType;
  title: string;
  text: string;
  gradient: string;
  iconBg: string;
  delay: number;
};

const features: Feature[] = [
  {
    Icon: CheckCircledIcon,
    title: 'Low Total Cost',
    text: 'Lean delivery that maximizes value and minimizes waste through efficient processes and smart resource allocation.',
    gradient: 'from-green-500/20 to-emerald-600/20',
    iconBg: 'from-green-500 to-emerald-600',
    delay: 0.1,
  },
  {
    Icon: InfoCircledIcon,
    title: 'License Savings',
    text: 'Architectures that reduce licensing overhead where possible, optimizing your Microsoft investment.',
    gradient: 'from-blue-500/20 to-cyan-600/20',
    iconBg: 'from-blue-500 to-cyan-600',
    delay: 0.2,
  },
  {
    Icon: LightningBoltIcon,
    title: 'Faster Time-to-Value',
    text: 'Iterative delivery that shows results from day one, accelerating your digital transformation journey.',
    gradient: 'from-yellow-500/20 to-orange-600/20',
    iconBg: 'from-yellow-500 to-orange-600',
    delay: 0.3,
  },
  {
    Icon: LockClosedIcon,
    title: 'Secure by Design',
    text: 'Security-first approach across environments and data, ensuring compliance and protection at every level.',
    gradient: 'from-purple-500/20 to-pink-600/20',
    iconBg: 'from-purple-500 to-pink-600',
    delay: 0.4,
  },
  {
    Icon: RocketIcon,
    title: 'Partner Mindset',
    text: 'We work with you, not just for you. True partnership that grows with your business success.',
    gradient: 'from-indigo-500/20 to-purple-600/20',
    iconBg: 'from-indigo-500 to-purple-600',
    delay: 0.5,
  },
];

export default function FeatureGrid() {
  // Split features into rows for better control
  const firstRow = features.slice(0, 3);
  const secondRow = features.slice(3, 5);

  const renderFeature = (f: Feature) => {
    const Icon = f.Icon;
    return (
      <motion.article
        key={f.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: f.delay }}
        viewport={{ once: true }}
        className="group relative h-full"
      >
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${f.gradient} rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
        ></div>

        {/* Card */}
        <div
          className="feature-card shadow-medium hover:shadow-large relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3"
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            backgroundColor: 'var(--card-bg, var(--card-bg-fallback))',
            borderColor: 'var(--card-border)',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-gradient-to-br from-white/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-12 translate-y-12 rounded-full bg-gradient-to-tr from-white/5 to-transparent"></div>

          <header className="mb-4 flex flex-shrink-0 items-start gap-5">
            <motion.span
              className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${f.iconBg} shadow-lg transition-transform duration-300 group-hover:scale-110`}
              whileHover={{ rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon className="h-8 w-8 text-white" aria-hidden />
            </motion.span>
            <div className="flex-1">
              <h3
                className="mb-2 text-xl font-bold transition-colors duration-300"
                style={{ color: 'var(--card-text-primary, #0f172a)' }}
              >
                {f.title}
              </h3>
              <div
                className="h-1 w-12 rounded-full bg-gradient-to-r to-transparent"
                style={{
                  background:
                    'linear-gradient(to right, var(--card-text-secondary, #475569), transparent)',
                }}
              ></div>
            </div>
          </header>

          <p
            className="flex-1 text-sm leading-relaxed transition-colors duration-300"
            style={{ color: 'var(--card-text-secondary, #475569)' }}
          >
            {f.text}
          </p>

          {/* Hover Effect Indicator */}
          <div className="absolute right-4 bottom-4 flex-shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div
              className="h-2 w-2 animate-pulse rounded-full"
              style={{ backgroundColor: 'var(--card-text-secondary, #475569)' }}
            ></div>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="space-y-8">
        {/* First row - 3 items */}
        <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {firstRow.map(renderFeature)}
        </div>

        {/* Second row - 2 items centered */}
        <div className="flex justify-center">
          <div className="grid max-w-2xl grid-cols-1 items-stretch gap-8 sm:grid-cols-2">
            {secondRow.map(renderFeature)}
          </div>
        </div>
      </div>
    </section>
  );
}
