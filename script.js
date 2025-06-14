window.addEventListener("DOMContentLoaded", () => {
  startCounterAnimation();

  const buttons = document.querySelectorAll(".gift-button");

  buttons.forEach((btn) => {
    const originalText = btn.textContent;
    const hoverText = btn.getAttribute("data-hover");

    btn.addEventListener("mouseenter", () => {
      btn.textContent = hoverText;
    });

    btn.addEventListener("mouseleave", () => {
      btn.textContent = originalText;
    });
  });

  // INICIO DE LA LÓGICA DEL CARRUSEL DE IMÁGENES
  const carouselImages = [];
  for (let i = 1; i <= 12; i++) {
    // ASEGÚRATE QUE ESTO ES '.png' SI TUS IMÁGENES SON PNG
    // Y QUE NO TIENE 'images/' SI ESTÁN EN EL MISMO NIVEL
    carouselImages.push(`img${String(i).padStart(3, '0')}.png`); 
  }

  const carousel = document.getElementById("image-carousel");
  const carouselImage = document.getElementById("carousel-image");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  let currentImageIndex = 0;

  function showImage(index) {
    if (carouselImage && carouselImages[index]) { // Verifica que el elemento y la imagen existan
      carouselImage.src = carouselImages[index];
    } else {
      console.error("No se pudo cargar la imagen en el carrusel. Índice o elemento no válido.");
    }
  }

  if (prevButton) { // Añade verificación de existencia de botones
    prevButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
      showImage(currentImageIndex);
    });
  }

if (nextButton) { // Asegura que el botón existe antes de añadir el listener
    nextButton.addEventListener("click", () => { // <--- ESTO ES LO QUE FALTABA O ESTABA FUERA
      currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
      showImage(currentImageIndex);
    });
  }

  // Mostrar la primera imagen al cargar, si hay imágenes
  if (carouselImages.length > 0) {
    showImage(currentImageIndex);
  }
  // FIN DE LA LÓGICA DEL CARRUSEL DE IMÁGENES
});

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(startCounterAnimation);
});

function startCounterAnimation() {
  const counter = document.getElementById("counter");
  const intro = document.getElementById("intro");
  const carousel = document.getElementById("image-carousel"); // Obtener el carrusel

  if (!counter || !intro || !carousel) { // Añadimos verificación para el carrusel
    console.error("No se encontró el elemento #counter, #intro o #image-carousel");
    return;
  }

  let count = 1;
  let delay = 100;

  function updateCounter() {
    counter.textContent = count;

    if (count < 50) {
      count++;
      delay *= 0.92;

      setTimeout(updateCounter, Math.max(delay, 10));
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
          intro.style.display = "none";
          // HACEMOS VISIBLE EL CARRUSEL AQUÍ
          carousel.classList.add("visible");
        }, 2500);
      }, 300);
    }
  }

  setTimeout(updateCounter, delay);
}