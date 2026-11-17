import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PROJECTS_DIR = path.join(process.cwd(), 'src/content/projects');

export interface Project {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
}

function readProject(slug: string): Project {
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, `${slug}.mdx`), 'utf-8');
  const { data, content } = matter(raw);
  return { slug, title: data.title, excerpt: data.excerpt ?? '', content };
}

export function getAllProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getProjectBySlug(slug: string): Project | undefined {
  if (!fs.existsSync(path.join(PROJECTS_DIR, `${slug}.mdx`))) return undefined;
  return readProject(slug);
}
