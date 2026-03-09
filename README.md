# Lotería Bitcoin

Aprende los conceptos fundamentales de Bitcoin jugando la clásica Lotería mexicana.

**[Jugar ahora](https://loteria-bitcoin.vercel.app)**

## Qué es

Lotería Bitcoin es un juego educativo interactivo que enseña Bitcoin a través de la mecánica de la Lotería mexicana tradicional. Un cantador anuncia cartas con conceptos de Bitcoin — si la carta está en tu tabla, respondes una pregunta para marcarla. Completa un patrón ganador para avanzar de nivel.

### Características

- 29 cartas con conceptos de Bitcoin, desde lo básico hasta lo avanzado
- Audio del cantador anunciando cada carta
- Sistema de lecciones interactivas antes de jugar
- Preguntas tipo quiz con explicaciones detalladas
- Sistema de XP con niveles desbloqueables
- Diseño inspirado en la Lotería mexicana tradicional

## Tecnologías

- **React 18** + **Vite**
- **Tailwind CSS** con animaciones CSS personalizadas
- **HTML5 Audio API** para las voces del cantador
- **localStorage** para persistencia de XP
- Deploy en **Vercel**

## Desarrollo local

```bash
npm install
npm run dev
```

## Estructura del proyecto

```
src/
├── components/     # Componentes React (GameScreen, StartScreen, etc.)
├── data/           # Deck de cartas y configuración
├── utils/          # Funciones auxiliares
├── styles.css      # Estilos y animaciones
└── main.jsx        # Entry point
public/
├── audio/          # Audio del cantador (28 archivos mp3)
└── images/         # Ilustraciones de las cartas
```

## Autor

Hecho por **Jeronimo**, with love.
