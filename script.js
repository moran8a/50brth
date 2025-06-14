document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const intro = document.getElementById("intro");
  const mainContainer = document.querySelector('.container'); // Contenedor principal con título y botón
  const showGiftsButton = document.getElementById("show-gifts-button"); // Botón "INICIAR"
  const giftSection = document.getElementById("gift-section"); // Sección de los regalos
  const backgroundMark = document.querySelector('.background-mark'); // Marca de agua

  // Función para mostrar el contenido principal y ocultar la intro
  function showMainContent() {
    intro.classList.add("hidden"); // Oculta la pantalla de introducción
    backgroundMark.classList.remove("hidden"); // Asegura que la marca de agua se muestre (si la quieres ahí)
    mainContainer.classList.remove("hidden"); // Muestra el contenedor principal
    if (showGiftsButton) {
        showGiftsButton.textContent = "¡Pulsa para Regalos!"; // Cambia el texto del botón al cargar
    }
  }

  // --- Lógica para saltar la intro con LocalStorage ---
  const introSeen = localStorage.getItem('introSeen');

  if (introSeen === 'true') {
    // Si ya se vio la intro, la saltamos
    showMainContent();
    // Podemos incluso mostrar la sección de regalos directamente si queremos,
    // o mantener el botón de iniciar para que el usuario haga clic.
    // giftSection.classList.remove("hidden");
    // mainContainer.classList.add("hidden"); // Si mostramos regalos directamente, ocultamos el container principal
    console.log("Intro saltada, ya se había visto.");
  } else {
    // Si no se ha visto, ejecutamos la animación del contador
    startCounterAnimation();
  }

  // --- Animación del contador (sin cambios importantes en la lógica interna) ---
  function startCounterAnimation() {
    if (!counter || !intro) {
      console.error("No se encontró el elemento #counter o #intro para la animación.");
      return;
    }

    let count = 1;
    let delay = 100;

    function updateCounter() {
      counter.textContent = count;

      if (count < 50) {
        count++;
        delay *= 0.92;
        setTimeout(updateCounter, Math.max(delay, 10)); // mínimo 10ms
      } else {
        counter.textContent = 50;
        intro.classList.add("zoom");

        setTimeout(() => {
          if (typeof confetti === "function") {
            confetti({
              particleCount: 150,
              spread: 120,
              origin: { y: 0.6 },
              scalar: 1.9,
              startVelocity: 50
            });
          } else {
            console.warn("Confetti no está definido.");
          }

          setTimeout(() => {
            intro.classList.add("hidden"); // Oculta la pantalla de introducción
            backgroundMark.classList.remove("hidden"); // Muestra la marca de agua
            mainContainer.classList.remove("hidden"); // Muestra el contenedor principal

            // Marcar la intro como vista en LocalStorage
            localStorage.setItem('introSeen', 'true');
            console.log("Intro terminada y marcada como vista.");

          }, 2500); // Espera un poco más después del confetti
        }, 300);
      }
    }
    updateCounter(); // Inicia la animación
  }

  // --- Funcionalidad de los botones con data-hover (sin cambios) ---
  const buttons = document.querySelectorAll(".gift-button"); 
  buttons.forEach((btn) => {
    const originalText = btn.textContent;
    const hoverText = btn.getAttribute("data-hover");

    // Asegurarse de que data-hover tenga contenido para evitar texto vacío en hover
    if (hoverText) { 
        btn.addEventListener("mouseenter", () => {
            btn.textContent = hoverText;
        });

        btn.addEventListener("mouseleave", () => {
            btn.textContent = originalText;
        });
    }
  });

  // La lógica para mostrar los regalos y la navegación a páginas de regalo
  // se sigue manejando en el <script> inline dentro de index.html
  // para una mejor separación de responsabilidades.
});