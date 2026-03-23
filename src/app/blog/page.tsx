import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-16">
      <h1 className="text-4xl font-bold text-apple-text mb-2">Blog</h1>
      <p className="text-apple-lightgray mb-10">Thoughts on engineering, projects, and things I&apos;m learning.</p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            <article className="border border-apple-cardborder rounded-2xl p-6 bg-apple-card hover:border-apple-gray transition-colors duration-300">
              <time className="text-sm text-apple-lightgray">{formatDate(post.date)}</time>
              <h2 className="text-xl font-semibold text-apple-text mt-1 group-hover:text-apple-blue transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-apple-lightgray mt-2">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <Link href="/" className="text-apple-lightgray hover:text-apple-text transition-colors duration-300">
          &larr; Back to portfolio
        </Link>
      </div>
    </div>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
