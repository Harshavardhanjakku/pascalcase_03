import Image from 'next/image';

export default function CustomersSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(to bottom, var(--surface-1), transparent)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Our Customers
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
            Trusted by businesses worldwide to deliver exceptional Dynamics 365 and Power Platform solutions
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/customers.png"
              alt="Our valued customers and partners"
              width={800}
              height={400}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}