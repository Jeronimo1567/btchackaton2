import { XP_CORRECT, XP_WRONG, XP_LEVEL_2, XP_LEVEL_3, FONT_SERIF } from '../data/config';

export default function HelpModal({ onClose }) {
  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="quiz-modal rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto scrollbar-hide animate-slideInUp"
           role="dialog"
           aria-label="Instrucciones del juego"
           onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 style={FONT_SERIF} className="text-2xl font-bold text-amber-900">Como se juega</h2>
          <button onClick={onClose} className="text-2xl text-amber-900 hover:text-red-700 font-bold" aria-label="Cerrar instrucciones">Cerrar</button>
        </div>
        <div className="space-y-4 text-amber-950 text-sm leading-relaxed">
          <p><strong>Loteria Bitcoin</strong> es un juego donde aprendes sobre Bitcoin jugando la tradicional Loteria Mexicana.</p>

          <p><strong>Tu tabla:</strong></p>
          <p>Al empezar, recibes una tabla de 4x4 con 16 cartas al azar de un mazo de 36 conceptos de Bitcoin.</p>

          <p><strong>El cantador:</strong></p>
          <p>Las cartas se van anunciando una por una al azar. Si la carta que se canta esta en tu tabla, se ilumina y puedes hacer clic en ella para responder una pregunta.</p>

          <p><strong>Si la carta NO esta en tu tabla:</strong></p>
          <p>Puedes leer la definicion del concepto para ir aprendiendo. No pierdes nada.</p>

          <p><strong>Preguntas y XP:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Respuesta correcta: ganas <strong>+{XP_CORRECT} XP</strong> y la carta se marca con un frijolito.</li>
            <li>Respuesta incorrecta: pierdes <strong>-{XP_WRONG} XP</strong>. Tienes <strong>2 intentos</strong> por pregunta.</li>
            <li>Si fallas las 2 veces: la tabla se reinicia con cartas nuevas (mismo nivel) y sigues jugando.</li>
          </ul>

          <p><strong>Como ganar:</strong></p>
          <p>Completa una fila, columna, diagonal o toda la tabla contestando correctamente. Al ganar, pasas al siguiente nivel.</p>

          <p><strong>Niveles:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Nivel 1: Abierto desde el inicio.</li>
            <li>Nivel 2: Se desbloquea con {XP_LEVEL_2} XP.</li>
            <li>Nivel 3: Se desbloquea con {XP_LEVEL_3} XP.</li>
          </ul>

          <p><strong>Tip:</strong> Las cartas ya anunciadas (con punto amarillo) siguen disponibles para contestar en cualquier momento.</p>
        </div>
      </div>
    </div>
  );
}
