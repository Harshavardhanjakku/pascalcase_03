import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-4xl space-y-10">
            {/* Main Heading */}
            <h1 className="hero-title">
              We build Dynamics 365 and Power Platform tools
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Transform your Dynamics 365 investment into tangible results with the help of a seasoned partner. Choose Pascalcase, where our expertise in Dynamics 365 and Power Platform will take your business to the next level.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="https://teams.microsoft.com/l/chat/0/0?users=satish@pascalcase.com,likitha@pascalcase.com&topicName=Website%20Inquiry"
                className="btn-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Chat on Microsoft Teams
              </Link>
              <Link
                href="products"
                className="btn-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


