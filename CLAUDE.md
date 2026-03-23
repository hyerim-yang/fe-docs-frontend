# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

fe-docs-frontend — a frontend documentation website built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Commands

- `npm run dev` — Start development server (http://localhost:3002)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
- `npm run format` — Format all files with Prettier
- `npm run format:check` — Check formatting without writing

## Pre-commit

Husky + lint-staged runs on every commit: ESLint fix + Prettier on staged `*.{ts,tsx,js,jsx}`, Prettier on `*.{json,css,md,mdx,yml,yaml}`.

## Architecture

- **Framework**: Next.js 15 with App Router (`src/app/`)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` (configured in `postcss.config.mjs`, imported in `src/app/globals.css`)
- **Language**: TypeScript with strict mode
- **Path alias**: `@/*` maps to `./src/*`
- **Lang**: HTML lang is set to `ko` (Korean)
