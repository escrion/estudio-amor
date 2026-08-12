// Configuración inicial de PDF.js
if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
}

// ================= ESTADO GLOBAL DE LA APLICACIÓN =================
const state = {
  activeView: 'dashboard',
  stats: {
    totalAnswered: 0,
    correctAnswers: 0,
    savedKey: false
  },
  quiz: {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    answers: [], // Guarda { questionId, selectedOption, isCorrect }
    timer: null,
    timeLeft: 300, // 5 minutos en segundos
    mode: 'practica', // practica o simulacro
    selectedSemester: 'all',
    selectedSubject: 'all'
  },
  ai: {
    apiKey: '',
    userEmail: '',
    extractedText: '',
    loadedFileName: '',
    loadedFileSize: '',
    summary: '',
    generatedQuestions: []
  },
  study: {
    selectedSubject: 'Lógica para Ingeniería'
  }
};

// ================= GUÍAS DE ESTUDIO (BASE DE DATOS LOCAL) =================
const STUDY_GUIDES = {
  "Lógica para Ingeniería": {
    semester: 1,
    description: "Estudio de las leyes del pensamiento correcto y el cálculo proposicional. Base para construir condiciones lógicas en código.",
    topics: [
      {
        title: "Lógica Proposicional",
        content: "Las proposiciones son enunciados que solo pueden ser Verdaderos (V) o Falsos (F). Se representan con letras (p, q, r...). Se conectan mediante conectores lógicos:\n- **Conjunción (∧ / AND)**: V solo si ambos son V.\n- **Disyunción (∨ / OR)**: V si al menos uno es V.\n- **Negación (~ o ¬ / NOT)**: Invierte el valor de verdad.\n- **Condicional (→ / Implicación)**: Falso solo si V → F (Causa verdadera genera consecuencia falsa).\n- **Bicondicional (↔ / Equivalencia)**: Verdadero si ambos tienen el mismo valor de verdad."
      },
      {
        title: "Compuertas Lógicas",
        content: "Representaciones físicas (circuitos) de las operaciones lógicas:\n- **AND (Multiplicación)**: Salida 1 solo si todas las entradas son 1.\n- **OR (Suma)**: Salida 1 si al menos una entrada es 1.\n- **NOT (Inversor)**: Invierte la entrada (0 a 1, 1 a 0).\n- **NAND**: Salida 0 solo si todas las entradas son 1.\n- **XOR (OR Exclusiva)**: Salida 1 si las entradas son diferentes."
      }
    ],
    hasTool: "truthTable"
  },
  "Algoritmo y Programación": {
    semester: 1,
    description: "Métodos para representar y estructurar la solución de problemas lógicos de forma secuencial y finita.",
    topics: [
      {
        title: "Diagramas de Flujo",
        content: "Representación gráfica de un algoritmo. Figuras clave:\n- **Óvalo / Elipse**: Inicio y Fin.\n- **Rectángulo**: Proceso (operaciones matemáticas, asignación de variables).\n- **Rombo**: Decisión lógica (condiciones Si/No).\n- **Paralelogramo**: Entrada y Salida de datos (lectura e impresión)."
      },
      {
        title: "Pruebas de Escritorio",
        content: "Consiste en simular manualmente en una hoja el comportamiento del computador ante un algoritmo. Se crea una tabla donde las columnas representan las variables del código, y las filas muestran cómo cambian sus valores línea por línea durante la ejecución. Es indispensable para depurar la lógica antes de programar."
      }
    ],
    hasTool: "deskTrace"
  },
  "Fundamentos de Programación": {
    semester: 1,
    description: "Conceptos básicos que aplican a todos los lenguajes de programación estructurados y secuenciales.",
    topics: [
      {
        title: "Tipos de Datos y Variables",
        content: "- **Entero (int)**: Números sin decimales (ej. 5, -12).\n- **Flotante/Decimal (double/float)**: Números con decimales (ej. 3.1416, -0.5).\n- **Caracter (char)**: Un solo símbolo entre comillas (ej. 'A').\n- **Booleano (boolean)**: Solo V o F (true/false).\n- **Cadena (string)**: Texto compuesto de caracteres (ej. \"Hola CUN\")."
      },
      {
        title: "Ciclos o Bucles",
        content: "- **Mientras (While)**: Ejecuta un bloque MIENTRAS se cumpla una condición. Evalúa al inicio.\n- **Repetir (Do-While)**: Ejecuta el bloque primero y luego evalúa. Garantiza al menos una ejecución.\n- **Para (For)**: Ciclo controlado por un contador, ideal para iterar un número conocido de veces."
      }
    ]
  },
  "Arquitectura del PC": {
    semester: 1,
    description: "Estructura física y lógica del hardware que soporta y ejecuta el software.",
    topics: [
      {
        title: "Arquitectura Von Neumann",
        content: "Modelo que define las partes del computador moderno:\n1. **CPU (Unidad Central de Proceso)**: Ejecuta instrucciones.\n2. **Memoria Principal (RAM)**: Almacena instrucciones y datos temporales.\n3. **Dispositivos de Entrada/Salida**: Comunicación con el exterior.\n4. **Buses del Sistema**: Vías físicas de comunicación de datos y direcciones."
      },
      {
        title: "Jerarquía de Memoria",
        content: "Organización de la memoria según su velocidad y costo:\n1. **Registros**: Dentro de la CPU, velocidad instantánea, capacidad minúscula.\n2. **Memoria Caché**: Memoria de acceso rápido intermedia entre CPU y RAM (L1, L2, L3).\n3. **Memoria RAM**: Memoria volátil de trabajo.\n4. **Almacenamiento Secundario (HDD/SSD)**: Memoria permanente de gran capacidad."
      }
    ]
  },
  "Informática y Convergencia Tecnológica": {
    semester: 1,
    description: "Evolución digital, uso inteligente de herramientas en la nube y el impacto de los ecosistemas integrados.",
    topics: [
      {
        title: "Modelos de Cloud Computing",
        content: "- **IaaS (Infraestructura)**: Alquiler de servidores físicos/virtuales (ej. AWS, Azure).\n- **PaaS (Plataforma)**: Entornos listos para compilar y desplegar aplicaciones (ej. Firebase, Heroku).\n- **SaaS (Software)**: Aplicaciones web terminadas listas para usar (ej. Google Drive, Slack)."
      },
      {
        title: "Seguridad y Convergencia",
        content: "La convergencia tecnológica une voz, datos y video en una sola red. Esto exige protocolos seguros de cifrado de datos de extremo a extremo como **HTTPS** y la adopción de medidas contra ciberamenazas como el phishing."
      }
    ]
  },
  "Programación Orientada a Objetos I": {
    semester: 2,
    description: "Estudio del paradigma de programación estructurado alrededor de los conceptos de Clases y Objetos.",
    topics: [
      {
        title: "Clases y Objetos",
        content: "- **Clase**: Modelo abstracto o plantilla que describe las propiedades (atributos) y acciones (métodos) de una entidad.\n- **Objeto**: Instancia única y real de una clase cargada en la memoria RAM.\n*Ejemplo*: La clase 'Automovil' es el plano, el objeto 'miCarro' con color azul es la instancia física."
      },
      {
        title: "Encapsulamiento",
        content: "Consiste en ocultar el estado interno (atributos) de un objeto del acceso exterior directo. Se implementa declarando atributos como privados (`private`) y exponiendo métodos públicos (`public`) especiales conocidos como **Getters** (para leer) y **Setters** (para escribir de forma validada)."
      }
    ]
  },
  "Redes I": {
    semester: 2,
    description: "Fundamentos de la comunicación y transporte de datos mediante redes IP.",
    topics: [
      {
        title: "Modelo OSI",
        content: "Estándar de 7 capas para la comunicación de red:\n1. **Física**: Cables y señales eléctricas.\n2. **Enlace de datos**: Direccionamiento físico (MAC), tramas.\n3. **Red**: Enrutamiento y direccionamiento lógico (IP).\n4. **Transporte**: Control de flujo y fiabilidad (TCP/UDP).\n5. **Sesión**, 6. **Presentación**, 7. **Aplicación** (Interfaces finales)."
      },
      {
        title: "Direccionamiento IP",
        content: "- **IP Pública**: Visible en todo el mundo, identifica un módem en Internet.\n- **IP Privada**: Usada dentro de la LAN local (ej. rangos `192.168.x.x`, `10.x.x.x`).\n- **IPv4**: 32 bits, escrita en 4 octetos (ej. 192.168.1.1).\n- **IPv6**: 128 bits, hexadecimal, creada por el agotamiento de IPs."
      }
    ]
  },
  "Cálculo Diferencial": {
    semester: 2,
    description: "Estudio matemático del cambio y el movimiento mediante límites y derivadas.",
    topics: [
      {
        title: "La Derivada",
        content: "Geométricamente, la derivada representa la pendiente de la recta tangente a una curva f(x) en un punto específico. Matemáticamente es la tasa de cambio instantáneo de una variable respecto a otra.\n- **Regla de la Potencia**: d/dx[xⁿ] = n * xⁿ⁻¹\n- **Derivada de Constante**: d/dx[c] = 0"
      }
    ]
  },
  "Programación Orientada a Objetos II": {
    semester: 3,
    description: "Patrones avanzados de POO, interfaces, colecciones y manejo robusto de excepciones.",
    topics: [
      {
        title: "Polimorfismo",
        content: "Propiedad por la cual un método puede comportarse de manera diferente según el objeto que lo ejecute en tiempo de ejecución. Permite tratar objetos de subclases como si fueran de la superclase base."
      },
      {
        title: "Clases Abstractas vs Interfaces",
        content: "- **Clase Abstracta**: Puede contener métodos con código (implementados) y campos de estado. No se puede instanciar directamente.\n- **Interfaz**: Declara puramente un contrato o comportamiento (métodos abstractos). No guarda variables de instancia y una clase puede implementar múltiples interfaces en Java."
      },
      {
        title: "Patrón MVC (Modelo-Vista-Controlador)",
        content: "- **Modelo**: Gestiona los datos y lógica de negocio.\n- **Vista**: Muestra la interfaz gráfica al usuario.\n- **Controlador**: Escucha eventos de la vista, invoca al modelo y actualiza la interfaz."
      }
    ]
  },
  "Mantenimiento de Sistemas Operativos / Móviles": {
    semester: 3,
    description: "Administración, control de permisos e instalación a nivel de consola de sistemas móviles y de escritorio.",
    topics: [
      {
        title: "Permisos y Consola Linux",
        content: "El comando `chmod` modifica permisos basándose en formato octal o simbólico:\n- Lectura (r) = 4, Escritura (w) = 2, Ejecución (x) = 1.\n- `chmod 755 archivo.sh` otorga todos los permisos al dueño (7=4+2+1), lectura/ejecución al grupo (5=4+1) y a otros (5)."
      },
      {
        title: "Ecosistema Móvil",
        content: "- **Android**: Kernel Linux, aplicaciones compiladas en empaquetados `.apk`.\n- **iOS**: Kernel Unix/Darwin, entorno cerrado, empaquetados `.ipa`."
      }
    ]
  },
  "Razonamiento Cuantitativo": {
    semester: 3,
    description: "Desarrollo de habilidades lógicas y matemáticas para la resolución rápida de problemas empresariales y estadísticos.",
    topics: [
      {
        title: "Regla de Tres y Porcentajes",
        content: "- **Proporcionalidad Directa**: Si una variable sube, la otra sube. Se multiplica en cruz.\n- **Proporcionalidad Inversa**: Si una variable sube, la otra baja (ej. más obreros hacen una obra en menos días). Se multiplica de frente."
      }
    ]
  }
};

// ================= SELECTORES DOM =================
const D = {
  tabs: {
    dashboard: document.getElementById('tab-dashboard'),
    quiz: document.getElementById('tab-quiz'),
    guias: document.getElementById('tab-guias'),
    ai: document.getElementById('tab-ai')
  },
  views: {
    dashboard: document.getElementById('view-dashboard'),
    quiz: document.getElementById('view-quiz'),
    guias: document.getElementById('view-guias'),
    ai: document.getElementById('view-ai')
  },
  logo: document.getElementById('logo-home'),
  
  // Dashboard
  statsTotal: document.getElementById('stats-total-answered'),
  statsSuccess: document.getElementById('stats-success-rate'),
  statsSavedKey: document.getElementById('stats-saved-keys'),
  semesterCards: document.querySelectorAll('.semester-card'),
  
  // Quiz
  quizSemester: document.getElementById('quiz-semester'),
  quizSubject: document.getElementById('quiz-subject'),
  modePractica: document.getElementById('mode-practica'),
  modeSimulacro: document.getElementById('mode-simulacro'),
  btnStartQuiz: document.getElementById('btn-start-quiz'),
  
  quizSetupContainer: document.getElementById('quiz-setup-container'),
  quizActiveContainer: document.getElementById('quiz-active-container'),
  quizResultsContainer: document.getElementById('quiz-results-container'),
  
  activeSubject: document.getElementById('active-quiz-subject'),
  activeSemester: document.getElementById('active-quiz-semester'),
  activeCounter: document.getElementById('active-quiz-question-counter'),
  timerBox: document.getElementById('quiz-timer-box'),
  timeLeft: document.getElementById('quiz-time-left'),
  progressFill: document.getElementById('quiz-progress-fill'),
  questionText: document.getElementById('active-question-text'),
  optionsGrid: document.getElementById('active-options-grid'),
  explanationCard: document.getElementById('active-explanation-card'),
  explanationText: document.getElementById('active-explanation-text'),
  btnNextQuestion: document.getElementById('btn-next-question'),
  
  // Resultados Quiz
  resultsScore: document.getElementById('results-score-text'),
  resultsPercentage: document.getElementById('results-percentage-text'),
  resultsTime: document.getElementById('results-stat-time'),
  resultsStatus: document.getElementById('results-stat-status'),
  resultsRecommendations: document.getElementById('results-recommendations-box'),
  btnResultsRetry: document.getElementById('btn-results-retry'),
  btnResultsDashboard: document.getElementById('btn-results-dashboard'),
  
  // Guías
  materiaBtns: document.querySelectorAll('.materia-select-btn'),
  guiaTarget: document.getElementById('guia-render-target'),
  
  // Asistente IA
  geminiKey: document.getElementById('gemini-api-key'),
  dropZone: document.getElementById('drop-zone'),
  fileUploader: document.getElementById('file-uploader'),
  fileInfo: document.getElementById('loaded-file-info'),
  fileName: document.getElementById('loaded-file-name'),
  fileSize: document.getElementById('loaded-file-size'),
  btnClearFile: document.getElementById('btn-clear-file'),
  btnProcessAi: document.getElementById('btn-process-ai'),
  
  // Output IA
  tabAiSummary: document.getElementById('tab-ai-summary'),
  tabAiQuiz: document.getElementById('tab-ai-quiz'),
  aiLoader: document.getElementById('ai-loader'),
  aiLoaderTitle: document.getElementById('ai-loader-title'),
  aiLoaderSubtitle: document.getElementById('ai-loader-subtitle'),
  aiContentDisplay: document.getElementById('ai-content-display'),
  aiEmptyView: document.getElementById('ai-empty-view'),
  aiSummaryView: document.getElementById('ai-summary-view'),
  aiQuizView: document.getElementById('ai-quiz-view'),
  aiQuizListTarget: document.getElementById('ai-quiz-list-target'),
  btnLoadAiQuiz: document.getElementById('btn-load-ai-quiz'),
  
  // Modal de Configuración
  btnOpenSettings: document.getElementById('btn-open-settings'),
  btnCloseSettings: document.getElementById('btn-close-settings'),
  settingsModal: document.getElementById('settings-modal'),
  modalGeminiKey: document.getElementById('modal-gemini-key'),
  modalUserEmail: document.getElementById('modal-user-email'),
  btnSaveSettings: document.getElementById('btn-save-settings'),
  btnClearSettings: document.getElementById('btn-clear-settings'),
  settingsKeyStatus: document.getElementById('settings-key-status'),
  headerUserBadge: document.getElementById('header-user-badge'),
  headerUserEmail: document.getElementById('header-user-email'),
  
  // Google Sign-in Simulado
  btnGoogleLoginTrigger: document.getElementById('btn-google-login-trigger'),
  googleLoginModal: document.getElementById('google-login-modal'),
  googleAccountsView: document.getElementById('google-accounts-view'),
  googleAccountsList: document.getElementById('google-accounts-list'),
  googleAddAccountView: document.getElementById('google-add-account-view'),
  googleNewEmail: document.getElementById('google-new-email'),
  googleLoadingBar: document.getElementById('google-loading-bar'),
  btnCancelGoogle: document.getElementById('btn-cancel-google'),
  btnBackGoogleList: document.getElementById('btn-back-google-list'),
  btnSubmitGoogleLogin: document.getElementById('btn-submit-google-login'),
  btnAddGoogleAccount: document.getElementById('btn-add-google-account')
};

// ================= INICIALIZACIÓN Y NAVEGACIÓN =================

function init() {
  loadLocalStorage();
  setupNavigation();
  setupDashboardActions();
  setupQuizConfigEvents();
  setupQuizEngineEvents();
  setupGuiaSidebar();
  setupAiAssistantEvents();
  setupSettingsModalEvents();
  setupGoogleLoginEvents();
  
  // Render inicial de la primera guía
  renderGuia(state.study.selectedSubject);
}

// Cargar estadísticas e API Key locales
function loadLocalStorage() {
  const localStats = localStorage.getItem('cun_prep_stats');
  if (localStats) {
    state.stats = JSON.parse(localStats);
  }
  
  const localKey = localStorage.getItem('cun_prep_gemini_key');
  if (localKey) {
    state.ai.apiKey = localKey;
    D.geminiKey.value = localKey;
    D.modalGeminiKey.value = localKey;
    state.stats.savedKey = true;
  }

  const localEmail = localStorage.getItem('cun_prep_user_email');
  if (localEmail) {
    state.ai.userEmail = localEmail;
    D.modalUserEmail.value = localEmail;
    D.headerUserEmail.innerText = localEmail;
    D.headerUserBadge.style.display = 'inline-block';
  }
  
  updateDashboardStats();
}

function updateDashboardStats() {
  D.statsTotal.innerText = state.stats.totalAnswered;
  const rate = state.stats.totalAnswered > 0 
    ? Math.round((state.stats.correctAnswers / state.stats.totalAnswered) * 100)
    : 0;
  D.statsSuccess.innerText = `${rate}%`;
  D.statsSavedKey.innerText = state.stats.savedKey ? 'Sí' : 'No';
}

function saveStats(correctCount, totalCount) {
  state.stats.totalAnswered += totalCount;
  state.stats.correctAnswers += correctCount;
  localStorage.setItem('cun_prep_stats', JSON.stringify(state.stats));
  updateDashboardStats();
}

// Configurar Eventos de Cambio de Pestañas
function setupNavigation() {
  const switchView = (viewName) => {
    state.activeView = viewName;
    
    // Cambiar clases de pestañas
    Object.keys(D.tabs).forEach(key => {
      if (key === viewName) {
        D.tabs[key].classList.add('active');
      } else {
        D.tabs[key].classList.remove('active');
      }
    });
    
    // Cambiar visibilidad de secciones
    Object.keys(D.views).forEach(key => {
      if (key === viewName) {
        D.views[key].classList.add('active');
      } else {
        D.views[key].classList.remove('active');
      }
    });
    
    // Parar temporizadores si salimos del quiz
    if (viewName !== 'quiz') {
      stopQuizTimer();
    }
  };

  Object.keys(D.tabs).forEach(key => {
    D.tabs[key].addEventListener('click', () => switchView(key));
  });

  D.logo.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('dashboard');
  });
}

// Acciones desde el Dashboard
function setupDashboardActions() {
  D.semesterCards.forEach(card => {
    card.addEventListener('click', () => {
      const sem = card.getAttribute('data-semester');
      
      // Filtrar el simulador automáticamente al semestre cliqueado
      D.quizSemester.value = sem;
      updateSubjectDropdown();
      
      // Navegar al simulador
      D.tabs.quiz.click();
    });
  });
}


// ================= MOTOR DEL SIMULADOR DE CUESTIONARIOS =================

function setupQuizConfigEvents() {
  // Cuando cambia el semestre en la config del quiz
  D.quizSemester.addEventListener('change', updateSubjectDropdown);
  
  // Toggle del tipo de modo
  D.modePractica.addEventListener('click', () => {
    D.modePractica.classList.add('selected');
    D.modeSimulacro.classList.remove('selected');
    D.modePractica.querySelector('input').checked = true;
    state.quiz.mode = 'practica';
  });

  D.modeSimulacro.addEventListener('click', () => {
    D.modeSimulacro.classList.add('selected');
    D.modePractica.classList.remove('selected');
    D.modeSimulacro.querySelector('input').checked = true;
    state.quiz.mode = 'simulacro';
  });

  // Llenar por primera vez el selector de materias
  updateSubjectDropdown();
}

function updateSubjectDropdown() {
  const sem = D.quizSemester.value;
  const subjects = new Set();
  
  window.CUN_QUESTIONS.forEach(q => {
    if (sem === 'all' || q.semester === parseInt(sem)) {
      subjects.add(q.subject);
    }
  });
  
  // Limpiar y llenar el dropdown
  D.quizSubject.innerHTML = '<option value="all">Todas las Materias</option>';
  subjects.forEach(sub => {
    const opt = document.createElement('option');
    opt.value = sub;
    opt.innerText = sub;
    D.quizSubject.appendChild(opt);
  });
}

function setupQuizEngineEvents() {
  D.btnStartQuiz.addEventListener('click', startQuiz);
  D.btnNextQuestion.addEventListener('click', nextQuestion);
  D.btnResultsRetry.addEventListener('click', () => {
    D.quizResultsContainer.style.display = 'none';
    D.quizSetupContainer.style.display = 'block';
  });
  D.btnResultsDashboard.addEventListener('click', () => {
    D.quizResultsContainer.style.display = 'none';
    D.quizSetupContainer.style.display = 'block';
    D.tabs.dashboard.click();
  });
}

function startQuiz() {
  const sem = D.quizSemester.value;
  const subject = D.quizSubject.value;
  
  // Filtrar y mezclar preguntas
  let filtered = window.CUN_QUESTIONS.filter(q => {
    const semMatch = sem === 'all' || q.semester === parseInt(sem);
    const subMatch = subject === 'all' || q.subject === subject;
    return semMatch && subMatch;
  });
  
  if (filtered.length === 0) {
    alert("No se encontraron preguntas para la selección actual. ¡Intenta con otro filtro!");
    return;
  }
  
  // Mezclar preguntas aleatoriamente (Algoritmo Fisher-Yates)
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }
  
  // Limitar a máximo 10 preguntas para que el quiz no sea eterno
  state.quiz.questions = filtered.slice(0, 10);
  state.quiz.currentQuestionIndex = 0;
  state.quiz.score = 0;
  state.quiz.answers = [];
  
  // Cambiar visualización
  D.quizSetupContainer.style.display = 'none';
  D.quizActiveContainer.style.display = 'block';
  D.quizResultsContainer.style.display = 'none';
  
  // Configuración del Temporizador si es modo simulacro
  if (state.quiz.mode === 'simulacro') {
    D.timerBox.style.display = 'flex';
    state.quiz.timeLeft = state.quiz.questions.length * 45; // 45 segundos por pregunta
    startQuizTimer();
  } else {
    D.timerBox.style.display = 'none';
  }
  
  renderCurrentQuestion();
}

function startQuizTimer() {
  stopQuizTimer();
  updateTimerUI();
  
  state.quiz.timer = setInterval(() => {
    state.quiz.timeLeft--;
    updateTimerUI();
    
    if (state.quiz.timeLeft <= 10) {
      D.timerBox.classList.add('pulse');
    }
    
    if (state.quiz.timeLeft <= 0) {
      stopQuizTimer();
      finishQuiz();
    }
  }, 1000);
}

function stopQuizTimer() {
  if (state.quiz.timer) {
    clearInterval(state.quiz.timer);
    state.quiz.timer = null;
  }
  D.timerBox.classList.remove('pulse');
}

function updateTimerUI() {
  const mins = Math.floor(state.quiz.timeLeft / 60);
  const secs = state.quiz.timeLeft % 60;
  D.timeLeft.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function renderCurrentQuestion() {
  const index = state.quiz.currentQuestionIndex;
  const total = state.quiz.questions.length;
  const q = state.quiz.questions[index];
  
  // Encabezados
  D.activeSubject.innerText = q.subject;
  D.activeSemester.innerText = `Semestre ${q.semester}`;
  D.activeCounter.innerText = `Pregunta ${index + 1} de ${total}`;
  
  // Barra de progreso
  const progressPercent = (index / total) * 100;
  D.progressFill.style.width = `${progressPercent}%`;
  
  // Texto de pregunta
  D.questionText.innerText = q.question;
  
  // Opciones
  D.optionsGrid.innerHTML = '';
  D.explanationCard.style.display = 'none';
  D.btnNextQuestion.style.display = 'none';
  
  q.options.forEach((opt, oIdx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    
    const letter = String.fromCharCode(65 + oIdx); // A, B, C, D
    btn.innerHTML = `<span class="option-marker">${letter}</span> ${escapeHTML(opt)}`;
    
    btn.addEventListener('click', () => selectOption(oIdx));
    D.optionsGrid.appendChild(btn);
  });
}

function selectOption(selectedIndex) {
  const index = state.quiz.currentQuestionIndex;
  const q = state.quiz.questions[index];
  const buttons = D.optionsGrid.querySelectorAll('.option-btn');
  
  const isCorrect = selectedIndex === q.correctAnswer;
  
  // Registrar la respuesta
  state.quiz.answers.push({
    questionId: q.id,
    selectedOption: selectedIndex,
    isCorrect: isCorrect
  });
  
  if (isCorrect) {
    state.quiz.score++;
  }
  
  // Deshabilitar todas las opciones
  buttons.forEach((btn, bIdx) => {
    btn.classList.add('disabled');
    
    // Resaltar la respuesta correcta
    if (bIdx === q.correctAnswer) {
      btn.classList.add('correct');
    }
    
    // Resaltar la selección del usuario si fue incorrecta
    if (bIdx === selectedIndex && !isCorrect) {
      btn.classList.add('selected-wrong');
    }
  });
  
  // Lógica dependiendo del Modo
  if (state.quiz.mode === 'practica') {
    // Mostrar retroalimentación instantánea
    D.explanationText.innerText = q.explanation;
    D.explanationCard.style.display = 'block';
    D.btnNextQuestion.style.display = 'block';
  } else {
    // En modo simulacro, pasamos automáticamente o con botón directo al cabo de 1 segundo
    setTimeout(() => {
      nextQuestion();
    }, 1200);
  }
}

function nextQuestion() {
  state.quiz.currentQuestionIndex++;
  
  if (state.quiz.currentQuestionIndex < state.quiz.questions.length) {
    renderCurrentQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  stopQuizTimer();
  
  // Ocultar sección activa y mostrar resultados
  D.quizActiveContainer.style.display = 'none';
  D.quizResultsContainer.style.display = 'block';
  
  const score = state.quiz.score;
  const total = state.quiz.questions.length;
  
  // Escala CUN de 0.0 a 5.0
  const cunGrade = ((score / total) * 5).toFixed(1);
  D.resultsScore.innerText = `${cunGrade} / 5.0`;
  
  const percentage = Math.round((score / total) * 100);
  D.resultsPercentage.innerText = `${score} aciertos de ${total} preguntas (${percentage}%)`;
  
  // Tiempo empleado
  let timeStr = "N/A";
  if (state.quiz.mode === 'simulacro') {
    const elapsed = (total * 45) - state.quiz.timeLeft;
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    timeStr = `${mins}m ${secs}s`;
  }
  D.resultsTime.innerText = timeStr;
  
  // Estado Aprobado / Reprobado
  const passed = parseFloat(cunGrade) >= 3.0;
  D.resultsStatus.innerText = passed ? "APROBADO" : "REPROBADO";
  D.resultsStatus.style.color = passed ? 'var(--accent-emerald)' : 'var(--accent-rose)';
  
  // Guardar en estadísticas globales
  saveStats(score, total);
  
  // Generar recomendaciones
  generateStudyRecommendations();
}

function generateStudyRecommendations() {
  D.resultsRecommendations.innerHTML = '';
  
  // Encontrar qué materias tuvieron errores
  const wrongSubjects = {};
  state.quiz.questions.forEach((q, idx) => {
    const ans = state.quiz.answers[idx];
    if (ans && !ans.isCorrect) {
      wrongSubjects[q.subject] = (wrongSubjects[q.subject] || 0) + 1;
    }
  });
  
  const wrongList = Object.keys(wrongSubjects);
  
  if (wrongList.length === 0) {
    D.resultsRecommendations.innerHTML = `
      <div class="recommendation-item">¡Excelente! Has respondido todo correctamente. Estás listo para tus exámenes reales.</div>
    `;
  } else {
    wrongList.forEach(sub => {
      const errors = wrongSubjects[sub];
      const div = document.createElement('div');
      div.className = 'recommendation-item';
      div.innerHTML = `Debes repasar la materia <strong>"${sub}"</strong> (Tuviste ${errors} fallos en el quiz). Visita la pestaña de Guías de Estudio.`;
      D.resultsRecommendations.appendChild(div);
    });
  }
}


// ================= GUIAS DE ESTUDIO E INTERACTIVOS =================

function setupGuiaSidebar() {
  D.materiaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Activar botón del menú
      D.materiaBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const sub = btn.getAttribute('data-subject');
      state.study.selectedSubject = sub;
      renderGuia(sub);
    });
  });
}

function renderGuia(subjectName) {
  const guide = STUDY_GUIDES[subjectName];
  if (!guide) return;
  
  let html = `
    <div class="guia-header-info">
      <span class="guia-sem-badge">Semestre ${guide.semester}</span>
      <h2>${subjectName}</h2>
      <p style="color: var(--text-secondary); font-size: 0.95rem; margin-top: 0.5rem;">${guide.description}</p>
    </div>
    
    <div class="guia-topic-grid">
  `;
  
  guide.topics.forEach(topic => {
    html += `
      <div class="topic-box">
        <h4><i class="fa-regular fa-bookmark"></i> ${topic.title}</h4>
        <p>${topic.content.replace(/\n/g, '<br>')}</p>
      </div>
    `;
  });
  
  html += `</div>`; // Fin de guia-topic-grid
  
  // Agregar herramientas interactivas basadas en el tema
  if (guide.hasTool === 'truthTable') {
    html += `
      <div class="glass-card interactive-tool-container">
        <div class="tool-title"><i class="fa-solid fa-calculator"></i> Generador de Tablas de Verdad</div>
        <p style="font-size:0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
          Haz clic en una expresión lógica para calcular su tabla de verdad en tiempo real de forma dinámica.
        </p>
        <div class="truth-table-builder">
          <div class="builder-inputs">
            <button class="formula-btn" onclick="generateTruthTable('p_and_q')">p ∧ q (AND)</button>
            <button class="formula-btn" onclick="generateTruthTable('p_or_q')">p ∨ q (OR)</button>
            <button class="formula-btn" onclick="generateTruthTable('p_implies_q')">p → q (Implicación)</button>
            <button class="formula-btn" onclick="generateTruthTable('p_xor_q')">p ⊕ q (XOR)</button>
            <button class="formula-btn" onclick="generateTruthTable('p_or_q_and_not_p')">(p ∨ q) ∧ ~p</button>
          </div>
          <div class="table-responsive" id="truth-table-output">
            <!-- Render de tabla aquí -->
          </div>
        </div>
      </div>
    `;
  } else if (guide.hasTool === 'deskTrace') {
    html += `
      <div class="glass-card interactive-tool-container">
        <div class="tool-title"><i class="fa-solid fa-bug"></i> Simulador Interactivo de Prueba de Escritorio</div>
        <p style="font-size:0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
          Analiza cómo corre el compilador paso a paso. Haz clic en 'Siguiente Paso' para ver la actualización de variables.
        </p>
        <div class="ai-assistant-grid" style="gap: 1rem;">
          <div>
            <pre id="desk-code-block" style="margin-bottom:0; line-height: 1.5; font-size: 0.85rem;">
1:  x = 3
2:  Suma = 0
3:  Para i = 1 Hasta 3 Hacer
4:    Suma = Suma + (x * i)
5:  FinPara
6:  Escribir Suma</pre>
            <div class="trace-controls" style="margin-top:0.75rem;">
              <button class="formula-btn" id="btn-trace-next" onclick="runTraceStep()"><i class="fa-solid fa-forward-step"></i> Siguiente Paso</button>
              <button class="formula-btn" style="background: rgba(255,255,255,0.02);" onclick="resetTrace()"><i class="fa-solid fa-arrows-rotate"></i> Reiniciar</button>
            </div>
          </div>
          <div>
            <table class="truth-table" style="font-size: 0.8rem;">
              <thead>
                <tr>
                  <th>Línea</th>
                  <th>Variable i</th>
                  <th>Variable x</th>
                  <th>Variable Suma</th>
                  <th>Detalle</th>
                </tr>
              </thead>
              <tbody id="trace-table-body">
                <tr id="trace-row-init">
                  <td colspan="5" style="color: var(--text-muted);">Presiona Siguiente Paso para comenzar la simulación</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }
  
  D.guiaTarget.innerHTML = html;
  
  // Re-inicializar variables de la simulación de trazado si se renderiza
  if (guide.hasTool === 'deskTrace') {
    resetTrace();
  }
}

// --- HERRAMIENTA INTERACTIVA: Generador de tablas de verdad ---
window.generateTruthTable = function(formulaKey) {
  const target = document.getElementById('truth-table-output');
  if (!target) return;
  
  const combinations = [
    { p: true, q: true },
    { p: true, q: false },
    { p: false, q: true },
    { p: false, q: false }
  ];
  
  let headerFormula = "";
  let evaluator = null;
  
  switch(formulaKey) {
    case 'p_and_q':
      headerFormula = "p ∧ q";
      evaluator = (p, q) => p && q;
      break;
    case 'p_or_q':
      headerFormula = "p ∨ q";
      evaluator = (p, q) => p || q;
      break;
    case 'p_implies_q':
      headerFormula = "p → q";
      evaluator = (p, q) => !p || q; // p -> q es equivalente a ~p o q
      break;
    case 'p_xor_q':
      headerFormula = "p ⊕ q";
      evaluator = (p, q) => p !== q;
      break;
    case 'p_or_q_and_not_p':
      headerFormula = "(p ∨ q) ∧ ~p";
      evaluator = (p, q) => (p || q) && !p;
      break;
  }
  
  let tableHtml = `
    <table class="truth-table">
      <thead>
        <tr>
          <th>p</th>
          <th>q</th>
          <th>~p</th>
          <th>~q</th>
          <th style="background: rgba(99,102,241,0.1); font-weight:700;">${headerFormula}</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  combinations.forEach(row => {
    const valResult = evaluator(row.p, row.q);
    tableHtml += `
      <tr>
        <td class="${row.p ? 'val-v' : 'val-f'}">${row.p ? 'V' : 'F'}</td>
        <td class="${row.q ? 'val-v' : 'val-f'}">${row.q ? 'V' : 'F'}</td>
        <td class="${!row.p ? 'val-v' : 'val-f'}">${!row.p ? 'V' : 'F'}</td>
        <td class="${!row.q ? 'val-v' : 'val-f'}">${!row.q ? 'V' : 'F'}</td>
        <td style="background: rgba(255,255,255,0.02);" class="${valResult ? 'val-v' : 'val-f'}">${valResult ? 'V' : 'F'}</td>
      </tr>
    `;
  });
  
  tableHtml += `</tbody></table>`;
  target.innerHTML = tableHtml;
};

// --- HERRAMIENTA INTERACTIVA: Simulador de Prueba de Escritorio ---
let traceState = {
  step: 0,
  i: '-',
  x: '-',
  suma: '-'
};

const TRACE_STEPS = [
  { line: 1, i: '-', x: 3, suma: '-', desc: "Se declara e inicializa la variable x en 3." },
  { line: 2, i: '-', x: 3, suma: 0, desc: "Se inicializa el acumulador Suma en 0." },
  { line: 3, i: 1, x: 3, suma: 0, desc: "Inicia bucle Para. i toma su valor inicial de 1." },
  { line: 4, i: 1, x: 3, suma: 3, desc: "Suma = Suma + (3 * 1) -> Suma se convierte en 3." },
  { line: 3, i: 2, x: 3, suma: 3, desc: "Siguiente iteración del bucle. i incrementa a 2." },
  { line: 4, i: 2, x: 3, suma: 9, desc: "Suma = Suma + (3 * 2) -> Suma se convierte en 9." },
  { line: 3, i: 3, x: 3, suma: 9, desc: "Última iteración del bucle. i incrementa a 3." },
  { line: 4, i: 3, x: 3, suma: 18, desc: "Suma = Suma + (3 * 3) -> Suma se convierte en 18." },
  { line: 5, i: 3, x: 3, suma: 18, desc: "El ciclo Para finaliza ya que i alcanzó el valor límite de 3." },
  { line: 6, i: '-', x: 3, suma: 18, desc: "Impresión final del algoritmo. Muestra en pantalla el valor de Suma: 18." }
];

window.resetTrace = function() {
  traceState.step = 0;
  const tbody = document.getElementById('trace-table-body');
  if (tbody) {
    tbody.innerHTML = `
      <tr id="trace-row-init">
        <td colspan="5" style="color: var(--text-muted); text-align:center;">Presiona Siguiente Paso para comenzar la simulación</td>
      </tr>
    `;
  }
  
  const codeBlock = document.getElementById('desk-code-block');
  if (codeBlock) {
    codeBlock.innerHTML = `1:  x = 3
2:  Suma = 0
3:  Para i = 1 Hasta 3 Hacer
4:    Suma = Suma + (x * i)
5:  FinPara
6:  Escribir Suma`;
  }
  
  const btn = document.getElementById('btn-trace-next');
  if (btn) {
    btn.disabled = false;
    btn.innerHTML = `<i class="fa-solid fa-forward-step"></i> Siguiente Paso`;
  }
};

window.runTraceStep = function() {
  const tbody = document.getElementById('trace-table-body');
  const codeBlock = document.getElementById('desk-code-block');
  const btn = document.getElementById('btn-trace-next');
  
  if (!tbody || !codeBlock) return;
  
  // Limpiar mensaje inicial en el paso cero
  if (traceState.step === 0) {
    tbody.innerHTML = '';
  }
  
  if (traceState.step >= TRACE_STEPS.length) {
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `Simulación Finalizada`;
    }
    return;
  }
  
  const stepData = TRACE_STEPS[traceState.step];
  
  // Agregar fila a la tabla de trazas
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>Línea ${stepData.line}</td>
    <td>${stepData.i}</td>
    <td>${stepData.x}</td>
    <td style="font-weight:600; color: var(--accent-cyan);">${stepData.suma}</td>
    <td style="text-align:left; font-size: 0.75rem;">${stepData.desc}</td>
  `;
  tbody.appendChild(tr);
  
  // Autoscroll de la tabla
  tr.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Resaltar línea en el bloque de código
  highlightCodeLine(stepData.line, codeBlock);
  
  traceState.step++;
  
  if (traceState.step >= TRACE_STEPS.length && btn) {
    btn.innerHTML = `Finalizar`;
  }
};

function highlightCodeLine(lineNum, codeElement) {
  const codeText = `1:  x = 3
2:  Suma = 0
3:  Para i = 1 Hasta 3 Hacer
4:    Suma = Suma + (x * i)
5:  FinPara
6:  Escribir Suma`;
  
  const lines = codeText.split('\n');
  const highlightedLines = lines.map((line, idx) => {
    if (idx + 1 === lineNum) {
      return `<span style="background: rgba(99,102,241,0.35); display:block; padding:0 4px; border-radius:3px; color:#fff; font-weight:600;">${line}</span>`;
    }
    return line;
  });
  
  codeElement.innerHTML = highlightedLines.join('\n');
}


// ================= ASISTENTE IA DE ESTUDIO (CARGA & GEMINI API) =================

function setupAiAssistantEvents() {
  // Guardar API Key al escribir
  D.geminiKey.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    state.ai.apiKey = val;
    if (val) {
      localStorage.setItem('cun_prep_gemini_key', val);
      state.stats.savedKey = true;
    } else {
      localStorage.removeItem('cun_prep_gemini_key');
      state.stats.savedKey = false;
    }
    updateDashboardStats();
  });
  
  // Gestión de Arrastre de Archivos (Drag & Drop)
  const prevent = (e) => { e.preventDefault(); e.stopPropagation(); };
  
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt => {
    D.dropZone.addEventListener(evt, prevent);
  });
  
  D.dropZone.addEventListener('dragenter', () => D.dropZone.style.borderColor = 'var(--accent-cyan)');
  D.dropZone.addEventListener('dragleave', () => D.dropZone.style.borderColor = 'var(--border-glass)');
  D.dropZone.addEventListener('drop', handleFileDrop);
  
  D.dropZone.addEventListener('click', () => D.fileUploader.click());
  D.fileUploader.addEventListener('change', handleFileSelect);
  
  D.btnClearFile.addEventListener('click', clearLoadedFile);
  D.btnProcessAi.addEventListener('click', processFileWithAi);
  
  // Eventos de Pestañas de Output de IA
  D.tabAiSummary.addEventListener('click', () => {
    D.tabAiSummary.classList.add('active');
    D.tabAiQuiz.classList.remove('active');
    D.aiSummaryView.style.display = 'block';
    D.aiQuizView.style.display = 'none';
  });

  D.tabAiQuiz.addEventListener('click', () => {
    D.tabAiQuiz.classList.add('active');
    D.tabAiSummary.classList.remove('active');
    D.aiSummaryView.style.display = 'none';
    D.aiQuizView.style.display = 'block';
  });
  
  // Evento de cargar quiz de IA
  D.btnLoadAiQuiz.addEventListener('click', loadAiQuizToSimulator);
}

function handleFileDrop(e) {
  D.dropZone.style.borderColor = 'var(--border-glass)';
  const file = e.dataTransfer.files[0];
  if (file) loadFile(file);
}

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) loadFile(file);
}

function loadFile(file) {
  // Validaciones básicas
  const validExtensions = ['.txt', '.md', '.pdf'];
  const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
  
  if (!validExtensions.includes(ext)) {
    alert("Extensión de archivo no soportada. Carga un PDF o archivo de texto (.txt, .md).");
    return;
  }
  
  if (file.size > 50 * 1024 * 1024) { // 50MB limit
    alert("El archivo excede el tamaño límite de 50MB.");
    return;
  }
  
  state.ai.loadedFileName = file.name;
  state.ai.loadedFileSize = formatBytes(file.size);
  
  // Actualizar UI
  D.fileName.innerText = state.ai.loadedFileName;
  D.fileSize.innerText = `(${state.ai.loadedFileSize})`;
  D.dropZone.style.display = 'none';
  D.fileInfo.style.display = 'flex';
  
  // Leer contenido
  readTextFromFile(file);
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function clearLoadedFile() {
  state.ai.loadedFileName = '';
  state.ai.loadedFileSize = '';
  state.ai.extractedText = '';
  D.fileUploader.value = '';
  
  D.fileInfo.style.display = 'none';
  D.dropZone.style.display = 'flex';
}

// Lector de archivos PDF y Texto plano
function readTextFromFile(file) {
  const reader = new FileReader();
  
  if (file.name.endsWith('.pdf')) {
    // Procesar PDF usando PDF.js
    D.aiLoaderTitle.innerText = "Preparando lector de PDF...";
    D.aiLoader.style.display = 'flex';
    D.aiEmptyView.style.display = 'none';
    
    reader.onload = async function() {
      try {
        const typedarray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
        
        let fullText = "";
        const maxPages = Math.min(pdf.numPages, 50); // Limitar a máximo 50 páginas para evitar exceder tokens
        
        for (let i = 1; i <= maxPages; i++) {
          D.aiLoaderSubtitle.innerText = `Extrayendo texto: página ${i} de ${maxPages}...`;
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map(item => item.str).join(" ");
          fullText += pageText + "\n";
        }
        
        state.ai.extractedText = fullText;
        D.aiLoader.style.display = 'none';
        D.aiEmptyView.style.display = 'block';
      } catch (err) {
        console.error(err);
        alert("Error al parsear el archivo PDF. Asegúrate de que no esté protegido contra lectura.");
        clearLoadedFile();
        D.aiLoader.style.display = 'none';
        D.aiEmptyView.style.display = 'block';
      }
    };
    reader.readAsArrayBuffer(file);
  } else {
    // Texto simple
    reader.onload = function(e) {
      state.ai.extractedText = e.target.result;
    };
    reader.readAsText(file);
  }
}

// Llamada HTTP real a Gemini API
async function processFileWithAi() {
  if (!state.ai.extractedText) {
    alert("Por favor, selecciona o arrastra primero un archivo válido.");
    return;
  }
  
  if (!state.ai.apiKey) {
    alert("Debes configurar tu API Key de Gemini para utilizar esta función. De lo contrario, puedes usar el botón de 'Probar Demo Simulada'.");
    return;
  }
  
  // Cambiar visualización a loader
  D.aiLoaderTitle.innerText = "Pensando e investigando tu documento...";
  D.aiLoaderSubtitle.innerText = "El Asistente IA de Gemini está resumiendo y creando el cuestionario de estudio...";
  D.aiLoader.style.display = 'flex';
  D.aiEmptyView.style.display = 'none';
  D.aiSummaryView.style.display = 'none';
  D.aiQuizView.style.display = 'none';
  
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${state.ai.apiKey}`;
  
  // Prompt super detallado para asegurar salida en JSON limpia
  const systemPrompt = `
    Actúas como un profesor universitario experto en programación de la universidad CUN. Tu tarea es analizar el texto académico provisto y producir un JSON estricto en español.
    
    El JSON resultante debe seguir exactamente el siguiente esquema de TypeScript:
    {
      "summary": string, // Resumen detallado estructurado en formato Markdown rico de los conceptos clave indispensables para pasar quices y exámenes de esta materia. Incluye explicaciones teóricas y si aplica, bloques de código representados en Markdown.
      "questions": Array<{
        "id": string, // Un identificador único de pregunta
        "semester": number, // El semestre de este tema (1, 2 o 3)
        "subject": string, // La materia del tema analizado
        "question": string, // La pregunta de opción múltiple estructurada
        "options": Array<string>, // Exactamente 4 opciones de respuesta
        "correctAnswer": number, // Índice de la respuesta correcta (0, 1, 2 o 3)
        "explanation": string // Una justificación académica detallada de por qué esa es la respuesta correcta y por qué las otras son incorrectas
      }> // Debes generar exactamente 5 preguntas de alta calidad basadas en el texto.
    }
    
    Asegúrate de que la salida sea ÚNICAMENTE el bloque JSON. No agregues bloques de código markdown como \`\`\`json ni texto adicional antes o después del JSON.
  `;
  
  const payload = {
    contents: [
      {
        parts: [
          { text: `${systemPrompt}\n\nTexto a analizar:\n${state.ai.extractedText.slice(0, 15000)}` }
        ]
      }
    ],
    generationConfig: {
      responseMimeType: "application/json"
    }
  };
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error?.message || "Error desconocido del servidor de Google");
    }
    
    const result = await response.json();
    const rawJsonText = result.candidates[0].content.parts[0].text;
    
    const parsedData = JSON.parse(rawJsonText);
    
    // Guardar resultados en el estado
    state.ai.summary = parsedData.summary;
    state.ai.generatedQuestions = parsedData.questions;
    
    // Renderizar resultados en pantalla
    renderAiResults();
    
  } catch (err) {
    console.error(err);
    alert(`Error al procesar con IA: ${err.message}. Revisa que tu API Key sea válida y tengas conexión a Internet.`);
  } finally {
    D.aiLoader.style.display = 'none';
  }
}

// Renderizador del output de la IA
function renderAiResults() {
  // Renderizar Resumen en Markdown simple
  D.aiSummaryView.innerHTML = parseSimpleMarkdown(state.ai.summary);
  
  // Renderizar Cuestionario en lista
  D.aiQuizListTarget.innerHTML = '';
  D.tabAiQuiz.innerText = `Cuestionario Generado (${state.ai.generatedQuestions.length})`;
  
  state.ai.generatedQuestions.forEach((q, idx) => {
    const div = document.createElement('div');
    div.className = 'ai-quiz-item';
    
    let optionsHtml = '';
    q.options.forEach((opt, oIdx) => {
      const isCorrect = oIdx === q.correctAnswer;
      optionsHtml += `<li class="${isCorrect ? 'correct' : ''}">${String.fromCharCode(65 + oIdx)}) ${escapeHTML(opt)} ${isCorrect ? '✓' : ''}</li>`;
    });
    
    div.innerHTML = `
      <h5>${idx + 1}. ${escapeHTML(q.question)}</h5>
      <ul class="ai-quiz-options-list">
        ${optionsHtml}
      </ul>
      <p style="font-size:0.75rem; color:var(--accent-cyan); margin-top:0.5rem;">
        <strong>Justificación:</strong> ${escapeHTML(q.explanation)}
      </p>
    `;
    D.aiQuizListTarget.appendChild(div);
  });
  
  // Cambiar visibilidad
  D.aiEmptyView.style.display = 'none';
  D.aiSummaryView.style.display = 'block';
  D.aiQuizView.style.display = 'none';
  D.tabAiSummary.classList.add('active');
  D.tabAiQuiz.classList.remove('active');
  
  // Desplazar vista al panel de salida
  D.aiContentDisplay.scrollIntoView({ behavior: 'smooth' });
}

// Cargar el cuestionario dinámico generado por la IA en el simulador
function loadAiQuizToSimulator() {
  if (state.ai.generatedQuestions.length === 0) return;
  
  // Inyectar las preguntas generadas en la base global
  // Les asignamos una marca para identificarlas
  const quizQuestions = state.ai.generatedQuestions.map(q => {
    return {
      ...q,
      id: `ai_dynamic_${Math.random().toString(36).substr(2, 9)}`,
      subject: "Cargado por Asistente IA",
      semester: 1
    };
  });
  
  // Reemplazar temporalmente el array de preguntas del simulador e iniciar
  state.quiz.questions = quizQuestions;
  state.quiz.currentQuestionIndex = 0;
  state.quiz.score = 0;
  state.quiz.answers = [];
  
  // Navegar al simulador
  D.tabs.quiz.click();
  
  // Ajustar la vista del simulador
  D.quizSetupContainer.style.display = 'none';
  D.quizActiveContainer.style.display = 'block';
  D.quizResultsContainer.style.display = 'none';
  D.activeSubject.innerText = "Asistente IA - Examen Personalizado";
  D.activeSemester.innerText = "Documento Cargado";
  
  if (state.quiz.mode === 'simulacro') {
    D.timerBox.style.display = 'flex';
    state.quiz.timeLeft = state.quiz.questions.length * 45;
    startQuizTimer();
  } else {
    D.timerBox.style.display = 'none';
  }
  
  renderCurrentQuestion();
}

// ================= HERRAMIENTAS AUXILIARES =================

// Markdown Parser ultra-simple para el resumen de la IA
function parseSimpleMarkdown(md) {
  if (!md) return '';
  let html = md;
  
  // Encabezados
  html = html.replace(/^#\s+(.+)$/gm, 'h2 style="font-size:1.6rem; color:#fff; margin-bottom:1rem; margin-top:1.5rem;">$1</h2>');
  html = html.replace(/^##\s+(.+)$/gm, '<h3 style="font-size:1.25rem; color:var(--accent-cyan); margin-bottom:0.75rem; margin-top:1.5rem;">$1</h3>');
  html = html.replace(/^###\s+(.+)$/gm, '<h4 style="font-size:1.05rem; color:#fff; margin-bottom:0.5rem; margin-top:1.25rem;">$1</h4>');
  
  // Listas desordenadas
  html = html.replace(/^\*\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/^\-\s+(.+)$/gm, '<li>$1</li>');
  
  // Negritas
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Código en línea
  html = html.replace(/`(.*?)`/g, '<code style="background:rgba(255,255,255,0.06); padding:2px 6px; border-radius:4px; font-family:\'JetBrains Mono\',monospace; font-size:0.85rem; color:var(--accent-cyan);">$1</code>');
  
  // Párrafos (líneas sueltas)
  html = html.split('\n').map(line => {
    line = line.trim();
    if (!line) return '';
    if (line.startsWith('<h') || line.startsWith('<li>') || line.startsWith('<pre') || line.startsWith('</pre')) {
      return line;
    }
    return `<p style="margin-bottom:0.75rem; font-size:0.9rem; color:var(--text-secondary);">${line}</p>`;
  }).join('\n');
  
  return html;
}

// Escape de HTML para prevenir inyecciones
function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Controladores del Modal de Configuración Global
function setupSettingsModalEvents() {
  // Abrir Modal
  D.btnOpenSettings.addEventListener('click', () => {
    D.modalGeminiKey.value = state.ai.apiKey;
    D.modalUserEmail.value = state.ai.userEmail;
    D.settingsModal.style.display = 'flex';
    D.settingsKeyStatus.style.display = 'none';
  });

  // Cerrar Modal
  D.btnCloseSettings.addEventListener('click', () => {
    D.settingsModal.style.display = 'none';
  });

  // Cerrar al hacer clic fuera del contenido del modal
  D.settingsModal.addEventListener('click', (e) => {
    if (e.target === D.settingsModal) {
      D.settingsModal.style.display = 'none';
    }
  });

  // Guardar clave y correo
  D.btnSaveSettings.addEventListener('click', () => {
    const key = D.modalGeminiKey.value.trim();
    const email = D.modalUserEmail.value.trim();
    
    // Guardar Key
    state.ai.apiKey = key;
    D.geminiKey.value = key; // Sincronizar el campo de la pestaña de IA
    if (key) {
      localStorage.setItem('cun_prep_gemini_key', key);
      state.stats.savedKey = true;
    } else {
      localStorage.removeItem('cun_prep_gemini_key');
      state.stats.savedKey = false;
    }

    // Guardar Email
    state.ai.userEmail = email;
    if (email) {
      localStorage.setItem('cun_prep_user_email', email);
      D.headerUserEmail.innerText = email;
      D.headerUserBadge.style.display = 'inline-block';
    } else {
      localStorage.removeItem('cun_prep_user_email');
      D.headerUserBadge.style.display = 'none';
    }
    
    D.settingsKeyStatus.style.display = 'block';
    setTimeout(() => {
      D.settingsModal.style.display = 'none';
    }, 1000);
    
    updateDashboardStats();
  });

  // Borrar clave y correo
  D.btnClearSettings.addEventListener('click', () => {
    D.modalGeminiKey.value = '';
    D.modalUserEmail.value = '';
    D.geminiKey.value = '';
    
    state.ai.apiKey = '';
    state.ai.userEmail = '';
    
    localStorage.removeItem('cun_prep_gemini_key');
    localStorage.removeItem('cun_prep_user_email');
    
    state.stats.savedKey = false;
    D.headerUserBadge.style.display = 'none';
    
    updateDashboardStats();
    D.settingsModal.style.display = 'none';
  });
}

// ================= SIMULACIÓN DE INICIAR SESIÓN CON GOOGLE =================
function setupGoogleLoginEvents() {
  // Lista de cuentas guardadas o iniciales
  let savedAccounts = ['estudiante.cun@cun.edu.co', 'desarrollador.cun@cun.edu.co'];
  
  // Cargar cuentas adicionales agregadas por el usuario
  const localAccounts = localStorage.getItem('cun_prep_google_accounts');
  if (localAccounts) {
    savedAccounts = JSON.parse(localAccounts);
  }

  // Abrir Selector de Google
  D.btnGoogleLoginTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    renderGoogleAccountsList();
    D.googleAccountsView.style.display = 'block';
    D.googleAddAccountView.style.display = 'none';
    D.googleLoginModal.style.display = 'flex';
    D.googleLoadingBar.style.display = 'none';
  });

  // Cancelar Selector
  D.btnCancelGoogle.addEventListener('click', () => {
    D.googleLoginModal.style.display = 'none';
  });

  // Ir a "Usar otra cuenta"
  D.btnAddGoogleAccount.addEventListener('click', () => {
    D.googleAccountsView.style.display = 'none';
    D.googleAddAccountView.style.display = 'block';
    D.googleNewEmail.value = '';
  });

  // Volver a la lista
  D.btnBackGoogleList.addEventListener('click', () => {
    D.googleAccountsView.style.display = 'block';
    D.googleAddAccountView.style.display = 'none';
  });

  // Enviar nuevo correo
  D.btnSubmitGoogleLogin.addEventListener('click', () => {
    const email = D.googleNewEmail.value.trim();
    if (!email || !validateEmail(email)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }

    D.googleLoadingBar.style.display = 'block';

    setTimeout(() => {
      // Agregar a la lista si no existe
      if (!savedAccounts.includes(email)) {
        savedAccounts.push(email);
        localStorage.setItem('cun_prep_google_accounts', JSON.stringify(savedAccounts));
      }

      linkGoogleAccount(email);
    }, 1500);
  });

  // Renderizar la lista de cuentas
  function renderGoogleAccountsList() {
    D.googleAccountsList.innerHTML = '';
    
    savedAccounts.forEach(email => {
      const item = document.createElement('div');
      item.className = 'google-account-item';
      
      const initial = email.charAt(0).toUpperCase();
      const username = email.split('@')[0];
      const displayName = username.replace('.', ' ').replace(/\b\w/g, c => c.toUpperCase()); // Formato Nombre Apellido
      
      item.innerHTML = `
        <div class="google-avatar">${initial}</div>
        <div class="google-account-info">
          <span class="google-account-name">${displayName}</span>
          <span class="google-account-email">${email}</span>
        </div>
      `;
      
      item.addEventListener('click', () => {
        D.googleLoadingBar.style.display = 'block';
        setTimeout(() => {
          linkGoogleAccount(email);
        }, 1200);
      });
      
      D.googleAccountsList.appendChild(item);
    });
  }

  // Vincular cuenta seleccionada
  function linkGoogleAccount(email) {
    state.ai.userEmail = email;
    D.modalUserEmail.value = email;
    D.headerUserEmail.innerText = email;
    D.headerUserBadge.style.display = 'inline-block';
    localStorage.setItem('cun_prep_user_email', email);
    
    updateDashboardStats();
    
    D.googleLoadingBar.style.display = 'none';
    D.googleLoginModal.style.display = 'none';
    
    // Mostrar retroalimentación de guardado en el modal principal
    D.settingsKeyStatus.style.display = 'block';
  }

  // Validador simple de email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', init);


