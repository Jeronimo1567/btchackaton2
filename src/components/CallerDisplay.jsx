import { FONT_SERIF } from '../data/config';
import CardVisual from './CardVisual';

export default function CallerDisplay({ card, callerKey, calledCount }) {
  if (!card) return null;
  return (
    <div key={callerKey} className="animate-caller w-full">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-600 overflow-hidden bg-amber-800"
             title="El Cantador">
          <img
            src="/images/profilepicnakamoto.jpg"
            alt="El Cantador"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="relative bg-amber-50 border-2 border-amber-400 rounded-xl rounded-bl-none px-3 py-2 flex-1 shadow-md">
          <span className="absolute -left-2 bottom-2 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-amber-400 border-b-[8px] border-b-transparent"></span>
          <p style={FONT_SERIF} className="text-amber-900 font-bold text-base sm:text-lg leading-tight">
            {card.name}
          </p>
        </div>
      </div>

      <div className="caller-card rounded-xl p-3 sm:p-4">
        <div className="mb-3 flex justify-center">
          <CardVisual card={card} sizeClass="card-img-caller" />
        </div>
        <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 text-left">
          <p className="text-amber-900 text-sm leading-relaxed">{card.leccion}</p>
        </div>
      </div>

      {calledCount > 0 && (
        <p className="text-amber-400 text-xs mt-3 text-center">
          Tambien puedes hacer clic en cartas ya cantadas.
        </p>
      )}
    </div>
  );
}
