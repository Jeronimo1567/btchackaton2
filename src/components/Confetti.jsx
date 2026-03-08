export default function Confetti() {
  const colors = ['#DAA520','#8B0000','#228B22','#FF6347','#FFD700','#FF4500','#4169E1'];
  const pieces = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    color: colors[i % colors.length],
    size: 6 + Math.random() * 10,
    shape: Math.random() > 0.5 ? '50%' : '0%'
  }));
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map(p => (
        <div key={p.id} className="confetti-piece" style={{
          left: `${p.left}%`, animationDelay: `${p.delay}s`,
          backgroundColor: p.color, width: p.size, height: p.size, borderRadius: p.shape
        }} />
      ))}
    </div>
  );
}
