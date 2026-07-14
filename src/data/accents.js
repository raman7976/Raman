// Minecraft-inspired accent hexes. Used as inline styles for per-item accents
// (borders / glows) so Tailwind's purge never strips a dynamic class.
export const ACCENTS = {
  grass: '#54cf4e',
  diamond: '#4dd0e1',
  gold: '#ffb02e',
  redstone: '#ff5555',
  amethyst: '#b57edc',
}

export const accentHex = (name) => ACCENTS[name] || ACCENTS.grass
