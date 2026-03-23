import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-16">
      <h1 className="text-4xl font-bold text-apple-text mb-2">Blog</h1>
      <p className="text-apple-lightgray mb-10">Thoughts on engineering, projects, and things I&apos;m learning.</p>

      <div className="border border-apple-cardborder rounded-2xl p-8 bg-apple-card text-center">
        <p className="text-apple-lightgray text-lg">Posts coming soon — stay tuned!</p>
      </div>

      <div className="mt-12">
        <Link href="/" className="text-apple-lightgray hover:text-apple-text transition-colors duration-300">
          &larr; Back to portfolio
        </Link>
      </div>
    </div>
  );
}
