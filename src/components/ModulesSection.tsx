import Link from 'next/link';
import {
  SpeakerWaveIcon,
  PhoneIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const modules = [
  {
    icon: SpeakerWaveIcon,
    title: 'Marketing',
    description: 'Drive customer engagement and lead generation with our comprehensive Marketing module solutions. Automate campaigns, track customer journeys, and optimize your marketing ROI with advanced analytics and personalized experiences.'
  },
  {
    icon: PhoneIcon,
    title: 'Customer Service',
    description: 'Deliver exceptional customer support with our Customer Service module implementations. Streamline case management, improve response times, and enhance customer satisfaction through intelligent automation and omnichannel support.'
  },
  {
    icon: CogIcon,
    title: 'Field Service',
    description: 'Optimize field operations and resource management with our Field Service solutions. Schedule appointments, track technicians, manage inventory, and ensure first-time fix rates with mobile-first field service capabilities.'
  },
  {
    icon: ChartBarIcon,
    title: 'Sales',
    description: 'Accelerate sales performance and pipeline management with our Sales module expertise. Track opportunities, forecast revenue, manage relationships, and close deals faster with intelligent sales automation and insights.'
  }
];

export default function ModulesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(to bottom, var(--surface-1), transparent)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            We build industry specific solutions for Dynamics 365 modules
          </h2>
          <p className="section-subtitle">
            Transform your business processes with our specialized expertise across all major Dynamics 365 modules
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <div
                key={module.title}
                className="module-card"
              >
                {/* Icon */}
                <div className="module-icon">
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="module-title">
                    {module.title}
                  </h3>
                  <p className="module-description">
                    {module.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Ready to transform your Dynamics 365 implementation?
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <a
              href="https://teams.microsoft.com/l/chat/0/0?users=satish@pascalcase.com,likitha@pascalcase.com&topicName=Website%20Inquiry"
              className="btn-primary"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              Get Started Today
            </a>
            <Link
              href="/products"
              className="btn-secondary"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}