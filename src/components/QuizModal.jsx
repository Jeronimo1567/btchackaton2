import { useState } from 'react';
import { XP_CORRECT, XP_WRONG, FONT_SERIF } from '../data/config';
import CardVisual from './CardVisual';

export default function QuizModal({ card, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [triesUsed, setTriesUsed] = useState(0);

  const handleSelect = (index) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    const isCorrect = index === card.correctAnswer;

    if (isCorrect) {
      setTimeout(() => onAnswer(true), 2000);
    } else {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setTriesUsed(prev => prev + 1);
      if (triesUsed >= 1) {
        setTimeout(() => onAnswer(false), 2500);
      }
    }
  };

  const handleRetry = () => {
    setSelected(null);
    setShowResult(false);
  };

  const canRetry = showResult && selected !== card.correctAnswer && triesUsed === 1;

  return (
    <div className="modal-overlay fixed inset-0 z-40 flex items-center justify-center p-4">
      <div className={`quiz-modal rounded-xl p-5 sm:p-6 max-w-md w-full animate-slideInUp ${shaking ? 'animate-shake' : ''}`}
           role="dialog"
           aria-label={`Pregunta sobre ${card.name}`}>
        <div className="text-center mb-4">
          <CardVisual card={card} sizeClass="card-img-caller" />
          <h3 style={FONT_SERIF} className="text-lg font-bold text-amber-900 mt-2">{card.name}</h3>
          {triesUsed > 0 && (
            <p className="text-amber-600 text-xs mt-1">Intentos restantes: {2 - triesUsed}</p>
          )}
        </div>
        <p className="text-amber-950 text-sm font-semibold mb-4 text-center">{card.question}</p>
        <div className="space-y-2" role="radiogroup" aria-label="Opciones de respuesta">
          {card.options.map((opt, i) => {
            let extraClass = '';
            if (showResult) {
              if (i === card.correctAnswer) extraClass = 'correct';
              else if (i === selected) extraClass = 'wrong';
            }
            return (
              <button key={i} className={`option-btn w-full text-left p-3 rounded-lg text-sm ${extraClass}`}
                      onClick={() => handleSelect(i)} disabled={showResult && !canRetry}
                      aria-label={`Opción ${String.fromCharCode(65 + i)}: ${opt}`}>
                <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
              </button>
            );
          })}
        </div>
        {showResult && (
          <div role="alert" className={`mt-4 p-3 rounded-lg text-sm animate-fadeIn ${
            selected === card.correctAnswer
              ? 'bg-green-100 border border-green-400 text-green-900'
              : 'bg-red-100 border border-red-400 text-red-900'
          }`}>
            {selected === card.correctAnswer ? (
              <><p className="font-bold mb-1">Correcto (+{XP_CORRECT} XP)</p><p className="italic">{card.dato}</p></>
            ) : (
              <>
                <p className="font-bold mb-1">Incorrecto (-{XP_WRONG} XP)</p>
                <p className="mb-3">{card.explicacion}</p>
                {canRetry ? (
                  <button onClick={handleRetry} className="btn-loteria px-4 py-2 rounded-lg text-sm">
                    Intentar de nuevo
                  </button>
                ) : (
                  <p className="text-xs text-red-800">Sin intentos. Empezarás de nuevo con una tabla nueva.</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
