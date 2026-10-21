"use client";

import { useEffect, useRef, useState } from "react";

interface PlaygroundEmbedProps {
  src: string;
  title?: string;
  height?: number;
}

// An embedded page (the dataflow playground) with a button that makes it fill the
// screen. Uses the Fullscreen API where it exists; elsewhere (iPhone Safari) the
// frame is pinned over the page instead, and Escape or the button restores it.
export default function PlaygroundEmbed({ src, title = "Playground", height = 640 }: PlaygroundEmbedProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [full, setFull] = useState(false);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const onChange = () => setFull(document.fullscreenElement === boxRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    if (!pinned) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPinned(false);
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [pinned]);

  const toggle = () => {
    const box = boxRef.current;
    if (!box) return;
    if (full) {
      document.exitFullscreen();
    } else if (pinned) {
      setPinned(false);
    } else if (box.requestFullscreen) {
      box.requestFullscreen().catch(() => setPinned(true));
    } else {
      setPinned(true);
    }
  };

  const expanded = full || pinned;

  return (
    <div
      ref={boxRef}
      className={
        pinned
          ? "fixed inset-0 z-[100] flex flex-col bg-apple-black"
          : `not-prose flex flex-col overflow-hidden ${
              full ? "bg-apple-black" : "bg-apple-card my-6 rounded-xl border border-apple-cardborder"
            }`
      }
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-apple-cardborder/60">
        <span className="text-sm text-apple-lightgray">{title}</span>
        <button
          type="button"
          onClick={toggle}
          className="text-sm font-medium text-apple-text px-3 py-1 rounded-md hover:bg-apple-surface transition-colors cursor-pointer"
        >
          {expanded ? "Exit full screen" : "Full screen"}
        </button>
      </div>
      <iframe
        src={src}
        title={title}
        allow="fullscreen"
        className="w-full block border-0 bg-white"
        style={expanded ? { flex: 1 } : { height }}
      />
    </div>
  );
}
