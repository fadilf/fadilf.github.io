import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import LightboxImage from './LightboxImage';
import ExpandableCard from './ExpandableCard';
import PlaygroundEmbed from './PlaygroundEmbed';

function ArticleLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
}

// Shared MDX renderer + prose styling for blog posts and project pages.
export default function MdxArticle({ source }: { source: string }) {
  return (
    <div className="prose prose-md prose-invert max-w-none leading-relaxed
      prose-headings:text-apple-text
      prose-p:text-apple-text
      prose-a:text-apple-blue prose-a:no-underline hover:prose-a:underline
      prose-strong:text-apple-text
      prose-code:before:content-none prose-code:after:content-none
      [&_:not(pre)>code]:text-apple-text [&_:not(pre)>code]:bg-apple-surface [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:rounded
      prose-pre:bg-apple-card prose-pre:border prose-pre:border-apple-cardborder
      prose-li:text-apple-text
      prose-ul:text-apple-text
      prose-blockquote:border-apple-cardborder prose-blockquote:text-apple-text
      prose-th:text-apple-text prose-td:text-apple-text
      prose-thead:border-apple-cardborder prose-tr:border-apple-cardborder
    ">
      {/* @ts-expect-error Async Server Component */}
      <MDXRemote
        source={source}
        components={{ img: LightboxImage, LightboxImage, ExpandableCard, PlaygroundEmbed, a: ArticleLink }}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, { theme: 'github-light', keepBackground: false }]],
          },
        }}
      />
    </div>
  );
}
