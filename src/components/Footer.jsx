import { FONT_SERIF } from '../data/config';

export default function Footer({ onGoToResources, onShowHelp, onGoHome }) {
  return (
    <footer className="bg-[#1a2234] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white" style={FONT_SERIF}>Lotería</span>
              <span className="text-2xl font-bold text-amber-400" style={FONT_SERIF}>Bitcoin</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              El primer juego de lotería para aprender Bitcoin. Educa jugando, gana XP, domina conceptos.
            </p>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Juego</h4>
            <ul className="space-y-2">
              <li>{onGoHome ? <button onClick={onGoHome} className="text-gray-400 hover:text-white text-sm transition-colors">Inicio</button> : <span className="text-gray-500 text-sm">Inicio</span>}</li>
              <li>{onShowHelp ? <button onClick={onShowHelp} className="text-gray-400 hover:text-white text-sm transition-colors">Cómo jugar</button> : <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors">Cómo jugar</a>}</li>
              <li><span className="text-gray-500 text-sm">Niveles</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Aprender</h4>
            <ul className="space-y-2">
              <li><button onClick={onGoToResources} className="text-gray-400 hover:text-white text-sm transition-colors">Lecciones</button></li>
              <li><button onClick={onGoToResources} className="text-gray-400 hover:text-white text-sm transition-colors">Recursos Bitcoin</button></li>
              <li><button onClick={onGoToResources} className="text-gray-400 hover:text-white text-sm transition-colors">Libros y canales</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Más</h4>
            <ul className="space-y-2">
              <li><button onClick={onGoToResources} className="text-gray-400 hover:text-white text-sm transition-colors">Comprar Bitcoin</button></li>
              <li><span className="text-gray-500 text-sm">Contacto</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
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
