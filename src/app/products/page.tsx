import ProductCard, { Product } from '@/components/ProductCard';
import { RocketIcon } from '@radix-ui/react-icons';

const products: Product[] = [
  {
    slug: 'metadata-browser',
    title: 'Metadata Browser',
    description: 'Examine and export Dataverse metadata: tables, columns, relationships, keys.',
    icon: (
      <img
        src="/our_products/logos/Metadata_Browser.png"
        alt="Metadata Browser logo"
        className="h-5 w-5"
      />
    ),
    tags: ['Edge'],
    downloadUrl:
      'https://microsoftedge.microsoft.com/addons/detail/metadata-browser-for-dyna/fdfelmicclblfanogpnejdogjjildbkf',
  },
  {
    slug: 'data-mask',
    title: 'Data Mask for Dataverse',
    description: 'Protect sensitive data with deterministic masking and reversible tokens.',
    icon: <img src="/our_products/logos/Data Mask Tool" alt="Data Mask logo" className="h-5 w-5" />,
    downloadUrl:
      'https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.datamask?tab=Overview',
  },
  {
    slug: 'ai-autocloser',
    title: 'AI Autocloser',
    description: 'Auto-resolve non-actionable support tickets using intelligent rules.',
    icon: (
      <img
        src="/our_products/logos/AI Autocloser.5def4e0d-2e21-4e49-b8e8-3c8463a090c5"
        alt="AI Autocloser logo"
        className="h-5 w-5"
      />
    ),
    tags: ['AppSource'],
    downloadUrl:
      'https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.autocloser?tab=DetailsAndSupport',
  },
  {
    slug: 'commission-365',
    title: 'Commission 365',
    description: 'Configure commissions, incentives and bonus plans for your sales teams.',
    icon: (
      <img
        src="/our_products/logos/Commission 365.a4e8130e-a236-4e16-9a8b-cec40c92775c"
        alt="Commission 365 logo"
        className="h-5 w-5"
      />
    ),
    // tags removed
    downloadUrl:
      'https://appsource.microsoft.com/en-us/product/dynamics-365/pascalcasesoftwareprivatelimited1662384934323.commission365?tab=Overview',
  },
  {
    slug: 'html-to-pdf',
    title: 'HTML To PDF Converter',
    description: 'Generate pixel-perfect PDFs from HTML templates and data.',
    icon: (
      <img src="/our_products/logos/HTML_To_PDF.png" alt="HTML to PDF logo" className="h-5 w-5" />
    ),
    tags: ['Free'],
    // No downloadUrl for this product (button hidden)
  },
  {
    slug: 'flow-monitor',
    title: 'Flow Monitor',
    description: 'Monitor Power Automate flows: duration, failures and insights across envs.',
    icon: (
      <img
        src="/our_products/logos/Flow_Monitor.bf7976ba-dd43-4110-a145-d649264b7869"
        alt="Flow Monitor logo"
        className="h-5 w-5"
      />
    ),
    downloadUrl:
      'https://appsource.microsoft.com/en-us/product/web-apps/pascalcasesoftwareprivatelimited1662384934323.flowmonitor?ocid=GTMRewards_WhatsNewBlog_flowmonitor_08012024',
  },
];

export default function ProductsPage() {
  return (
    <main id="content" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Our Products
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Scalable tools for Dynamics 365 and Power Platform.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </main>
  );
}
