import { FONT_SERIF, BG_STYLE } from '../data/config';
import Footer from './Footer';
import Header from './Header';

export default function ResourcesScreen({ onGoHome }) {
  return (
    <div className="min-h-screen flex flex-col grain-overlay relative" style={BG_STYLE}>
      <Header onGoHome={onGoHome} />

      <div className="flex-1 px-4 py-8 max-w-2xl mx-auto w-full">
        <h1 style={FONT_SERIF} className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8">
          Recursos para aprender Bitcoin
        </h1>

        <section className="mb-8">
          <h2 style={FONT_SERIF} className="text-2xl font-bold text-amber-200 mb-4">Libros recomendados</h2>
          <div className="space-y-3">
            <ResourceItem
              title="The Bitcoin Standard"
              author="Saifedean Ammous"
              description="El libro más popular para entender por qué Bitcoin es dinero duro. Explica la historia del dinero y por qué Bitcoin es diferente."
            />
            <ResourceItem
              title="Mastering Bitcoin"
              author="Andreas M. Antonopoulos"
              description="Guía técnica completa sobre cómo funciona Bitcoin. Ideal para quienes quieren entender la tecnología a fondo."
            />
            <ResourceItem
              title="El patron Bitcoin"
              author="Saifedean Ammous (edición en español)"
              description="La versión en español de The Bitcoin Standard. Perfecto si prefieres leer en tu idioma."
            />
            <ResourceItem
              title="The Little Bitcoin Book"
              author="Bitcoin Collective"
              description="Un libro corto y accesible que explica Bitcoin para principiantes absolutos."
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 style={FONT_SERIF} className="text-2xl font-bold text-amber-200 mb-4">Canales de YouTube</h2>
          <div className="space-y-3">
            <ResourceItem
              title="BTC Sessions"
              description="Tutoriales prácticos sobre cómo usar Bitcoin, wallets, Lightning Network y más."
            />
            <ResourceItem
              title="Lunaticoin"
              description="Canal en español con noticias, análisis y educación sobre Bitcoin."
            />
            <ResourceItem
              title="What Bitcoin Did"
              description="Podcast y canal con entrevistas a expertos del mundo Bitcoin (en ingles)."
            />
            <ResourceItem
              title="Bitcoin para todos"
              description="Contenido educativo en español para principiantes."
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 style={FONT_SERIF} className="text-2xl font-bold text-amber-200 mb-4">Cómo empezar a comprar Bitcoin</h2>
          <div className="caller-card rounded-xl p-5">
            <ol className="space-y-3 text-amber-900 text-sm list-decimal list-inside">
              <li><strong>Edúcate primero</strong> — Aprende los conceptos básicos (como los que ves en este juego) antes de invertir dinero.</li>
              <li><strong>Elige un exchange confiable</strong> — Plataformas como Bitso (México), Binance o Kraken te permiten comprar bitcoin con pesos o dólares.</li>
              <li><strong>Verifica tu identidad</strong> — Los exchanges requieren una identificación oficial para cumplir con regulaciones.</li>
              <li><strong>Empieza con poco</strong> — No necesitas comprar un bitcoin entero. Puedes empezar con tan solo 100 pesos en satoshis.</li>
              <li><strong>Mueve tus bitcoin a tu propia wallet</strong> — Descarga una wallet como Muun, Blue Wallet o Phoenix para tener autocustodia.</li>
              <li><strong>Guarda tu seed phrase</strong> — Escribe las 12 o 24 palabras en papel y guárdalas en un lugar seguro. Nunca las compartas.</li>
            </ol>
          </div>
        </section>
      </div>

      <Footer onGoToResources={() => {}} />
    </div>
  );
}

function ResourceItem({ title, author, description }) {
  return (
    <div className="caller-card rounded-lg p-4">
      <h3 className="font-bold text-amber-900 text-base">{title}</h3>
      {author && <p className="text-amber-700 text-xs mb-1">{author}</p>}
      <p className="text-amber-800 text-sm">{description}</p>
    </div>
  );
}
