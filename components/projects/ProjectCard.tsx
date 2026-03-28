'use client'

import type { Project } from '../../lib/types/project'
import { TechBadge } from './TechBadge'

type ProjectCardProps = {
  project: Project
  isExpanded: boolean
  onSelect: () => void
}

export function ProjectCard({ project, isExpanded, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="project-card relative block min-h-[300px] w-full cursor-pointer rounded-2xl border-[3px] border-gray-600/50 bg-white/5 p-8 text-left backdrop-blur-sm transition-all duration-300 ease-out"
      aria-haspopup="dialog"
      aria-expanded={isExpanded}
      aria-label={`Ouvrir les détails : ${project.title}`}
    >
      <div className="flex h-full flex-col items-center justify-center gap-5 text-center">
        <div className="project-emoji mb-2 text-7xl transition-transform duration-300 ease-out">
          {project.emoji}
        </div>

        <h3 className="project-title mb-2 font-normal leading-relaxed text-white transition-colors duration-300 ease-out text-lg">
          {project.title}
        </h3>

        <p className="project-subtitle mb-4 font-normal leading-relaxed text-gray-400 transition-colors duration-300 ease-out text-xs">
          {project.subtitle}
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>

      <div className="project-shine pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 ease-out" />

      <div className="project-arrow absolute bottom-4 right-4 opacity-0 transition-opacity duration-300 ease-out">
        <svg
          className="h-6 w-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      </div>
    </button>
  )
}
