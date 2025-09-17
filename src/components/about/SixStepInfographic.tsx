import {
  PersonIcon,
  CheckCircledIcon,
  InfoCircledIcon,
  LightningBoltIcon,
  LockClosedIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import type { ElementType } from 'react';

type Color = 'cyan' | 'blue' | 'purple';
type StepData = { number: string; title: string; content: string; color: Color; Icon: ElementType };

export default function SixStepInfographic() {
  const leftSteps: StepData[] = [
    {
      number: '01',
      title: 'Ex-Microsoft Employees',
      content: 'Deep product knowledge to accelerate your success.',
      color: 'cyan',
      Icon: PersonIcon,
    },
    {
      number: '02',
      title: 'Low Total Cost',
      content: 'Lean delivery that maximizes value and minimizes waste.',
      color: 'blue',
      Icon: CheckCircledIcon,
    },
    {
      number: '03',
      title: 'License Savings',
      content: 'Architectures that reduce licensing overhead where possible.',
      color: 'purple',
      Icon: InfoCircledIcon,
    },
  ];

  const rightSteps: StepData[] = [
    {
      number: '04',
      title: 'Faster Time-to-Value',
      content: 'Iterative delivery that shows results from day one.',
      color: 'cyan',
      Icon: LightningBoltIcon,
    },
    {
      number: '05',
      title: 'Secure by Design',
      content: 'Security-first approach across environments and data.',
      color: 'blue',
      Icon: LockClosedIcon,
    },
    {
      number: '06',
      title: 'Partner Mindset',
      content: 'We work with you, not just for you.It is for us too.',
      color: 'purple',
      Icon: RocketIcon,
    },
  ];

  const getColorStyles = (color: Color) => {
    const colorMap: Record<
      string,
      { bgGradient: string; numberGradient: string; iconColor: string; borderColor: string }
    > = {
      cyan: {
        bgGradient: 'from-overlay-2 via-overlay-1 to-transparent',
        numberGradient: 'from-white/30 to-white/70',
        iconColor: 'text-text-primary',
        borderColor: 'border-border-default',
      },
      blue: {
        bgGradient: 'from-overlay-2 via-overlay-1 to-transparent',
        numberGradient: 'from-white/30 to-white/70',
        iconColor: 'text-text-primary',
        borderColor: 'border-border-default',
      },
      purple: {
        bgGradient: 'from-overlay-2 via-overlay-1 to-transparent',
        numberGradient: 'from-white/30 to-white/70',
        iconColor: 'text-text-primary',
        borderColor: 'border-border-default',
      },
    };
    return colorMap[color];
  };

  const LeftStepBox = ({ step }: { step: StepData }) => {
    const styles = getColorStyles(step.color);
    return (
      <div className="group flex cursor-pointer items-center justify-end transition-all duration-300 hover:scale-105">
        <div
          className={`relative bg-gradient-to-r ${styles.bgGradient} border ${styles.borderColor} mr-4 w-[18rem] rounded-full px-6 py-4 shadow-md backdrop-blur-md transition-all duration-300 hover:shadow-lg sm:w-[22rem] md:w-[26rem] lg:w-[28rem]`}
        >
          <div className="flex items-center">
            <div className={`${styles.iconColor} mr-3 flex-shrink-0`}>
              {(() => {
                const Icon = step.Icon as ElementType;
                return <Icon className="h-[18px] w-[18px] drop-shadow-sm" aria-hidden />;
              })()}
            </div>
            <div className="flex-1">
              <h3 className="text-text-primary mb-1.5 text-sm font-bold tracking-wide">
                {step.title}
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed">{step.content}</p>
            </div>
          </div>
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 transform">
            <div
              className={`h-0 w-0 border-t-[8px] border-b-[8px] border-l-[12px] border-transparent border-l-cyan-200`}
              style={{
                borderLeftColor: 'rgba(255,255,255,0.35)',
              }}
            />
          </div>
        </div>
        <div className="mr-2 h-0.5 w-12 bg-gray-300" />
        <div
          className={`text-text-primary bg-surface-input border-border-default ring-border-subtle flex h-14 w-14 items-center justify-center rounded-full border text-lg font-bold shadow-lg ring-1 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl`}
        >
          {step.number}
        </div>
      </div>
    );
  };

  const RightStepBox = ({ step }: { step: StepData }) => {
    const styles = getColorStyles(step.color);
    return (
      <div className="group flex cursor-pointer items-center justify-start transition-all duration-300 hover:scale-105">
        <div
          className={`text-text-primary bg-surface-input border-border-default ring-border-subtle flex h-14 w-14 items-center justify-center rounded-full border text-lg font-bold shadow-lg ring-1 backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl`}
        >
          {step.number}
        </div>
        <div className="ml-2 h-0.5 w-12 bg-gray-300" />
        <div
          className={`relative bg-gradient-to-r ${styles.bgGradient} border ${styles.borderColor} ml-4 w-[18rem] rounded-full px-6 py-4 shadow-md backdrop-blur-md transition-all duration-300 hover:shadow-lg sm:w-[22rem] md:w-[26rem] lg:w-[28rem]`}
        >
          <div className="flex items-center">
            <div className="flex-1 text-right">
              <h3 className="text-text-primary mb-1.5 text-sm font-bold tracking-wide">
                {step.title}
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed">{step.content}</p>
            </div>
            <div className={`${styles.iconColor} ml-3 flex-shrink-0`}>
              {(() => {
                const Icon = step.Icon as ElementType;
                return <Icon className="h-[18px] w-[18px] drop-shadow-sm" aria-hidden />;
              })()}
            </div>
          </div>
          <div className="absolute top-1/2 -left-3 -translate-y-1/2 transform">
            <div
              className={`h-0 w-0 border-t-[8px] border-r-[12px] border-b-[8px] border-transparent border-r-cyan-200`}
              style={{
                borderRightColor: 'rgba(255,255,255,0.35)',
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="my-12 flex min-h-[28rem] items-center justify-center p-8 md:my-16">
      <div className="relative w-full max-w-6xl">
        <div className="relative flex items-center justify-center">
          <div className="absolute top-1/2 left-0 w-2/5 -translate-y-1/2 space-y-16">
            {leftSteps.map((step, index) => (
              <LeftStepBox key={`left-${index}`} step={step} />
            ))}
          </div>
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-2 border-dashed border-white/40 backdrop-blur-md">
              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-lg backdrop-blur-md">
                <div className="mb-2 text-yellow-500">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="drop-shadow-sm"
                    aria-hidden
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                    <rect x="9" y="19" width="6" height="1" rx="0.5" />
                    <rect x="10" y="21" width="4" height="1" rx="0.5" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-2xl leading-none font-bold text-black">6 Features</div>
                  <div className="mt-1 text-xs font-medium tracking-widest text-black/70">
                    Pascalcase
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 w-2/5 -translate-y-1/2 space-y-16">
            {rightSteps.map((step, index) => (
              <RightStepBox key={`right-${index}`} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
