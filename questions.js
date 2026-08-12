window.CUN_QUESTIONS = [
  // SEMESTRE 1: Lógica para Ingeniería
  {
    id: "l1_q1",
    semester: 1,
    subject: "Lógica para Ingeniería",
    question: "En lógica de programación, ¿cuál es el resultado de la operación Y (AND) si evaluamos 'Verdadero Y Falso'?",
    options: [
      "Falso",
      "Verdadero",
      "No se puede calcular",
      "Indeterminado"
    ],
    correctAnswer: 0,
    explanation: "La regla de la operación lógica Y (conjunción) exige que ambas condiciones sean verdaderas para dar Verdadero. Como una de ellas es falsa ('Verdadero Y Falso'), el resultado obligatorio es Falso."
  },
  {
    id: "l1_q2",
    semester: 1,
    subject: "Lógica para Ingeniería",
    question: "En lógica de programación, ¿cuál es el resultado de la operación O (OR) si evaluamos 'Verdadero O Falso'?",
    options: [
      "Falso",
      "Verdadero",
      "Error en la operación",
      "Cero"
    ],
    correctAnswer: 1,
    explanation: "La regla de la operación lógica O (disyunción) establece que basta con que una de las dos condiciones sea verdadera para que todo el resultado sea Verdadero."
  },
  {
    id: "l1_q3",
    semester: 1,
    subject: "Lógica para Ingeniería",
    question: "Si tenemos una variable lógica 'p' que es Verdadera, ¿qué resultado obtenemos si le aplicamos la operación de negación (~p o NOT p)?",
    options: [
      "Verdadero",
      "Falso",
      "No cambia el valor",
      "Null"
    ],
    correctAnswer: 1,
    explanation: "La operación lógica de negación (NOT) simplemente invierte el valor de verdad. Si la variable es Verdadera, al negarla se convierte en Falsa."
  },
  {
    id: "l1_q4",
    semester: 1,
    subject: "Lógica para Ingeniería",
    question: "El símbolo matemático '∧' utilizado en la lógica de programación representa la operación:",
    options: [
      "Suma",
      "Negación (NOT)",
      "Conjunción (Y / AND)",
      "Disyunción (O / OR)"
    ],
    correctAnswer: 2,
    explanation: "En lógica formal, el símbolo '∧' representa la conjunción lógica, que equivale a la palabra 'Y' (o el operador 'AND' en lenguajes como Java o JavaScript)."
  },
  {
    id: "l1_q5",
    semester: 1,
    subject: "Lógica para Ingeniería",
    question: "El símbolo matemático '∨' utilizado en la lógica de programación representa la operación:",
    options: [
      "Restar",
      "Disyunción (O / OR)",
      "Conjunción (Y / AND)",
      "División"
    ],
    correctAnswer: 1,
    explanation: "En lógica proposicional, el símbolo '∨' representa la disyunción lógica, que equivale a la palabra 'O' (o el operador 'OR' en la programación)."
  },

  // SEMESTRE 1: Algoritmo y Programación
  {
    id: "ap1_q1",
    semester: 1,
    subject: "Algoritmo y Programación",
    question: "Si en un pseudocódigo definimos: x = 10 y en la siguiente línea escribimos x = x + 5, ¿cuál es el valor final de la variable x?",
    options: [
      "5",
      "10",
      "15",
      "105"
    ],
    correctAnswer: 2,
    explanation: "La instrucción es una asignación. Tomamos el valor actual de x (que es 10), le sumamos 5 (obteniendo 15) y guardamos ese nuevo resultado de vuelta en la variable x."
  },
  {
    id: "ap1_q2",
    semester: 1,
    subject: "Algoritmo y Programación",
    question: "En un diagrama de flujo, ¿qué figura geométrica se utiliza para indicar el INICIO o el FIN de un programa?",
    options: [
      "Un rectángulo",
      "Un rombo",
      "Un óvalo o elipse",
      "Un triángulo"
    ],
    correctAnswer: 2,
    explanation: "Por convención internacional, los óvalos o elipses marcan los puntos de inicio y finalización del flujo en un diagrama de procesos o algoritmos."
  },
  {
    id: "ap1_q3",
    semester: 1,
    subject: "Algoritmo y Programación",
    question: "En un diagrama de flujo, ¿qué figura geométrica se utiliza para representar un proceso o una operación matemática (como realizar una suma)?",
    options: [
      "Un círculo",
      "Un rectángulo",
      "Un rombo",
      "Una flecha"
    ],
    correctAnswer: 1,
    explanation: "El rectángulo se utiliza para cualquier acción de proceso interno, como asignación de variables, cálculos matemáticos o transformaciones de datos."
  },
  {
    id: "ap1_q4",
    semester: 1,
    subject: "Algoritmo y Programación",
    question: "En algoritmos, ¿a qué le llamamos un 'bucle infinito'?",
    options: [
      "A un programa que se ejecuta rápido.",
      "A un ciclo repetitivo que nunca termina de ejecutarse porque la condición para salir siempre es verdadera.",
      "A una variable que puede guardar infinitos números.",
      "A un error de hardware en la placa base."
    ],
    correctAnswer: 1,
    explanation: "Un bucle o ciclo infinito ocurre cuando la condición de parada del bucle nunca se vuelve falsa, provocando que el procesador ejecute las mismas instrucciones indefinidamente."
  },
  {
    id: "ap1_q5",
    semester: 1,
    subject: "Algoritmo y Programación",
    question: "Si queremos llevar la cuenta de cuántas veces se ha repetido un ciclo de código en un algoritmo, utilizamos una variable especial llamada:",
    options: [
      "Constante",
      "Contador",
      "Acumulador",
      "Interruptor"
    ],
    correctAnswer: 1,
    explanation: "Un contador es una variable que incrementa (o decrementa) su valor en una cantidad fija (generalmente +1) cada vez que se ejecuta el bloque de código de un ciclo."
  },

  // SEMESTRE 1: Fundamentos de Programación
  {
    id: "fp1_q1",
    semester: 1,
    subject: "Fundamentos de Programación",
    question: "En programación, ¿qué hace la instrucción condicional 'Si - Sino' (If - Else)?",
    options: [
      "Repite un bloque de código muchas veces.",
      "Permite al programa tomar una decisión ejecutando un código si la condición se cumple y otro diferente si no se cumple.",
      "Borra las variables del computador.",
      "Traduce el código a lenguaje binario."
    ],
    correctAnswer: 1,
    explanation: "La estructura condicional 'Si' evalúa una condición booleana. Si es verdadera, ejecuta las instrucciones del bloque principal. Si es falsa, ejecuta las instrucciones del bloque 'Sino'."
  },
  {
    id: "fp1_q2",
    semester: 1,
    subject: "Fundamentos de Programación",
    question: "Si declaramos una variable que almacena la frase 'Hola Mundo', ¿qué tipo de dato es?",
    options: [
      "Booleano (Boolean)",
      "Cadena de texto (String)",
      "Entero (Integer)",
      "Decimal (Double)"
    ],
    correctAnswer: 1,
    explanation: "Las colecciones de caracteres, palabras o textos encerrados entre comillas se conocen técnicamente en programación como Cadenas de Texto o Strings."
  },
  {
    id: "fp1_q3",
    semester: 1,
    subject: "Fundamentos de Programación",
    question: "Si declaramos una variable que únicamente puede valer Verdadero o Falso, ¿qué tipo de dato es?",
    options: [
      "Booleano (Boolean)",
      "Decimal (Float)",
      "Entero (Int)",
      "Caracter (Char)"
    ],
    correctAnswer: 0,
    explanation: "Los tipos de datos booleanos son aquellos de lógica binaria que solo admiten dos valores posibles en todo el programa: true (verdadero) o false (falso)."
  },
  {
    id: "fp1_q4",
    semester: 1,
    subject: "Fundamentos de Programación",
    question: "Si en tu código JavaScript o Python escribes: edad = 18, ¿qué acción realiza el símbolo '=' en esa línea?",
    options: [
      "Preguntar si edad es igual a 18.",
      "Asignar o guardar el valor 18 dentro de la variable edad.",
      "Sumar 18 al valor que ya tenía edad.",
      "Dividir la variable edad entre 18."
    ],
    correctAnswer: 1,
    explanation: "En la mayoría de lenguajes, el signo '=' simple representa el operador de asignación. Guarda el valor de la derecha (18) en el espacio de memoria reservado para la variable de la izquierda (edad)."
  },
  {
    id: "fp1_q5",
    semester: 1,
    subject: "Fundamentos de Programación",
    question: "¿Qué valor numérico da como resultado la operación de residuo o módulo: 10 % 3?",
    options: [
      "3",
      "0",
      "1",
      "3.33"
    ],
    correctAnswer: 2,
    explanation: "El operador de módulo (%) calcula el sobrante (residuo) de una división entera. Al dividir 10 entre 3, cabe a 3 unidades (3 * 3 = 9) y sobra 1. El resultado es ese sobrante: 1."
  },

  // SEMESTRE 1: Arquitectura del PC
  {
    id: "apc1_q1",
    semester: 1,
    subject: "Arquitectura del PC",
    question: "¿Cuál es el componente físico del computador que actúa como el 'cerebro', encargándose de procesar todos los cálculos y ejecutar las instrucciones?",
    options: [
      "El Disco Duro",
      "La Memoria RAM",
      "La Unidad Central de Procesamiento (CPU o Procesador)",
      "La Tarjeta de Sonido"
    ],
    correctAnswer: 2,
    explanation: "La CPU (Central Processing Unit) es el microchip principal del computador encargado de interpretar las instrucciones de los programas y procesar los datos de entrada para transformarlos en salida."
  },
  {
    id: "apc1_q2",
    semester: 1,
    subject: "Arquitectura del PC",
    question: "¿Qué tipo de memoria de la computadora pierde absolutamente toda su información guardada cuando se apaga o se reinicia el sistema?",
    options: [
      "El Disco Duro (HDD o SSD)",
      "La Memoria RAM",
      "La memoria USB",
      "La Tarjeta SD"
    ],
    explanation: "La memoria RAM es un tipo de almacenamiento temporal y volátil. Necesita energía eléctrica constante para mantener grabados los datos. Al apagarse, todo lo que no se guardó en el disco duro se pierde.",
    correctAnswer: 1
  },
  {
    id: "apc1_q3",
    semester: 1,
    subject: "Arquitectura del PC",
    question: "¿En cuál de los siguientes componentes se guardan los archivos de forma permanente (como fotos, música, documentos y programas) sin que se borren al apagar el equipo?",
    options: [
      "Memoria RAM",
      "Disco Duro o Unidad de Estado Sólido (HDD/SSD)",
      "Procesador (CPU)",
      "Memoria Caché"
    ],
    correctAnswer: 1,
    explanation: "Los discos duros (HDD) y unidades de estado sólido (SSD) son memorias de almacenamiento masivo no volátiles. Retienen la información grabada magnética o electrónicamente incluso sin suministro eléctrico."
  },
  {
    id: "apc1_q4",
    semester: 1,
    subject: "Arquitectura del PC",
    question: "¿Qué significan las siglas 'CPU' en la informática?",
    options: [
      "Control de Programación Único",
      "Unidad Central de Procesamiento (Central Processing Unit)",
      "Computador Personal de Usuario",
      "Cable de Conexión de Datos"
    ],
    correctAnswer: 1,
    explanation: "Las siglas provienen del inglés 'Central Processing Unit', traducido al español como la Unidad Central de Procesamiento, es decir, el microprocesador."
  },
  {
    id: "apc1_q5",
    semester: 1,
    subject: "Arquitectura del PC",
    question: "¿Qué componente físico en forma de tarjeta grande conecta y permite la comunicación directa de todos los componentes como CPU, RAM, discos y tarjetas?",
    options: [
      "La Tarjeta de Red",
      "La Fuente de Poder",
      "La Placa Madre (Motherboard o Tarjeta Principal)",
      "El Chasis del computador"
    ],
    correctAnswer: 2,
    explanation: "La Placa Madre es el circuito impreso principal al que se conectan todos los demás componentes del computador, sirviendo de vía de comunicación física mediante buses eléctricos."
  },

  // SEMESTRE 1: Informática y Convergencia Tecnológica
  {
    id: "ict1_q1",
    semester: 1,
    subject: "Informática y Convergencia Tecnológica",
    question: "¿Cuál de los siguientes servicios representa un ejemplo común de almacenamiento de archivos en la nube?",
    options: [
      "Bloc de Notas de Windows",
      "Google Drive",
      "La Papelera de Reciclaje",
      "La Memoria RAM"
    ],
    correctAnswer: 1,
    explanation: "Google Drive es una plataforma de almacenamiento en la nube, lo que significa que tus archivos se guardan en servidores remotos de Google a través de Internet, y puedes acceder a ellos desde cualquier lugar."
  },
  {
    id: "ict1_q2",
    semester: 1,
    subject: "Informática y Convergencia Tecnológica",
    question: "Cuando navegas en internet y ves el icono de un candado cerrado al lado del texto 'https://' en tu navegador, ¿qué significa?",
    options: [
      "Que el sitio web está bloqueado y no funciona.",
      "Que la conexión con el sitio es segura y la información viaja cifrada.",
      "Que estás navegando sin conexión a internet.",
      "Que el sitio es un virus garantizado."
    ],
    correctAnswer: 1,
    explanation: "El candado e HTTPS indican el uso del protocolo SSL/TLS de seguridad. Esto garantiza que los datos que envías (como contraseñas) viajan codificados e indescifrables para terceros en la red."
  },
  {
    id: "ict1_q3",
    semester: 1,
    subject: "Informática y Convergencia Tecnológica",
    question: "¿A qué le llamamos correo 'SPAM' en internet?",
    options: [
      "A los correos enviados por familiares.",
      "A los correos electrónicos no solicitados, generalmente de publicidad o maliciosos, que se envían masivamente a las bandejas de entrada.",
      "A los correos que se borran automáticamente al leerlos.",
      "Al chat en tiempo real del trabajo."
    ],
    correctAnswer: 1,
    explanation: "El correo basura o SPAM son mensajes no deseados enviados masivamente. Saturar las redes y a veces se usan para estafas o propagación de software dañino."
  },
  {
    id: "ict1_q4",
    semester: 1,
    subject: "Informática y Convergencia Tecnológica",
    question: "Si usas un programa directamente en una página web sin necesidad de instalar nada en tu PC (por ejemplo, Gmail, Canva o Netflix), estás usando un servicio en la nube de tipo:",
    options: [
      "Hardware físico",
      "SaaS (Software como Servicio)",
      "Servidor local",
      "Archivo de texto"
    ],
    correctAnswer: 1,
    explanation: "SaaS (Software as a Service) es el modelo de nube donde los programas están listos en servidores web y el usuario accede a ellos mediante un navegador, sin instalar, configurar o mantener software en su PC."
  },
  {
    id: "ict1_q5",
    semester: 1,
    subject: "Informática y Convergencia Tecnológica",
    question: "¿Qué dispositivo moderno integra perfectamente las funciones de un teléfono, reproductor de música, cámara y computador de bolsillo, demostrando la Convergencia Tecnológica?",
    options: [
      "Una calculadora de escritorio",
      "El teléfono inteligente (Smartphone)",
      "Un televisor antiguo de tubo",
      "Una cámara analógica de rollo"
    ],
    correctAnswer: 1,
    explanation: "El smartphone es el ejemplo más representativo de convergencia tecnológica: un solo dispositivo físico reúne servicios que antes requerían aparatos completamente independientes."
  },

  // SEMESTRE 2: Programación Orientada a Objetos I
  {
    id: "po1_q1",
    semester: 2,
    subject: "Programación Orientada a Objetos I",
    question: "Si tenemos un plano de diseño llamado 'Perro' y a partir de él creamos a 'Lucas' (un perro real con color negro y 3 años de edad), en programación 'Perro' es la Clase y 'Lucas' es:",
    options: [
      "Un método",
      "Una variable vacía",
      "Un Objeto (o Instancia)",
      "Una constante matemática"
    ],
    correctAnswer: 2,
    explanation: "La Clase es la plantilla teórica. El Objeto o instancia es la entidad física creada a partir de esa plantilla, con sus propias características reales y ubicación en memoria."
  },
  {
    id: "po1_q2",
    semester: 2,
    subject: "Programación Orientada a Objetos I",
    question: "En programación orientada a objetos, ¿cómo se le llama a las características de un objeto, como por ejemplo el color de pelo, el nombre y la edad de una mascota?",
    options: [
      "Acciones o funciones",
      "Atributos (o Propiedades / Variables de clase)",
      "Ciclos lógicos",
      "Comentarios del código"
    ],
    correctAnswer: 1,
    explanation: "Los atributos representan el estado o los datos que posee un objeto. Definen cómo es el objeto en particular."
  },
  {
    id: "po1_q3",
    semester: 2,
    subject: "Programación Orientada a Objetos I",
    question: "En programación orientada a objetos, ¿cómo se le llama a las funciones que definen las acciones que puede realizar un objeto (por ejemplo, ladrar(), correr() o comer() en un Perro)?",
    options: [
      "Atributos",
      "Métodos (o Comportamientos)",
      "Constructores",
      "Interfaces"
    ],
    correctAnswer: 1,
    explanation: "Los métodos son las acciones o el comportamiento de un objeto. Son funciones que operan sobre los datos (atributos) del propio objeto."
  },
  {
    id: "po1_q4",
    semester: 2,
    subject: "Programación Orientada a Objetos I",
    question: "¿Qué es el 'Constructor' en una clase de programación?",
    options: [
      "Un programa que traduce el código a lenguaje de máquina.",
      "Un método especial que se llama automáticamente al crear un objeto (con la palabra 'new') para darle valores iniciales a sus atributos.",
      "El compilador encargado de buscar errores en el código.",
      "Un botón para compilar el programa."
    ],
    correctAnswer: 1,
    explanation: "El constructor inicializa el estado de un objeto cuando este nace. En lenguajes como Java, comparte el mismo nombre que la clase."
  },
  {
    id: "po1_q5",
    semester: 2,
    subject: "Programación Orientada a Objetos I",
    question: "Si declaramos una variable dentro de una clase con el modificador de acceso 'private' (privada), ¿quién puede verla o modificarla directamente?",
    options: [
      "Cualquier otra clase del programa.",
      "Únicamente los métodos que están dentro de esa misma clase.",
      "Nadie, ni siquiera la propia clase.",
      "Cualquier usuario en internet."
    ],
    correctAnswer: 1,
    explanation: "El modificador `private` restringe el acceso al miembro de la clase a solo código que pertenezca a la misma clase, implementando el concepto de ocultamiento de datos o encapsulamiento."
  },

  // SEMESTRE 2: Redes I
  {
    id: "r1_q1",
    semester: 2,
    subject: "Redes I",
    question: "¿Qué es una dirección IP en una red de computadoras?",
    options: [
      "Una contraseña para conectarse al Wi-Fi.",
      "Un número único asignado a cada dispositivo para identificarlo y permitir su comunicación dentro de una red.",
      "El nombre de usuario de la computadora.",
      "La velocidad a la que navega el internet."
    ],
    correctAnswer: 1,
    explanation: "La dirección IP (Internet Protocol) es el identificador lógico numérico que tiene cada dispositivo en la red para saber a dónde deben enviarse los paquetes de información."
  },
  {
    id: "r1_q2",
    semester: 2,
    subject: "Redes I",
    question: "¿Qué tecnología inalámbrica de corto alcance utilizamos comúnmente en hogares y oficinas para conectar celulares y portátiles a internet sin cables?",
    options: [
      "Infrarrojo",
      "Wi-Fi",
      "Fibra Óptica",
      "Cable de Cobre"
    ],
    correctAnswer: 1,
    explanation: "El Wi-Fi es la tecnología de ondas de radio de corto alcance estándar para la interconexión inalámbrica de dispositivos de red locales a Internet."
  },
  {
    id: "r1_q3",
    semester: 2,
    subject: "Redes I",
    question: "¿Cuál es el cable de red físico más común con conector de plástico transparente (RJ45) usado para conectar computadores directamente al módem?",
    options: [
      "Cable HDMI",
      "Cable Ethernet (UTP)",
      "Cable de energía",
      "Cable de audio óptico"
    ],
    correctAnswer: 1,
    explanation: "El cable de par trenzado UTP con conectores RJ45, comúnmente llamado cable Ethernet, es el estándar para redes LAN cableadas."
  },
  {
    id: "r1_q4",
    semester: 2,
    subject: "Redes I",
    question: "En una red con topología de Estrella, todas las computadoras de la red se conectan directamente a un dispositivo central común que distribuye los datos, llamado:",
    options: [
      "Procesador",
      "Switch (o Conmutador)",
      "Disco de red",
      "Impresora"
    ],
    correctAnswer: 1,
    explanation: "El Switch centraliza las conexiones en una topología de estrella, recibiendo tramas de datos y enviándolas únicamente al puerto del equipo destinatario."
  },
  {
    id: "r1_q5",
    semester: 2,
    subject: "Redes I",
    question: "¿Qué servicio o protocolo de red se encarga de traducir nombres fáciles (como www.cun.edu.co) a sus direcciones IP numéricas correspondientes?",
    options: [
      "El Bus del sistema",
      "DNS (Sistema de Nombres de Dominio)",
      "El navegador web",
      "El protocolo FTP"
    ],
    correctAnswer: 1,
    explanation: "El DNS funciona como la 'agenda de contactos' de internet, permitiendo a los humanos escribir nombres textuales fáciles y traduciéndolos a las IPs numéricas que entienden las máquinas."
  },

  // SEMESTRE 2: Cálculo Diferencial
  {
    id: "cd2_q1",
    semester: 2,
    subject: "Cálculo Diferencial",
    question: "En matemáticas de límites y derivadas, ¿cuál es el resultado de la derivada de cualquier número constante (por ejemplo, f(x) = 5)?",
    options: [
      "5",
      "1",
      "0",
      "x"
    ],
    correctAnswer: 2,
    explanation: "La derivada representa la tasa de cambio. Dado que una constante no cambia (su tasa de variación es nula), su derivada siempre es 0."
  },
  {
    id: "cd2_q2",
    semester: 2,
    subject: "Cálculo Diferencial",
    question: "Aplicando la regla básica de potencias para derivadas, ¿cuál es la derivada de la función f(x) = x²?",
    options: [
      "x",
      "2",
      "2x",
      "x²"
    ],
    correctAnswer: 2,
    explanation: "La regla de la potencia indica bajar el exponente a multiplicar y restarle 1 al exponente original: d/dx[x²] = 2 * x^(2-1) = 2x."
  },
  {
    id: "cd2_q3",
    semester: 2,
    subject: "Cálculo Diferencial",
    question: "Si al calcular la derivada de una función en un punto obtenemos un resultado positivo (f'(x) > 0), esto significa matemáticamente que la función es:",
    options: [
      "Falta de solución",
      "Creciente (va subiendo hacia arriba)",
      "Decreciente (va cayendo hacia abajo)",
      "Una línea plana horizontal"
    ],
    correctAnswer: 1,
    explanation: "Una primera derivada positiva indica que la recta tangente tiene pendiente positiva (inclinada hacia arriba), lo que significa que la función va creciendo."
  },
  {
    id: "cd2_q4",
    semester: 2,
    subject: "Cálculo Diferencial",
    question: "En una gráfica de una curva continua, ¿qué representa geométricamente el valor de la derivada en un punto específico?",
    options: [
      "El área coloreada debajo de la curva.",
      "La pendiente de la recta tangente que roza la curva en ese punto.",
      "La distancia de la curva al centro del gráfico.",
      "El promedio de los datos de la curva."
    ],
    correctAnswer: 1,
    explanation: "El valor numérico de la derivada evaluado en un punto x=a coincide exactamente con la pendiente de la recta tangente a la función en ese punto."
  },
  {
    id: "cd2_q5",
    semester: 2,
    subject: "Cálculo Diferencial",
    question: "Si derivamos la función f(x) = 3x, el resultado es:",
    options: [
      "3x",
      "3",
      "0",
      "3x²"
    ],
    correctAnswer: 1,
    explanation: "Por regla de derivación d/dx[c*x] = c. En este caso, d/dx[3x] = 3."
  },

  // SEMESTRE 3: Programación Orientada a Objetos II
  {
    id: "po2_q1",
    semester: 3,
    subject: "Programación Orientada a Objetos II",
    question: "¿Qué estructura o bloque especial se utiliza en la programación (como Java o C#) para capturar un error en tiempo de ejecución (excepción) y evitar que la aplicación se cierre inesperadamente?",
    options: [
      "if - else",
      "try - catch",
      "while",
      "for"
    ],
    correctAnswer: 1,
    explanation: "El bloque `try` encierra el código que puede fallar. Si ocurre un error (excepción), el flujo salta inmediatamente al bloque `catch` para manejar el problema y el programa continúa corriendo."
  },
  {
    id: "po2_q2",
    semester: 3,
    subject: "Programación Orientada a Objetos II",
    question: "Dentro de la arquitectura de desarrollo de software Modelo-Vista-Controlador (MVC), ¿qué componente se encarga de mostrarle al usuario la pantalla visual, los botones y los textos?",
    options: [
      "El Controlador",
      "El Modelo",
      "La Vista",
      "La Base de Datos"
    ],
    correctAnswer: 2,
    explanation: "La Vista representa la capa de presentación de la aplicación, es decir, el diseño de la interfaz gráfica de usuario con la que este interactúa directamente."
  },
  {
    id: "po2_q3",
    semester: 3,
    subject: "Programación Orientada a Objetos II",
    question: "En Java, ¿cómo se le conoce a la estructura que nos permite almacenar una lista ordenada de datos que puede crecer o encogerse de tamaño de manera dinámica en memoria?",
    options: [
      "Una constante estática",
      "Un ArrayList (o lista dinámica)",
      "Un entero de 8 bits",
      "Un archivo de texto plano"
    ],
    correctAnswer: 1,
    explanation: "A diferencia de los arreglos comunes de tamaño fijo, la clase `ArrayList` encapsula un array redimensionable que crece automáticamente conforme agregamos elementos."
  },
  {
    id: "po2_q4",
    semester: 3,
    subject: "Programación Orientada a Objetos II",
    question: "En programación orientada a objetos en Java, ¿para qué sirve la palabra clave 'super' dentro del código de una clase hija?",
    options: [
      "Para hacer que el programa corra más rápido.",
      "Para llamar a métodos o al constructor de la clase padre de la cual estamos heredando.",
      "Para declarar una variable global que nadie pueda cambiar.",
      "Para finalizar el programa de forma abrupta."
    ],
    correctAnswer: 1,
    explanation: "La palabra reservada `super` hace referencia directa a la superclase (clase padre), permitiendo invocar sus constructores o métodos sobrescritos."
  },
  {
    id: "po2_q5",
    semester: 3,
    subject: "Programación Orientada a Objetos II",
    question: "En el desarrollo de software, ¿qué es una 'Excepción'?",
    options: [
      "Una regla de estilo que no es obligatoria.",
      "Un evento o error inesperado que ocurre durante la ejecución de un programa y que interrumpe su flujo normal.",
      "Una función matemática compleja.",
      "Un virus informático que borra el disco."
    ],
    correctAnswer: 1,
    explanation: "Una excepción es una señal de que ha ocurrido un evento inusual durante la ejecución (como dividir por cero o abrir un archivo inexistente) que altera el curso normal del programa."
  },

  // SEMESTRE 3: Mantenimiento de Sistemas Operativos / Móviles
  {
    id: "mso3_q1",
    semester: 3,
    subject: "Mantenimiento de Sistemas Operativos / Móviles",
    question: "En la terminal de comandos de Linux, ¿cuál comando sirve para crear una nueva carpeta o directorio vacío en la ubicación actual?",
    options: [
      "cd",
      "ls",
      "mkdir",
      "rm"
    ],
    correctAnswer: 2,
    explanation: "El comando `mkdir` proviene del inglés 'make directory' (crear directorio). Se utiliza para crear carpetas en entornos de consola basados en Unix."
  },
  {
    id: "mso3_q2",
    semester: 3,
    subject: "Mantenimiento de Sistemas Operativos / Móviles",
    question: "En la terminal de comandos de Linux, ¿cuál comando se utiliza para listar e imprimir los nombres de todos los archivos y carpetas que están dentro del directorio actual?",
    options: [
      "cd",
      "ls",
      "mkdir",
      "clear"
    ],
    correctAnswer: 1,
    explanation: "El comando `ls` proviene de 'list' (listar). Escribe en pantalla el contenido del directorio actual."
  },
  {
    id: "mso3_q3",
    semester: 3,
    subject: "Mantenimiento de Sistemas Operativos / Móviles",
    question: "¿Qué sistema operativo móvil de código abierto fue creado y es mantenido por Google para teléfonos celulares de distintas marcas?",
    options: [
      "Windows Phone",
      "Android",
      "iOS",
      "Linux Debian"
    ],
    correctAnswer: 1,
    explanation: "Android es el sistema operativo móvil basado en el kernel de Linux desarrollado por Google y la Open Handset Alliance, distribuido de forma abierta para múltiples fabricantes."
  },
  {
    id: "mso3_q4",
    semester: 3,
    subject: "Mantenimiento de Sistemas Operativos / Móviles",
    question: "En la terminal de comandos de Linux, ¿cuál comando se utiliza para entrar o cambiarse de carpeta (navegar entre directorios)?",
    options: [
      "cd",
      "ls",
      "mkdir",
      "exit"
    ],
    correctAnswer: 0,
    explanation: "El comando `cd` proviene de 'change directory' (cambiar de directorio). Permite desplazarse por el árbol de directorios del sistema de archivos."
  },
  {
    id: "mso3_q5",
    semester: 3,
    subject: "Mantenimiento de Sistemas Operativos / Móviles",
    question: "¿Qué programa especial es el primero en cargarse al encender la computadora, permitiendo gestionar los recursos de hardware y correr otras aplicaciones?",
    options: [
      "El navegador Google Chrome",
      "El Sistema Operativo (como Windows, macOS o Linux)",
      "El videojuego favorito del usuario",
      "El procesador de texto Word"
    ],
    correctAnswer: 1,
    explanation: "El Sistema Operativo es el software base fundamental que administra el hardware del ordenador, coordina la ejecución del resto de aplicaciones y provee la interfaz para interactuar con el usuario."
  },

  // SEMESTRE 3: Razonamiento Cuantitativo
  {
    id: "rc3_q1",
    semester: 3,
    subject: "Razonamiento Cuantitativo",
    question: "Si una camiseta cuesta $100.000 COP originalmente y tiene una oferta con el 20% de descuento, ¿cuánto dinero en pesos te están rebajando del precio final?",
    options: [
      "$10.000 COP",
      "$20.000 COP",
      "$80.000 COP",
      "$5.000 COP"
    ],
    correctAnswer: 1,
    explanation: "Para calcular el 20% de $100.000, multiplicamos la cantidad por 0.20: `100.000 * 0.20 = 20.000`. Te descuentan $20.000 COP."
  },
  {
    id: "rc3_q2",
    semester: 3,
    subject: "Razonamiento Cuantitativo",
    question: "Si compras 3 cuadernos del mismo tipo por un total de $15.000 COP, ¿cuánto pagarías por 6 cuadernos similares aplicando una regla de tres directa?",
    options: [
      "$20.000 COP",
      "$25.000 COP",
      "$30.000 COP",
      "$45.000 COP"
    ],
    correctAnswer: 2,
    explanation: "Es una regla de tres directa: a más cuadernos, más costo. Si 3 cuadernos valen $15.000, 6 cuadernos (el doble de cantidad) costarán el doble de dinero: $30.000 COP."
  },
  {
    id: "rc3_q3",
    semester: 3,
    subject: "Razonamiento Cuantitativo",
    question: "Para calcular la calificación promedio de las siguientes tres notas obtenidas: 3.0, 4.0 y 5.0, debes sumar los valores y dividir ese resultado entre:",
    options: [
      "2",
      "3",
      "5",
      "10"
    ],
    correctAnswer: 1,
    explanation: "El promedio o media aritmética se obtiene dividiendo la suma total de los elementos entre la cantidad de elementos. Como son 3 notas, se debe dividir entre 3."
  },
  {
    id: "rc3_q4",
    semester: 3,
    subject: "Razonamiento Cuantitativo",
    question: "Si el 50% de los estudiantes en un salón con capacidad para 40 personas son mujeres, ¿cuántas mujeres hay exactamente en el aula?",
    options: [
      "10 mujeres",
      "20 mujeres",
      "30 mujeres",
      "40 mujeres"
    ],
    correctAnswer: 1,
    explanation: "El 50% equivale matemáticamente a la mitad del total. La mitad de 40 es 20. Por lo tanto, hay 20 mujeres."
  },
  {
    id: "rc3_q5",
    semester: 3,
    subject: "Razonamiento Cuantitativo",
    question: "Si recorres un trayecto en carretera de 60 kilómetros conduciendo con velocidad constante durante exactamente 1 hora, ¿a qué velocidad promedio en kilómetros por hora (km/h) ibas?",
    options: [
      "30 km/h",
      "60 km/h",
      "120 km/h",
      "10 km/h"
    ],
    correctAnswer: 1,
    explanation: "La fórmula de velocidad promedio es Distancia / Tiempo. En este caso: 60 kilómetros / 1 hora = 60 km/h."
  }
];
