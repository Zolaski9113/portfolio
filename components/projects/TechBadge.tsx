'use client'

import {
  getTechTagTextColor,
  techBackgroundColor,
} from '../../lib/techColors'

type TechBadgeProps = {
  name: string
  className?: string
}

export function TechBadge({ name, className = '' }: TechBadgeProps) {
  const bg = techBackgroundColor(name)
  const color = getTechTagTextColor(bg)

  return (
    <span
      className={`tech-tag inline-block whitespace-nowrap rounded-lg border-2 border-white/20 px-3 py-1.5 text-[10px] transition-transform duration-200 ease-out ${className}`}
      style={{
        backgroundColor: bg,
        color,
      }}
    >
      {name}
    </span>
  )
}
