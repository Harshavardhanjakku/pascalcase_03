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
        <div className="section-header">
          <h2 className="section-title">
            We build industry specific solutions for Dynamics 365 modules
          </h2>
          <p className="section-subtitle">
            Transform your business processes with our specialized expertise across all major Dynamics 365 modules
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {modules.map((module) => {
            const IconComponent = module.icon;
            return (
              <div
                key={module.title}
                className="module-card"
              >
                <div className="module-icon">
                  <IconComponent className="w-8 h-8" />
                </div>

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
      </div>
    </section>
  );
}