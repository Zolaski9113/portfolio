'use client'

import { useCallback, useMemo, useState } from 'react'
import { ProjectCard } from '../../components/projects/ProjectCard'
import { ProjectModal } from '../../components/projects/ProjectModal'
import { projects } from '../../data/projects'

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedProject = useMemo(
    () => (selectedId ? projects.find((p) => p.id === selectedId) ?? null : null),
    [selectedId],
  )

  const closeModal = useCallback(() => setSelectedId(null), [])

  return (
    <main
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900 px-12 py-20 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute left-20 top-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
          style={{ animation: 'projects-pulse 3s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-40 right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          style={{
            animation: 'projects-pulse 3s ease-in-out infinite 1.5s',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <h1
          className="mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text font-normal leading-normal text-transparent text-5xl"
        >
          Mes Projets
        </h1>

        <p className="mb-16 max-w-3xl font-normal leading-loose text-gray-300 text-sm">
          J&apos;adore créer des choses, et je travaille toujours sur quelque chose de
          nouveau!
        </p>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={selectedId === project.id}
              onSelect={() => setSelectedId(project.id)}
            />
          ))}
        </div>
      </div>

      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      ) : null}
    </main>
  )
}
