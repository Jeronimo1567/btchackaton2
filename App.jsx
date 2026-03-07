const { useState, useEffect, useRef, useCallback, useMemo } = React;

// ─── CONFIGURATION ───────────────────────────────────────────────────────────
const GRID_SIZE = 4;
const TOTAL_TABLA_CARDS = GRID_SIZE * GRID_SIZE;
const CALLER_INTERVAL_MS = 10000;
const CALLER_TIMER_SECONDS = Math.floor(CALLER_INTERVAL_MS / 1000);

const XP_CORRECT = 10;
const XP_WRONG = 5;
const XP_LEVEL_2 = 100;
const XP_LEVEL_3 = 250;

const WIN_PATTERNS = {
  rows: [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]],
  cols: [[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]],
  diagonals: [[0,5,10,15],[3,6,9,12]],
  full: [[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]]
};

const ALL_PATTERNS = [
  ...WIN_PATTERNS.rows,
  ...WIN_PATTERNS.cols,
  ...WIN_PATTERNS.diagonals,
  ...WIN_PATTERNS.full
];

// ─── CARD DECK (36 CARDS) ────────────────────────────────────────────────────
const CARD_DECK = [
  {
    id: 1, name: "El Bitcoin", icon: "₿",
    image: "images/01.png", audio: "audio/01.mp3",
    riddle: "Dinero sin banco, libre y digital,\nuna red lo respalda de forma global.\n¡El Bitcoin!",
    question: "¿Quién controla Bitcoin?",
    options: ["Un banco central", "Una empresa de tecnología", "Una red de computadoras distribuidas en muchos países", "El gobierno de Estados Unidos"],
    correctAnswer: 2,
    dato: "Bitcoin fue creado en 2009 por una persona o grupo bajo el seudónimo Satoshi Nakamoto. Nadie sabe quién es realmente.",
    explicacion: "Bitcoin no lo controla ningún banco ni gobierno, sino una red descentralizada de computadoras en todo el mundo.",
    leccion: "Es un tipo de dinero que solo existe en internet, no en billetes ni monedas, y no lo controla ningún banco ni gobierno, sino una red de computadoras en muchos países."
  },
  {
    id: 2, name: "El Satoshi", icon: "sat",
    image: "images/02.png", audio: "audio/02.mp3",
    riddle: "Tan pequeño como un grano de arena,\npero poderoso, su nombre resuena.\n¡El Satoshi!",
    question: "¿En cuántas partes se divide un bitcoin?",
    options: ["100 centavos", "1,000 partes", "100 millones de satoshis", "10,000 partes"],
    correctAnswer: 2,
    dato: "El nombre 'satoshi' viene del creador anónimo de Bitcoin, Satoshi Nakamoto. 1 sat = 0.00000001 BTC.",
    explicacion: "Un bitcoin se divide en 100 millones de satoshis, lo que permite comprar o enviar cantidades muy pequeñas.",
    leccion: "Así como un peso se divide en 100 centavos, un bitcoin se divide en 100 millones de satoshis; esto permite comprar o enviar cantidades muy pequeñas de bitcoin."
  },
  {
    id: 3, name: "La Blockchain", icon: "⛓️",
    image: "images/03.png", audio: "audio/03.mp3",
    riddle: "Libro gigante que todos pueden ver,\nbloques encadenados que nadie ha de romper.\n¡La Blockchain!",
    question: "¿Qué es la blockchain?",
    options: ["Un programa para enviar correos", "Un libro contable público donde se registran todas las operaciones con bitcoin", "Una base de datos privada de un banco", "Un sitio web para comprar cosas"],
    correctAnswer: 1,
    dato: "La blockchain de Bitcoin ha funcionado sin interrupción desde el 3 de enero de 2009, registrando cada transacción.",
    explicacion: "La blockchain es un registro público y permanente de todas las transacciones, organizado en bloques encadenados.",
    leccion: "Imagina un libro contable gigante y público, donde se anotan todas las operaciones con bitcoin; cada página nueva que se agrega es un 'bloque' y todas las páginas unidas forman la 'cadena'."
  },
  {
    id: 4, name: "El Bloque", icon: "🧱",
    image: "images/04.png", audio: "audio/04.mp3",
    riddle: "Ladrillo a ladrillo se va construyendo,\ntransacciones guarda, cadenas tejiendo.\n¡El Bloque!",
    question: "¿Qué es un bloque en Bitcoin?",
    options: ["Un archivo de fotos", "Una página del libro contable que junta muchas operaciones de envío de bitcoin", "Un virus de computadora", "Un tipo de moneda diferente"],
    correctAnswer: 1,
    dato: "Cada bloque contiene en promedio unas 2,000 transacciones y se mina aproximadamente cada 10 minutos.",
    explicacion: "Un bloque agrupa muchas transacciones y se conecta a los anteriores para formar una cadena inalterable.",
    leccion: "Es como una página de ese libro: junta muchas operaciones de envío de bitcoin y luego se pega a las páginas anteriores para que no se pueda cambiar."
  },
  {
    id: 5, name: "La Transacción", icon: "💸",
    image: "images/05.png", audio: "audio/05.mp3",
    riddle: "De una dirección a otra viaja el valor,\nfirmada y sellada con todo rigor.\n¡La Transacción!",
    question: "¿Qué es una transacción de Bitcoin?",
    options: ["Publicar un mensaje en redes sociales", "Mandar bitcoin de una cuenta a otra, similar a una transferencia bancaria", "Crear un nuevo bitcoin", "Apagar una computadora"],
    correctAnswer: 1,
    dato: "La primera transacción entre dos personas fue cuando Satoshi envió 10 BTC a Hal Finney el 12 de enero de 2009.",
    explicacion: "Una transacción es el envío de bitcoin de una dirección a otra, usando direcciones de Bitcoin en lugar de cuentas bancarias.",
    leccion: "Es el acto de mandar bitcoin de una 'cuenta' a otra; parecido a hacer una transferencia bancaria, pero usando direcciones de Bitcoin en lugar de cuentas de banco."
  },
  {
    id: 6, name: "El Minero", icon: "⛏️",
    image: "images/06.png", audio: "audio/06.mp3",
    riddle: "Con sudor digital y poder de cómputo,\nbusca el número mágico, ¡nunca está difunto!\n¡La Minería!",
    question: "¿Qué hacen los mineros de Bitcoin?",
    options: ["Excavan minas de oro digital", "Computadoras que compiten resolviendo problemas matemáticos para ordenar transacciones", "Diseñan monedas nuevas", "Administran cuentas bancarias"],
    correctAnswer: 1,
    dato: "Actualmente se usan máquinas ASIC especializadas para minar. El primer minero en resolver el problema recibe la recompensa.",
    explicacion: "Los mineros son computadoras especiales que compiten resolviendo problemas matemáticos para añadir bloques y recibir bitcoins como recompensa.",
    leccion: "Son computadoras especiales que compiten resolviendo problemas matemáticos; al lograrlo, ayudan a ordenar las transacciones en bloques y, como recompensa, reciben nuevos bitcoins."
  },
  {
    id: 7, name: "El Hashrate", icon: "#",
    image: "images/07.png", audio: "audio/07.mp3",
    riddle: "Fuerza bruta de millones de máquinas,\nprotegiendo la red con sus rutinas.\n¡El Hashrate!",
    question: "¿Qué representa el hashrate?",
    options: ["La velocidad de internet", "La fuerza de cómputo de todas las computadoras mineras trabajando juntas", "El precio del bitcoin", "La cantidad de usuarios"],
    correctAnswer: 1,
    dato: "El hashrate de Bitcoin ha crecido exponencialmente. A más hashrate, más segura es la red contra ataques.",
    explicacion: "El hashrate mide el poder de cómputo total de la red; cuanto más alto, más difícil es atacar o engañar al sistema.",
    leccion: "Es la fuerza de todas esas computadoras mineras trabajando juntas; cuanto más poder de cómputo, más difícil es atacar o engañar a la red."
  },
  {
    id: 8, name: "El Node", icon: "🖧",
    image: "images/08.png", audio: "audio/08.mp3",
    riddle: "Centinela de la red, vigila sin cesar,\ninformación comparte sin cobrar.\n¡El Node!",
    question: "¿Qué hace un nodo en la red de Bitcoin?",
    options: ["Crea nuevas criptomonedas", "Se conecta a la red, recibe información y la comparte con otros nodos", "Envía spam a la red", "Hackea transacciones"],
    correctAnswer: 1,
    dato: "Cualquier persona puede correr un nodo desde su casa. Hay más de 15,000 nodos activos en el mundo.",
    explicacion: "Un nodo se conecta a la red de Bitcoin, recibe información y la comparte con otras computadoras para que la red no dependa de un solo lugar.",
    leccion: "Es una computadora que se conecta a la red de Bitcoin, recibe información y la comparte con otras; ayuda a que la red no dependa de un solo lugar."
  },
  {
    id: 9, name: "El Full Node", icon: "🖥️",
    image: "images/09.png", audio: "audio/09.mp3",
    riddle: "Guardián completo de toda la historia,\nrevisa cada regla con toda su gloria.\n¡El Full Node!",
    question: "¿Qué diferencia a un Full Node de un nodo común?",
    options: ["Tiene más memoria RAM", "Guarda toda la historia de Bitcoin y revisa que cada transacción cumpla las reglas", "Es más rápido para minar", "Solo funciona en servidores grandes"],
    correctAnswer: 1,
    dato: "Un full node necesita almacenar más de 500 GB de datos de la blockchain completa de Bitcoin.",
    explicacion: "Un full node guarda una copia de toda la historia de Bitcoin y verifica que cada nueva transacción y bloque cumplan las reglas, evitando trampas.",
    leccion: "Además de conectarse, guarda una copia de toda la historia de Bitcoin y revisa que cada nueva transacción y bloque cumpla las reglas; así ayuda a que nadie haga trampa."
  },
  {
    id: 10, name: "El Ajuste de dificultad", icon: "📈",
    image: "images/10.png", audio: "audio/10.mp3",
    riddle: "Sube y baja como la marea,\npara que el bloque a tiempo se crea.\n¡El Ajuste!",
    question: "¿Para qué sirve el ajuste de dificultad?",
    options: ["Para hacer Bitcoin más caro", "Para que los bloques tarden siempre alrededor de 10 minutos sin importar cuántos mineros haya", "Para eliminar mineros", "Para crear más bitcoins"],
    correctAnswer: 1,
    dato: "El ajuste ocurre automáticamente cada 2,016 bloques (aproximadamente cada 2 semanas).",
    explicacion: "El sistema se autoajusta para que los bloques tarden siempre alrededor de 10 minutos, sin importar cuántos mineros entren o salgan.",
    leccion: "Como mucha gente va agregando y quitando computadoras, el sistema se autoajusta cada cierto tiempo para que los bloques tarden más o menos lo mismo, alrededor de 10 minutos, sin importar cuántos mineros haya."
  },
  {
    id: 11, name: "El Halving", icon: "✂️",
    image: "images/11.png", audio: "audio/11.mp3",
    riddle: "Cada cuatro años la recompensa se parte,\ny el bitcoin escasea, ¡es todo un arte!\n¡El Halving!",
    question: "¿Qué pasa durante un halving?",
    options: ["Se duplica la cantidad de bitcoin", "La cantidad de nuevos bitcoins que reciben los mineros se reduce a la mitad", "Se elimina la mitad de los nodos", "Se borra la mitad de la blockchain"],
    correctAnswer: 1,
    dato: "El último halving fue en abril de 2024, reduciendo la recompensa a 3.125 BTC por bloque.",
    explicacion: "Cada ~4 años, la recompensa de los mineros se reduce a la mitad, haciendo que cada vez se creen menos bitcoins nuevos.",
    leccion: "Cada aproximadamente 4 años, la cantidad de nuevos bitcoins que reciben los mineros se reduce a la mitad, lo que hace que con el tiempo se creen cada vez menos bitcoins nuevos."
  },
  {
    id: 12, name: "Los 21M de Bitcoin", icon: "21M",
    image: "images/12.png", audio: "audio/12.mp3",
    riddle: "Veintiún millones y ni uno más,\nescasez digital que no tiene igual.\n¡Los 21 Millones!",
    question: "¿Cuántos bitcoins pueden existir como máximo?",
    options: ["Infinitos", "21 millones", "100 millones", "1 millón"],
    correctAnswer: 1,
    dato: "Se estima que el último bitcoin se minará alrededor del año 2140. Ya se han minado más del 93% de todos los bitcoins.",
    explicacion: "El programa de Bitcoin está diseñado para que nunca existan más de 21 millones, a diferencia de las monedas de gobiernos que se pueden imprimir sin límite.",
    leccion: "El programa de Bitcoin está diseñado para que nunca existan más de 21 millones de bitcoins; esto es diferente a las monedas de los gobiernos, que se pueden imprimir sin límite."
  },
  {
    id: 13, name: "La Firma digital", icon: "✍️",
    image: "images/13.png", audio: "audio/13.mp3",
    riddle: "Sin pluma ni papel, tu identidad sella,\ncon matemáticas puras, tu firma es bella.\n¡La Firma Digital!",
    question: "¿Para qué sirve la firma digital en Bitcoin?",
    options: ["Para decorar la transacción", "Para demostrar que quien envía los bitcoins tiene permiso, sin mostrar su clave secreta", "Para cifrar el monto enviado", "Para identificar al minero"],
    correctAnswer: 1,
    dato: "Bitcoin usa el algoritmo ECDSA para crear firmas digitales únicas e infalsificables.",
    explicacion: "La firma digital prueba matemáticamente que el dueño autorizó la transacción, sin revelar su clave privada.",
    leccion: "Es como una firma con pluma, pero hecha con matemáticas; sirve para demostrar que quien envía los bitcoins realmente tiene permiso para moverlos, sin mostrar su clave secreta."
  },
  {
    id: 14, name: "La Private Key", icon: "🔑",
    image: "images/14.png", audio: "audio/14.mp3",
    riddle: "Secreto guardado que nadie ha de ver,\nsin ella tus monedas no puedes mover.\n¡La Private Key!",
    question: "¿Por qué es tan importante la clave privada?",
    options: ["Sirve para decorar tu cartera", "Quien la conoce puede gastar los bitcoins asociados, por eso jamás debe compartirse", "Solo la necesitan los mineros", "Es pública y todos la pueden ver"],
    correctAnswer: 1,
    dato: "Una clave privada es un número de 256 bits. Hay más combinaciones posibles que átomos en el universo observable.",
    explicacion: "La clave privada es como una contraseña muy larga; quien la conoce puede gastar los bitcoins asociados.",
    leccion: "Es un código secreto, como una contraseña muy larga; quien la conoce puede gastar los bitcoins asociados, por eso jamás debe compartirse ni guardarse en lugares inseguros."
  },
  {
    id: 15, name: "La Public Key", icon: "🔓",
    image: "images/15.png", audio: "audio/15.mp3",
    riddle: "De lo secreto nace lo visible,\ncomprobar sin gastar, eso es posible.\n¡La Public Key!",
    question: "¿Qué puedes hacer con la clave pública?",
    options: ["Gastar los bitcoins de otra persona", "Comprobar firmas y generar direcciones, pero no gastar el dinero", "Minar nuevos bloques", "Hackear la red de Bitcoin"],
    correctAnswer: 1,
    dato: "Es matemáticamente fácil crear la clave pública desde la privada, pero imposible hacer lo contrario.",
    explicacion: "La clave pública se crea a partir de la privada y sirve para comprobar firmas y generar direcciones, pero no permite gastar dinero.",
    leccion: "A partir de la clave privada se crea otra clave que sí se puede mostrar; sirve para comprobar firmas y para generar direcciones, pero no permite gastar el dinero por sí misma."
  },
  {
    id: 16, name: "La Bitcoin Address", icon: "📫",
    image: "images/16.png", audio: "audio/16.mp3",
    riddle: "Letras y números en secuencia rara,\ntu buzón digital donde el bitcoin para.\n¡La Address!",
    question: "¿Qué es una dirección de Bitcoin?",
    options: ["Tu domicilio físico", "Una cadena de letras y números a la que te pueden enviar bitcoin", "Tu nombre de usuario", "La ubicación de un nodo"],
    correctAnswer: 1,
    dato: "Puedes tener muchas direcciones diferentes sin dar tu nombre real. Es recomendable usar una nueva para cada transacción.",
    explicacion: "Una dirección de Bitcoin es como un número de cuenta: la compartes para que te envíen bitcoin, sin revelar tu identidad.",
    leccion: "Es como un número de cuenta, una cadena de letras y números a la que te pueden enviar bitcoin; puedes tener muchas direcciones sin dar tu nombre real."
  },
  {
    id: 17, name: "La Seed Phrase", icon: "🌱",
    image: "images/17.png", audio: "audio/17.mp3",
    riddle: "Doce palabras mágicas que guardan tu tesoro,\nsi las pierdes, adiós a tu oro.\n¡La Seed Phrase!",
    question: "¿Para qué sirve la seed phrase?",
    options: ["Para abrir tu email", "Para recuperar tus bitcoins en otro dispositivo si pierdes tu teléfono", "Para minar bitcoin más rápido", "Para enviar mensajes secretos"],
    correctAnswer: 1,
    dato: "Las seed phrases usan el estándar BIP-39 con 2,048 palabras posibles. La combinación de 12 palabras da 2^128 posibilidades.",
    explicacion: "La seed phrase es una lista de palabras que representan tus claves; con ellas puedes recuperar tus bitcoins en cualquier dispositivo.",
    leccion: "Es una lista de palabras sencillas (por ejemplo, 12 o 24) que representan tus claves; si se pierde tu teléfono o dispositivo, con esas palabras puedes recuperar tus bitcoins en otro aparato."
  },
  {
    id: 18, name: "La Hardware Wallet", icon: "🔒",
    image: "images/18.png", audio: "audio/18.mp3",
    riddle: "Pequeño dispositivo, como una USB,\ntus claves protege donde nadie las ve.\n¡La Hardware Wallet!",
    question: "¿Qué hace una hardware wallet?",
    options: ["Mina bitcoins automáticamente", "Guarda tus claves privadas sin conexión a internet para mayor seguridad", "Se conecta al banco", "Es un tipo de computadora para jugar"],
    correctAnswer: 1,
    dato: "Las hardware wallets más conocidas son Ledger, Trezor y ColdCard. Nunca exponen tus claves privadas a internet.",
    explicacion: "Una hardware wallet es un dispositivo parecido a una USB que guarda tus claves privadas offline, reduciendo el riesgo de hackeo.",
    leccion: "Es un pequeño dispositivo, parecido a una memoria USB, donde se guardan tus claves privadas sin conexión a internet; así se reduce el riesgo de que te las roben por un virus o hackeo."
  },
  {
    id: 19, name: "La Lightning Network", icon: "⚡",
    image: "images/19.png", audio: "audio/19.mp3",
    riddle: "Veloz como relámpago, pago instantáneo,\nmicrotransacciones sin ningún engaño.\n¡Lightning!",
    question: "¿Qué ventaja tiene la Lightning Network?",
    options: ["Crea nuevas criptomonedas", "Permite hacer muchos pagos pequeños en segundos y con comisiones muy bajas", "Reemplaza totalmente a Bitcoin", "Solo funciona con dólares"],
    correctAnswer: 1,
    dato: "Lightning Network puede procesar millones de transacciones por segundo, comparado con ~7 en la capa base de Bitcoin.",
    explicacion: "Lightning Network funciona encima de Bitcoin y permite pagos rápidos y baratos, ideal para compras del día a día.",
    leccion: "Es una tecnología que funciona encima de Bitcoin y permite hacer muchos pagos pequeños en segundos y con comisiones muy bajas, ideal para comprar cosas del día a día."
  },
  {
    id: 20, name: "Las Fees", icon: "🏷️",
    image: "images/20.png", audio: "audio/20.mp3",
    riddle: "Pago al minero por su dedicación,\nquien más ofrece, tiene priorización.\n¡Las Fees!",
    question: "¿Por qué a veces pagas más comisión por enviar bitcoin?",
    options: ["Porque el banco lo decide", "Porque los mineros priorizan las transacciones que pagan más comisión", "Porque el bitcoin se devalúa", "Porque es un impuesto del gobierno"],
    correctAnswer: 1,
    dato: "Las comisiones varían según la demanda de espacio en los bloques. En Lightning Network las comisiones son casi nulas.",
    explicacion: "Cada vez que mandas bitcoin, pagas una pequeña cantidad a los mineros; ellos priorizan las que pagan más comisión.",
    leccion: "Cada vez que mandas bitcoin, pagas una pequeña cantidad a los mineros; ellos priorizan las transacciones que pagan más comisión, por eso a veces pagas más por rapidez."
  },
  {
    id: 21, name: "La Confirmación", icon: "✅",
    image: "images/21.png", audio: "audio/21.mp3",
    riddle: "Sello tras sello, la confianza crece,\ncada bloque nuevo la certeza ofrece.\n¡La Confirmación!",
    question: "¿Cuándo se dice que una transacción está 'confirmada'?",
    options: ["Cuando el banco la aprueba", "Cuando entra en un bloque y este se agrega a la cadena", "Cuando el precio sube", "Cuando la ves en tu email"],
    correctAnswer: 1,
    dato: "Se consideran 6 confirmaciones como estándar de seguridad. Cada confirmación tarda ~10 minutos.",
    explicacion: "Una transacción está confirmada cuando entra en un bloque; más confirmaciones = más seguro que no se podrá deshacer.",
    leccion: "Cuando una transacción entra en un bloque y este se agrega a la cadena, se dice que está 'confirmada'; cuantas más confirmaciones tenga, más seguro es que ese envío no se podrá deshacer."
  },
  {
    id: 22, name: "La Descentralización", icon: "🌐",
    image: "images/22.png", audio: "audio/22.mp3",
    riddle: "Sin rey ni corona que mande el destino,\nmiles de nodos trazan el camino.\n¡La Descentralización!",
    question: "¿Qué significa que Bitcoin sea descentralizado?",
    options: ["Que tiene muchas sucursales", "Que no existe una oficina central y miles de computadoras mantienen la red", "Que solo funciona en ciertos países", "Que un CEO toma las decisiones"],
    correctAnswer: 1,
    dato: "Bitcoin opera en más de 100 países simultáneamente. No hay CEO, no hay oficina central, no hay servidor principal.",
    explicacion: "No existe una oficina central; miles de computadoras mantienen viva la red, haciendo difícil que alguien la cierre o controle.",
    leccion: "No existe una oficina central de Bitcoin; miles de computadoras en muchos países mantienen viva la red, lo que hace difícil que un solo gobierno o empresa la cierre o la controle."
  },
  {
    id: 23, name: "La Inmutabilidad", icon: "🪨",
    image: "images/23.png", audio: "audio/23.mp3",
    riddle: "Lo escrito, escrito está, nadie lo puede borrar,\ncomo piedra tallada, por siempre va a quedar.\n¡La Inmutabilidad!",
    question: "¿Por qué es prácticamente imposible modificar una transacción confirmada?",
    options: ["Porque Satoshi la protege", "Porque requeriría rehacer una enorme cantidad de trabajo de cómputo", "Porque está guardada en un bunker", "Porque tiene contraseña"],
    correctAnswer: 1,
    dato: "Para alterar un bloque antiguo, un atacante necesitaría más del 51% del poder de cómputo de toda la red.",
    explicacion: "Una vez registrada y confirmada, modificar una transacción requeriría rehacer un trabajo de cómputo enorme.",
    leccion: "Una vez que una transacción ha quedado registrada y confirmada en la cadena de bloques, es prácticamente imposible modificarla sin rehacer una enorme cantidad de trabajo de cómputo."
  },
  {
    id: 24, name: "La Resistencia a la censura", icon: "🛡️",
    image: "images/24.png", audio: "audio/24.mp3",
    riddle: "Ni gobierno ni empresa tu envío detendrá,\nmientras sigas las reglas, nadie te parará.\n¡Resistencia a la censura!",
    question: "¿Qué significa la resistencia a la censura en Bitcoin?",
    options: ["Que puedes publicar lo que quieras en internet", "Que nadie puede bloquear tu transacción por razones políticas, personales o económicas", "Que no existen leyes en Bitcoin", "Que puedes hacer transacciones ilegales"],
    correctAnswer: 1,
    dato: "Bitcoin ha sido usado por personas en países con controles de capital estrictos para preservar sus ahorros.",
    explicacion: "Mientras sigas las reglas del sistema, nadie puede bloquear tu transacción; no hay 'botón de pausa' central.",
    leccion: "Mientras sigas las reglas del sistema, nadie puede bloquear tu transacción por razones políticas, personales o económicas; es como un sistema de pagos donde no hay 'botón de pausa' central."
  },
  {
    id: 25, name: "La Autocustodia", icon: "🏦",
    image: "images/25.png", audio: "audio/25.mp3",
    riddle: "Tu dinero en tus manos, sin pedir permiso,\nni banco ni gobierno pueden darte un aviso.\n¡La Autocustodia!",
    question: "¿Qué diferencia la autocustodia de dejar tu dinero en un banco?",
    options: ["No hay ninguna diferencia", "Tú guardas las claves y eres directamente dueño de tus fondos, sin intermediarios", "El banco te da más seguridad siempre", "Solo los expertos pueden hacer autocustodia"],
    correctAnswer: 1,
    dato: "El lema popular es: 'Not your keys, not your coins' (Si no tienes las claves, no son tus monedas).",
    explicacion: "Con la autocustodia, tú guardas las claves y eres dueño directo de tus fondos, sin que un banco pueda congelar tu cuenta.",
    leccion: "En lugar de dejar tu dinero en un banco que puede congelar o limitar tu cuenta, con Bitcoin tú guardas las claves y eres directamente dueño de tus fondos."
  },
  {
    id: 26, name: "El Cypherpunk", icon: "🕶️",
    image: "images/26.png", audio: "audio/26.mp3",
    riddle: "Rebeldes digitales con código y razón,\nprivacidad y libertad, su gran misión.\n¡El Cypherpunk!",
    question: "¿Qué defendían los cypherpunks antes de Bitcoin?",
    options: ["La censura en internet", "El uso de encriptación para proteger la privacidad y la libertad", "Que los gobiernos controlen el dinero", "Prohibir las computadoras"],
    correctAnswer: 1,
    dato: "Hal Finney, Nick Szabo y Adam Back, todos cypherpunks, contribuyeron con ideas que inspiraron la creación de Bitcoin.",
    explicacion: "Los cypherpunks defendían la encriptación para proteger la privacidad, la libertad de expresión y el derecho a dinero libre.",
    leccion: "Grupo de personas que, desde antes de Bitcoin, defendían la idea de usar tecnologías de encriptación para proteger la privacidad, la libertad de expresión y el derecho a tener dinero libre."
  },
  {
    id: 27, name: "El Bitcoiner", icon: "🧡",
    image: "images/27.png", audio: "audio/27.mp3",
    riddle: "Estudia y confía en la moneda naranja,\nsu fe en Bitcoin nunca se zaranja.\n¡El Bitcoiner!",
    question: "¿Qué caracteriza a un bitcoiner?",
    options: ["Invierte en todas las criptomonedas por igual", "Estudia y prefiere Bitcoin por considerarlo más seguro, simple y resistente", "Solo le interesa hacerse rico rápido", "Trabaja en un banco"],
    correctAnswer: 1,
    dato: "La comunidad bitcoiner es conocida por su cultura educativa y por defender la soberanía financiera.",
    explicacion: "Un bitcoiner estudia y confía en Bitcoin, prefiriéndolo sobre otras criptomonedas por su seguridad y resistencia a la censura.",
    leccion: "Persona que estudia y confía tanto en Bitcoin que lo prefiere por encima de otras criptomonedas, porque lo considera más seguro, simple y resistente a la censura."
  },
  {
    id: 28, name: "La HODL", icon: "💎",
    image: "images/28.png", audio: "audio/28.mp3",
    riddle: "Comprar y guardar sin vender jamás,\npaciencia de hierro que rinde de más.\n¡HODL!",
    question: "¿En qué consiste la estrategia HODL?",
    options: ["Vender bitcoin todos los días", "Comprar bitcoin y no venderlo aunque baje, confiando en su valor a largo plazo", "Comprar solo cuando el precio está alto", "Invertir en muchas criptomonedas"],
    correctAnswer: 1,
    dato: "El término nació de un error tipográfico al escribir 'HOLD' en un foro de Bitcoin en 2013.",
    explicacion: "HODL consiste en mantener bitcoin a largo plazo, sin vender por pánico cuando el precio baja.",
    leccion: "Consiste en comprar bitcoin y no venderlo aunque el precio baje mucho, con la idea de mantenerlo durante años confiando en su valor a largo plazo."
  },
  {
    id: 29, name: "El Market Price", icon: "💲",
    image: "images/29.png", audio: "audio/29.mp3",
    riddle: "Sube y baja según compran y venden,\nel precio del mercado todos lo entienden.\n¡El Market Price!",
    question: "¿Qué determina el precio de mercado de bitcoin?",
    options: ["Lo fija el gobierno", "La oferta y la demanda en los intercambios", "Lo decide Satoshi Nakamoto", "Es siempre el mismo"],
    correctAnswer: 1,
    dato: "El precio de bitcoin se cotiza las 24 horas, los 365 días del año, en mercados de todo el mundo.",
    explicacion: "El market price cambia todo el tiempo según la oferta y la demanda en los intercambios.",
    leccion: "Es la cantidad de dinero (en pesos, dólares, etc.) por la que la gente está dispuesta a comprar o vender un bitcoin en los intercambios; cambia todo el tiempo según la oferta y la demanda."
  },
  {
    id: 30, name: "El Bear Market", icon: "🐻",
    image: "images/30.png", audio: "audio/30.mp3",
    riddle: "El oso ruge y el precio se cae,\nmiedo y malas noticias, todo se deshace.\n¡El Bear Market!",
    question: "¿Qué caracteriza un bear market?",
    options: ["El precio sube sin parar", "El precio baja durante meses, con malas noticias y desánimo", "Es un mercado de animales", "Bitcoin deja de funcionar"],
    correctAnswer: 1,
    dato: "Los bear markets son cíclicos en Bitcoin. Históricamente, cada caída ha sido seguida por nuevos máximos.",
    explicacion: "En un bear market el precio baja durante meses; suele haber malas noticias, pero algunos lo ven como oportunidad para acumular.",
    leccion: "Etapas en las que el precio de bitcoin baja durante meses o se mantiene bajo; suelen estar llenas de malas noticias y desánimo, pero también son momentos en que algunos deciden acumular."
  },
  {
    id: 31, name: "El Bull Market", icon: "🐂",
    image: "images/31.png", audio: "audio/31.mp3",
    riddle: "El toro embiste y el precio se eleva,\neuforia y entusiasmo, la manada se lleva.\n¡El Bull Market!",
    question: "¿Qué pasa durante un bull market?",
    options: ["Todo el mundo vende su bitcoin", "El precio sube fuerte y muchas personas nuevas se interesan", "Bitcoin se apaga temporalmente", "Los mineros dejan de trabajar"],
    correctAnswer: 1,
    dato: "Durante bull markets, el interés público en Bitcoin se dispara y aparecen muchas noticias positivas.",
    explicacion: "En un bull market el precio sube fuerte, aparecen noticias positivas y entusiasmo, pero también errores por euforia.",
    leccion: "Etapas en las que el precio sube fuerte y muchas personas nuevas se interesan; aparecen muchas noticias positivas y entusiasmo, pero también errores por euforia y codicia."
  },
  {
    id: 32, name: "El FUD", icon: "😱",
    image: "images/32.png", audio: "audio/32.mp3",
    riddle: "Miedo, incertidumbre y duda esparcen,\npara que tus bitcoins por poco los lances.\n¡El FUD!",
    question: "¿Qué es el FUD?",
    options: ["Un tipo de criptomoneda", "Mensajes o rumores que provocan miedo para que la gente venda por pánico", "Un método de minería", "Una actualización de Bitcoin"],
    correctAnswer: 1,
    dato: "FUD significa Fear, Uncertainty and Doubt (Miedo, Incertidumbre y Duda). Es una táctica usada desde antes de Bitcoin.",
    explicacion: "El FUD son mensajes que provocan miedo; si no se entiende bien Bitcoin, es fácil vender barato solo por pánico.",
    leccion: "Son mensajes, rumores o noticias (a veces verdaderas, a veces exageradas) que provocan miedo e incertidumbre; si no se entiende bien Bitcoin, es fácil vender barato solo por pánico."
  },
  {
    id: 33, name: "La Volatilidad del precio", icon: "📊",
    image: "images/33.png", audio: "audio/33.mp3",
    riddle: "Sube como cohete, baja como piedra,\nmontaña rusa de precios que a muchos arredra.\n¡La Volatilidad!",
    question: "¿Por qué Bitcoin es volátil?",
    options: ["Porque está roto", "Porque puede subir o bajar muy rápido, arriesgado pero atractivo a largo plazo", "Porque solo se puede comprar una vez al año", "Porque el gobierno cambia su precio"],
    correctAnswer: 1,
    dato: "Bitcoin ha tenido caídas de más del 80% en su historia, pero también ha subido miles de por ciento desde su creación.",
    explicacion: "La volatilidad hace a Bitcoin arriesgado para quien busca estabilidad, pero atractivo para quien piensa en el largo plazo.",
    leccion: "Bitcoin puede subir o bajar de valor muy rápido en poco tiempo; esto lo hace arriesgado para quien busca estabilidad, pero atractivo para quien acepta riesgo y piensa en el largo plazo."
  },
  {
    id: 34, name: "La Regulación", icon: "📜",
    image: "images/34.png", audio: "audio/34.mp3",
    riddle: "Cada país decide sus propias reglas,\nfacilitar o poner trabas a las cuentas.\n¡La Regulación!",
    question: "¿Qué son las regulaciones de Bitcoin?",
    options: ["Reglas internas de la blockchain", "Reglas que cada país crea para controlar cómo se compra, vende o declara Bitcoin", "Algoritmos de minería", "Contratos entre mineros"],
    correctAnswer: 1,
    dato: "El Salvador fue el primer país en adoptar Bitcoin como moneda de curso legal en 2021.",
    explicacion: "Las regulaciones son reglas de cada país que pueden facilitar o dificultar el uso de Bitcoin.",
    leccion: "Son las reglas que cada país crea para controlar cómo se compra, vende o declara Bitcoin; pueden hacerlo más fácil de usar o, al contrario, poner obstáculos o requisitos adicionales."
  },
  {
    id: 35, name: "La Soberanía financiera", icon: "👑",
    image: "images/35.png", audio: "audio/35.mp3",
    riddle: "Tu dinero, tus reglas, sin pedir permiso,\ncon internet y claves, el mundo es tu piso.\n¡Soberanía financiera!",
    question: "¿Qué es la soberanía financiera?",
    options: ["Tener mucho dinero en el banco", "Poder controlar tu dinero sin pedir permiso a bancos o gobiernos", "Dejar que el gobierno maneje tu dinero", "No pagar impuestos"],
    correctAnswer: 1,
    dato: "Miles de millones de personas no tienen acceso a bancos, pero con Bitcoin solo necesitan un teléfono e internet.",
    explicacion: "La soberanía financiera es poder mover tu dinero a cualquier lugar del mundo solo con internet y tus claves.",
    leccion: "Es la idea de que tú puedas controlar tu dinero sin pedir permiso a bancos o gobiernos, pudiendo moverlo a cualquier lugar del mundo solo con acceso a internet y tus claves."
  },
  {
    id: 36, name: "La Prueba de trabajo", icon: "💪",
    image: "images/36.png", audio: "audio/36.mp3",
    riddle: "Sudor y energía el minero invierte,\npara asegurar la red y hacerla fuerte.\n¡La Prueba de Trabajo!",
    question: "¿Qué protege la prueba de trabajo?",
    options: ["Las contraseñas de los usuarios", "La red de Bitcoin, haciendo que atacarla sea carísimo y muy difícil", "Los servidores de una empresa", "Las redes sociales"],
    correctAnswer: 1,
    dato: "La prueba de trabajo convierte energía en seguridad. Atacar la red costaría miles de millones de dólares.",
    explicacion: "Los mineros gastan energía y poder de cómputo para proteger la red; este esfuerzo hace que atacar Bitcoin sea extremadamente costoso.",
    leccion: "Es el mecanismo en el que los mineros gastan energía y poder de cómputo para proteger la red; gracias a este esfuerzo, atacar o falsificar la historia de Bitcoin sería carísimo y muy difícil."
  }
];

// ─── LESSON CHAPTERS (story-based grouping) ─────────────────────────────────
const LESSON_CHAPTERS = [
  { title: "¿Qué es Bitcoin?", cardIds: [1, 2, 3, 4, 5] },
  { title: "¿Cómo funciona la red?", cardIds: [6, 7, 8, 9, 10] },
  { title: "Escasez y emisión", cardIds: [11, 12, 36] },
  { title: "Seguridad y claves", cardIds: [13, 14, 15, 16, 17, 18] },
  { title: "Pagos y confirmaciones", cardIds: [19, 20, 21] },
  { title: "Principios de Bitcoin", cardIds: [22, 23, 24, 25] },
  { title: "Cultura y comunidad", cardIds: [26, 27, 28] },
  { title: "Mercado y economía", cardIds: [29, 30, 31, 32, 33, 34, 35] }
];

const LESSONS = CARD_DECK.map(card => ({
  id: card.id,
  title: card.name,
  icon: card.icon,
  image: card.image,
  text: card.leccion
}));

// ─── XP HELPERS ─────────────────────────────────────────────────────────────
function getStoredXP() {
  try { return parseInt(localStorage.getItem('loteria_xp') || '0', 10); } catch { return 0; }
}
function setStoredXP(val) {
  try { localStorage.setItem('loteria_xp', String(Math.max(0, val))); } catch {}
}

// ─── UTILITY FUNCTIONS ───────────────────────────────────────────────────────
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function checkWin(markedIndices) {
  for (const pattern of ALL_PATTERNS) {
    if (pattern.every(i => markedIndices.has(i))) {
      return pattern;
    }
  }
  return null;
}

// ─── SHARED BACKGROUND STYLE ─────────────────────────────────────────────────
const BG_STYLE = { background: 'linear-gradient(180deg, #3D200E 0%, #5C3317 40%, #4A2812 100%)' };
const FONT_SERIF = { fontFamily: "'Instrument Serif', serif" };

// ─── INLINE STYLES (Mexican Lotería Theme) ───────────────────────────────────
const styles = {
  globalCSS: `
    @keyframes slideInUp {
      from { opacity: 0; transform: translateY(40px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes stampIn {
      0% { transform: scale(3) rotate(-15deg); opacity: 0; }
      60% { transform: scale(0.9) rotate(3deg); opacity: 1; }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 50%, 90% { transform: translateX(-6px); }
      30%, 70% { transform: translateX(6px); }
    }
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(218, 165, 32, 0.6); }
      50% { box-shadow: 0 0 0 12px rgba(218, 165, 32, 0); }
    }
    @keyframes glowWin {
      0%, 100% { box-shadow: 0 0 8px 2px rgba(255, 215, 0, 0.8); }
      50% { box-shadow: 0 0 24px 8px rgba(255, 215, 0, 1); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes confetti {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes callerEntrance {
      from { opacity: 0; transform: translateY(-30px) rotateX(15deg); }
      to { opacity: 1; transform: translateY(0) rotateX(0deg); }
    }
    @keyframes borderDance {
      0% { border-color: #DAA520; }
      33% { border-color: #8B0000; }
      66% { border-color: #228B22; }
      100% { border-color: #DAA520; }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(60px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .animate-slideInUp { animation: slideInUp 0.5s ease-out; }
    .animate-slideInRight { animation: slideInRight 0.4s ease-out; }
    .animate-stamp { animation: stampIn 0.4s ease-out forwards; }
    .animate-shake { animation: shake 0.5s ease-in-out; }
    .animate-pulse-gold { animation: pulse 1.5s ease-in-out infinite; }
    .animate-glow-win { animation: glowWin 0.6s ease-in-out infinite; }
    .animate-fadeIn { animation: fadeIn 0.5s ease-out; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-caller { animation: callerEntrance 0.6s ease-out; }
    .animate-border { animation: borderDance 3s linear infinite; }

    .loteria-card {
      background: linear-gradient(135deg, #FFF8E7 0%, #F5E6C8 50%, #EDD9A3 100%);
      border: 3px solid #8B4513;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .loteria-card::before {
      content: '';
      position: absolute;
      inset: 3px;
      border: 1px solid rgba(139, 69, 19, 0.3);
      pointer-events: none;
      border-radius: 4px;
    }
    .loteria-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(139, 0, 0, 0.3);
    }
    .loteria-card.highlighted {
      border-color: #DAA520;
      box-shadow: 0 0 15px rgba(218, 165, 32, 0.6);
    }
    .loteria-card.called-card {
      border-color: #B8860B;
      box-shadow: 0 0 8px rgba(218, 165, 32, 0.35);
      background: linear-gradient(135deg, #FFF8E7 0%, #FFF0C8 50%, #FFEBA3 100%);
    }
    .loteria-card.marked {
      border-color: #228B22;
    }

    .papel-picado {
      background-image:
        linear-gradient(45deg, transparent 48%, rgba(218,165,32,0.08) 48%, rgba(218,165,32,0.08) 52%, transparent 52%),
        linear-gradient(-45deg, transparent 48%, rgba(139,0,0,0.06) 48%, rgba(139,0,0,0.06) 52%, transparent 52%);
      background-size: 20px 20px;
    }

    .wood-texture {
      background-color: #5C3317;
      background-image:
        repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,0,0,0.05) 40px, rgba(0,0,0,0.05) 41px),
        repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.02) 8px, rgba(255,255,255,0.02) 9px),
        linear-gradient(180deg, #6B3A20 0%, #5C3317 30%, #4A2812 70%, #3D200E 100%);
    }

    .grain-overlay { position: relative; }
    .grain-overlay::after {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      pointer-events: none;
    }

    .tile-border {
      border-image: repeating-linear-gradient(45deg, #DAA520 0px, #DAA520 5px, #8B0000 5px, #8B0000 10px, #228B22 10px, #228B22 15px) 10;
      border-width: 6px;
      border-style: solid;
    }

    .frijolito {
      width: 28px; height: 28px;
      background: radial-gradient(ellipse at 40% 35%, #8B2500, #5C1A0A);
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      box-shadow: inset -2px -2px 4px rgba(0,0,0,0.4), inset 2px 2px 4px rgba(255,255,255,0.1), 2px 2px 6px rgba(0,0,0,0.5);
    }

    .caller-card {
      background: linear-gradient(135deg, #FFF8E7 0%, #F5E6C8 100%);
      border: 4px solid #DAA520;
      box-shadow: 0 8px 32px rgba(0,0,0,0.3);
    }

    .btn-loteria {
      background: linear-gradient(180deg, #DAA520 0%, #B8860B 100%);
      color: #3D200E;
      font-family: 'Instrument Serif', serif;
      font-weight: 700;
      border: 2px solid #8B6914;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3);
      transition: all 0.2s;
    }
    .btn-loteria:hover {
      background: linear-gradient(180deg, #F0C040 0%, #DAA520 100%);
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.4);
    }
    .btn-loteria:active {
      transform: translateY(1px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }

    .btn-loteria-outline {
      background: transparent;
      color: #DAA520;
      font-family: 'Instrument Serif', serif;
      font-weight: 700;
      border: 2px solid #DAA520;
      transition: all 0.2s;
    }
    .btn-loteria-outline:hover {
      background: rgba(218,165,32,0.1);
    }

    .modal-overlay {
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(4px);
    }

    .quiz-modal {
      background: linear-gradient(135deg, #FFF8E7 0%, #F5E6C8 100%);
      border: 4px solid #8B4513;
    }

    .option-btn {
      background: linear-gradient(180deg, #FEFCF5 0%, #F5E6C8 100%);
      border: 2px solid #8B4513;
      transition: all 0.2s;
      font-family: 'Instrument Serif', serif;
    }
    .option-btn:hover {
      background: linear-gradient(180deg, #FFF0D0 0%, #F0D8A8 100%);
      border-color: #DAA520;
      transform: translateX(4px);
    }
    .option-btn.correct {
      background: linear-gradient(180deg, #C6F6D5 0%, #9AE6B4 100%);
      border-color: #228B22;
    }
    .option-btn.wrong {
      background: linear-gradient(180deg, #FED7D7 0%, #FEB2B2 100%);
      border-color: #8B0000;
    }

    * { box-sizing: border-box; }
    body { background: #3D200E; }

    .confetti-piece {
      position: fixed;
      width: 10px; height: 10px;
      top: -10px;
      animation: confetti 3s linear forwards;
    }

    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

    .card-img {
      width: 100%;
      height: auto;
      max-height: 80%;
      object-fit: cover;
      border-radius: 6px;
      aspect-ratio: 3/4;
    }
    .card-img-caller {
      width: 140px;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
      margin: 0 auto;
      border: 3px solid #8B4513;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    .card-img-sm {
      width: 90%;
      aspect-ratio: 3/4;
      object-fit: cover;
      border-radius: 4px;
      border: 2px solid #8B4513;
    }

    .level-card {
      background: linear-gradient(135deg, #FFF8E7 0%, #F5E6C8 100%);
      border: 3px solid #DAA520;
      transition: all 0.3s;
    }
    .level-card:hover:not(.locked) {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(218,165,32,0.4);
    }
    .level-card.locked {
      opacity: 0.5;
      filter: grayscale(0.6);
      cursor: not-allowed;
      border-color: #666;
    }
  `
};

// ─── CARD IMAGE HELPER ───────────────────────────────────────────────────────
function CardVisual({ card, sizeClass }) {
  const [imgError, setImgError] = useState(false);
  if (card.image && !imgError) {
    return (
      <img
        src={card.image}
        alt={card.name}
        className={sizeClass || 'card-img-sm'}
        style={{ display: 'block' }}
        onError={() => setImgError(true)}
      />
    );
  }
  const isCaller = sizeClass === 'card-img-caller';
  return (
    <div className={`flex items-center justify-center ${isCaller ? 'w-[140px] h-[180px] mx-auto rounded-lg' : 'w-[90%] rounded'}`}
         style={{ aspectRatio: isCaller ? undefined : '3/4', background: 'linear-gradient(135deg, #4A90A4 0%, #5BA0B4 100%)', border: isCaller ? '3px solid #8B4513' : '2px solid #8B4513', boxShadow: isCaller ? '0 4px 12px rgba(0,0,0,0.3)' : 'none' }}>
      <span className={isCaller ? 'text-5xl sm:text-6xl' : 'text-2xl sm:text-3xl'}>{card.icon}</span>
    </div>
  );
}

// ─── CONFETTI COMPONENT ──────────────────────────────────────────────────────
function Confetti() {
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

// ─── HELP MODAL ──────────────────────────────────────────────────────────────
function HelpModal({ onClose }) {
  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="quiz-modal rounded-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto scrollbar-hide animate-slideInUp"
           onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 style={FONT_SERIF} className="text-2xl font-bold text-amber-900">Como se juega</h2>
          <button onClick={onClose} className="text-2xl text-amber-900 hover:text-red-700 font-bold">Cerrar</button>
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

// ─── QUIZ MODAL ──────────────────────────────────────────────────────────────
function QuizModal({ card, onAnswer }) {
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
      <div className={`quiz-modal rounded-xl p-5 sm:p-6 max-w-md w-full animate-slideInUp ${shaking ? 'animate-shake' : ''}`}>
        <div className="text-center mb-4">
          <CardVisual card={card} sizeClass="card-img-caller" />
          <h3 style={FONT_SERIF} className="text-lg font-bold text-amber-900 mt-2">{card.name}</h3>
          {triesUsed > 0 && (
            <p className="text-amber-600 text-xs mt-1">Intentos restantes: {2 - triesUsed}</p>
          )}
        </div>
        <p className="text-amber-950 text-sm font-semibold mb-4 text-center">{card.question}</p>
        <div className="space-y-2">
          {card.options.map((opt, i) => {
            let extraClass = '';
            if (showResult) {
              if (i === card.correctAnswer) extraClass = 'correct';
              else if (i === selected) extraClass = 'wrong';
            }
            return (
              <button key={i} className={`option-btn w-full text-left p-3 rounded-lg text-sm ${extraClass}`}
                      onClick={() => handleSelect(i)} disabled={showResult && !canRetry}>
                <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
              </button>
            );
          })}
        </div>
        {showResult && (
          <div className={`mt-4 p-3 rounded-lg text-sm animate-fadeIn ${
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
                  <p className="text-xs text-red-800">Sin intentos. Empezaras de nuevo con una tabla nueva.</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── LOTERÍA CARD (on tabla) ─────────────────────────────────────────────────
function LoteriaCard({ card, index, isMarked, isHighlighted, isCalled, isWinning, onClick }) {
  const clickable = !isMarked && (isHighlighted || isCalled);
  return (
    <button onClick={onClick}
      className={`loteria-card rounded-lg flex flex-col items-center justify-center p-1 sm:p-2 relative
        ${isHighlighted ? 'highlighted animate-pulse-gold' : ''}
        ${isCalled && !isHighlighted && !isMarked ? 'called-card' : ''}
        ${isMarked ? 'marked' : ''}
        ${isWinning ? 'animate-glow-win' : ''}
        ${clickable ? 'cursor-pointer' : 'cursor-default'}`}
      style={{ aspectRatio: '3/4', width: '100%' }}>

      <CardVisual card={card} sizeClass="card-img-sm" />

      <span className="text-amber-950 text-center leading-tight font-bold"
            style={{ ...FONT_SERIF, fontSize: 'clamp(0.5rem, 1.8vw, 0.7rem)' }}>
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

// ─── CALLER DISPLAY ──────────────────────────────────────────────────────────
function CallerDisplay({ card, callerKey, onNext, isOnTabla, cardsRemaining, totalCards, calledCount, timeRemaining, timerTotal }) {
  if (!card) return null;
  const pct = timerTotal > 0 ? (timeRemaining / timerTotal) * 100 : 0;
  return (
    <div key={callerKey} className="caller-card rounded-xl p-4 sm:p-5 text-center animate-caller mx-auto max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs text-amber-700">Carta {totalCards - cardsRemaining + 1} de {totalCards}</span>
        {isOnTabla ? (
          <span className="bg-green-200 text-green-900 px-2 py-0.5 rounded-full font-bold text-xs animate-fadeIn">
            En tu tabla
          </span>
        ) : (
          <span className="bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-bold text-xs animate-fadeIn">
            No esta en tu tabla
          </span>
        )}
      </div>

      {/* Timer bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-amber-600 mb-1">
          <span>Proxima carta</span>
          <span>{timeRemaining}s</span>
        </div>
        <div className="w-full h-1.5 bg-amber-900/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="mb-2">
        <CardVisual card={card} sizeClass="card-img-caller" />
      </div>
      <h3 style={FONT_SERIF} className="text-xl sm:text-2xl font-bold text-amber-900 mb-3">{card.name}</h3>

      {isOnTabla ? (
        <>
          <p className="text-amber-800 text-sm italic whitespace-pre-line leading-relaxed mb-3" style={FONT_SERIF}>
            {card.riddle}
          </p>
          <p className="text-green-800 text-xs font-bold mb-3 bg-green-100 rounded-lg py-1.5 px-3 animate-fadeIn">
            Haz clic en la carta de tu tabla para contestar
          </p>
        </>
      ) : (
        <div className="mb-3">
          <p className="text-amber-700 text-xs font-semibold mb-2">Esta carta no esta en tu tabla, pero aprovecha para aprender:</p>
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 text-left">
            <p className="text-amber-900 text-sm leading-relaxed" style={FONT_SERIF}>{card.leccion}</p>
          </div>
        </div>
      )}

      {calledCount > 0 && (
        <p className="text-amber-600 text-xs mb-3">
          Tambien puedes hacer clic en cartas ya cantadas (punto amarillo)
        </p>
      )}
      <button onClick={onNext} className="btn-loteria px-4 py-2 rounded-lg text-sm">Siguiente</button>
    </div>
  );
}

// ─── START SCREEN ────────────────────────────────────────────────────────────
function StartScreen({ onStart, xp }) {
  const [showHelp, setShowHelp] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center papel-picado grain-overlay relative px-4" style={BG_STYLE}>
      <style>{styles.globalCSS}</style>
      <div className="text-center animate-slideInUp">
        <div className="mb-6">
          <h1 style={FONT_SERIF} className="text-4xl sm:text-6xl md:text-7xl font-black tracking-wider">
            <span className="text-yellow-400" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}>LOTERIA</span>
            <br />
            <span className="text-orange-400" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}>BITCOIN</span>
          </h1>
        </div>
        <p className="text-amber-200 text-lg sm:text-xl mb-2" style={FONT_SERIF}>Aprende Bitcoin jugando</p>
        <p className="text-amber-400/60 text-sm mb-2">La tradicion mexicana se encuentra con la revolucion digital</p>
        {xp > 0 && (
          <p className="text-yellow-400 text-sm font-bold mb-4">Tu XP: {xp}</p>
        )}
        <div className="flex flex-col items-center gap-3 mt-4">
          <button onClick={onStart} className="btn-loteria text-xl sm:text-2xl px-10 py-4 rounded-xl">JUGAR</button>
          <button onClick={() => setShowHelp(true)}
                  className="text-amber-400 hover:text-amber-200 text-sm underline underline-offset-4 transition-colors">
            Como se juega?
          </button>
        </div>
        <p className="text-amber-600/40 text-xs mt-8">Made by Jeronimo, with love.</p>
      </div>
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}

// ─── LESSON SCREEN ───────────────────────────────────────────────────────────
function LessonScreen({ onFinish }) {
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
      <div className="min-h-screen flex flex-col papel-picado grain-overlay relative" style={BG_STYLE}>
        <style>{styles.globalCSS}</style>
        <div className="flex-1 flex items-center justify-center px-4 py-6">
          <div className="caller-card rounded-xl p-6 sm:p-8 max-w-md w-full text-center animate-slideInUp">
            <h2 style={FONT_SERIF} className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4">Bienvenido a Loteria Bitcoin</h2>
            <div className="text-amber-800 text-sm leading-relaxed text-left space-y-3 mb-6" style={FONT_SERIF}>
              <p>Estas a punto de aprender los conceptos mas importantes de Bitcoin a traves de la tradicional Loteria Mexicana.</p>
              <p><strong>Primero, te vamos a enseñar los 36 conceptos</strong> que forman el mazo de cartas. Leelos con atencion porque despues te preguntaremos sobre ellos en el juego.</p>
              <p><strong>Asi funciona el juego:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Recibes una tabla de 16 cartas al azar.</li>
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
    <div className="min-h-screen flex flex-col papel-picado grain-overlay relative" style={BG_STYLE}>
      <style>{styles.globalCSS}</style>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b-2 border-amber-900/50">
        <h2 style={FONT_SERIF} className="text-lg font-bold text-yellow-400">
          {reviewMode ? 'Repaso' : 'Lecciones Bitcoin'}
        </h2>
        <button onClick={onFinish} className="btn-loteria-outline px-3 py-1 rounded-lg text-xs">
          Saltar
        </button>
      </div>

      {/* Progress bar */}
      <div className="px-4 pt-3">
        <div className="w-full bg-amber-900/40 rounded-full h-2">
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
          <p className="text-amber-600 text-xs mb-4">Carta {currentCard.id} de 36</p>
          <p className="text-amber-800 text-base leading-relaxed mb-6" style={FONT_SERIF}>{currentCard.leccion}</p>

          <div className="flex gap-3 justify-center flex-wrap">
            {idx > 0 && (
              <button onClick={() => reviewMode ? setReviewIndex(i => i - 1) : setCurrentIndex(i => i - 1)}
                      className="btn-loteria-outline px-5 py-2 rounded-lg text-sm">
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

// ─── LEVEL SELECT SCREEN ─────────────────────────────────────────────────────
function LevelSelectScreen({ onSelectLevel, onGoHome, xp }) {
  const levels = [
    { id: 1, name: "Principiante", subtitle: "Conceptos basicos", locked: false, description: "36 cartas de Bitcoin", xpNeeded: 0 },
    { id: 2, name: "Intermedio", subtitle: "Conceptos avanzados", locked: xp < XP_LEVEL_2, description: `Necesitas ${XP_LEVEL_2} XP`, xpNeeded: XP_LEVEL_2 },
    { id: 3, name: "Avanzado", subtitle: "Experto en Bitcoin", locked: xp < XP_LEVEL_3, description: `Necesitas ${XP_LEVEL_3} XP`, xpNeeded: XP_LEVEL_3 }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center papel-picado grain-overlay relative px-4" style={BG_STYLE}>
      <style>{styles.globalCSS}</style>

      <div className="text-center animate-slideInUp max-w-lg w-full">
        <button onClick={onGoHome} style={FONT_SERIF}
                className="text-lg font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer mb-6 block mx-auto">
          LOTERIA BITCOIN
        </button>

        <h2 style={FONT_SERIF} className="text-3xl sm:text-4xl font-bold text-amber-200 mb-2">Elige tu nivel</h2>
        <p className="text-yellow-400 text-sm font-bold mb-1">Tu XP: {xp}</p>
        <p className="text-amber-400/60 text-sm mb-8">Domina Bitcoin paso a paso</p>

        <div className="space-y-4">
          {levels.map(level => (
            <button
              key={level.id}
              onClick={() => !level.locked && onSelectLevel(level.id)}
              disabled={level.locked}
              className={`level-card rounded-xl p-5 w-full text-left flex items-center gap-4 ${level.locked ? 'locked' : ''}`}
            >
              <div className="text-3xl flex-shrink-0 font-bold text-amber-800">
                {level.id}
              </div>
              <div className="flex-1">
                <h3 style={FONT_SERIF} className="text-xl font-bold text-amber-900">
                  Nivel {level.id}: {level.name}
                </h3>
                <p className="text-amber-700 text-sm">{level.subtitle}</p>
                <p className="text-amber-600 text-xs mt-1">
                  {level.locked ? `${level.description} (tienes ${xp})` : level.description}
                </p>
              </div>
              {!level.locked && (
                <span className="text-amber-700 text-2xl">&#8594;</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── WIN SCREEN ──────────────────────────────────────────────────────────────
function WinScreen({ stats, encounteredCards, onRestart, xp }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center papel-picado grain-overlay relative px-4 py-8" style={BG_STYLE}>
      <style>{styles.globalCSS}</style>
      <Confetti />
      <div className="text-center animate-slideInUp max-w-lg w-full">
        <h1 style={{ ...FONT_SERIF, textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}
            className="text-5xl sm:text-7xl font-black text-yellow-400 mb-2">LOTERIA!</h1>
        <p className="text-amber-200 text-xl mb-2">Felicidades, ganaste!</p>
        <p className="text-yellow-400 text-lg font-bold mb-6">XP Total: {xp}</p>

        <div className="caller-card rounded-xl p-5 mb-6">
          <h3 style={FONT_SERIF} className="text-lg font-bold text-amber-900 mb-3">Tu puntuacion</h3>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-700">{stats.correct}</div>
              <div className="text-xs text-amber-700">Correctas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-700">{stats.wrong}</div>
              <div className="text-xs text-amber-700">Incorrectas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-800">{stats.total}</div>
              <div className="text-xs text-amber-700">Intentadas</div>
            </div>
          </div>
        </div>

        <div className="caller-card rounded-xl p-5 mb-6 max-h-60 overflow-y-auto scrollbar-hide">
          <h3 style={FONT_SERIF} className="text-lg font-bold text-amber-900 mb-3">Conceptos aprendidos</h3>
          <div className="space-y-2 text-left">
            {encounteredCards.map(card => (
              <div key={card.id} className="flex items-start gap-2 text-sm text-amber-900 border-b border-amber-200 pb-2">
                <span className="text-lg flex-shrink-0">{card.icon}</span>
                <div>
                  <span className="font-bold">{card.name}:</span>{' '}
                  <span className="text-amber-700">{card.dato}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={onRestart} className="btn-loteria text-xl px-8 py-3 rounded-xl">Jugar de nuevo</button>
      </div>
    </div>
  );
}

// ─── GAME SCREEN ─────────────────────────────────────────────────────────────
function GameScreen({ onWin, onGoHome, xp, onXPChange }) {
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
  const [timeRemaining, setTimeRemaining] = useState(CALLER_TIMER_SECONDS);
  const [restartBoard, setRestartBoard] = useState(false);
  const advanceTimeoutRef = useRef(null);
  const audioRef = useRef(null);

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
    setTimeRemaining(CALLER_TIMER_SECONDS);
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
    if (gameOver || quizCard) return;
    advanceTimeoutRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) return CALLER_TIMER_SECONDS;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(advanceTimeoutRef.current);
  }, [callerIndex, gameOver, quizCard, callerKey]);

  const advanceCaller = useCallback(() => {
    setTimeRemaining(CALLER_TIMER_SECONDS);
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
      setTimeRemaining(CALLER_TIMER_SECONDS);
      setRestartBoard(true);
    }
    setQuizTablaIndex(null);
  };

  return (
    <div className="min-h-screen grain-overlay relative flex flex-col"
         style={{ background: 'linear-gradient(180deg, #3D200E 0%, #5C3317 20%, #4A2812 100%)' }}>
      <style>{styles.globalCSS}</style>

      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-2 border-b-2 border-amber-900/50">
        <button onClick={onGoHome} style={FONT_SERIF}
                className="text-lg sm:text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer text-left">
          LOTERIA BITCOIN
        </button>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-yellow-400 text-xs sm:text-sm font-bold">XP: {xp}</span>
          <span className="text-amber-300 text-xs sm:text-sm">|</span>
          <span className="text-green-400 text-xs sm:text-sm">{stats.correct}</span>
          <span className="text-red-400 text-xs sm:text-sm">{stats.wrong}</span>
          <button onClick={() => setMuted(m => !m)}
                  className="w-7 h-7 rounded-full bg-amber-800 text-amber-200 text-sm hover:bg-amber-700 transition-colors flex items-center justify-center"
                  title={muted ? 'Activar sonido' : 'Silenciar'}>
            {muted ? 'M' : 'S'}
          </button>
          <button onClick={() => setShowHelp(true)}
                  className="w-7 h-7 rounded-full bg-amber-800 text-amber-200 text-sm font-bold hover:bg-amber-700 transition-colors flex items-center justify-center">
            ?
          </button>
        </div>
      </div>

      {/* Caller */}
      <div className="p-3 sm:p-4">
        <CallerDisplay card={currentCallerCard} callerKey={callerKey} onNext={advanceCaller}
                       isOnTabla={isCurrentOnTabla} cardsRemaining={callerDeck.length - callerIndex}
                       totalCards={callerDeck.length} calledCount={calledOnTablaCount}
                       timeRemaining={timeRemaining} timerTotal={CALLER_TIMER_SECONDS} />
      </div>

      {calledOnTablaCount > 0 && (
        <div className="text-center text-amber-300 text-xs px-4 -mt-2 mb-1 animate-fadeIn">
          Tienes {calledOnTablaCount} carta{calledOnTablaCount > 1 ? 's' : ''} disponible{calledOnTablaCount > 1 ? 's' : ''} para contestar
        </div>
      )}

      {/* Tabla */}
      <div className="flex-1 flex items-start justify-center px-2 sm:px-4 pb-4">
        <div className="w-full max-w-md">
          <div className="tile-border rounded-xl p-2 sm:p-3 wood-texture">
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
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
      </div>

      {quizCard && <QuizModal card={quizCard} onAnswer={handleQuizAnswer} />}
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}

// ─── APP ROOT ────────────────────────────────────────────────────────────────
function App() {
  const [screen, setScreen] = useState('start');
  const [winData, setWinData] = useState(null);
  const [xp, setXP] = useState(getStoredXP());

  const handleXPChange = (delta) => {
    setXP(prev => {
      const next = Math.max(0, prev + delta);
      setStoredXP(next);
      return next;
    });
  };

  const handleStart = () => setScreen('lessons');
  const handleLessonsFinish = () => setScreen('levelSelect');
  const handleSelectLevel = (levelId) => setScreen('game');
  const handleWin = (stats, encounteredCards) => {
    setWinData({ stats, encounteredCards });
    setScreen('win');
  };
  const handleGoHome = () => {
    setWinData(null);
    setScreen('start');
  };

  switch (screen) {
    case 'start':
      return <StartScreen onStart={handleStart} xp={xp} />;
    case 'lessons':
      return <LessonScreen onFinish={handleLessonsFinish} />;
    case 'levelSelect':
      return <LevelSelectScreen onSelectLevel={handleSelectLevel} onGoHome={handleGoHome} xp={xp} />;
    case 'game':
      return <GameScreen onWin={handleWin} onGoHome={handleGoHome} xp={xp} onXPChange={handleXPChange} />;
    case 'win':
      return <WinScreen stats={winData.stats} encounteredCards={winData.encounteredCards} onRestart={handleGoHome} xp={xp} />;
    default:
      return null;
  }
}

// ─── RENDER ──────────────────────────────────────────────────────────────────
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
