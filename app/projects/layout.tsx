import type { ReactNode } from 'react'
import { Press_Start_2P } from 'next/font/google'
import './projects.css'

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode
}) {
  return <div className={pressStart.className}>{children}</div>
}
