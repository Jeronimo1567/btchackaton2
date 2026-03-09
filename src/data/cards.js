export const CARD_DECK = [
  {
    id: 1, name: "El Bitcoin", icon: "₿",
    image: "images/el bitcoin.png", audio: "audio/el bitcoin.mp3",
    riddle: "Dinero sin banco, libre y digital,\nuna red lo respalda de forma global.\n¡El Bitcoin!",
    question: "¿Quién controla la red de Bitcoin?",
    options: [
      "Un banco central que regula todas las transacciones digitales",
      "Una empresa de tecnología con oficinas en varios países",
      "Miles de computadoras distribuidas que operan sin una autoridad central",
      "El gobierno federal que supervisa todas las operaciones financieras"
    ],
    correctAnswer: 2,
    dato: "Bitcoin fue creado en 2009 por una persona o grupo bajo el seudónimo Satoshi Nakamoto. A la fecha, nadie sabe quién es.",
    explicacion: "Bitcoin no lo controla ningún banco ni gobierno, sino una red descentralizada de computadoras repartidas por todo el mundo.",
    leccion: "Bitcoin es un tipo de dinero que solo existe en internet. No viene en billetes ni monedas, y no lo controla ningún banco ni gobierno, sino miles de computadoras conectadas en muchos países."
  },
  {
    id: 2, name: "El Satoshi", icon: "sat",
    image: "images/el satoshi.png", audio: "audio/el satoshi.mp3",
    riddle: "Tan pequeño como un grano de arena,\npero poderoso, su nombre resuena.\n¡El Satoshi!",
    question: "¿En cuántas partes se puede dividir un bitcoin?",
    options: [
      "En cien partes iguales, similares a los centavos tradicionales",
      "En mil fracciones pequeñas que se conocen como bits",
      "En diez mil partes que facilitan las compras en línea",
      "En cien millones de unidades diminutas llamadas satoshis"
    ],
    correctAnswer: 3,
    dato: "El nombre 'satoshi' viene del creador anónimo de Bitcoin, Satoshi Nakamoto. 1 sat = 0.00000001 BTC.",
    explicacion: "Un bitcoin se divide en 100 millones de satoshis, permitiendo enviar cantidades extremadamente pequeñas de valor.",
    leccion: "Así como un peso se divide en centavos, un bitcoin se divide en 100 millones de satoshis. Esto permite comprar o enviar cantidades muy pequeñas de bitcoin sin necesidad de tener uno entero."
  },
  {
    id: 3, name: "La Blockchain", icon: "⛓️",
    image: "images/la blockchain.png", audio: "audio/La blockchain.mp3",
    riddle: "Libro gigante que todos pueden ver,\nbloques encadenados que nadie ha de romper.\n¡La Blockchain!",
    question: "¿Qué es la blockchain de Bitcoin?",
    options: [
      "Un programa de correo electrónico cifrado para enviar mensajes seguros",
      "Un registro público y permanente donde se anotan todas las transacciones",
      "Una base de datos privada que administra un solo banco central",
      "Un sitio web donde se compran y venden productos con descuento"
    ],
    correctAnswer: 1,
    dato: "La blockchain de Bitcoin ha funcionado sin interrupción desde el 3 de enero de 2009, registrando cada transacción realizada.",
    explicacion: "La blockchain es un registro público y permanente de todas las transacciones, organizado en bloques conectados entre sí.",
    leccion: "Imagina un libro contable gigante y público donde se anotan todas las operaciones con bitcoin. Cada página nueva es un 'bloque', y todas las páginas unidas forman la 'cadena de bloques'."
  },
  {
    id: 4, name: "El Bloque", icon: "🧱",
    image: "images/el bloque.png", audio: "audio/el bloque.mp3",
    riddle: "Ladrillo a ladrillo se va construyendo,\ntransacciones guarda, cadenas tejiendo.\n¡El Bloque!",
    question: "¿Qué contiene un bloque en la red de Bitcoin?",
    options: [
      "Un grupo de transacciones recientes verificadas y añadidas a la cadena",
      "Un archivo con fotografías y documentos personales de cada usuario",
      "Un programa de seguridad que protege a las computadoras de virus",
      "Una moneda digital alternativa que funciona de forma independiente al bitcoin"
    ],
    correctAnswer: 0,
    dato: "Cada bloque contiene en promedio unas 2,000 transacciones y se mina aproximadamente cada 10 minutos.",
    explicacion: "Un bloque agrupa muchas transacciones y se conecta a los anteriores para formar la cadena de bloques.",
    leccion: "Un bloque es como una página de un libro: junta muchas operaciones de envío de bitcoin y luego se pega a las páginas anteriores para que nadie pueda cambiar lo que ya se escribió."
  },
  {
    id: 5, name: "La Transacción", icon: "💸",
    image: "images/la transaccion.png", audio: "audio/la transaccion.mp3",
    riddle: "De una dirección a otra viaja el valor,\nfirmada y sellada con todo rigor.\n¡La Transacción!",
    question: "¿Qué sucede cuando se hace una transacción de Bitcoin?",
    options: [
      "Se crea un nuevo bitcoin dentro de la red cada vez",
      "Se publica un mensaje visible en todas las redes sociales",
      "Se envían bitcoins de una dirección a otra dentro de la red",
      "Se verifica la identidad completa de cada usuario que participa"
    ],
    correctAnswer: 2,
    dato: "La primera transacción entre dos personas fue cuando Satoshi envió 10 BTC a Hal Finney el 12 de enero de 2009.",
    explicacion: "Una transacción es el envío de bitcoin de una dirección a otra, usando direcciones únicas en vez de cuentas bancarias.",
    leccion: "Es el acto de mandar bitcoin de una dirección a otra. Funciona parecido a una transferencia bancaria, pero en vez de cuentas de banco se usan direcciones de Bitcoin."
  },
  {
    id: 6, name: "El Minero", icon: "⛏️",
    image: "images/el minero.png", audio: "audio/el_minero.mp3",
    riddle: "Con sudor digital y poder de cómputo,\nbusca el número mágico, ¡nunca está difunto!\n¡El Minero!",
    question: "¿Qué hacen los mineros en la red de Bitcoin?",
    options: [
      "Diseñan y programan actualizaciones nuevas para el software de Bitcoin",
      "Compiten resolviendo problemas matemáticos para validar y ordenar transacciones",
      "Administran cuentas bancarias vinculadas a los usuarios de la red digital",
      "Crean criptomonedas alternativas para diversificar las opciones en el mercado"
    ],
    correctAnswer: 1,
    dato: "Actualmente se usan máquinas ASIC especializadas para minar. El primer minero en resolver el problema recibe la recompensa.",
    explicacion: "Los mineros son computadoras que compiten resolviendo problemas matemáticos para añadir bloques y recibir bitcoins como recompensa.",
    leccion: "Los mineros son computadoras especiales que compiten resolviendo problemas matemáticos. Al lograrlo, ayudan a ordenar las transacciones en bloques y, como premio, reciben nuevos bitcoins."
  },
  {
    id: 7, name: "El Hashrate", icon: "#",
    image: "images/el hashrate.png", audio: "audio/el hashrate.mp3",
    riddle: "Fuerza bruta de millones de máquinas,\nprotegiendo la red con sus rutinas.\n¡El Hashrate!",
    question: "¿Qué representa el hashrate en la red de Bitcoin?",
    options: [
      "El poder de cómputo total que aportan todos los mineros activos",
      "La velocidad de conexión a internet que tiene cada nodo individual",
      "El precio actual del bitcoin en los principales mercados internacionales del mundo",
      "La cantidad de nuevos usuarios que se registran en la red diariamente"
    ],
    correctAnswer: 0,
    dato: "El hashrate de Bitcoin ha crecido exponencialmente. A más hashrate, más segura es la red contra ataques.",
    explicacion: "El hashrate mide el poder de cómputo total de la red; cuanto más alto, más segura es contra ataques.",
    leccion: "Es la fuerza de todas las computadoras mineras trabajando juntas. Cuanto más poder de cómputo hay en la red, más difícil es para alguien atacarla o engañarla."
  },
  {
    id: 8, name: "El Nodo", icon: "🖧",
    image: "images/el nodo.png", audio: "audio/el nodo.mp3",
    riddle: "Centinela de la red, vigila sin cesar,\ninformación comparte sin cobrar.\n¡El Nodo!",
    question: "¿Qué función cumple un nodo en la red de Bitcoin?",
    options: [
      "Genera nuevas criptomonedas alternativas de forma automática y constante en la red",
      "Envía promociones y publicidad a todos los usuarios conectados a Bitcoin",
      "Controla las decisiones financieras importantes de todos los participantes activos",
      "Almacena, verifica y comparte la información de transacciones con otros nodos"
    ],
    correctAnswer: 3,
    dato: "Cualquier persona puede correr un nodo desde su casa. Hay más de 15,000 nodos activos en el mundo.",
    explicacion: "Un nodo se conecta a la red, recibe y verifica transacciones, y comparte esa información con otras computadoras.",
    leccion: "Un nodo es una computadora que se conecta a la red de Bitcoin. Recibe información, la verifica y la comparte con otras computadoras, ayudando a que la red no dependa de un solo lugar."
  },
  {
    id: 9, name: "La Dificultad", icon: "📈",
    image: "images/la dificultad.png", audio: "audio/la dificultad.mp3",
    riddle: "Sube y baja como la marea,\npara que el bloque a tiempo se crea.\n¡La Dificultad!",
    question: "¿Para qué sirve el ajuste de dificultad en Bitcoin?",
    options: [
      "Para aumentar el precio del bitcoin cada vez que sube la demanda",
      "Para mantener el tiempo entre bloques siempre cerca de diez minutos",
      "Para eliminar a los mineros que no tienen suficiente poder de cómputo",
      "Para generar más bitcoins cuando hay muchos usuarios en la red activa"
    ],
    correctAnswer: 1,
    dato: "El ajuste ocurre automáticamente cada 2,016 bloques, aproximadamente cada 2 semanas, sin intervención humana.",
    explicacion: "El sistema se autoajusta para que los bloques tarden siempre cerca de 10 minutos, sin importar cuántos mineros haya.",
    leccion: "Como la cantidad de mineros cambia constantemente, el sistema se autoajusta cada cierto tiempo para que los bloques tarden siempre alrededor de 10 minutos, sin importar cuántas computadoras estén trabajando."
  },
  {
    id: 10, name: "El Halving", icon: "✂️",
    image: "images/el halving.png", audio: "audio/el halving.mp3",
    riddle: "Cada cuatro años la recompensa se parte,\ny el bitcoin escasea, ¡es todo un arte!\n¡El Halving!",
    question: "¿Qué ocurre durante un halving en la red de Bitcoin?",
    options: [
      "Se duplica la cantidad total de bitcoins que hay en circulación",
      "Se eliminan la mitad de todos los nodos que están activos actualmente",
      "La recompensa que reciben los mineros por cada bloque se reduce a la mitad",
      "Se borran las transacciones más antiguas para liberar espacio en los bloques"
    ],
    correctAnswer: 2,
    dato: "El último halving fue en abril de 2024, reduciendo la recompensa a 3.125 BTC por bloque.",
    explicacion: "Cada ~4 años la recompensa de los mineros se reduce a la mitad, haciendo que se creen cada vez menos bitcoins nuevos.",
    leccion: "Cada aproximadamente 4 años, la cantidad de nuevos bitcoins que reciben los mineros se reduce a la mitad. Esto hace que con el tiempo se creen cada vez menos bitcoins nuevos."
  },
  {
    id: 11, name: "Los 21 Millones", icon: "21M",
    image: "images/los 21 m.png", audio: "audio/los 21 millones.mp3",
    riddle: "Veintiún millones y ni uno más,\nescasez digital que no tiene igual.\n¡Los 21 Millones!",
    question: "¿Cuál es el límite máximo de bitcoins que existirán?",
    options: [
      "Solo pueden existir un máximo de veintiún millones de bitcoins en total",
      "No existe ningún límite y se pueden seguir creando de forma ilimitada",
      "El límite es de cien millones de unidades que se crean gradualmente",
      "Se permite un máximo de un millón de bitcoins en toda la red"
    ],
    correctAnswer: 0,
    dato: "Se estima que el último bitcoin se minará alrededor del año 2140. Ya se han minado más del 93% del total.",
    explicacion: "Bitcoin fue diseñado para que nunca existan más de 21 millones, a diferencia de las monedas de gobiernos que se imprimen sin límite.",
    leccion: "El programa de Bitcoin está diseñado para que nunca existan más de 21 millones de bitcoins. Esto lo hace diferente a las monedas de los gobiernos, que se pueden imprimir sin límite."
  },
  {
    id: 12, name: "La Firma Digital", icon: "✍️",
    image: "images/la firma digital.png", audio: "audio/la firma digital.mp3",
    riddle: "Sin pluma ni papel, tu identidad sella,\ncon matemáticas puras, tu firma es bella.\n¡La Firma Digital!",
    question: "¿Para qué sirve la firma digital en una transacción?",
    options: [
      "Para decorar la transacción con un sello gráfico visible para todos",
      "Para cifrar el monto enviado y ocultarlo de los demás usuarios",
      "Para identificar públicamente al minero que se encargó de procesar la operación",
      "Para demostrar que el dueño autorizó el envío sin revelar su clave secreta"
    ],
    correctAnswer: 3,
    dato: "Bitcoin usa el algoritmo ECDSA para crear firmas digitales únicas e infalsificables para cada transacción.",
    explicacion: "La firma digital prueba matemáticamente que el dueño autorizó la transacción sin necesidad de revelar su clave privada.",
    leccion: "Es como una firma con pluma, pero hecha con matemáticas. Sirve para demostrar que quien envía los bitcoins realmente tiene permiso para moverlos, sin necesidad de mostrar su clave secreta."
  },
  {
    id: 13, name: "La Private Key", icon: "🔑",
    image: "images/private key (2).png", audio: "audio/la private key.mp3",
    riddle: "Secreto guardado que nadie ha de ver,\nsin ella tus monedas no puedes mover.\n¡La Private Key!",
    question: "¿Por qué es tan importante proteger la clave privada?",
    options: [
      "Porque solo sirve para personalizar la apariencia visual de la cartera digital",
      "Porque quien la conozca puede gastar todos los bitcoins que están asociados",
      "Porque únicamente los mineros la utilizan para poder validar los nuevos bloques",
      "Porque es información pública que cualquier persona puede consultar en la red"
    ],
    correctAnswer: 1,
    dato: "Una clave privada es un número de 256 bits. Hay más combinaciones posibles que átomos en el universo observable.",
    explicacion: "La clave privada es como una contraseña muy larga; quien la conoce puede gastar los bitcoins asociados a ella.",
    leccion: "Es un código secreto, como una contraseña extremadamente larga. Quien la conozca puede gastar los bitcoins asociados, por eso jamás debe compartirse ni guardarse en lugares inseguros."
  },
  {
    id: 14, name: "La Public Key", icon: "🔓",
    image: "images/public key.png", audio: "audio/la public key.mp3",
    riddle: "De lo secreto nace lo visible,\ncomprobar sin gastar, eso es posible.\n¡La Public Key!",
    question: "¿Qué permite hacer la clave pública de Bitcoin?",
    options: [
      "Gastar directamente los bitcoins almacenados en cualquier dirección de la red",
      "Minar nuevos bloques de forma más rápida y eficiente que otros nodos",
      "Verificar firmas y generar direcciones para recibir bitcoin sin poder gastarlo",
      "Acceder a las claves privadas de otros usuarios conectados a la red"
    ],
    correctAnswer: 2,
    dato: "Es matemáticamente fácil crear la clave pública desde la privada, pero imposible hacer el proceso inverso.",
    explicacion: "La clave pública se genera a partir de la privada y sirve para verificar firmas y crear direcciones de recepción.",
    leccion: "A partir de la clave privada se crea otra clave que sí se puede mostrar. Sirve para verificar firmas y para generar direcciones donde recibir bitcoin, pero no permite gastar el dinero."
  },
  {
    id: 15, name: "La Seed Phrase", icon: "🌱",
    image: "images/seed phrase.png", audio: "audio/la seed phrase.mp3",
    riddle: "Doce palabras mágicas que guardan tu tesoro,\nsi las pierdes, adiós a tu oro.\n¡La Seed Phrase!",
    question: "¿Para qué se utiliza la seed phrase en Bitcoin?",
    options: [
      "Para recuperar tus bitcoins en otro dispositivo si pierdes el acceso original",
      "Para iniciar sesión en tu correo electrónico de manera segura y privada",
      "Para aumentar la velocidad de minado dentro de la red de Bitcoin",
      "Para enviar mensajes cifrados entre los usuarios conectados a la misma red"
    ],
    correctAnswer: 0,
    dato: "Las seed phrases usan el estándar BIP-39 con 2,048 palabras posibles. La combinación de 12 palabras da 2^128 posibilidades.",
    explicacion: "La seed phrase es una lista de palabras que representan tus claves; con ellas puedes recuperar tus bitcoins en cualquier dispositivo.",
    leccion: "Es una lista de palabras sencillas (por ejemplo, 12 o 24) que representan tus claves. Si se pierde tu teléfono o dispositivo, con esas palabras puedes recuperar tus bitcoins en otro aparato."
  },
  {
    id: 16, name: "La Cartera Fría", icon: "🧊",
    image: "images/cartera fria.png", audio: "audio/la cartera fria.mp3",
    riddle: "Sin conexión al mundo, tus claves protege,\nen frío y en silencio, tu tesoro recoge.\n¡La Cartera Fría!",
    question: "¿Qué hace especial a una cartera fría de Bitcoin?",
    options: [
      "Permite minar bitcoins de forma automática sin usar conexión a internet",
      "Se conecta al banco central para poder verificar cada transacción realizada",
      "Funciona como una computadora de escritorio con funciones financieras avanzadas integradas",
      "Guarda las claves privadas sin conexión a internet para mayor seguridad"
    ],
    correctAnswer: 3,
    dato: "Las carteras frías más conocidas son Ledger, Trezor y ColdCard. Nunca exponen las claves privadas a internet.",
    explicacion: "Una cartera fría almacena tus claves privadas completamente desconectada de internet, minimizando el riesgo de hackeo.",
    leccion: "Es un dispositivo o método que guarda tus claves privadas sin conexión a internet. Al no estar conectado, se reduce mucho el riesgo de que alguien las robe mediante virus o hackeos."
  },
  {
    id: 17, name: "Lightning Network", icon: "⚡",
    image: "images/lightning.png", audio: "audio/la lightning network.mp3",
    riddle: "Veloz como relámpago, pago instantáneo,\nmicrotransacciones sin ningún engaño.\n¡Lightning!",
    question: "¿Cuál es la ventaja principal de la Lightning Network?",
    options: [
      "Crea nuevas criptomonedas alternativas dentro de la red principal de Bitcoin",
      "Permite hacer pagos casi instantáneos con comisiones extremadamente bajas y eficientes",
      "Reemplaza por completo la cadena de bloques original de la red Bitcoin",
      "Funciona únicamente con monedas tradicionales como dólares, euros o pesos nacionales"
    ],
    correctAnswer: 1,
    dato: "Lightning Network puede procesar millones de transacciones por segundo, comparado con ~7 en la capa base de Bitcoin.",
    explicacion: "Lightning Network funciona encima de Bitcoin y permite pagos rápidos y baratos, ideales para el uso cotidiano.",
    leccion: "Es una tecnología que funciona encima de Bitcoin y permite hacer muchos pagos pequeños en segundos y con comisiones muy bajas. Es ideal para compras del día a día."
  },
  {
    id: 18, name: "Las Fees", icon: "🏷️",
    image: "images/Las Fees.png", audio: "audio/las fees.mp3",
    riddle: "Pago al minero por su dedicación,\nquien más ofrece, tiene priorización.\n¡Las Fees!",
    question: "¿Por qué existen comisiones en las transacciones de Bitcoin?",
    options: [
      "Porque un banco central decide cuánto cuesta cada operación realizada individualmente",
      "Porque el valor del bitcoin se devalúa con cada envío que se hace",
      "Porque los mineros priorizan las transacciones que pagan una mayor comisión ofrecida",
      "Porque el gobierno cobra un impuesto obligatorio por cada transferencia digital hecha"
    ],
    correctAnswer: 2,
    dato: "Las comisiones varían según la demanda de espacio en los bloques. En Lightning Network las comisiones son casi nulas.",
    explicacion: "Los mineros priorizan las transacciones que pagan más comisión, por eso a veces el costo varía según la demanda.",
    leccion: "Cada vez que mandas bitcoin, pagas una pequeña cantidad a los mineros. Ellos priorizan las transacciones que pagan más comisión, por eso a veces pagas más si quieres rapidez."
  },
  {
    id: 19, name: "La Descentralización", icon: "🌐",
    image: "images/descentralizacion.png", audio: "audio/la descentralizacion.mp3",
    riddle: "Sin rey ni corona que mande el destino,\nmiles de nodos trazan el camino.\n¡La Descentralización!",
    question: "¿Qué significa que la red de Bitcoin sea descentralizada?",
    options: [
      "Que miles de computadoras independientes mantienen la red sin una autoridad central",
      "Que tiene muchas oficinas y sucursales físicas distribuidas por todo el mundo",
      "Que solo funciona correctamente en los países donde el gobierno lo ha permitido",
      "Que un director ejecutivo es quien toma todas las decisiones clave del sistema"
    ],
    correctAnswer: 0,
    dato: "Bitcoin opera en más de 100 países simultáneamente. No hay CEO, no hay oficina central, no hay servidor principal.",
    explicacion: "No existe una oficina central; miles de computadoras mantienen la red, haciendo muy difícil que alguien la cierre.",
    leccion: "No existe una oficina central de Bitcoin. Miles de computadoras en muchos países mantienen la red funcionando, lo que hace muy difícil que un solo gobierno o empresa pueda cerrarla o controlarla."
  },
  {
    id: 20, name: "La Inmutabilidad", icon: "🪨",
    image: "images/la inmulabilidad.png", audio: "audio/la inmutabilidad.mp3",
    riddle: "Lo escrito, escrito está, nadie lo puede borrar,\ncomo piedra tallada, por siempre va a quedar.\n¡La Inmutabilidad!",
    question: "¿Por qué es casi imposible modificar una transacción ya confirmada?",
    options: [
      "Porque el creador de Bitcoin protege personalmente cada operación que se realiza",
      "Porque se almacena en un búnker físico protegido por guardias de seguridad",
      "Porque tiene una contraseña secreta extremadamente compleja que nadie puede descifrar jamás",
      "Porque cambiarla requeriría rehacer una cantidad enorme de trabajo computacional acumulado"
    ],
    correctAnswer: 3,
    dato: "Para alterar un bloque antiguo, un atacante necesitaría más del 51% del poder de cómputo de toda la red.",
    explicacion: "Una vez confirmada, modificar una transacción requeriría rehacer un trabajo computacional enorme, lo que la hace prácticamente irreversible.",
    leccion: "Una vez que una transacción queda registrada y confirmada en la cadena de bloques, es prácticamente imposible modificarla. Hacerlo requeriría rehacer una cantidad enorme de trabajo de cómputo."
  },
  {
    id: 21, name: "Resistencia a la Censura", icon: "🛡️",
    image: "images/resistencia a la censura.png", audio: "audio/la resistencia a la censura.mp3",
    riddle: "Ni gobierno ni empresa tu envío detendrá,\nmientras sigas las reglas, nadie te parará.\n¡Resistencia a la censura!",
    question: "¿Qué significa la resistencia a la censura en Bitcoin?",
    options: [
      "Que se puede publicar cualquier tipo de contenido libremente en internet abierto",
      "Que nadie puede bloquear una transacción válida por motivos políticos o personales",
      "Que no existen leyes ni regulaciones que se puedan aplicar a esta red",
      "Que todas las transacciones fuera de la ley están permitidas dentro del sistema"
    ],
    correctAnswer: 1,
    dato: "Bitcoin ha sido usado por personas en países con controles de capital estrictos para preservar sus ahorros.",
    explicacion: "Mientras sigas las reglas del protocolo, nadie puede bloquear tu transacción; no hay un 'botón de pausa' central.",
    leccion: "Mientras sigas las reglas del sistema, nadie puede bloquear tu transacción por razones políticas, personales o económicas. Es como un sistema de pagos donde no existe un 'botón de pausa' central."
  },
  {
    id: 22, name: "La Autocustodia", icon: "🏦",
    image: "images/la autocustodia.png", audio: "audio/la autocustodia.mp3",
    riddle: "Tu dinero en tus manos, sin pedir permiso,\nni banco ni gobierno pueden darte un aviso.\n¡La Autocustodia!",
    question: "¿Qué diferencia la autocustodia de usar un banco tradicional?",
    options: [
      "No existe ninguna diferencia real porque ambos sistemas funcionan de forma idéntica",
      "El banco siempre ofrece más seguridad y protección que cualquier otra alternativa disponible",
      "Tú guardas directamente tus claves y controlas tus fondos sin ningún intermediario",
      "Solo expertos en tecnología avanzada pueden practicar la autocustodia de forma segura"
    ],
    correctAnswer: 2,
    dato: "El lema popular es: 'Not your keys, not your coins' (Si no tienes las claves, no son tus monedas).",
    explicacion: "Con la autocustodia, tú guardas las claves y eres dueño directo de tus fondos, sin que un banco pueda congelar tu cuenta.",
    leccion: "En lugar de dejar tu dinero en un banco que puede congelar o limitar tu cuenta, con Bitcoin tú guardas las claves y eres directamente dueño de tus fondos, sin intermediarios."
  },
  {
    id: 23, name: "El Cypherpunk", icon: "🕶️",
    image: "images/El Cypherpunk.png", audio: "audio/el cypherpunk.mp3",
    riddle: "Rebeldes digitales con código y razón,\nprivacidad y libertad, su gran misión.\n¡El Cypherpunk!",
    question: "¿Qué defendían los cypherpunks antes de que existiera Bitcoin?",
    options: [
      "El uso de criptografía para proteger la privacidad y la libertad individual",
      "La censura total de internet para proteger a los ciudadanos más vulnerables",
      "Que los gobiernos controlaran completamente todo el dinero digital de los usuarios",
      "La prohibición de computadoras personales para evitar posibles delitos informáticos graves"
    ],
    correctAnswer: 0,
    dato: "Hal Finney, Nick Szabo y Adam Back, todos cypherpunks, contribuyeron con ideas que inspiraron la creación de Bitcoin.",
    explicacion: "Los cypherpunks defendían la encriptación para proteger la privacidad, la libertad de expresión y el derecho al dinero libre.",
    leccion: "Fueron un grupo de personas que, desde antes de Bitcoin, defendían la idea de usar tecnologías de encriptación para proteger la privacidad, la libertad de expresión y el derecho a tener dinero libre."
  },
  {
    id: 24, name: "HODL", icon: "💎",
    image: "images/hodl.png", audio: "audio/el hodl.mp3",
    riddle: "Comprar y guardar sin vender jamás,\npaciencia de hierro que rinde de más.\n¡HODL!",
    question: "¿En qué consiste la estrategia conocida como HODL?",
    options: [
      "Vender bitcoin todos los días para obtener ganancias rápidas e inmediatas",
      "Comprar únicamente cuando el precio del bitcoin está en sus máximos históricos",
      "Invertir en muchas criptomonedas diferentes para poder diversificar todo el riesgo posible",
      "Comprar bitcoin y mantenerlo a largo plazo sin vender aunque baje el precio"
    ],
    correctAnswer: 3,
    dato: "El término nació de un error tipográfico al escribir 'HOLD' en un foro de Bitcoin en 2013.",
    explicacion: "HODL consiste en mantener bitcoin a largo plazo, sin vender por pánico cuando el precio baja temporalmente.",
    leccion: "Consiste en comprar bitcoin y no venderlo aunque el precio baje mucho, manteniéndolo durante años con la confianza de que su valor crecerá a largo plazo."
  },
  {
    id: 25, name: "Bear Market", icon: "🐻",
    image: "images/bear market.png", audio: "audio/el bear market.mp3",
    riddle: "El oso ruge y el precio se cae,\nmiedo y malas noticias, todo se deshace.\n¡El Bear Market!",
    question: "¿Qué caracteriza a un bear market en el mundo Bitcoin?",
    options: [
      "El precio sube sin parar durante varios meses generando mucha euforia",
      "El precio baja durante un período prolongado acompañado de desánimo general",
      "Es un mercado exclusivo donde solo pueden participar los grandes inversionistas institucionales",
      "La red de Bitcoin se detiene temporalmente por razones de mantenimiento técnico"
    ],
    correctAnswer: 1,
    dato: "Los bear markets son cíclicos en Bitcoin. Históricamente, cada caída ha sido seguida por nuevos máximos.",
    explicacion: "En un bear market el precio baja durante meses; suele haber desánimo, pero algunos lo ven como oportunidad para acumular.",
    leccion: "Son etapas en las que el precio de bitcoin baja durante meses o se mantiene bajo. Suelen estar llenas de malas noticias y desánimo, pero también son momentos en que algunos deciden acumular."
  },
  {
    id: 26, name: "Bull Market", icon: "🐂",
    image: "images/bull market.png", audio: "audio/el bull market.mp3",
    riddle: "El toro embiste y el precio se eleva,\neuforia y entusiasmo, la manada se lleva.\n¡El Bull Market!",
    question: "¿Qué sucede durante un bull market de Bitcoin?",
    options: [
      "El precio sube con fuerza y atrae a muchas personas nuevas e interesadas",
      "La mayoría de los usuarios deciden vender todo su bitcoin muy rápidamente",
      "La red se apaga temporalmente para poder realizar actualizaciones de seguridad importantes",
      "Los mineros dejan de trabajar porque las recompensas ya no son suficientes"
    ],
    correctAnswer: 0,
    dato: "Durante bull markets, el interés público en Bitcoin se dispara y aparecen muchas noticias positivas en los medios.",
    explicacion: "En un bull market el precio sube fuerte, aparecen noticias positivas y entusiasmo, pero también errores por euforia.",
    leccion: "Son etapas en las que el precio sube con fuerza y muchas personas nuevas se interesan en Bitcoin. Aparecen noticias positivas y entusiasmo, pero también errores por euforia y codicia."
  },
  {
    id: 27, name: "Proof of Work", icon: "💪",
    image: "images/proof of work.png", audio: "audio/proofofwork.mp3",
    riddle: "Sudor y energía el minero invierte,\npara asegurar la red y hacerla fuerte.\n¡Proof of Work!",
    question: "¿Qué protege el mecanismo de prueba de trabajo?",
    options: [
      "Las contraseñas personales de todos los usuarios que están registrados en la red",
      "Los servidores centrales de la empresa encargada de administrar toda la red",
      "La seguridad de la red de Bitcoin haciendo que atacarla sea extremadamente costoso",
      "Las redes sociales donde los usuarios comentan y publican información sobre criptomonedas"
    ],
    correctAnswer: 2,
    dato: "La prueba de trabajo convierte energía en seguridad. Atacar la red costaría miles de millones de dólares.",
    explicacion: "Los mineros gastan energía y cómputo para proteger la red; este esfuerzo hace que atacar Bitcoin sea carísimo.",
    leccion: "Es el mecanismo en el que los mineros gastan energía y poder de cómputo para proteger la red. Gracias a este esfuerzo, atacar o falsificar la historia de Bitcoin sería carísimo y muy difícil."
  },
  {
    id: 28, name: "Satoshi Nakamoto", icon: "🎭",
    image: "images/satoshi nakamoto.png", audio: null,
    riddle: "Nadie conoce su rostro ni su voz,\npero cambió el dinero con su atroz.\n¡Satoshi Nakamoto!",
    question: "¿Quién es Satoshi Nakamoto en la historia de Bitcoin?",
    options: [
      "El director de una empresa privada que administra la red de Bitcoin",
      "El seudónimo del creador anónimo que diseñó, programó y lanzó Bitcoin en 2009",
      "Un programador conocido públicamente que trabaja mejorando la red de Ethereum",
      "El presidente del banco central que autorizó las criptomonedas a nivel mundial"
    ],
    correctAnswer: 1,
    dato: "Satoshi Nakamoto publicó el whitepaper de Bitcoin el 31 de octubre de 2008 y desapareció en 2011 sin revelar su identidad.",
    explicacion: "Satoshi Nakamoto es el seudónimo del creador de Bitcoin. Publicó el diseño, escribió el código y luego desapareció sin revelar quién era.",
    leccion: "Es el nombre ficticio usado por la persona o grupo que inventó Bitcoin. Publicó el diseño original en 2008, lanzó el software en 2009 y desapareció en 2011 sin que nadie descubriera su identidad real."
  },
  {
    id: 29, name: "Michael Saylor", icon: "🏢",
    image: "images/michael saylor.png", audio: "audio/el michael saylor.mp3",
    riddle: "Empresario convencido del oro digital,\ncon su empresa acumula de forma colosal.\n¡Michael Saylor!",
    question: "¿Por qué es conocido Michael Saylor en el mundo de Bitcoin?",
    options: [
      "Porque inventó la tecnología blockchain que se utiliza en todas las criptomonedas",
      "Porque creó la primera criptomoneda alternativa que compite directamente contra Bitcoin",
      "Porque desarrolló el protocolo Lightning Network para realizar pagos rápidos y baratos",
      "Porque lideró la compra masiva de bitcoin desde su empresa MicroStrategy como reserva"
    ],
    correctAnswer: 3,
    dato: "MicroStrategy, la empresa de Saylor, posee más de 200,000 bitcoins, siendo la empresa pública con más BTC del mundo.",
    explicacion: "Michael Saylor convirtió a su empresa MicroStrategy en la mayor tenedora corporativa de bitcoin, promoviendo su adopción institucional.",
    leccion: "Es un empresario estadounidense que se convirtió en uno de los mayores defensores de Bitcoin. A través de su empresa MicroStrategy, lideró la compra masiva de bitcoin como reserva de valor corporativa."
  }
];

export const LESSON_CHAPTERS = [
  { title: "¿Qué es Bitcoin?", cardIds: [1, 2, 3, 4, 5] },
  { title: "¿Cómo funciona la red?", cardIds: [6, 7, 8, 9, 27] },
  { title: "Escasez y emisión", cardIds: [10, 11] },
  { title: "Seguridad y claves", cardIds: [12, 13, 14, 15, 16] },
  { title: "Pagos y comisiones", cardIds: [17, 18] },
  { title: "Principios de Bitcoin", cardIds: [19, 20, 21, 22] },
  { title: "Cultura y comunidad", cardIds: [23, 24, 28, 29] },
  { title: "Mercado", cardIds: [25, 26] }
];

export const LESSONS = CARD_DECK.map(card => ({
  id: card.id,
  title: card.name,
  icon: card.icon,
  image: card.image,
  text: card.leccion
}));
