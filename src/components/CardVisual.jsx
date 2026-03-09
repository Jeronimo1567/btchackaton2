import { useState } from 'react';

export default function CardVisual({ card, sizeClass }) {
  const [imgError, setImgError] = useState(false);
  if (card.image && !imgError) {
    return (
      <img
        src={card.image}
        alt={card.name}
        className={sizeClass || 'card-img-sm'}
        style={{ display: 'block' }}
        loading="lazy"
        decoding="async"
        onError={() => setImgError(true)}
      />
    );
  }
  const isCaller = sizeClass === 'card-img-caller';
  return (
    <div className={`flex items-center justify-center ${isCaller ? 'w-[200px] h-[260px] mx-auto rounded-lg' : 'w-full h-full rounded'}`}
         style={{ aspectRatio: isCaller ? undefined : '3/4', background: 'linear-gradient(135deg, #4A90A4 0%, #5BA0B4 100%)', border: isCaller ? '3px solid #8B4513' : 'none', boxShadow: isCaller ? '0 4px 12px rgba(0,0,0,0.3)' : 'none' }}>
      <span className={isCaller ? 'text-5xl sm:text-6xl' : 'text-2xl sm:text-3xl'}>{card.icon}</span>
    </div>
  );
}
