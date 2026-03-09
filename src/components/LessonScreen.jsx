import { useState, useMemo } from 'react';
import { XP_CORRECT, XP_WRONG, FONT_SERIF, BG_STYLE } from '../data/config';
import { CARD_DECK, LESSON_CHAPTERS } from '../data/cards';
import CardVisual from './CardVisual';
import Header from './Header';

export default function LessonScreen({ onFinish, onGoHome }) {
  const [phase, setPhase] = useState('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewList, setReviewList] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const allCards = CARD_DECK;
  const currentCard = reviewMode ? allCards.find(c => c.id === reviewList[reviewIndex]) : allCards[currentIndex];
  const total = reviewMode ? reviewList.length : allCards.length;
  const idx = reviewMode ? reviewIndex : currentIndex;
  const isLast = idx === total - 1;
  const progress = ((idx + 1) / total) * 100;

  const currentChapter = useMemo(() => {
    if (!currentCard) return null;
    return LESSON_CHAPTERS.find(ch => ch.cardIds.includes(currentCard.id));
  }, [currentCard]);

  const handleUnderstood = () => {
    if (isLast) {
      if (reviewMode) {
        onFinish();
      } else if (reviewList.length > 0) {
        setReviewMode(true);
        setReviewIndex(0);
      } else {
        onFinish();
      }
    } else {
      if (reviewMode) setReviewIndex(i => i + 1);
      else setCurrentIndex(i => i + 1);
    }
  };

  const handleNotClear = () => {
    if (!reviewMode && currentCard) {
      setReviewList(prev => prev.includes(currentCard.id) ? prev : [...prev, currentCard.id]);
    }
    handleUnderstood();
  };

  if (phase === 'intro') {
    return (
      <div className="min-h-screen flex flex-col grain-overlay relative" style={BG_STYLE}>
        <Header onGoHome={onGoHome} />
        <div className="flex-1 flex items-center justify-center px-4 py-6">
          <div className="caller-card rounded-xl p-6 sm:p-8 max-w-md w-full text-center animate-slideInUp">
            <h2 style={FONT_SERIF} className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4">Bienvenido a Loteria Bitcoin</h2>
            <div className="text-amber-800 text-sm leading-relaxed text-left space-y-3 mb-6" style={FONT_SERIF}>
              <p>Estas a punto de aprender los conceptos mas importantes de Bitcoin a traves de la tradicional Loteria Mexicana.</p>
              <p><strong>Primero, te vamos a enseñar los 29 conceptos</strong> que forman el mazo de cartas. Leelos con atencion porque despues te preguntaremos sobre ellos en el juego.</p>
              <p><strong>Asi funciona el juego:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Recibes una tabla de 9 cartas al azar.</li>
                <li>Un cantador anuncia cartas. Si la tienes, respondes una pregunta.</li>
                <li>Correcta: ganas +{XP_CORRECT} XP y marcas la carta.</li>
                <li>Incorrecta: pierdes -{XP_WRONG} XP. Tienes 2 intentos.</li>
                <li>Si fallas 2 veces, la tabla se reinicia con cartas nuevas.</li>
                <li>Completa una linea (fila, columna o diagonal) para ganar.</li>
              </ul>
              <p>Si un concepto no te queda claro durante las lecciones, puedes marcarlo para repasarlo al final.</p>
            </div>
            <button onClick={() => setPhase('lessons')} className="btn-loteria px-8 py-3 rounded-lg text-lg">
              Empezar lecciones
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentCard) return null;

  return (
    <div className="min-h-screen flex flex-col grain-overlay relative" style={BG_STYLE}>
      <Header onGoHome={onGoHome}>
        <span className="text-amber-200 text-xs sm:text-sm">
          {reviewMode ? 'Repaso' : 'Lecciones'}
        </span>
        <button onClick={onFinish} className="btn-loteria-outline px-3 py-1 rounded-lg text-xs" aria-label="Saltar lecciones">
          Saltar
        </button>
      </Header>

      {/* Progress bar */}
      <div className="px-4 pt-3">
        <div className="w-full bg-amber-900/40 rounded-full h-2" role="progressbar" aria-valuenow={idx + 1} aria-valuemin={0} aria-valuemax={total}>
          <div className="h-2 rounded-full transition-all duration-500"
               style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #DAA520, #F0C040)' }} />
        </div>
        <div className="flex justify-between">
          <p className="text-amber-400/60 text-xs mt-1">
            {currentChapter ? currentChapter.title : ''}
          </p>
          <p className="text-amber-400/60 text-xs mt-1">{idx + 1} / {total}</p>
        </div>
      </div>

      {/* Lesson content */}
      <div className="flex-1 flex items-center justify-center px-4 py-6">
        <div key={currentCard.id + (reviewMode ? '-r' : '')} className="caller-card rounded-xl p-6 sm:p-8 max-w-md w-full text-center animate-slideInRight">
          <div className="mb-4">
            <CardVisual card={currentCard} sizeClass="card-img-caller" />
          </div>
          <h3 style={FONT_SERIF} className="text-2xl sm:text-3xl font-bold text-amber-900 mb-1">{currentCard.name}</h3>
          <p className="text-amber-600 text-xs mb-4">Carta {currentCard.id} de 29</p>
          <p className="text-amber-800 text-base leading-relaxed mb-6" style={FONT_SERIF}>{currentCard.leccion}</p>

          <div className="flex gap-3 justify-center flex-wrap">
            {idx > 0 && (
              <button onClick={() => reviewMode ? setReviewIndex(i => i - 1) : setCurrentIndex(i => i - 1)}
                      className="btn-loteria-outline px-5 py-2 rounded-lg text-sm"
                      aria-label="Carta anterior">
                Anterior
              </button>
            )}
            <button onClick={handleUnderstood} className="btn-loteria px-5 py-2 rounded-lg text-sm">
              {isLast ? (reviewMode ? 'Terminar repaso' : (reviewList.length > 0 ? 'Ir al repaso' : 'A jugar')) : 'Entendido'}
            </button>
            {!reviewMode && (
              <button onClick={handleNotClear} className="btn-loteria-outline px-5 py-2 rounded-lg text-sm text-amber-500 border-amber-500">
                No lo tengo claro
              </button>
            )}
          </div>
          {reviewList.length > 0 && !reviewMode && (
            <p className="text-amber-500 text-xs mt-3">{reviewList.length} concepto{reviewList.length > 1 ? 's' : ''} marcado{reviewList.length > 1 ? 's' : ''} para repasar</p>
          )}
        </div>
      </div>
    </div>
  );
}
