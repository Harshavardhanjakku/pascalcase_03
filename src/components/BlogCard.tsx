import Image from 'next/image';
import Link from 'next/link';
import type { BlogCardProps } from '@/lib/blog/types';

export default function BlogCard({ slug, title, excerpt, category, author, readTime, coverImage }: BlogCardProps) {
  return (
    <article className="blog-card">
      <Link href={`/blog/${slug}`} className="blog-card-link">
        <div className="blog-image">
          <Image src={coverImage} alt={title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
          <span className="blog-category">
            {category}
          </span>
        </div>
        <div className="blog-content">
          <header>
            <h3 className="blog-title">
              {title}
            </h3>
          </header>
          <p className="blog-excerpt">{excerpt}</p>
          <footer className="blog-footer">
            <span>{author}</span>
            <span>{readTime}</span>
          </footer>
        </div>
      </Link>
    </article>
  );
}


