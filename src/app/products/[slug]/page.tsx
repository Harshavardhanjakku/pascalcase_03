import Link from 'next/link';
import { ArrowLeftIcon, ArrowDownTrayIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

type Params = { params: Promise<{ slug: string }> };

const copy: Record<string, { title: string; body: string }> = {
  'metadata-browser': { title: 'Metadata Browser', body: 'Examine and export Dataverse metadata such as tables, columns, relationships and keys.' },
  'data-mask': { title: 'Data Mask for Dataverse', body: 'Mask or tokenize sensitive data across environments with confidence.' },
  'ai-autocloser': { title: 'AI Autocloser', body: 'Automatically close non-actionable tickets with AI assistance.' },
  'commission-365': { title: 'Commission 365', body: 'Design commission plans and incentives for your sales teams.' },
  'html-to-pdf': { title: 'HTML To PDF Converter', body: 'Convert HTML templates to pixel-perfect PDFs with ease.' },
  'flow-monitor': { title: 'Flow Monitor', body: 'Monitor Power Automate flows across environments with rich insights.' },
};

export default async function ProductDetail({ params }: Params) {
  const { slug } = await params;
  const data = copy[slug] ?? { title: 'Product', body: 'Details coming soon.' };

  // Special handling for ai-autocloser
  if (slug === 'ai-autocloser') {
    return (
      <main id="content" className="mx-auto max-w-6xl px-4 sm:px-6 py-10 scroll-mt-24 md:scroll-mt-28">
        {/* Header */}
        <div className="mb-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-6">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Products
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                AI Autocloser for Dataverse
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
                Auto-resolve the cases with AI Auto-closer
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 rounded-2xl text-white">
                <ArrowDownTrayIcon className="w-8 h-8 mb-2" />
                <p className="text-sm font-medium">Microsoft AppSource</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Product */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Description */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About the App</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Resolve your cases quickly using AI Autocloser. It is an app for the Dataverse that auto-resolves cases that require no further action. The app closes only non-actionable tickets, where the customer has thanked you and has no additional requests to be made.
              </p>
              
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-6 text-white">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                  Download from Microsoft AppSource
                </a>
              </div>
            </div>

            {/* Why This App */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why This App?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Automated Case Resolution</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Intelligently identifies and resolves non-actionable cases automatically, reducing manual workload.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Enhanced Productivity</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Focus your team&apos;s efforts on cases that require human intervention and complex problem-solving.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">One-Time Configuration</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Set up once and let AI handle the rest. Minimal ongoing maintenance required.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cost Savings</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Reduce operational costs by automating routine case closures and improving efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Automate Case Resolution with AI Auto-closer for Incoming Emails</h2>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border-l-4 border-purple-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">AI</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Intelligent Email Processing</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  AI Autocloser efficiently handles incoming emails by identifying non-actionable cases and resolving them. When a customer expresses satisfaction without any additional requests through mail, Autocloser recognizes this and closes the case automatically.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA & Links */}
          <div className="space-y-6">
            {/* Book a Call */}
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <ArrowDownTrayIcon className="w-8 h-8" />
                <h3 className="text-xl font-bold">Get Started</h3>
              </div>
              <p className="text-purple-100 mb-6">
                Ready to automate your case resolution? Book a call or demo to see AI Autocloser in action.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full bg-white text-purple-600 font-semibold py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                Book a Call or Demo
              </a>
            </div>

            {/* Download Card */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Download Now</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Get the AI Autocloser app from Microsoft AppSource and start automating your case resolution today.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                Download from Microsoft AppSource
              </a>
            </div>

            {/* Keep in Touch */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Keep in Touch</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  <span className="text-sm">Contact us</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  <span className="text-sm">Chat on Microsoft Teams</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
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
      <main id="content" className="mx-auto max-w-6xl px-4 sm:px-6 py-10 scroll-mt-24 md:scroll-mt-28">
        {/* Header */}
        <div className="mb-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-6">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Products
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Data Mask App for Dataverse
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
                Make your Power Platform sandbox environments more secure by replacing sensitive data with dummy data
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-2xl text-white">
                <ArrowDownTrayIcon className="w-8 h-8 mb-2" />
                <p className="text-sm font-medium">Microsoft AppSource</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Product */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Description */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About the App</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Mask/Anonymize/Obfuscate Dataverse data with random characters and numbers, mock data from pre-built formats. You can also easily select the fields to be masked or simply deleted.
              </p>
              
              <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full bg-white text-orange-600 font-semibold py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                  Download from Microsoft AppSource
                </a>
              </div>
            </div>

            {/* Why This App */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Why This App?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Secure your sandbox environments</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The app ensures that your testing and development activities can be conducted without compromising confidential data.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Anonymization</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">The app replaces sensitive data with realistic anonymous values, ensuring personal information remains unlinked to specific individuals.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Data Privacy & Compliance</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Comply with data privacy regulations like GDPR, HIPAA, or CCPA by masking personal & sensitive information.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Data Protection</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Safeguard sensitive data from unauthorized access or exposure, reducing the risk of data breaches, cyberattacks, and internal data leaks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How Does Data Mask App Work?</h2>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border-l-4 border-orange-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">1</div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Step-by-Step Process</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  The Data Mask app provides a simple, intuitive interface to select tables and fields for masking. Configure your masking preferences and run the process to secure your sandbox environment.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - CTA & FAQ */}
          <div className="space-y-6">
            {/* Book a Call */}
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <ArrowDownTrayIcon className="w-8 h-8" />
                <h3 className="text-xl font-bold">Get Started</h3>
              </div>
              <p className="text-orange-100 mb-6">
                Ready to secure your sandbox environment? Book a call or demo to see the Data Mask app in action.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full bg-white text-orange-600 font-semibold py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                Book a Call or Demo
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Is the app free to test?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">The app is free to test without a valid license. However, there is a record restriction of 1,000 records per run without a license.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">How can I install the app?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">This app is available as managed solution. You can directly download the app from this link, and follow the steps in the video.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">How can I use the app for more than 1,000 records?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">You can reach out to us through Microsoft Teams or contact us page.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">How efficiently does your app handle data masking?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Our app efficiently masks 200,000 records in 15 minutes and up to 1 million records in 60 to 70 minutes, ensuring speedy and secure data masking.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Can I selectively mask tables and attributes?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Yes, it is possible to configure tables and attributes to mask.</p>
                </div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">200,000 records</span>
                  <span className="text-sm font-semibold text-orange-600">15 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">1 million records</span>
                  <span className="text-sm font-semibold text-orange-600">60-70 minutes</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-xs text-orange-700 dark:text-orange-300">
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
      <main id="content" className="mx-auto max-w-6xl px-4 sm:px-6 py-10 scroll-mt-24 md:scroll-mt-28">
        {/* Header */}
        <div className="mb-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-6">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Products
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                HTML to PDF Converter for Power Automate
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
                Convert HTML content to PDF documents using Power Automate flows
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-2xl text-white">
                <ArrowDownTrayIcon className="w-8 h-8 mb-2" />
                <p className="text-sm font-medium">Power Automate Connector</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Product */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Description */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About the Connector</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                A Power Automate premium connector for converting HTML content to PDF documents. Say goodbye to the restrictive 2MB limit. Now, you can create heavy-duty PDF documents without size constraints.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Key Advantages</h3>
                <ul className="text-slate-600 dark:text-slate-400 space-y-2">
                  <li>• <strong>Free for one page</strong> - Use without a licensing key for one page</li>
                  <li>• <strong>Process large HTML content</strong> - Fast and powerful conversion</li>
                  <li>• <strong>Power Automate integration</strong> - Use directly from Power Automate flows</li>
                  <li>• <strong>No size constraints</strong> - Break free from 2MB limitations</li>
                </ul>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Free one-page conversion',
                  'Large HTML content support',
                  'Power Automate integration',
                  'Fast and powerful processing',
                  'No 2MB size limit',
                  'Premium connector access',
                  'Stripe payment integration',
                  'Easy setup and configuration'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Setup Instructions */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Setup Instructions</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Search for the Connector</h3>
                    <p className="text-slate-600 dark:text-slate-400">Search for &quot;HTML to PDF by Pascalcase&quot; in the &quot;add an action&quot; section and select the Pascalcase connector.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provide HTML Content</h3>
                    <p className="text-slate-600 dark:text-slate-400">Provide the HTML string or code along with an optional key. The key enables multi-page PDFs.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Get Response</h3>
                    <p className="text-slate-600 dark:text-slate-400">The response will be a byte array that can be used as file content for storing in Dataverse or SharePoint.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Parse Output</h3>
                    <p className="text-slate-600 dark:text-slate-400">Parse the output using the provided schema and use the body output to create your PDF file.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pricing & Links */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <ArrowDownTrayIcon className="w-8 h-8" />
                <h3 className="text-xl font-bold">Pricing Plans</h3>
              </div>
              
              {/* Free Plan */}
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-lg mb-2">Free Version</h4>
                <div className="text-2xl font-bold mb-2">$0</div>
                <ul className="text-sm text-green-100 space-y-1">
                  <li>• Convert HTML to PDF (one page only)</li>
                  <li>• Available on Power Automate</li>
                  <li>• 100 calls per month</li>
                </ul>
              </div>
              
              {/* Paid Plan */}
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-lg mb-2">Paid Plan</h4>
                <div className="text-2xl font-bold mb-2">$49<span className="text-sm font-normal">/month*</span></div>
                <p className="text-xs text-green-100 mb-2">*billed annually</p>
                <ul className="text-sm text-green-100 space-y-1">
                  <li>• Convert HTML to PDF (up to 5 pages)</li>
                  <li>• Up to 10MB of HTML content</li>
                  <li>• 1000 calls per month</li>
                </ul>
              </div>
              
              <a
                href="#"
                className="inline-flex items-center justify-center w-full bg-white text-green-600 font-semibold py-3 px-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                Purchase using Stripe
              </a>
            </div>

            {/* FAQ */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Can I cancel the subscription at any time?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Yes, you can cancel the plan anytime.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Can I get a refund if I&apos;m not satisfied?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Yes, you can.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Can I get a free trial before subscribing?</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">There is a free version available without requiring a license key.</p>
                </div>
              </div>
            </div>

            {/* Documentation Link */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Documentation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Visit Microsoft Docs for detailed setup instructions and schema information.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                Visit Microsoft Docs
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Special handling for metadata-browser
  if (slug === 'metadata-browser') {
    return (
      <main id="content" className="mx-auto max-w-6xl px-4 sm:px-6 py-10 scroll-mt-24 md:scroll-mt-28">
        {/* Header */}
        <div className="mb-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-6">
            <ArrowLeftIcon className="w-4 h-4" />
            Back to Products
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Pascalcase Metadata Browser for Dataverse
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-4">
                for Dynamics 365 & PowerApps
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl text-white">
                <ArrowDownTrayIcon className="w-8 h-8 mb-2" />
                <p className="text-sm font-medium">Microsoft Edge Extension</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Product */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Description */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About the Extension</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Pascalcase Metadata Browser is an extension for Microsoft Edge browser for accessing metadata of Dataverse (Dynamics 365 and PowerApps) instances. You can easily browse properties like tables, columns, relationships, choices, etc. and export to CSV files.
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Key Advantage</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  The main advantage of this extension is that it will automatically show you the logical names of the tables and their columns on UI forms, assisting you not to always navigate to your solution to find the logical names.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Browse Dataverse metadata',
                  'Export to CSV files',
                  'View table properties',
                  'Examine column details',
                  'Check relationships',
                  'Review choice values',
                  'Auto-show logical names',
                  'Edge browser integration'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Download & Alternative */}
          <div className="space-y-6">
            {/* Download Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <ArrowDownTrayIcon className="w-8 h-8" />
                <h3 className="text-xl font-bold">Download Now</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Get the Pascalcase Metadata Browser extension from Microsoft Edge Add-ons store.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                Download from Microsoft Edge
              </a>
            </div>

            {/* Alternative Tool */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Alternative Tool</h3>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                Safyr for Microsoft Dynamics 365 Metadata
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                A powerful metadata tool that allows you to download metadata as a .mdb file directly extracted from your Microsoft Dataverse instance.
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="text-sm">
                  <span className="font-medium text-slate-800 dark:text-slate-200">Contains:</span>
                  <ul className="mt-1 text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Tables, columns, entities</li>
                    <li>• Keys, option sets, relationships</li>
                    <li>• Primary keys, foreign keys</li>
                    <li>• Logical names, schema names</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 mb-4">
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <strong>Use cases:</strong> Data catalog, data governance, data warehouse, master data, data integration projects.
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center justify-center w-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
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
    <main id="content" className="mx-auto max-w-4xl px-4 sm:px-6 py-10 scroll-mt-24 md:scroll-mt-28">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{data.title}</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">{data.body}</p>
      <div className="mt-6 flex gap-3">
        <Link href="/products" className="rounded-md border border-slate-300 dark:border-slate-600 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Back to Products</Link>
        <a href="#" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-black hover:opacity-90">Download</a>
      </div>
    </main>
  );
}


