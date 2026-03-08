export const CARD_DECK = [
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

export const LESSON_CHAPTERS = [
  { title: "¿Qué es Bitcoin?", cardIds: [1, 2, 3, 4, 5] },
  { title: "¿Cómo funciona la red?", cardIds: [6, 7, 8, 9, 10] },
  { title: "Escasez y emisión", cardIds: [11, 12, 36] },
  { title: "Seguridad y claves", cardIds: [13, 14, 15, 16, 17, 18] },
  { title: "Pagos y confirmaciones", cardIds: [19, 20, 21] },
  { title: "Principios de Bitcoin", cardIds: [22, 23, 24, 25] },
  { title: "Cultura y comunidad", cardIds: [26, 27, 28] },
  { title: "Mercado y economía", cardIds: [29, 30, 31, 32, 33, 34, 35] }
];

export const LESSONS = CARD_DECK.map(card => ({
  id: card.id,
  title: card.name,
  icon: card.icon,
  image: card.image,
  text: card.leccion
}));
