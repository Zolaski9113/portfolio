function luminanceFromHex(hex: string): number {
  const normalized = hex.replace('#', '')
  if (normalized.length !== 6) return 0.3
  const r = parseInt(normalized.slice(0, 2), 16)
  const g = parseInt(normalized.slice(2, 4), 16)
  const b = parseInt(normalized.slice(4, 6), 16)
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255
}

export function getTechTagTextColor(backgroundHex: string): '#000' | '#fff' {
  return luminanceFromHex(backgroundHex) > 0.55 ? '#000' : '#fff'
}

export const techColors: Record<string, string> = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3776AB',
  Java: '#007396',
  'C++': '#00599C',
  'C#': '#239120',
  Go: '#00ADD8',
  Rust: '#CE422B',
  PHP: '#777BB4',
  Ruby: '#CC342D',

  React: '#61DAFB',
  'Next.js': '#000000',
  Vue: '#4FC08D',
  Angular: '#DD0031',
  Svelte: '#FF3E00',
  HTML: '#E34F26',
  CSS: '#1572B6',
  Tailwind: '#06B6D4',

  'Node.js': '#339933',
  Express: '#000000',
  Django: '#092E20',
  Flask: '#000000',
  Spring: '#6DB33F',
  FastAPI: '#009688',

  MongoDB: '#47A248',
  PostgreSQL: '#4169E1',
  MySQL: '#4479A1',
  Redis: '#DC382D',
  Firebase: '#FFCA28',
  Supabase: '#3ECF8E',

  Docker: '#2496ED',
  Git: '#F05032',
  AWS: '#FF9900',
  GraphQL: '#E10098',

  ATmega324PA: '#E47128',
  Streamlit: '#FF4B4B',
  'Gemini API': '#8E75FF',
  MQL5: '#1E88E5',
  'Socket.io': '#010101',
  Pandas: '#150458',
}

export function techBackgroundColor(name: string): string {
  return techColors[name] ?? '#6B7280'
}
