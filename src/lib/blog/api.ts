import type { BlogPost } from './types';
import { fetchAllBlogs, fetchAllSlugs, fetchBlogBySlug } from '@/lib/contentful/delivery';

export async function getAllPosts(): Promise<BlogPost[]> {
  const posts = await fetchAllBlogs('blog');
  return posts
    .map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt || '',
      category: p.category || 'General',
      author: p.author || 'Unknown',
      readTime: p.readTime || '5 min read',
      coverImage: p.coverImage || '/image.png',
      contentHtml: p.contentHtml,
      publishedAt: p.publishedAt,
      tags: p.tags,
    }))
    .sort((a, b) =>
      a.publishedAt && b.publishedAt ? b.publishedAt.localeCompare(a.publishedAt) : 0,
    );
}

export async function getLatestPosts(count: number): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const post = await fetchBlogBySlug(slug, 'blog');
  if (!post) return undefined;
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt || '',
    category: post.category || 'General',
    author: post.author || 'Unknown',
    readTime: post.readTime || '5 min read',
    coverImage: post.coverImage || '/image.png',
    contentHtml: post.contentHtml,
    publishedAt: post.publishedAt,
    tags: post.tags,
  };
}

export async function getAllSlugs(): Promise<string[]> {
  return fetchAllSlugs('blog');
}
