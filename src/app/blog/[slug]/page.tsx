import { getAllPosts, getPostBySlug } from '@/lib/blog/api';
import BlogCard from '@/components/BlogCard';
import { notFound } from 'next/navigation';
import styles from './blog.module.css';
import Image from 'next/image';

export const revalidate = 60;

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetail({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();
  const allPosts = await getAllPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-12 xl:gap-16 lg:grid-cols-12">
        <article className="lg:col-span-8 xl:col-span-8">
          <header className="mb-6 border-b border-slate-200 pb-4 dark:border-slate-700">
            <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
            <div className="mb-3 flex items-center justify-between text-sm text-text-muted">
              <span>{post.author}</span>
              <div className="flex items-center gap-2">
                {post.publishedAt ? <span>{new Date(post.publishedAt).toLocaleDateString()}</span> : null}
                <span>• {post.readTime}</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-slate-700 dark:bg-slate-800 dark:text-slate-200">{post.category}</span>
              {post.tags?.map((t) => (
                <span key={t} className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-slate-700 dark:bg-slate-800 dark:text-slate-200">#{t}</span>
              ))}
            </div>
          </header>
          <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
          </div>
          <section
            className={`prose max-w-none border-t border-slate-200 pt-6 dark:border-slate-700 ${styles.article}`}
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />

          <section className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700">
            <div className="prose max-w-none">
              <h2 className="font-bold">Frequently Asked Questions (FAQs)</h2>
              <h3>1. What types of data sources can be integrated with the Card Gallery?</h3>
              <p>The Card Gallery can integrate with various data sources, including Common Data Service entities, SharePoint lists, and external APIs, allowing users to pull in relevant information for display.</p>
              <h3>2. Are there any limitations on the types of fields that can be displayed in the Card Gallery?</h3>
              <p>Yes, while users can display a variety of field types, certain fields like Lookup type fields are not accessible in the Description section. It&apos;s essential to choose compatible field types to ensure proper display.</p>
              <h3>3. Can I preview the Card Gallery design before publishing it?</h3>
              <p>Users can preview their Card Gallery design in real time while configuring it. This feature allows for adjustments to be made on the fly, ensuring that the final appearance meets expectations before publishing.</p>
              <h3>4. How does the Card Gallery improve mobile responsiveness?</h3>
              <p>The Card Gallery is designed to be responsive out of the box, automatically adjusting to different screen sizes. This ensures a seamless user experience across various devices, including smartphones and tablets.</p>
              <h3>5. Can I customize the CSS for individual cards within the gallery?</h3>
              <p>Yes, the Styling options in the Cards tab allow for unique CSS customization for individual cards. This feature enables users to create distinct styles for different products, enhancing visual differentiation.</p>
              <h3>6. What support resources are available for troubleshooting issues with the Card Gallery?</h3>
              <p>Microsoft provides extensive documentation, tutorials, and a community forum for Power Pages users. Additionally, users can access technical support for specific issues related to the Card Gallery through Microsoft support channels.</p>
            </div>
          </section>

          <section className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700">
            <h2 className="mb-4 text-xl font-semibold">Related blogs</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} {...r} />
              ))}
            </div>
          </section>
        </article>
        <aside className="lg:col-span-4 xl:col-span-4 lg:ml-4 xl:ml-6">
          <div className="sticky top-24 rounded-xl border border-slate-200 p-5 shadow-sm dark:border-slate-700">
            <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">Related blogs</h3>
            <div className="text-sm text-slate-500 dark:text-slate-400">Coming soon</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
