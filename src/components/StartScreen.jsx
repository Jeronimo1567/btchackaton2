import { FONT_SERIF } from '../data/config';

export default function StartScreen({ onStart, xp }) {
  return (
    <div className="relative min-h-screen flex flex-col"
         style={{
           backgroundImage: 'url(/images/background.jpg)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
         }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" aria-hidden="true" />

      <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 py-3">
        <div className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-1">
          <span className="text-yellow-300 text-sm sm:text-base font-bold">⚡ {xp} XP</span>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
        <div className="flex flex-row items-center gap-6 sm:gap-10 lg:gap-14">
          <div className="flex-1 min-w-0">
            <h1 style={FONT_SERIF} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-4">
              Lotería Bitcoin.
            </h1>
            <p className="text-gray-200 text-sm sm:text-lg leading-relaxed mb-8 font-sans">
              Aprende los conceptos fundamentales de Bitcoin mientras juegas la clásica Lotería mexicana.
            </p>
            <button
              onClick={onStart}
              className="group relative px-8 py-4 sm:px-10 sm:py-5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-amber-950 font-bold text-base sm:text-lg tracking-wide border-2 border-amber-400 hover:from-amber-400 hover:to-yellow-400 hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)]"
              aria-label="Empezar a jugar"
            >
              Iniciar juego
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </div>

          <div className="flex-shrink-0 flex items-end" style={{ gap: '-8px' }}>
            <img
              src="images/el minero.png"
              alt="El Minero - Carta de Lotería Bitcoin"
              className="w-20 sm:w-28 lg:w-36 rounded-lg shadow-2xl border-2 border-white/15 transition-all duration-300 hover:-translate-y-2"
              style={{ transform: 'rotate(-6deg)', marginRight: '-10px', zIndex: 1 }}
              draggable={false}
            />
            <img
              src="images/satoshi nakamoto.png"
              alt="Satoshi Nakamoto - Carta de Lotería Bitcoin"
              className="w-24 sm:w-32 lg:w-44 rounded-lg shadow-2xl border-2 border-amber-400/40 transition-all duration-300 hover:-translate-y-2"
              style={{ transform: 'translateY(-8px)', zIndex: 2 }}
              draggable={false}
            />
            <img
              src="images/michael saylor.png"
              alt="Michael Saylor - Carta de Lotería Bitcoin"
              className="w-20 sm:w-28 lg:w-36 rounded-lg shadow-2xl border-2 border-white/15 transition-all duration-300 hover:-translate-y-2"
              style={{ transform: 'rotate(6deg)', marginLeft: '-10px', zIndex: 1 }}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
