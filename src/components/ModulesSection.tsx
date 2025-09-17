'use client';

import { SpeakerWaveIcon, PhoneIcon, CogIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const modules = [
  {
    icon: SpeakerWaveIcon,
    title: 'Marketing',
    description:
      'Drive customer engagement and lead generation with our comprehensive Marketing module solutions. Automate campaigns, track customer journeys, and optimize your marketing ROI with advanced analytics and personalized experiences.',
  },
  {
    icon: PhoneIcon,
    title: 'Customer Service',
    description:
      'Deliver exceptional customer support with our Customer Service module implementations. Streamline case management, improve response times, and enhance customer satisfaction through intelligent automation and omnichannel support.',
  },
  {
    icon: CogIcon,
    title: 'Field Service',
    description:
      'Optimize field operations and resource management with our Field Service solutions. Schedule appointments, track technicians, manage inventory, and ensure first-time fix rates with mobile-first field service capabilities.',
  },
  {
    icon: ChartBarIcon,
    title: 'Sales',
    description:
      'Accelerate sales performance and pipeline management with our Sales module expertise. Track opportunities, forecast revenue, manage relationships, and close deals faster with intelligent sales automation and insights.',
  },
];

export default function ModulesSection() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24"
      style={{ background: 'linear-gradient(to bottom, var(--surface-1), transparent)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="section-header"
        >
          <h2 className="section-title">
            We build industry specific solutions for Dynamics 365 modules
          </h2>
          <p className="section-subtitle">
            Transform your business processes with our specialized expertise across all major
            Dynamics 365 modules
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: false }}
                className="module-card"
              >
                <div className="module-icon">
                  <IconComponent className="h-8 w-8" />
                </div>

                <div className="text-center">
                  <h3 className="module-title">{module.title}</h3>
                  <p className="module-description">{module.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
