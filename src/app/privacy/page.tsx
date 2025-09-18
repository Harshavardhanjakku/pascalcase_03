export const metadata = {
  title: 'Privacy Policy | Pascalcase',
  description: 'Privacy Policy for Pascalcase products and services.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <header className="text-center">
        <h1
          className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          style={{ color: 'var(--accent-2)' }}
        >
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
          Effective date: November 22, 2019
        </p>
      </header>

      <p className="mt-8 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        This page informs you of our policies regarding the collection, use, and disclosure of
        personal data when you use our Service and the choices you have associated with that data.
        We use your data to provide and improve the Service. By using the Service, you agree to the
        collection and use of information in accordance with this policy. Unless otherwise defined
        in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our
        Terms and Conditions, accessible from{' '}
        <a href="https://pascalcase.com" className="underline" style={{ color: 'var(--accent-2)' }}>
          https://pascalcase.com
        </a>
        .
      </p>

      <Section title="Information Collection And Use">
        We collect several different types of information for various purposes to provide and
        improve our Service to you.
      </Section>

      <Section title="Types of Data Collected">
        While using our Service, we may ask you to provide us with certain personally identifiable
        information that can be used to contact or identify you ("Personal Data"). Personally,
        identifiable information may include, but is not limited to:
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Cookies and Usage Data</li>
        </ul>
      </Section>

      <Section title="Usage Data">
        We may also collect information about how the Service is accessed and used ("Usage Data").
        This Usage Data may include information such as your computer&apos;s Internet Protocol
        address (e.g. IP address), browser type, browser version, the pages of our Service that you
        visit, the time and date of your visit, the time spent on those pages, unique device
        identifiers and other diagnostic data.
      </Section>

      <Section title="Tracking & Cookies Data">
        We use cookies and similar tracking technologies to track the activity on our Service and
        hold certain information. Cookies are files with a small amount of data which may include an
        anonymous unique identifier. Cookies are sent to your browser from a website and stored on
        your device. Tracking technologies also used are beacons, tags, and scripts to collect and
        track information and to improve and analyze our Service. You can instruct your browser to
        refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept
        cookies, you may not be able to use some portions of our Service. Examples of Cookies we
        use:
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Session Cookies:</strong> We use Session Cookies to operate our Service.
          </li>
          <li>
            <strong>Preference Cookies:</strong> We use Preference Cookies to remember your
            preferences and various settings.
          </li>
          <li>
            <strong>Security Cookies:</strong> We use Security Cookies for security purposes.
          </li>
        </ul>
      </Section>

      <Section title="Use of Data">
        PascalCase Solutions uses the collected data for various purposes:
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>To provide and maintain the Service</li>
          <li>To notify you about changes to our Service</li>
          <li>
            To allow you to participate in interactive features of our Service when you choose to do
            so
          </li>
          <li>To provide customer care and support</li>
          <li>To provide analysis or valuable information so that we can improve the Service</li>
          <li>To monitor the usage of the Service</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </Section>

      <Section title="Transfer Of Data">
        Your information, including Personal Data, may be transferred to and maintained on computers
        located outside of your state, province, country or other governmental jurisdiction where
        the data protection laws may differ than those from your jurisdiction. If you are located
        outside India and choose to provide information to us, please note that we transfer the
        data, including Personal Data, to India and process it there. Your consent to this Privacy
        Policy followed by your submission of such information represents your agreement to that
        transfer. PascalCase Solutions will take all steps reasonably necessary to ensure that your
        data is treated securely and in accordance with this Privacy Policy and no transfer of your
        Personal Data will take place to an organization or a country unless there are adequate
        controls in place including the security of your data and other personal information.
      </Section>

      <Section title="Disclosure Of Data">
        <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
          Legal Requirements
        </h3>
        PascalCase Solutions may disclose your Personal Data in the good faith belief that such
        action is necessary to:
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>To comply with a legal obligation.</li>
          <li>To protect and defend the rights or property of PascalCase Solutions.</li>
          <li>To prevent or investigate possible wrongdoing in connection with the Service.</li>
          <li>To protect the personal safety of users of the Service or the public.</li>
          <li>To protect against legal liability.</li>
        </ul>
      </Section>

      <Section title="Security of Data">
        The security of your data is important to us, but remember that no method of transmission
        over the Internet, or method of electronic storage is 100% secure. While we strive to use
        commercially acceptable means to protect your Personal Data, we cannot guarantee its
        absolute security.
      </Section>

      <Section title="Service Providers">
        We may employ third party companies and individuals to facilitate our Service ("Service
        Providers"), to provide the Service on our behalf, to perform Service-related services or to
        assist us in analyzing how our Service is used. These third parties have access to your
        Personal Data only to perform these tasks on our behalf and are obligated not to disclose or
        use it for any other purpose.
      </Section>

      <Section title="Links to Other Sites">
        Our Service may contain links to other sites that are not operated by us. If you click on a
        third party link, you will be directed to that third party&apos;s site. We strongly advise
        you to review the Privacy Policy of every site you visit. We have no control over and assume
        no responsibility for the content, privacy policies or practices of any third party sites or
        services.
      </Section>

      <Section title="Children's Privacy">
        Our Service does not address anyone under the age of 18 (Children). We do not knowingly
        collect personally identifiable information from anyone under the age of 18. If you are a
        parent or guardian and you are aware that your Children has provided us with Personal Data,
        please contact us. If we become aware that we have collected Personal Data from children
        without verification of parental consent, we take steps to remove that information from our
        servers.
      </Section>

      <Section title="Changes To This Privacy Policy">
        We may update our Privacy Policy from time to time. We will notify you of any changes by
        posting the new Privacy Policy on this page. We will let you know via email and/or a
        prominent notice on our Service, prior to the change becoming effective and update the
        "effective date" at the top of this Privacy Policy. You are advised to review this Privacy
        Policy periodically for any changes. Changes to this Privacy Policy are effective when they
        are posted on this page.
      </Section>

      <Section title="Contact Us">
        If you have any questions about this Privacy Policy, please contact us: By email:{' '}
        <a
          href="mailto:support@pascalcase.com"
          className="underline"
          style={{ color: 'var(--accent-2)' }}
        >
          support@pascalcase.com
        </a>
      </Section>
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
