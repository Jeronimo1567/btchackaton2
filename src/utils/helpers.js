import { ALL_PATTERNS } from '../data/config';

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function checkWin(markedIndices) {
  for (const pattern of ALL_PATTERNS) {
    if (pattern.every(i => markedIndices.has(i))) {
      return pattern;
    }
  }
  return null;
}

export function getStoredXP() {
  try { return parseInt(localStorage.getItem('loteria_xp') || '0', 10); } catch { return 0; }
}

export function setStoredXP(val) {
  try { localStorage.setItem('loteria_xp', String(Math.max(0, val))); } catch {}
}
