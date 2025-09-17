export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  coverImage: string;
  contentHtml?: string;
  publishedAt?: string;
  tags?: string[];
};

export type BlogCardProps = Pick<
  BlogPost,
  'slug' | 'title' | 'excerpt' | 'category' | 'author' | 'readTime'
>;

export type BlogPostWithImage = BlogPost;

// Helper function to convert BlogPostWithImage to BlogCardProps
export function toBlogCardProps(post: BlogPostWithImage): BlogCardProps {
  // coverImage is intentionally dropped for the card; suppress unused var warning by not assigning.
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    author: post.author,
    readTime: post.readTime,
  };
}
