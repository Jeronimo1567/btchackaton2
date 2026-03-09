import { FONT_SERIF } from '../data/config';
import CardVisual from './CardVisual';

export default function CallerDisplay({ card, callerKey, calledCount, isSpeaking }) {
  if (!card) return null;
  return (
    <div key={callerKey} className="w-full">
      <div className="flex items-start gap-3 mb-3">
        <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 overflow-hidden bg-amber-800 transition-all duration-200 ${
          isSpeaking ? 'border-yellow-400 animate-speaking' : 'border-amber-600'
        }`}
             title="El Cantador">
          <img
            src="/images/profilepicnakamoto.jpg"
            alt="El Cantador"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className={`relative bg-amber-50 border-2 rounded-xl rounded-bl-none px-3 py-2 flex-1 shadow-md ${
          isSpeaking ? 'border-yellow-400 bg-yellow-50' : 'border-amber-400'
        }`}>
          <span className={`absolute -left-2 bottom-2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-b-[8px] border-b-transparent ${
            isSpeaking ? 'border-r-yellow-400' : 'border-r-amber-400'
          }`}></span>
          <p style={FONT_SERIF} className="text-amber-900 font-bold text-base sm:text-lg leading-tight">
            ¡{card.name}!
          </p>
          {isSpeaking && (
            <div className="flex gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          )}
        </div>
      </div>

      <div className="caller-card rounded-xl p-3 sm:p-4">
        <div className="mb-3 w-full rounded-lg overflow-hidden border-2 border-amber-700" style={{ aspectRatio: '3/4' }}>
          <CardVisual card={card} sizeClass="card-img-sm" />
        </div>
        <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 text-left">
          <p className="text-amber-900 text-sm leading-relaxed">{card.leccion}</p>
        </div>
      </div>

      {calledCount > 0 && (
        <p className="text-amber-400 text-xs mt-3 text-center">
          También puedes hacer clic en cartas ya cantadas.
        </p>
      )}
    </div>
  );
}
