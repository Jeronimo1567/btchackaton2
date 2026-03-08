import { FONT_SERIF } from '../data/config';
import CardVisual from './CardVisual';

export default function LoteriaCard({ card, index, isMarked, isHighlighted, isCalled, isWinning, onClick }) {
  const clickable = !isMarked && (isHighlighted || isCalled);
  return (
    <button onClick={onClick}
      aria-label={`${card.name}${isMarked ? ' (marcada)' : ''}${clickable ? ' - clic para contestar' : ''}`}
      className={`loteria-card rounded-lg flex flex-col items-center justify-center p-1 sm:p-2 relative
        ${isHighlighted ? 'highlighted animate-pulse-gold' : ''}
        ${isCalled && !isHighlighted && !isMarked ? 'called-card' : ''}
        ${isMarked ? 'marked' : ''}
        ${isWinning ? 'animate-glow-win' : ''}
        ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
      style={{ aspectRatio: '3/4', width: '100%' }}>

      <CardVisual card={card} sizeClass="card-img-sm" />

      <span className="text-amber-950 text-center leading-tight font-bold line-clamp-2"
            style={{ ...FONT_SERIF, fontSize: 'clamp(0.5rem, 1.6vw, 0.65rem)' }}>
        {card.name}
      </span>

      {clickable && !isMarked && (
        <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1">
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-yellow-500"></span>
          </span>
        </div>
      )}

      {isMarked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="frijolito animate-stamp" title="¡Marcada!" />
        </div>
      )}
    </button>
  );
}
