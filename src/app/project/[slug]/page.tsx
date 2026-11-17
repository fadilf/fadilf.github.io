import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProjectSlugs, getProjectBySlug } from '@/lib/projects';
import MdxArticle from '../../blog/MdxArticle';

// No /project index page exists; these pages are linked to directly from the home page.
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title, description: project.excerpt };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 pt-20 pb-16">
      <Link href="/" className="text-apple-lightgray hover:text-apple-text transition-colors duration-300">
        &larr; Home
      </Link>

      <article className="mt-8">
        <h1 className="text-4xl font-bold text-apple-text mt-2 mb-8">{project.title}</h1>

        <MdxArticle source={project.content} />
      </article>

      <div className="mt-12 pt-8 border-t border-apple-cardborder">
        <Link href="/" className="text-apple-lightgray hover:text-apple-text transition-colors duration-300">
          &larr; Home
        </Link>
      </div>
    </div>
  );
}
