import { FONT_SERIF, BG_STYLE } from '../data/config';
import Confetti from './Confetti';

export default function WinScreen({ stats, encounteredCards, onRestart, xp }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center papel-picado grain-overlay relative px-4 py-8" style={BG_STYLE}>
      <Confetti />
      <div className="text-center animate-slideInUp max-w-lg w-full">
        <h1 style={{ ...FONT_SERIF, textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
            className="text-5xl sm:text-7xl font-black text-yellow-400 mb-2">LOTERIA!</h1>
        <p className="text-amber-200 text-xl mb-2">Felicidades, ganaste!</p>
        <p className="text-yellow-400 text-lg font-bold mb-6">XP Total: {xp}</p>

        <div className="caller-card rounded-xl p-5 mb-6">
          <h3 style={FONT_SERIF} className="text-lg font-bold text-amber-900 mb-3">Tu puntuacion</h3>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-700">{stats.correct}</div>
              <div className="text-xs text-amber-700">Correctas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">{stats.wrong}</div>
              <div className="text-xs text-amber-700">Incorrectas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-800">{stats.total}</div>
              <div className="text-xs text-amber-700">Intentadas</div>
            </div>
          </div>
        </div>

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
  );
}
