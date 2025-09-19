import Link from 'next/link';

export default function Header() {
  return (
    <header role="banner" className="w-full border-b border-white/10">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-semibold">
          Pascalcase
        </Link>
        <ul className="text-text-muted flex gap-6 text-sm">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
