import Link from 'next/link';
import type { BlogCardProps } from '@/lib/blog/types';

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  author,
  readTime,
}: BlogCardProps) {
  return (
    <article className="blog-card">
      <Link href={`/blog/${slug}`} className="blog-card-link">
        <div className="blog-image">
          <div className="blog-preview">
            <h3 className="blog-preview-title">{title}</h3>
          </div>
          <span className="blog-category">{category}</span>
        </div>
        <div className="blog-content">
          <header>
            <h3 className="blog-title">{title}</h3>
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
