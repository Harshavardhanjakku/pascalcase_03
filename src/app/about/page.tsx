import HeroIntro from '@/components/about/HeroIntro';
import QuoteBlock from '@/components/about/QuoteBlock';
import Industries from '@/components/about/Industries';
import CallToActionBanner from '@/components/about/CallToActionBanner';
import FourPointInfographic from '@/components/about/FourPointInfographic';
import SixStepInfographic from '@/components/about/SixStepInfographic';

export const revalidate = 60;

export default function AboutPage() {
  return (
    <div>
      <HeroIntro />
      <FourPointInfographic />
      <SixStepInfographic />
      <QuoteBlock />
      <Industries />
      <CallToActionBanner />
    </div>
  );
}


