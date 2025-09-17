import { SpeakerLoudIcon, BarChartIcon, ChatBubbleIcon, GearIcon } from '@radix-ui/react-icons';
import type { ElementType } from 'react';

type Item = { title: string; text: string; Icon: ElementType };

const items: Item[] = [
  { title: 'Marketing', text: 'We help you create complete end-to-end marketing funnels, customer journeys, campaigns, industry-specific integrations & marketing analytics', Icon: SpeakerLoudIcon },
  { title: 'Customer Service', text: 'Connect to Call centers, self-help portals, knowledge-base, SLA management, entitlements & more', Icon: ChatBubbleIcon },
  { title: 'Field Service', text: 'Bring customer service capabilities to customer locations.', Icon: GearIcon },
  { title: 'Sales', text: 'Get access to lead management, sales funnels, opportunity management, order processing, reports & more with Dynamics 365 Sales module.', Icon: BarChartIcon },
];

export default function Industries() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 pr-4">
          {items.map((i) => {
            const Icon = i.Icon as ElementType;
            return (
              <div key={i.title} className="group min-w-[260px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 shadow-lg transition-transform hover:-translate-y-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-lg transition-colors duration-300 group-hover:bg-blue-600/20">
                  <Icon className="h-5 w-5 transition-colors duration-300 group-hover:text-blue-500" aria-hidden />
                </div>
                <h3 className="mt-3 font-semibold">{i.title}</h3>
                <p className="text-sm text-text-muted">{i.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


