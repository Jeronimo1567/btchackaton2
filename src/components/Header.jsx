import { FONT_SERIF } from '../data/config';

export default function Header({ onGoHome, children }) {
  return (
    <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 border-b-2 border-amber-900/50">
      <button onClick={onGoHome} style={FONT_SERIF}
              className="text-lg sm:text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer text-left"
              aria-label="Volver al inicio">
        LOTERIA BITCOIN
      </button>
      {children && (
        <div className="flex items-center gap-3 sm:gap-4">
          {children}
        </div>
      )}
    </div>
  );
}
