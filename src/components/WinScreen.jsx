import { FONT_SERIF, BG_STYLE } from '../data/config';
import Confetti from './Confetti';
import Header from './Header';

export default function WinScreen({ stats, encounteredCards, onRestart, xp, onGoHome }) {
  return (
    <div className="min-h-screen flex flex-col grain-overlay relative" style={BG_STYLE}>
      <Header onGoHome={onGoHome} />
      <Confetti />

      <div className="flex items-center justify-center gap-3 sm:gap-5 px-3 py-2.5 bg-gradient-to-r from-amber-950/60 via-amber-900/40 to-amber-950/60">
        <div className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-1">
          <span className="text-yellow-300 text-base sm:text-lg font-bold">⚡ {xp} XP</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-green-400 text-xs sm:text-sm font-medium">✓ {stats.correct} Correctas</span>
          <span className="text-red-400 text-xs sm:text-sm font-medium">✗ {stats.wrong} Incorrectas</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="text-center animate-slideInUp max-w-lg w-full">
          <h1 style={{ ...FONT_SERIF, textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
              className="text-5xl sm:text-7xl font-black text-yellow-400 mb-2">LOTERIA!</h1>
          <p className="text-amber-200 text-xl mb-6">Felicidades, ganaste!</p>

          <div className="caller-card rounded-xl p-5 mb-6 max-h-60 overflow-y-auto scrollbar-hide">
            <h3 style={FONT_SERIF} className="text-lg font-bold text-amber-900 mb-3">Conceptos aprendidos</h3>
            <div className="space-y-2 text-left">
              {encounteredCards.map(card => (
                <div key={card.id} className="flex items-start gap-2 text-sm text-amber-900 border-b border-amber-200 pb-2">
                  <span className="text-lg flex-shrink-0">{card.icon}</span>
                  <div>
                    <span className="font-bold">{card.name}:</span>{' '}
                    <span className="text-amber-700">{card.dato}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={onRestart} className="btn-loteria text-xl px-8 py-3 rounded-xl" aria-label="Jugar de nuevo">Jugar de nuevo</button>
        </div>
      </div>
    </div>
  );
}
