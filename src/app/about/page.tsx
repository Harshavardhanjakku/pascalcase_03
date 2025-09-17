import HeroIntro from '@/components/about/HeroIntro';
import FeatureGrid from '@/components/about/FeatureGrid';
import FourPointInfographic from '@/components/about/FourPointInfographic';
import SixStepInfographic from '@/components/about/SixStepInfographic';
import Industries from '@/components/about/Industries';
import QuoteBlock from '@/components/about/QuoteBlock';
import CallToActionBanner from '@/components/about/CallToActionBanner';

export default function AboutPage() {
    return (
        <main id="content" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <HeroIntro />
            <FeatureGrid />
            <FourPointInfographic />
            <SixStepInfographic />
            <Industries />
            <QuoteBlock />
            <CallToActionBanner />
        </main>
    );
}
