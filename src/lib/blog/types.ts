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
  const { coverImage, ...blogCardProps } = post;
  return blogCardProps;
}
