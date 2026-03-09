import { FONT_SERIF } from '../data/config';

export default function Footer({ onGoToResources }) {
  return (
    <footer style={{ background: '#3D200E' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-6">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl font-bold text-yellow-400" style={FONT_SERIF}>Lotería</span>
            <span className="text-xl font-bold text-amber-400" style={FONT_SERIF}>Bitcoin</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            El primer juego de lotería para aprender Bitcoin. Educa jugando, gana XP, domina conceptos.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-amber-900/40 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white text-xs">
            Made by Jeronimo, with love.
          </p>
          <button
            onClick={onGoToResources}
            className="text-amber-400 hover:text-amber-300 text-xs underline underline-offset-4 transition-colors"
          >
            Recursos para aprender Bitcoin
          </button>
        </div>
      </div>
    </footer>
  );
}
