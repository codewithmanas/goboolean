import { blogPosts } from "@/constants/blog-posts";
import BlogPostPage from "@/features/BlogPostPage";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // Find the blog post based on the slug
  const blog = blogPosts.find((post) => post.slug === slug);

  // Handle case where blog post is not found (e.g., display a 404 message)
  if (!blog) {
    return <div>404 - Blog Post Not Found</div>;
  }

  return (
      <>
        <BlogPostPage blog={blog} />
      </>
  );
}
