import BlogBrowser from '@/components/BlogBrowser';
import { getAllPosts } from '@/lib/blog/api';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <main id="content" className="mx-auto max-w-7xl px-4 sm:px-6 py-10 scroll-mt-24 md:scroll-mt-28">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Blog</h1>
      <BlogBrowser posts={posts} />
    </main>
  );
}


