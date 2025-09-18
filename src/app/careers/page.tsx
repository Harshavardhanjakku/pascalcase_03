export const metadata = {
  title: 'Careers | Pascalcase',
  description: "We're a fast-growing startup seeking top talent to join our team.",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <header className="text-center">
        <h1
          className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          style={{ color: 'var(--accent-2)' }}
        >
          Careers
        </h1>
        <p
          className="mx-auto mt-4 max-w-3xl text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          We&apos;re a fast-growing startup seeking top talent to join our team. We&apos;re looking
          for passionate individuals who want to work in a dynamic, fast-paced environment and
          contribute to our mission. We offer competitive salaries, comprehensive benefits, and
          opportunities for growth and development in a fun and supportive work environment.
        </p>
      </header>

      <section className="mt-12 space-y-10">
        <Job
          title="Microsoft Dynamics 365 Developers"
          skills="Strong knowledge on Dynamics 365, Plugins, Custom Workflows, Web API, C#, Web API, and SQL & Excellent communication skills."
          experience="1-5 years"
          location="Hyderabad, India"
        />

        <Job
          title="Microsoft Dynamics 365 Interns"
          skills="Good knowledge on any object oriented language, JavaScript, HTML, CSS and SQL & Excellent communication skills."
          experience="0 years"
          location="Hyderabad, India"
        />

        <Job
          title="Microsoft .Net Developers"
          skills="Strong knowledge on C#, Web API, SQL, etc. & Excellent communication skills."
          experience="0-2 years"
          location="Hyderabad, India"
        />
      </section>

      <section className="mt-14">
        <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
          How to Apply?
        </h2>
        <p className="mt-2 text-base" style={{ color: 'var(--text-secondary)' }}>
          Please send your resumes to{' '}
          <a
            href="mailto:hr@pascalcase.com"
            className="underline decoration-dotted underline-offset-4"
            style={{ color: 'var(--accent-2)' }}
          >
            hr@pascalcase.com
          </a>
        </p>
      </section>
    </div>
  );
}

type JobProps = {
  title: string;
  skills: string;
  experience: string;
  location: string;
};

function Job({ title, skills, experience, location }: JobProps) {
  return (
    <article
      className="rounded-xl border p-5"
      style={{ borderColor: 'var(--border-subtle)', backgroundColor: 'var(--surface-1)' }}
    >
      <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
        <li style={{ color: 'var(--text-secondary)' }}>
          <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
            Skills:
          </span>{' '}
          {skills}
        </li>
        <li style={{ color: 'var(--text-secondary)' }}>
          <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
            Experience:
          </span>{' '}
          {experience}
        </li>
        <li style={{ color: 'var(--text-secondary)' }}>
          <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
            Location:
          </span>{' '}
          {location}
        </li>
      </ul>
    </article>
  );
}
