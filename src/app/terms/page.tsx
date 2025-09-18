export const metadata = {
  title: 'Terms of Service | Pascalcase',
  description: 'Terms of Service for Pascalcase products and services.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="text-center">
        <h1
          className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          style={{ color: 'var(--accent-2)' }}
        >
          Terms of Service
        </h1>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
          Effective Date: February 24, 2025
        </p>
      </header>

      <p className="mt-8 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        Welcome to Pascalcase.com! These Terms of Service (&quot;Terms&quot;) govern your use of our
        website and our suite of products and services, including Metadata Browser, Commission 365,
        Flow Monitor, and other tools built for Dynamics 365 and Power Platform (collectively,
        &quot;Services&quot;). By accessing or using our Services, you agree to these Terms. If you
        don&apos;t agree, please refrain from using our Services. We may update these Terms
        periodically, and changes will be posted here with an updated effective date.
      </p>

      <Section title="1. Use of Our Services">
        Our Services are designed to enhance your experience with Dynamics 365 and Power Platform.
        You may use tools like Metadata Browser to examine and export Dataverse metadata, Commission
        365 to manage sales commissions, or Flow Monitor to track Power Automate flows—all for
        lawful purposes and in line with these Terms. To access certain features or download our
        products, you&apos;ll need an account. Keep your account details secure and accurate. We
        reserve the right to suspend or terminate access if we detect misuse or violations of these
        Terms.
      </Section>

      <Section title="2. Orders and Payments">
        When you purchase or download products like Metadata Browser, Commission 365, or Flow
        Monitor through Pascalcase.com, you agree to provide accurate payment and contact
        information. Prices are in USD unless specified otherwise, and you&apos;re responsible for
        applicable taxes or fees. We may refuse or cancel orders due to availability, pricing
        errors, or suspected fraud. If we cancel after payment, we&apos;ll refund you fully to your
        original payment method.
      </Section>

      <Section title="3. Refund Policy">
        We stand behind the quality of our products and want you to be satisfied. Here&apos;s how
        refunds work for purchases from Pascalcase.com:
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Eligibility:</strong> Refunds are available for products like Metadata Browser,
            Commission 365, and Flow Monitor within 14 days of purchase, provided they remain
            unused. For Metadata Browser, this means you haven&apos;t exported metadata; for
            Commission 365, you haven&apos;t configured commission plans; and for Flow Monitor, you
            haven&apos;t tracked any flows. Products must be in their original state—no activations
            or downloads.
          </li>
          <li>
            <strong>Non-Refundable Items:</strong> Custom configurations or add-ons for our tools,
            as well as any third-party integrations, are non-refundable unless defective.
          </li>
          <li>
            <strong>Process:</strong> To request a refund, email{' '}
            <a
              href="mailto:support@pascalcase.com"
              className="underline"
              style={{ color: 'var(--accent-2)' }}
            >
              support@pascalcase.com
            </a>{' '}
            with your order number and reason for the return. We&apos;ll verify the product&apos;s
            unused status (e.g., no metadata exports from Metadata Browser or flow tracking in Flow
            Monitor) and process your refund within 7-10 business days to your original payment
            method.
          </li>
          <li>
            <strong>Defective Products:</strong> If a tool like Commission 365 fails to calculate
            commissions or Flow Monitor doesn&apos;t track flows as promised, notify us within 7
            days of purchase. We&apos;ll either replace the product or refund you fully, at your
            discretion.
          </li>
          <li>
            Purchases through third-party platforms (e.g., Microsoft AppSource) follow their refund
            policies—contact them directly.
          </li>
        </ul>
      </Section>

      <Section title="4. Cancellation Policy">
        We aim to make cancellations simple while ensuring our systems run smoothly. Here&apos;s how
        it works:
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Before Activation:</strong> You can cancel an order for Metadata Browser,
            Commission 365, or Flow Monitor at no cost if it hasn&apos;t been processed or
            activated. Orders typically process within 24 hours, so email{' '}
            <a
              href="mailto:support@pascalcase.com"
              className="underline"
              style={{ color: 'var(--accent-2)' }}
            >
              support@pascalcase.com
            </a>{' '}
            with your order number quickly to confirm eligibility and cancel.
          </li>
          <li>
            <strong>After Activation:</strong> Once a product is activated—e.g., Metadata Browser is
            installed, Commission 365 is configured, or Flow Monitor starts tracking—cancellation
            isn&apos;t possible. Check our Refund Policy above for return options.
          </li>
          <li>
            <strong>Subscriptions:</strong> Some products, like Flow Monitor, may offer subscription
            plans. You can cancel renewals anytime via your account settings, effective at the end
            of your current billing cycle—no pro-rated refunds for unused time. Log in or email us
            for help.
          </li>
          <li>
            <strong>Our Right to Cancel:</strong> We may cancel your order or subscription if
            fulfillment isn&apos;t possible (e.g., technical issues or licensing restrictions).
            You&apos;ll be notified promptly, and we&apos;ll issue a full refund.
          </li>
        </ul>
      </Section>

      <Section title="5. Intellectual Property">
        All content on Pascalcase.com, including the code, designs, and documentation for Metadata
        Browser, Commission 365, and Flow Monitor, is owned by us or our licensors and protected by
        copyright and trademark laws. You may not copy, distribute, or modify our Services without
        written permission, except for personal, non-commercial use as intended (e.g., using
        Metadata Browser to manage your Dataverse).
      </Section>

      <Section title="6. Limitation of Liability">
        To the fullest extent permitted by law, Pascalcase.com and its affiliates aren&apos;t liable
        for indirect, incidental, or consequential damages from your use of our Services or
        products. Our total liability won&apos;t exceed the amount you paid for the specific product
        (e.g., the cost of Commission 365 or Flow Monitor).
      </Section>

      <Section title="7. Governing Law">
        These Terms are governed by the laws of India, without regard to conflict of law principles.
        Disputes will be resolved in the courts of India.
      </Section>

      <Section title="8. Contact Us">
        Questions about these Terms, our Refund Policy, or Cancellation Policy? Reach out:
        <div className="mt-2 space-y-1">
          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:support@pascalcase.com"
              className="underline"
              style={{ color: 'var(--accent-2)' }}
            >
              support@pascalcase.com
            </a>
          </p>
          <p>
            <strong>Address:</strong> Plot No. 3, Road No. 29, Alkapur Township, Neknampur,
            Gandipet, Hyderabad, Telangana, India - 500089.
          </p>
        </div>
      </Section>

      <p className="mt-8 text-sm" style={{ color: 'var(--text-secondary)' }}>
        We&apos;re committed to helping you get the most out of Metadata Browser, Commission 365,
        Flow Monitor, and all our Services!
      </p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      <div
        className="mt-2 space-y-2 text-base leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        {children}
      </div>
    </section>
  );
}
