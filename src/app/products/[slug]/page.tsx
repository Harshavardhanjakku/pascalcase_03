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
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-semibold text-purple-600 transition-colors hover:bg-purple-50"
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
            className="mb-6 inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
                Data Mask App for Dataverse
              </h1>
              <p className="mb-4 text-xl text-slate-600 dark:text-slate-400">
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Main Product */}
          <div className="space-y-8 lg:col-span-2">
            {/* Product Description */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                About the App
              </h2>
              <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
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

            {/* Why This App */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Why This App?
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                        Secure your sandbox environments
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
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
                      <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                        Anonymization
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        The app replaces sensitive data with realistic anonymous values, ensuring
                        personal information remains unlinked to specific individuals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                        Data Privacy & Compliance
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
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
                      <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                        Data Protection
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Safeguard sensitive data from unauthorized access or exposure, reducing the
                        risk of data breaches, cyberattacks, and internal data leaks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                How Does Data Mask App Work?
              </h2>
              <div className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-6 dark:bg-slate-700/50">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-lg font-bold text-white">
                    1
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Step-by-Step Process
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  The Data Mask app provides a simple, intuitive interface to select tables and
                  fields for masking. Configure your masking preferences and run the process to
                  secure your sandbox environment.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA & FAQ */}
          <div className="space-y-6">
            {/* Book a Call */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
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
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                <ArrowTopRightOnSquareIcon className="mr-2 h-5 w-5" />
                Book a Call or Demo
              </a>
            </div>

            {/* FAQ */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-1 font-semibold text-slate-800 dark:text-slate-200">
                    Is the app free to test?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    The app is free to test without a valid license. However, there is a record
                    restriction of 1,000 records per run without a license.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-slate-800 dark:text-slate-200">
                    How can I install the app?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    This app is available as managed solution. You can directly download the app
                    from this link, and follow the steps in the video.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-slate-800 dark:text-slate-200">
                    How can I use the app for more than 1,000 records?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    You can reach out to us through Microsoft Teams or contact us page.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-slate-800 dark:text-slate-200">
                    How efficiently does your app handle data masking?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Our app efficiently masks 200,000 records in 15 minutes and up to 1 million
                    records in 60 to 70 minutes, ensuring speedy and secure data masking.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-slate-800 dark:text-slate-200">
                    Can I selectively mask tables and attributes?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Yes, it is possible to configure tables and attributes to mask.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Performance</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    200,000 records
                  </span>
                  <span className="text-sm font-semibold text-blue-600">15 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    1 million records
                  </span>
                  <span className="text-sm font-semibold text-blue-600">60-70 minutes</span>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  <strong>Free tier:</strong> Up to 1,000 records per run
                </p>
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
            className="mb-6 inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
                HTML to PDF Converter for Power Automate
              </h1>
              <p className="mb-4 text-xl text-slate-600 dark:text-slate-400">
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
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Main Product */}
          <div className="space-y-8 lg:col-span-2">
            {/* Product Description */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                About the Connector
              </h2>
              <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                A Power Automate premium connector for converting HTML content to PDF documents. Say
                goodbye to the restrictive 2MB limit. Now, you can create heavy-duty PDF documents
                without size constraints.
              </p>

              <div className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-6 dark:bg-slate-700/50">
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                  Key Advantages
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>
                    • <strong>Free for one page</strong> - Use without a licensing key for one page
                  </li>
                  <li>
                    • <strong>Process large HTML content</strong> - Fast and powerful conversion
                  </li>
                  <li>
                    • <strong>Power Automate integration</strong> - Use directly from Power Automate
                    flows
                  </li>
                  <li>
                    • <strong>No size constraints</strong> - Break free from 2MB limitations
                  </li>
                </ul>
              </div>
            </div>

            {/* Features */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Features</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Setup Instructions */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Setup Instructions
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                      Search for the Connector
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
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
                    <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                      Provide HTML Content
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
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
                    <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                      Get Response
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      The response will be a byte array that can be used as file content for storing
                      in Dataverse or SharePoint.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">
                    4
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                      Parse Output
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Parse the output using the provided schema and use the body output to create
                      your PDF file.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing & Links */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-white">
              <div className="mb-4 flex items-center gap-3">
                <ArrowDownTrayIcon className="h-8 w-8" />
                <h3 className="text-xl font-bold">Pricing Plans</h3>
              </div>

              {/* Free Plan */}
              <div className="mb-4 rounded-lg bg-white/20 p-4">
                <h4 className="mb-2 text-lg font-bold">Free Version</h4>
                <div className="mb-2 text-2xl font-bold">$0</div>
                <ul className="space-y-1 text-sm text-blue-100">
                  <li>• Convert HTML to PDF (one page only)</li>
                  <li>• Available on Power Automate</li>
                  <li>• 100 calls per month</li>
                </ul>
              </div>

              {/* Paid Plan */}
              <div className="mb-4 rounded-lg bg-white/20 p-4">
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
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Purchase using Stripe
              </a>
            </div>

            {/* FAQ */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-1 font-semibold text-slate-800 dark:text-slate-200">
                    Can I cancel the subscription at any time?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Yes, you can cancel the plan anytime.
                  </p>
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-slate-800 dark:text-slate-200">
                    Can I get a refund if I&apos;m not satisfied?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Yes, you can.</p>
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-slate-800 dark:text-slate-200">
                    Can I get a free trial before subscribing?
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    There is a free version available without requiring a license key.
                  </p>
                </div>
              </div>
            </div>

            {/* Documentation Link */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                Documentation
              </h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                Visit Microsoft Docs for detailed setup instructions and schema information.
              </p>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-slate-100 px-4 py-2 font-semibold text-slate-800 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              >
                <ArrowTopRightOnSquareIcon className="mr-2 h-4 w-4" />
                Visit Microsoft Docs
              </a>
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
            className="mb-6 inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
                Commission 365 for Dataverse
              </h1>
              <p className="mb-4 text-xl text-slate-600 dark:text-slate-400">
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
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                About the App
              </h2>
              <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                Commission 365 is a comprehensive commission management solution for Dataverse that
                helps you design, implement, and track commission plans for your sales teams. Create
                flexible incentive structures that drive performance and align with your business
                goals.
              </p>

              <div className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-6 dark:bg-slate-700/50">
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">Key Advantage</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Commission 365 provides a centralized platform to manage all aspects of sales
                  compensation, from plan design to payout calculations, ensuring accuracy and
                  transparency in your commission processes.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Features</h2>
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
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
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
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Download from Microsoft AppSource
              </a>
            </div>

            {/* How Commission 365 Works */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                How Commission 365 Works
              </h3>
              <div className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-4 dark:bg-slate-700/50">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold text-white">
                    $
                  </div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Commission Management
                  </h4>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
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
            className="mb-6 inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
                Flow Monitor for Power Automate
              </h1>
              <p className="mb-4 text-xl text-slate-600 dark:text-slate-400">
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
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                About the App
              </h2>
              <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                Flow Monitor provides comprehensive monitoring and analytics for your Power Automate
                flows across different environments. Track performance, identify bottlenecks, and
                optimize your automation workflows with detailed insights and reporting.
              </p>

              <div className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-6 dark:bg-slate-700/50">
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">Key Advantage</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Flow Monitor gives you complete visibility into your Power Automate flows, helping
                  you identify performance issues, track success rates, and optimize your automation
                  processes for better efficiency and reliability.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Features</h2>
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
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                How Flow Monitor Works
              </h2>
              <div className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-6 dark:bg-slate-700/50">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-lg font-bold text-white">
                    📊
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Flow Analytics
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
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
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Download from Microsoft AppSource
              </a>
            </div>

            {/* Keep in Touch */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                Keep in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">Contact us</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">Chat on Microsoft Teams</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
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
            className="mb-6 inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
                Pascalcase Metadata Browser for Dataverse
              </h1>
              <p className="mb-4 text-xl text-slate-600 dark:text-slate-400">
                for Dynamics 365 & PowerApps
              </p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <ArrowDownTrayIcon className="mb-2 h-8 w-8" />
                <p className="text-sm font-medium">Microsoft Edge Extension</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Main Product */}
          <div className="space-y-8 lg:col-span-2">
            {/* Product Description */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                About the Extension
              </h2>
              <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                Pascalcase Metadata Browser is an extension for Microsoft Edge browser for accessing
                metadata of Dataverse (Dynamics 365 and PowerApps) instances. You can easily browse
                properties like tables, columns, relationships, choices, etc. and export to CSV
                files.
              </p>

              <div className="rounded-xl border-l-4 border-blue-500 bg-slate-50 p-6 dark:bg-slate-700/50">
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">Key Advantage</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  The main advantage of this extension is that it will automatically show you the
                  logical names of the tables and their columns on UI forms, assisting you not to
                  always navigate to your solution to find the logical names.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="rounded-2xl border border-slate-200/50 bg-white/80 p-8 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/80">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Features</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  'Browse Dataverse metadata',
                  'Export to CSV files',
                  'View table properties',
                  'Examine column details',
                  'Check relationships',
                  'Review choice values',
                  'Auto-show logical names',
                  'Edge browser integration',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-blue-500" />
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Download & Alternative */}
          <div className="space-y-6">
            {/* Download Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
              <div className="mb-4 flex items-center gap-3">
                <ArrowDownTrayIcon className="h-8 w-8" />
                <h3 className="text-xl font-bold">Download Now</h3>
              </div>
              <p className="mb-6 text-blue-100">
                Get the Pascalcase Metadata Browser extension from Microsoft Edge Add-ons store.
              </p>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
                Download from Microsoft Edge
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
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{data.title}</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">{data.body}</p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/products"
          className="rounded-md border border-slate-300 px-4 py-2 text-sm transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
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
