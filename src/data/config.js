export const GRID_SIZE = 4;
export const TOTAL_TABLA_CARDS = GRID_SIZE * GRID_SIZE;
export const CALLER_INTERVAL_MS = 10000;
export const CALLER_TIMER_SECONDS = Math.floor(CALLER_INTERVAL_MS / 1000);

export const XP_CORRECT = 10;
export const XP_WRONG = 5;
export const XP_LEVEL_2 = 100;
export const XP_LEVEL_3 = 250;

export const WIN_PATTERNS = {
  rows: [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]],
  cols: [[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]],
  diagonals: [[0,5,10,15],[3,6,9,12]],
  full: [[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]]
};

export const ALL_PATTERNS = [
  ...WIN_PATTERNS.rows,
  ...WIN_PATTERNS.cols,
  ...WIN_PATTERNS.diagonals,
  ...WIN_PATTERNS.full
];

export const BG_STYLE = { background: 'linear-gradient(180deg, #3D200E 0%, #5C3317 40%, #4A2812 100%)' };
export const FONT_SERIF = { fontFamily: "'Instrument Serif', serif" };
