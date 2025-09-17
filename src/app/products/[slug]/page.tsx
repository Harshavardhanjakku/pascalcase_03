import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

type Params = { params: Promise<{ slug: string }> };

const copy: Record<string, { title: string; body: string }> = {
  'metadata-browser': {
    title: 'Metadata Browser',
    body: 'Examine and export Dataverse metadata such as tables, columns, relationships and keys.',
  },
  'data-mask': {
    title: 'Data Mask for Dataverse',
    body: 'Mask or tokenize sensitive data across environments with confidence.',
  },
  'ai-autocloser': {
    title: 'AI Autocloser',
    body: 'Automatically close non-actionable tickets with AI assistance.',
  },
  'commission-365': {
    title: 'Commission 365',
    body: 'Design commission plans and incentives for your sales teams.',
  },
  'html-to-pdf': {
    title: 'HTML To PDF Converter',
    body: 'Convert HTML templates to pixel-perfect PDFs with ease.',
  },
  'flow-monitor': {
    title: 'Flow Monitor',
    body: 'Monitor Power Automate flows across environments with rich insights.',
  },
};

export default async function ProductDetail({ params }: Params) {
  const { slug } = await params;
  const data = copy[slug] ?? { title: 'Product', body: 'Details coming soon.' };

  // Special handling for ai-autocloser
  if (slug === 'ai-autocloser') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                AI Autocloser for Dataverse
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                Auto-resolve the cases with AI Auto-closer
              </p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <ArrowDownTrayIcon className="mb-2 h-8 w-8" />
                <p className="text-sm font-medium">Microsoft AppSource</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Main Product */}
          <div className="space-y-8 lg:col-span-2">
            {/* Product Description */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                About the App
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Resolve your cases quickly using AI Autocloser. It is an app for the Dataverse that
                auto-resolves cases that require no further action. The app closes only
                non-actionable tickets, where the customer has thanked you and has no additional
                requests to be made.
              </p>

              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Download from Microsoft AppSource
              </a>
            </div>

            {/* Why This App */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Why This App?
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Automated Case Resolution
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Intelligently identifies and resolves non-actionable cases automatically,
                        reducing manual workload.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Enhanced Productivity
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Focus your team&apos;s efforts on cases that require human intervention and
                        complex problem-solving.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        One-Time Configuration
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Set up once and let AI handle the rest. Minimal ongoing maintenance
                        required.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Cost Savings
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Reduce operational costs by automating routine case closures and improving
                        efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Automate Case Resolution with AI Auto-closer for Incoming Emails
              </h2>
              <div
                className="rounded-xl border-l-4 border-purple-500 p-6"
                style={{ backgroundColor: 'var(--surface-2)' }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500 text-lg font-bold text-white">
                    AI
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Intelligent Email Processing
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  AI Autocloser efficiently handles incoming emails by identifying non-actionable
                  cases and resolving them. When a customer expresses satisfaction without any
                  additional requests through mail, Autocloser recognizes this and closes the case
                  automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA & Links */}
          <div className="space-y-6">
            {/* Book a Call */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-6 text-white">
              <div className="mb-4 flex items-center gap-3">
                <ArrowDownTrayIcon className="h-8 w-8" />
                <h3 className="text-xl font-bold">Get Started</h3>
              </div>
              <p className="mb-6 text-purple-100">
                Ready to automate your case resolution? Book a call or demo to see AI Autocloser in
                action.
              </p>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:from-purple-700 hover:to-indigo-700"
              >
                <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                Book a Call or Demo
              </a>
            </div>

            {/* Download Card */}
            <div
              className="rounded-2xl p-6 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h3 className="mb-4 text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                Download Now
              </h3>
              <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                Get the AI Autocloser app from Microsoft AppSource and start automating your case
                resolution today.
              </p>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Download from Microsoft AppSource
              </a>
            </div>

            {/* Keep in Touch */}
            <div
              className="rounded-2xl p-6 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h3 className="mb-4 text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                Keep in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">Contact us</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">Chat on Microsoft Teams</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Special handling for data-mask
  if (slug === 'data-mask') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Data Mask App for Dataverse
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                Make your Power Platform sandbox environments more secure by replacing sensitive
                data with dummy data
              </p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <ArrowDownTrayIcon className="mb-2 h-8 w-8" />
                <p className="text-sm font-medium">Microsoft AppSource</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Row 1: About the App & Get Started */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  About the App
                </h2>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Mask/Anonymize/Obfuscate Dataverse data with random characters and numbers, mock
                  data from pre-built formats. You can also easily select the fields to be masked or
                  simply deleted.
                </p>

                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
                >
                  <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                  Download from Microsoft AppSource
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                <div className="mb-4 flex items-center gap-3">
                  <ArrowDownTrayIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Get Started</h3>
                </div>
                <p className="mb-6 text-blue-100">
                  Ready to secure your sandbox environment? Book a call or demo to see the Data Mask
                  app in action.
                </p>
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:from-blue-700 hover:to-indigo-700"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                  Book a Call or Demo
                </a>
              </div>
            </div>
          </div>

          {/* Row 2: Why This App & FAQ */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Why This App?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Secure your sandbox environments
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        The app ensures that your testing and development activities can be
                        conducted without compromising confidential data.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Anonymization
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        The app replaces sensitive data with realistic anonymous values, ensuring
                        personal information remains unlinked to specific individuals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Data Privacy & Compliance
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Comply with data privacy regulations like GDPR, HIPAA, or CCPA by masking
                        personal & sensitive information.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Data Protection
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        Safeguard sensitive data from unauthorized access or exposure, reducing the
                        risk of data breaches, cyberattacks, and internal data leaks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h3 className="mb-6 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Frequently Asked Questions
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Is the app free to test?
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      The app is free to test without a valid license. However, there is a record
                      restriction of 1,000 records per run without a license.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      How can I install the app?
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      This app is available as managed solution. You can directly download the app
                      from this link, and follow the steps in the video.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      How can I use the app for more than 1,000 records?
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      You can reach out to us through Microsoft Teams or contact us page.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      How efficiently does your app handle data masking?
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Our app efficiently masks 200,000 records in 15 minutes and up to 1 million
                      records in 60 to 70 minutes, ensuring speedy and secure data masking.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Can I selectively mask tables and attributes?
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Yes, it is possible to configure tables and attributes to mask.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: How It Works & Performance */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  How Does Data Mask App Work?
                </h2>
                <div
                  className="rounded-xl border-l-4 border-blue-500 p-6"
                  style={{ backgroundColor: 'var(--surface-2)' }}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-lg font-bold text-white">
                      1
                    </div>
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Step-by-Step Process
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    The Data Mask app provides a simple, intuitive interface to select tables and
                    fields for masking. Configure your masking preferences and run the process to
                    secure your sandbox environment.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div
                className="rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h3 className="mb-6 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Performance
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      200,000 records
                    </span>
                    <span className="text-sm font-semibold text-blue-600">15 minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      1 million records
                    </span>
                    <span className="text-sm font-semibold text-blue-600">60-70 minutes</span>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-3">
                  <p className="text-xs text-white">
                    <strong>Free tier:</strong> Up to 1,000 records per run
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Special handling for html-to-pdf
  if (slug === 'html-to-pdf') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                HTML to PDF Converter for Power Automate
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                Convert HTML content to PDF documents using Power Automate flows
              </p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <ArrowDownTrayIcon className="mb-2 h-8 w-8" />
                <p className="text-sm font-medium">Power Automate Connector</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Row 1: About the Connector & Pricing Plans */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  About the Connector
                </h2>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  A Power Automate premium connector for converting HTML content to PDF documents.
                  Say goodbye to the restrictive 2MB limit. Now, you can create heavy-duty PDF
                  documents without size constraints.
                </p>

                <div
                  className="rounded-xl border-l-4 border-blue-500 p-6"
                  style={{ backgroundColor: 'var(--surface-2)' }}
                >
                  <h3 className="mb-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Key Advantages
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          Free for one page
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          Use without a licensing key for one page
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          Process large HTML content
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          Fast and powerful conversion
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          Power Automate integration
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          Use directly from Power Automate flows
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          No size constraints
                        </p>
                        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                          Break free from 2MB limitations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="h-full rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                <div className="mb-4 flex items-center gap-3">
                  <ArrowDownTrayIcon className="h-8 w-8" />
                  <h3 className="text-xl font-bold">Pricing Plans</h3>
                </div>

                {/* Free Plan */}
                <div className="mb-4 rounded-lg bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 border border-blue-200/50 dark:border-blue-700/50">
                  <h4 className="mb-2 text-lg font-bold">Free Version</h4>
                  <div className="mb-2 text-2xl font-bold">$0</div>
                  <ul className="space-y-1 text-sm text-blue-100">
                    <li>• Convert HTML to PDF (one page only)</li>
                    <li>• Available on Power Automate</li>
                    <li>• 100 calls per month</li>
                  </ul>
                </div>

                {/* Paid Plan */}
                <div className="mb-4 rounded-lg bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 border border-blue-200/50 dark:border-blue-700/50">
                  <h4 className="mb-2 text-lg font-bold">Paid Plan</h4>
                  <div className="mb-2 text-2xl font-bold">
                    $49<span className="text-sm font-normal">/month*</span>
                  </div>
                  <p className="mb-2 text-xs text-blue-100">*billed annually</p>
                  <ul className="space-y-1 text-sm text-blue-100">
                    <li>• Convert HTML to PDF (up to 5 pages)</li>
                    <li>• Up to 10MB of HTML content</li>
                    <li>• 1000 calls per month</li>
                  </ul>
                </div>

                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:from-blue-700 hover:to-indigo-700"
                >
                  <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                  Purchase using Stripe
                </a>
              </div>
            </div>
          </div>

          {/* Row 2: Features & FAQ */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Features
                </h2>
                <div className="space-y-3">
                  {[
                    'Free one-page conversion',
                    'Large HTML content support',
                    'Power Automate integration',
                    'Fast and powerful processing',
                    'No 2MB size limit',
                    'Premium connector access',
                    'Stripe payment integration',
                    'Easy setup and configuration',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div
                className="rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h3 className="mb-6 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Frequently Asked Questions
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Can I cancel the subscription at any time?
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Yes, you can cancel the plan anytime.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Can I get a refund if I&apos;m not satisfied?
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Yes, you can.
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Can I get a free trial before subscribing?
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      There is a free version available without requiring a license key.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Setup Instructions & Documentation */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Setup Instructions
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                      1
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Search for the Connector
                      </h3>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Search for &quot;HTML to PDF by Pascalcase&quot; in the &quot;add an
                        action&quot; section and select the Pascalcase connector.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                      2
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Provide HTML Content
                      </h3>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Provide the HTML string or code along with an optional key. The key enables
                        multi-page PDFs.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                      3
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Get Response
                      </h3>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        The response will be a byte array that can be used as file content for
                        storing in Dataverse or SharePoint.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                      4
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Parse Output
                      </h3>
                      <p style={{ color: 'var(--text-secondary)' }}>
                        Parse the output using the provided schema and use the body output to create
                        your PDF file.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="rounded-2xl p-8 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--surface-card)',
                  borderColor: 'var(--border-default)',
                  border: '1px solid',
                }}
              >
                <h3 className="mb-6 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Documentation
                </h3>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Get detailed information about the HTML to PDF connector, including setup guides,
                  API documentation, and best practices for Power Automate integration.
                </p>
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
                >
                  <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                  Visit Microsoft Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Special handling for commission-365
  if (slug === 'commission-365') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Commission 365 for Dataverse
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                Design commission plans and incentives for your sales teams
              </p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <ArrowDownTrayIcon className="mb-2 h-8 w-8" />
                <p className="text-sm font-medium">Microsoft AppSource</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Main Product */}
          <div className="space-y-8 lg:col-span-2">
            {/* Product Description */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                About the App
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Commission 365 is a comprehensive commission management solution for Dataverse that
                helps you design, implement, and track commission plans for your sales teams. Create
                flexible incentive structures that drive performance and align with your business
                goals.
              </p>

              <div
                className="rounded-xl border-l-4 border-blue-500 p-6"
                style={{ backgroundColor: 'var(--surface-2)' }}
              >
                <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Key Advantage
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Commission 365 provides a centralized platform to manage all aspects of sales
                  compensation, from plan design to payout calculations, ensuring accuracy and
                  transparency in your commission processes.
                </p>
              </div>
            </div>

            {/* Features */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Features
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  'Flexible commission plan design',
                  'Multi-tier commission structures',
                  'Automated payout calculations',
                  'Performance tracking and analytics',
                  'Sales team management',
                  'Commission history and reporting',
                  'Integration with sales data',
                  'Customizable commission rules',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-blue-500" />
                    <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - CTA & How It Works */}
          <div className="space-y-6">
            {/* Download Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
              <div className="mb-4 flex items-center gap-3">
                <ArrowDownTrayIcon className="h-8 w-8" />
                <h3 className="text-xl font-bold">Download Now</h3>
              </div>
              <p className="mb-6 text-blue-100">
                Get Commission 365 from Microsoft AppSource and start designing your commission
                plans today.
              </p>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:from-blue-700 hover:to-indigo-700"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Download from Microsoft AppSource
              </a>
            </div>

            {/* How Commission 365 Works */}
            <div
              className="rounded-2xl p-6 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h3 className="mb-4 text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                How Commission 365 Works
              </h3>
              <div
                className="rounded-xl border-l-4 border-blue-500 p-4"
                style={{ backgroundColor: 'var(--surface-2)' }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold text-white">
                    $
                  </div>
                  <h4 className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Commission Management
                  </h4>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Commission 365 streamlines your sales compensation process by providing tools to
                  create commission plans, track sales performance, and automatically calculate
                  payouts based on your defined rules and criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Special handling for flow-monitor
  if (slug === 'flow-monitor') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Flow Monitor for Power Automate
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                Monitor Power Automate flows across environments with rich insights
              </p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <ArrowDownTrayIcon className="mb-2 h-8 w-8" />
                <p className="text-sm font-medium">Microsoft AppSource</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Main Product */}
          <div className="space-y-8 lg:col-span-2">
            {/* Product Description */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                About the App
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Flow Monitor provides comprehensive monitoring and analytics for your Power Automate
                flows across different environments. Track performance, identify bottlenecks, and
                optimize your automation workflows with detailed insights and reporting.
              </p>

              <div
                className="rounded-xl border-l-4 border-blue-500 p-6"
                style={{ backgroundColor: 'var(--surface-2)' }}
              >
                <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Key Advantage
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Flow Monitor gives you complete visibility into your Power Automate flows, helping
                  you identify performance issues, track success rates, and optimize your automation
                  processes for better efficiency and reliability.
                </p>
              </div>
            </div>

            {/* Features */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Features
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  'Real-time flow monitoring',
                  'Performance analytics and insights',
                  'Cross-environment tracking',
                  'Failure analysis and reporting',
                  'Flow execution history',
                  'Performance optimization recommendations',
                  'Custom dashboards and alerts',
                  'Integration with Power Platform',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-blue-500" />
                    <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                How Flow Monitor Works
              </h2>
              <div
                className="rounded-xl border-l-4 border-blue-500 p-6"
                style={{ backgroundColor: 'var(--surface-2)' }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-lg font-bold text-white">
                    📊
                  </div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Flow Analytics
                  </h3>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Flow Monitor continuously tracks your Power Automate flows, collecting performance
                  data, execution metrics, and error information to provide actionable insights for
                  optimization and troubleshooting.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA & Links */}
          <div className="space-y-6">
            {/* Download Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
              <div className="mb-4 flex items-center gap-3">
                <ArrowDownTrayIcon className="h-8 w-8" />
                <h3 className="text-xl font-bold">Download Now</h3>
              </div>
              <p className="mb-6 text-blue-100">
                Get Flow Monitor from Microsoft AppSource and start monitoring your Power Automate
                flows today.
              </p>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:from-blue-700 hover:to-indigo-700"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Download from Microsoft AppSource
              </a>
            </div>

            {/* Keep in Touch */}
            <div
              className="rounded-2xl p-6 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h3 className="mb-4 text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                Keep in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">Contact us</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">Chat on Microsoft Teams</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Special handling for metadata-browser
  if (slug === 'metadata-browser') {
    return (
      <main
        id="content"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
      >
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/products"
            className="mb-6 inline-flex items-center gap-2 transition-colors"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Pascalcase Metadata Browser for Dataverse
              </h1>
              <p className="mb-4 text-xl" style={{ color: 'var(--text-secondary)' }}>
                for Dynamics 365 & PowerApps
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Main Product */}
          <div className="space-y-8 lg:col-span-2">
            {/* Product Description */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                About the Extension
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Pascalcase Metadata Browser is an extension for Microsoft Edge browser for accessing
                metadata of Dataverse (Dynamics 365 and PowerApps) instances. You can easily browse
                properties like tables, columns, relationships, choices, etc. and export to CSV
                files.
              </p>

              <div
                className="rounded-xl border-l-4 border-blue-500 p-6"
                style={{ backgroundColor: 'var(--surface-2)' }}
              >
                <h3 className="mb-2 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Key Advantage
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  The main advantage of this extension is that it will automatically show you the
                  logical names of the tables and their columns on UI forms, assisting you not to
                  always navigate to your solution to find the logical names.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="https://microsoftedge.microsoft.com/addons/detail/metadata-browser-for-dyna/fdfelmicclblfanogpnejdogjjildbkf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow transition-colors hover:from-blue-700 hover:to-indigo-700"
                >
                  <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                  Download from Microsoft Edge
                </a>
              </div>
            </div>

            {/* Video */}
            <div
              className="rounded-2xl p-4 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/WGOKc2VnODY"
                  title="Metadata Browser for Dataverse"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Features */}
            <div
              className="rounded-2xl p-8 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h2 className="mb-6 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Features
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  'Download Microsoft Dataverse metadata as a .mdb file',
                  'Direct extraction from your Dataverse instance',
                  'Browse tables, columns, entities, keys, option sets, relationships',
                  'Expand tables to view primary/foreign keys, logical and schema names',
                  'Accelerate discovery for data catalog, governance, warehouse, MDM and integration projects',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-blue-500" />
                    <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Alternative */}
          <div className="space-y-6">
            {/* Safyr Section */}
            <div
              className="rounded-2xl p-6 backdrop-blur-sm"
              style={{
                backgroundColor: 'var(--surface-card)',
                borderColor: 'var(--border-default)',
                border: '1px solid',
              }}
            >
              <h3 className="mb-4 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Safyr for Microsoft Dynamics 365 Metadata
              </h3>
              <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Safyr for Microsoft Dynamics 365 Metadata is a powerful metadata tool, which allows
                you to download metadata as a .mdb file. The data present in the file is directly
                extracted from your Microsoft Dataverse instance. This file contains a list of
                metadata components such as tables, columns, entities, keys, option sets,
                relationships, etc. You can expand any table and find the required information like
                primary keys, foreign keys, logical names, schema names and more. The main advantage
                of using this tool is, it allows you to speed up the source data discovery process
                for many projects such as data catalog, data governance, data warehouse, master
                data, data integration, etc.
              </p>

              <a
                href="https://www.silwoodtechnology.com/products/safyr-for-microsoft-dynamics-365/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 font-semibold text-white transition-colors hover:from-blue-700 hover:to-indigo-700"
              >
                <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                Go to Silwood Technology website
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Default product page for other products
  return (
    <main
      id="content"
      className="mx-auto max-w-4xl scroll-mt-24 px-4 py-10 sm:px-6 md:scroll-mt-28"
    >
      <h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
        {data.title}
      </h1>
      <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
        {data.body}
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/products"
          className="rounded-md border px-4 py-2 text-sm transition-colors"
          style={{
            borderColor: 'var(--border-default)',
            color: 'var(--text-secondary)',
          }}
        >
          Back to Products
        </Link>
        <a
          href="#"
          className="bg-accent rounded-md px-4 py-2 text-sm font-medium text-black hover:opacity-90"
        >
          Download
        </a>
      </div>
    </main>
  );
}
