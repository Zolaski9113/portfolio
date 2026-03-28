'use client'

import { useEffect, useId, useRef } from 'react'
import type { Project } from '../../lib/types/project'
import { TechBadge } from './TechBadge'

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[1000] flex animate-[projects-fade-in_0.3s_ease] items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[90vh] w-full max-w-[900px] animate-[projects-slide-up_0.3s_ease] overflow-auto rounded-3xl border-2 border-blue-500/50 bg-gradient-to-br from-slate-800 to-slate-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="close-button absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border-none bg-red-500/20 text-2xl text-red-300 transition-all duration-200 ease-out hover:scale-110 hover:bg-red-500/40"
          aria-label="Fermer la fenêtre"
        >
          ×
        </button>

        <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-t-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
          <div className="text-[120px] leading-none">{project.emoji}</div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <div className="p-10">
          <h2
            id={titleId}
            className="mb-4 font-normal leading-relaxed text-white text-2xl"
          >
            {project.title}
          </h2>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          <div className="mb-8">
            <h3 className="mb-4 font-normal leading-relaxed text-blue-300 text-sm">
              Description
            </h3>
            <p className="m-0 font-normal leading-loose text-slate-300 text-xs">
              {project.fullDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-button inline-flex items-center gap-2 rounded-xl border-none bg-gradient-to-br from-blue-500 to-purple-600 px-6 py-3 text-white no-underline transition-all duration-300 ease-out text-[10px] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40"
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Voir le projet
              </a>
            ) : null}

            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link-button inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-6 py-3 text-white no-underline transition-all duration-300 ease-out text-[10px] hover:-translate-y-0.5 hover:bg-white/20"
              >
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
