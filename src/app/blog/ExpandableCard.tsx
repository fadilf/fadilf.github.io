"use client";

import { useRef, useState } from "react";

interface ExpandableCardProps {
  children?: React.ReactNode;
  collapsedHeight?: number;
}

export default function ExpandableCard({ children, collapsedHeight = 130 }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState(collapsedHeight);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!expanded && contentRef.current) {
      setFullHeight(contentRef.current.scrollHeight);
    }
    setExpanded((e) => !e);
  };

  return (
    <div className="rounded-xl border border-apple-cardborder bg-apple-card/40 my-6 overflow-hidden">
      <div
        className="relative overflow-hidden px-4 pt-3 transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: expanded ? fullHeight : collapsedHeight }}
      >
        <div ref={contentRef} className="[&>:first-child]:mt-0">{children}</div>
        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-apple-card to-transparent" />
        )}
      </div>
      <button
        type="button"
        onClick={handleToggle}
        className="w-full py-2 text-sm font-medium text-apple-text border-t border-apple-cardborder/60 hover:bg-apple-surface transition-colors cursor-pointer inline-flex items-center justify-center gap-1"
      >
        {expanded ? "Collapse" : "Expand"}
        <span aria-hidden="true">{expanded ? "▲" : "▼"}</span>
      </button>
    </div>
  );
}
