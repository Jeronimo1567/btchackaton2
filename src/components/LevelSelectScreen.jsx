import { XP_LEVEL_2, XP_LEVEL_3, FONT_SERIF, BG_STYLE } from '../data/config';
import Footer from './Footer';

export default function LevelSelectScreen({ onSelectLevel, onGoHome, xp, onGoToResources }) {
  const levels = [
    { id: 1, name: "Principiante", subtitle: "Conceptos basicos", locked: false, description: "36 cartas de Bitcoin", xpNeeded: 0 },
    { id: 2, name: "Intermedio", subtitle: "Conceptos avanzados", locked: xp < XP_LEVEL_2, description: `Necesitas ${XP_LEVEL_2} XP`, xpNeeded: XP_LEVEL_2 },
    { id: 3, name: "Avanzado", subtitle: "Experto en Bitcoin", locked: xp < XP_LEVEL_3, description: `Necesitas ${XP_LEVEL_3} XP`, xpNeeded: XP_LEVEL_3 }
  ];

  return (
    <div className="min-h-screen flex flex-col papel-picado grain-overlay relative" style={BG_STYLE}>
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center animate-slideInUp max-w-lg w-full">
          <button onClick={onGoHome} style={FONT_SERIF}
                  className="text-lg font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer mb-6 block mx-auto"
                  aria-label="Volver al inicio">
            LOTERIA BITCOIN
          </button>

          <h2 style={FONT_SERIF} className="text-3xl sm:text-4xl font-bold text-amber-200 mb-2">Elige tu nivel</h2>
          <p className="text-yellow-400 text-sm font-bold mb-1">Tu XP: {xp}</p>
          <p className="text-amber-400/60 text-sm mb-8">Domina Bitcoin paso a paso</p>

          <div className="space-y-4">
            {levels.map(level => (
              <button
                key={level.id}
                onClick={() => !level.locked && onSelectLevel(level.id)}
                disabled={level.locked}
                className={`level-card rounded-xl p-6 w-full text-left flex items-center gap-4 ${level.locked ? 'locked' : ''}`}
                aria-label={`${level.name}${level.locked ? ' (bloqueado)' : ''}`}
              >
                <div className="flex-1">
                  <h3 style={FONT_SERIF} className="text-3xl sm:text-4xl font-bold text-amber-900 mb-1">
                    {level.name}
                  </h3>
                  <p className="text-amber-700 text-base">
                    {level.locked ? `${level.description} (tienes ${xp})` : level.subtitle}
                  </p>
                </div>
                {!level.locked && (
                  <span className="text-amber-700 text-2xl" aria-hidden="true">&#8594;</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer onGoToResources={onGoToResources} onGoHome={onGoHome} />
    </div>
  );
}
