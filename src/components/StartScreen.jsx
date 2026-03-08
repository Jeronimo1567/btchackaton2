import { FONT_SERIF } from '../data/config';
import Footer from './Footer';

export default function StartScreen({ onStart, xp, onGoToResources }) {
  return (
    <div className="min-h-screen flex flex-col">
      <section
        className="relative min-h-[70vh] flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-20 bg-gradient-to-br from-slate-900 to-slate-800"
        style={{
          backgroundImage: 'url(/images/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" aria-hidden="true" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="max-w-2xl flex-1">
            <h1 style={FONT_SERIF} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-6">
              Lotería Bitcoin.
            </h1>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-3 font-sans">
              Aprende los conceptos fundamentales de Bitcoin mientras juegas la clásica Lotería mexicana.
            </p>
            <p className="text-gray-300/90 text-base sm:text-lg leading-relaxed mb-10 font-sans">
              36 cartas, preguntas interactivas y datos curiosos: la tradición mexicana se encuentra con la revolución digital.
            </p>
            <button
              onClick={onStart}
              className="px-4 pt-2 pb-2 rounded-lg bg-black/10 text-white font-medium text-base border border-white/20 hover:border-white/40 hover:bg-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.08)]"
              aria-label="Empezar a jugar"
            >
              Iniciar juego
            </button>
          </div>

          <div className="flex-shrink-0 hidden sm:block">
            <img
              src="images/01.png"
              alt="Carta de Lotería Bitcoin"
              className="w-44 sm:w-52 lg:w-64 rounded-xl shadow-2xl border-2 border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500"
              draggable={false}
            />
          </div>
        </div>
      </section>

      <Footer onGoToResources={onGoToResources} />
    </div>
  );
}
