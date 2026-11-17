import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import MdxArticle from '../MdxArticle';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-16">
      <Link href="/blog" className="text-apple-lightgray hover:text-apple-text transition-colors duration-300">
        &larr; All posts
      </Link>

      <article className="mt-8">
        <time className="text-sm text-apple-lightgray">{formatDate(post.date)}</time>
        <h1 className="text-4xl font-bold text-apple-text mt-2 mb-8">{post.title}</h1>

        <MdxArticle source={post.content} />
      </article>

      <div className="mt-12 pt-8 border-t border-apple-cardborder">
        <Link href="/blog" className="text-apple-lightgray hover:text-apple-text transition-colors duration-300">
          &larr; All posts
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
