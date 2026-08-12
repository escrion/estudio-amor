# CUN Prep-Software: Simulador de Cuestionarios y Asistente de Estudio IA

Esta es una aplicación web interactiva, moderna y premium (estilo *Glassmorphism* en modo oscuro), diseñada específicamente para los estudiantes del ciclo de **Técnica Profesional en Procesos de Programación de Software y Tecnología** de la **CUN** (Semestres 1 a 3).

La aplicación funciona como un simulador de exámenes (quices y parciales bajo la escala CUN 0.0-5.0), repositorio de guías de estudio interactivas (con generador de tablas de verdad y simulador de trazado de algoritmos), y un **Asistente de Estudio con Inteligencia Artificial** que genera resúmenes y cuestionarios personalizados a partir de archivos PDF.

---

## 🚀 Cómo abrir la aplicación en cualquier PC

Al ser una aplicación web estática pura (construida con HTML5, CSS3 y JavaScript vanilla), **no requiere instalación ni base de datos en un servidor**. 

Tienes dos formas de abrirla:

### Método 1: Doble Clic (Sin conexión a servidor)
1. Descarga o copia los archivos de la aplicación en una carpeta:
   - `index.html`
   - `styles.css`
   - `questions.js`
   - `app.js`
2. Haz doble clic sobre el archivo `index.html` y se abrirá en tu navegador favorito.
3. *Nota*: Todas las funciones básicas, quices pre-cargados, simulación de pruebas de escritorio y la API de Gemini funcionarán perfectamente desde el archivo local (`file://`).

### Método 2: Servidor Local Rápido
Si tienes NodeJS instalado, puedes iniciar un servidor web rápido ejecutando en tu consola dentro del directorio:
```bash
npx -y http-server -p 8080
```
Y luego ingresa a [http://localhost:8080](http://localhost:8080).

---

## 🌐 Cómo subirlo a GitHub y publicarlo GRATIS en Internet (GitHub Pages)

Para tener tu aplicación en la nube y acceder a ella desde cualquier PC, tablet o celular mediante un link público, puedes subirla a **GitHub** y habilitar **GitHub Pages** de forma 100% gratuita:

### Paso 1: Inicializar Git y subir a GitHub
1. Abre tu terminal en la carpeta del proyecto y ejecuta:
   ```bash
   # Inicializar repositorio git
   git init

   # Agregar todos los archivos
   git add .

   # Crear el primer commit
   git commit -m "Versión inicial CUN Prep-Software"
   ```
2. Crea un repositorio en tu cuenta de [GitHub](https://github.com/) con el nombre `cun-prep-software`.
3. Sube tus archivos a GitHub ejecutando los comandos que te proporciona la página (reemplazando tu usuario):
   ```bash
   git remote add origin https://github.com/TU_USUARIO/cun-prep-software.git
   git branch -M main
   git push -u origin main
   ```

### Paso 2: Activar GitHub Pages
1. Entra a tu repositorio en el sitio web de **GitHub**.
2. Ve a la pestaña **Settings** (Configuración) en el menú superior.
3. En la barra lateral izquierda, haz clic en **Pages**.
4. En la sección *Build and deployment*, busca **Branch**, cámbialo de `None` a `main`, y deja la carpeta en `/ (root)`. Haz clic en **Save** (Guardar).
5. Espera de 1 a 2 minutos. GitHub generará un enlace público en la parte superior de esa misma sección, con un formato similar a:
   `https://TU_USUARIO.github.io/cun-prep-software/`

¡Listo! Ya puedes compartir ese enlace con tus compañeros o usarlo desde cualquier dispositivo en cualquier parte del mundo.

---

## 🔑 Cómo vincular tu Correo y obtener tu Licencia (API Key) de Gemini Gratis

Para usar el **Asistente IA** con tus propios documentos PDF y apuntes utilizando tu correo:
1. Si tu correo (personal o de la CUN) ya cuenta con una suscripción o licencia de Google Gemini, inicia sesión con ese correo en **[Google AI Studio](https://aistudio.google.com/)**.
2. Haz clic en el botón **Get API Key** (Obtener API Key).
3. Crea una llave en un nuevo proyecto o selecciona uno existente.
4. Copia la clave generada (suele empezar con `AIzaSy...`).
5. En la aplicación CUN Prep, haz clic en el icono de engranaje **Configuración (⚙️)** en la esquina superior derecha.
6. Ingresa tu **Correo Electrónico Vinculado** (para identificar tu cuenta de usuario) e introduce la **Gemini API Key** generada.
7. Haz clic en **Guardar**. Verás que en la cabecera aparece tu correo con un indicador verde indicando que tu cuenta está vinculada con la licencia activa.

