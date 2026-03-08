import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { TOTAL_TABLA_CARDS, XP_CORRECT, XP_WRONG, XP_LEVEL_2, FONT_SERIF } from '../data/config';
import { CARD_DECK } from '../data/cards';
import { shuffleArray, checkWin } from '../utils/helpers';
import CallerDisplay from './CallerDisplay';
import LoteriaCard from './LoteriaCard';
import QuizModal from './QuizModal';
import HelpModal from './HelpModal';

export default function GameScreen({ onWin, onGoHome, xp, onXPChange, onGoToLessons }) {
  const [tabla, setTabla] = useState([]);
  const [callerDeck, setCallerDeck] = useState([]);
  const [callerIndex, setCallerIndex] = useState(0);
  const [callerKey, setCallerKey] = useState(0);
  const [markedIndices, setMarkedIndices] = useState(new Set());
  const [calledCardIds, setCalledCardIds] = useState(new Set());
  const [quizCard, setQuizCard] = useState(null);
  const [quizTablaIndex, setQuizTablaIndex] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [winPattern, setWinPattern] = useState(null);
  const [stats, setStats] = useState({ correct: 0, wrong: 0, total: 0 });
  const [encounteredCards, setEncounteredCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [muted, setMuted] = useState(false);
  const [restartBoard, setRestartBoard] = useState(false);
  const [showNextHint, setShowNextHint] = useState(false);
  const audioRef = useRef(null);

  const nextLevelXP = XP_LEVEL_2;
  const nextLevelUnlocked = xp >= nextLevelXP;

  useEffect(() => {
    const shuffled = shuffleArray(CARD_DECK);
    const tablaCards = shuffled.slice(0, TOTAL_TABLA_CARDS);
    setTabla(tablaCards);
    const deck = shuffleArray(CARD_DECK);
    setCallerDeck(deck);
    setCallerIndex(0);
    setCallerKey(0);
  }, []);

  useEffect(() => {
    if (!restartBoard) return;
    const shuffled = shuffleArray(CARD_DECK);
    const tablaCards = shuffled.slice(0, TOTAL_TABLA_CARDS);
    setTabla(tablaCards);
    setCallerDeck(shuffleArray(CARD_DECK));
    setCallerIndex(0);
    setCallerKey(prev => prev + 1);
    setMarkedIndices(new Set());
    setCalledCardIds(new Set());
    setQuizCard(null);
    setQuizTablaIndex(null);
    setWinPattern(null);
    setEncounteredCards([]);
    setGameOver(false);
    setRestartBoard(false);
  }, [restartBoard]);

  const currentCallerCard = callerDeck[callerIndex] || null;

  useEffect(() => {
    if (currentCallerCard?.audio && !muted) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      const a = new Audio(currentCallerCard.audio);
      audioRef.current = a;
      a.play().catch(() => {});
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentCallerCard, muted]);

  useEffect(() => {
    if (currentCallerCard) {
      setCalledCardIds(prev => {
        const next = new Set(prev);
        next.add(currentCallerCard.id);
        return next;
      });
    }
  }, [currentCallerCard]);

  const tablaCardIds = useMemo(() => new Set(tabla.map(c => c.id)), [tabla]);
  const isCurrentOnTabla = currentCallerCard ? tablaCardIds.has(currentCallerCard.id) : false;

  const highlightedTablaIndex = useMemo(() => {
    if (!currentCallerCard) return -1;
    return tabla.findIndex(c => c.id === currentCallerCard.id);
  }, [currentCallerCard, tabla]);

  const calledOnTablaCount = useMemo(() => {
    return tabla.filter((c, i) => calledCardIds.has(c.id) && !markedIndices.has(i)).length;
  }, [tabla, calledCardIds, markedIndices]);

  useEffect(() => {
    setShowNextHint(false);
    if (!currentCallerCard || isCurrentOnTabla || quizCard || gameOver) return;

    const hintTimeout = setTimeout(() => {
      setShowNextHint(true);
    }, 5000);

    return () => clearTimeout(hintTimeout);
  }, [currentCallerCard, isCurrentOnTabla, quizCard, gameOver, callerKey]);

  const advanceCaller = useCallback(() => {
    setShowNextHint(false);
    if (callerIndex < callerDeck.length - 1) {
      setCallerIndex(prev => prev + 1);
      setCallerKey(prev => prev + 1);
    } else {
      setCallerDeck(shuffleArray(CARD_DECK));
      setCallerIndex(0);
      setCallerKey(prev => prev + 1);
    }
  }, [callerIndex, callerDeck.length]);

  const handleCardClick = (tablaIndex) => {
    if (gameOver || markedIndices.has(tablaIndex) || quizCard) return;
    const card = tabla[tablaIndex];
    if (!calledCardIds.has(card.id)) return;
    setQuizCard(card);
    setQuizTablaIndex(tablaIndex);
  };

  const handleQuizAnswer = (isCorrect) => {
    const card = quizCard;
    setQuizCard(null);
    setEncounteredCards(prev => prev.find(c => c.id === card.id) ? prev : [...prev, card]);

    if (isCorrect) {
      onXPChange(XP_CORRECT);
      setStats(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
      const newMarked = new Set(markedIndices);
      newMarked.add(quizTablaIndex);
      setMarkedIndices(newMarked);

      const pattern = checkWin(newMarked);
      if (pattern) {
        setWinPattern(pattern);
        setGameOver(true);
        setTimeout(() => {
          onWin(
            { correct: stats.correct + 1, wrong: stats.wrong, total: stats.total + 1 },
            [...encounteredCards, card].filter((c, i, arr) => arr.findIndex(x => x.id === c.id) === i)
          );
        }, 2000);
        return;
      }
      advanceCaller();
    } else {
      onXPChange(-XP_WRONG);
      setStats(prev => ({ ...prev, wrong: prev.wrong + 1, total: prev.total + 1 }));
      setRestartBoard(true);
    }
    setQuizTablaIndex(null);
  };

  return (
    <div className="min-h-screen grain-overlay relative flex flex-col"
         style={{ background: 'linear-gradient(180deg, #3D200E 0%, #5C3317 20%, #4A2812 100%)' }}>

      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 border-b-2 border-amber-900/50">
        <button onClick={onGoHome} style={FONT_SERIF}
                className="text-lg sm:text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer text-left"
                aria-label="Volver al inicio">
          LOTERIA BITCOIN
        </button>
        <div className="flex items-center gap-3 sm:gap-4">
          <button onClick={() => setMuted(m => !m)}
                  className="w-8 h-8 rounded-full bg-amber-800 text-amber-200 hover:bg-amber-700 transition-colors flex items-center justify-center p-1.5"
                  aria-label={muted ? 'Activar sonido' : 'Silenciar sonido'}>
            {muted ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06L19.5 10.94l-1.72-1.72z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06z" />
              </svg>
            )}
          </button>
          {onGoToLessons && (
            <button onClick={onGoToLessons}
                    className="text-amber-400 hover:text-amber-200 text-xs underline underline-offset-4 transition-colors">
              Estudiar
            </button>
          )}
          <button onClick={() => setShowHelp(true)}
                  className="text-amber-400 hover:text-amber-200 text-xs underline underline-offset-4 transition-colors">
            Como jugar
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 px-3 py-2 bg-amber-950/30">
        <span className="text-yellow-400 text-xs sm:text-sm font-bold">XP: {xp}</span>
        <span className="text-amber-600/40" aria-hidden="true">|</span>
        <span className="text-green-400 text-xs sm:text-sm">Correctas: {stats.correct}</span>
        <span className="text-amber-600/40" aria-hidden="true">|</span>
        <span className="text-red-400 text-xs sm:text-sm">Incorrectas: {stats.wrong}</span>
      </div>

      {calledOnTablaCount > 0 && (
        <div className="text-center text-amber-300 text-xs px-4 py-1 animate-fadeIn bg-amber-900/20" aria-live="polite">
          Tienes {calledOnTablaCount} carta{calledOnTablaCount > 1 ? 's' : ''} disponible{calledOnTablaCount > 1 ? 's' : ''} para contestar
        </div>
      )}

      {/* Main game area */}
      <div className="flex-1 px-2 sm:px-4 py-4">
        <div className="mx-auto grid max-w-5xl items-start gap-4 lg:gap-6 lg:grid-cols-[1fr_300px]">

          {/* Board column */}
          <div className="min-w-0">
            <div className="mx-auto w-full max-w-md">
              <div className="tile-border rounded-xl p-3 sm:p-4 wood-texture">
                <div className="grid grid-cols-4 gap-2 sm:gap-2.5" role="grid" aria-label="Tu tabla de loteria">
                  {tabla.map((card, index) => (
                    <LoteriaCard key={card.id} card={card} index={index}
                      isMarked={markedIndices.has(index)}
                      isHighlighted={highlightedTablaIndex === index && !markedIndices.has(index)}
                      isCalled={calledCardIds.has(card.id) && !markedIndices.has(index)}
                      isWinning={winPattern ? winPattern.includes(index) : false}
                      onClick={() => handleCardClick(index)} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mx-auto mt-4 w-full max-w-md space-y-3">
              {showNextHint && (
                <div className="rounded-lg border border-amber-300 bg-amber-100 px-4 py-3 text-sm text-amber-900 animate-fadeIn">
                  Si la carta presentada no esta en tu loteria, puedes aprender el termino y seguir con la siguiente carta.
                </div>
              )}
              <button
                onClick={advanceCaller}
                disabled={isCurrentOnTabla}
                className={`w-full rounded-xl px-5 py-3 text-base sm:text-lg transition-opacity ${
                  isCurrentOnTabla
                    ? 'opacity-50 cursor-not-allowed bg-amber-700/50 border-2 border-amber-800'
                    : 'btn-loteria'
                }`}
                aria-label={isCurrentOnTabla ? 'Responde la carta en tu tabla primero' : 'Siguiente carta'}
              >
                {isCurrentOnTabla ? 'Responde la carta en tu tabla' : 'Siguiente carta'}
              </button>
            </div>
          </div>

          {/* Caller column */}
          <div className="lg:sticky lg:top-4">
            <CallerDisplay
              card={currentCallerCard}
              callerKey={callerKey}
              calledCount={calledOnTablaCount}
            />
          </div>
        </div>
      </div>

      {/* Bottom bar: next level */}
      <div className="px-3 sm:px-5 py-3 border-t-2 border-amber-900/50 bg-amber-950/40">
        <div className="max-w-md mx-auto">
          {nextLevelUnlocked && gameOver ? (
            <button
              className="btn-loteria w-full rounded-xl px-5 py-3 text-base sm:text-lg"
              onClick={() => {}}
            >
              Siguiente nivel
            </button>
          ) : (
            <div className="w-full rounded-xl px-5 py-3 text-center border-2 border-amber-800/40 bg-amber-900/30 opacity-60 cursor-not-allowed">
              <span className="text-amber-400/60 text-sm font-bold block" style={FONT_SERIF}>Siguiente nivel</span>
              <span className="text-amber-500/40 text-xs">
                Necesitas {nextLevelXP} XP para desbloquear (tienes {xp})
              </span>
            </div>
          )}
        </div>
      </div>

      {quizCard && <QuizModal card={quizCard} onAnswer={handleQuizAnswer} />}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}
