# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev**: `npm run dev` (uses Turbopack)
- **Build**: `npm run build` (static export)
- **Lint**: `npm run lint` (ESLint with next/core-web-vitals)

No test framework is configured.

## Architecture

Single-page Next.js 15 portfolio site statically exported (`output: 'export'` in next.config.js). All content lives on one scrollable page with anchor-based navigation (#top, #electronics, #ai, #fullstack).

**Key patterns:**
- All components are client components (`"use client"`) since the site uses browser APIs heavily (Intersection Observer, Typed.js, Three.js)
- Project data is hardcoded as arrays within each section component (ElectronicsSection, AIMLSection, FullStackSection)
- 3D models (`.glb` files in `public/3d/`) are rendered via React Three Fiber with visibility-triggered animations using `useFrame`
- ProjectCard uses a seeded PRNG for consistent random lighting effects across renders
- CSS animations and Intersection Observer transitions are defined in `FrontPageStyle.css`

**Path alias:** `@/*` maps to `./src/*`

**Styling:** Tailwind CSS with a dark theme (gray-950 base). Custom responsive breakpoints at 440px, 600px, and standard Tailwind breakpoints. Complex animations use CSS keyframes in FrontPageStyle.css rather than Tailwind.

**3D models:** Robot.tsx, LCD.tsx, and Design.tsx are auto-generated from GLTF files — regenerate with gltfjsx rather than editing by hand.
