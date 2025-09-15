"use client";
import { motion } from 'framer-motion';
import { CheckCircledIcon, LightningBoltIcon, LockClosedIcon, RocketIcon, InfoCircledIcon } from '@radix-ui/react-icons';

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
    delay: 0.1
  },
  { 
    Icon: InfoCircledIcon, 
    title: 'License Savings', 
    text: 'Architectures that reduce licensing overhead where possible, optimizing your Microsoft investment.',
    gradient: 'from-blue-500/20 to-cyan-600/20',
    iconBg: 'from-blue-500 to-cyan-600',
    delay: 0.2
  },
  { 
    Icon: LightningBoltIcon, 
    title: 'Faster Time-to-Value', 
    text: 'Iterative delivery that shows results from day one, accelerating your digital transformation journey.',
    gradient: 'from-yellow-500/20 to-orange-600/20',
    iconBg: 'from-yellow-500 to-orange-600',
    delay: 0.3
  },
  { 
    Icon: LockClosedIcon, 
    title: 'Secure by Design', 
    text: 'Security-first approach across environments and data, ensuring compliance and protection at every level.',
    gradient: 'from-purple-500/20 to-pink-600/20',
    iconBg: 'from-purple-500 to-pink-600',
    delay: 0.4
  },
  { 
    Icon: RocketIcon, 
    title: 'Partner Mindset', 
    text: 'We work with you, not just for you. True partnership that grows with your business success.',
    gradient: 'from-indigo-500/20 to-purple-600/20',
    iconBg: 'from-indigo-500 to-purple-600',
    delay: 0.5
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
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Card */}
        <div 
          className="feature-card relative rounded-3xl border backdrop-blur-xl p-8 shadow-medium transition-all duration-500 hover:-translate-y-3 hover:shadow-large overflow-hidden h-full flex flex-col"
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            backgroundColor: 'var(--card-bg, var(--card-bg-fallback))',
            borderColor: 'var(--card-border)',
            boxShadow: 'var(--card-shadow)'
          }}
        >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                
          <header className="flex items-start gap-5 mb-4 flex-shrink-0">
                  <motion.span 
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${f.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-8 w-8 text-white" aria-hidden />
                  </motion.span>
                  <div className="flex-1">
              <h3 
                className="font-bold text-xl transition-colors duration-300 mb-2"
                style={{ color: 'var(--card-text-primary, #0f172a)' }}
              >
                {f.title}
              </h3>
              <div 
                className="w-12 h-1 bg-gradient-to-r to-transparent rounded-full"
                style={{ background: 'linear-gradient(to right, var(--card-text-secondary, #475569), transparent)' }}
              ></div>
                  </div>
                </header>
                
          <p 
            className="text-sm transition-colors duration-300 leading-relaxed flex-1"
            style={{ color: 'var(--card-text-secondary, #475569)' }}
          >
                  {f.text}
                </p>
                
                {/* Hover Effect Indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--card-text-secondary, #475569)' }}
            ></div>
                </div>
              </div>
            </motion.article>
          );
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="space-y-8">
        {/* First row - 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {firstRow.map(renderFeature)}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl items-stretch">
            {secondRow.map(renderFeature)}
          </div>
        </div>
      </div>
      
      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-blue-700 dark:text-blue-400">
            Ready to experience the difference?
          </span>
        </div>
      </motion.div>
    </section>
  );
}


