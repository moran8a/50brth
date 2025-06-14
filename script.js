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

  // Carrusel de imágenes
  const carouselImages = [];
  for (let i = 1; i <= 12; i++) {
    carouselImages.push(`img${String(i).padStart(3, '0')}.png`); // Asume que las imágenes están en una carpeta 'images'
  }

  const carousel = document.getElementById("image-carousel");
  const carouselImage = document.getElementById("carousel-image");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  let currentImageIndex = 0;

  function showImage(index) {
    carouselImage.src = carouselImages[index];
  }

  prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
  });

  nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
  });

  // Mostrar la primera imagen al cargar
  if (carouselImages.length > 0) {
    showImage(currentImageIndex);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(startCounterAnimation); // más seguro que setTimeout inicial
});


function startCounterAnimation() {
  const counter = document.getElementById("counter");
  const intro = document.getElementById("intro");
  const carousel = document.getElementById("image-carousel"); // Obtener el carrusel

  if (!counter || !intro || !carousel) {
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

      setTimeout(updateCounter, Math.max(delay, 10)); // mínimo 10ms
    } else {
      counter.textContent = 50;
      intro.classList.add("zoom");

      setTimeout(() => {
        // Verifica que confetti esté disponible
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
          // Mostrar el carrusel después de ocultar la introducción
          carousel.classList.add("visible");
        }, 2500); // Espera 2.5 segundos después del confeti para ocultar la intro y mostrar el carrusel
      }, 300);
    }
  }

  setTimeout(updateCounter, delay);
}window.addEventListener("DOMContentLoaded", () => {
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

  // Carrusel de imágenes
  const carouselImages = [];
  for (let i = 1; i <= 12; i++) {
    carouselImages.push(`images/img${String(i).padStart(3, '0')}.jpg`); // Asume que las imágenes están en una carpeta 'images'
  }

  const carousel = document.getElementById("image-carousel");
  const carouselImage = document.getElementById("carousel-image");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  let currentImageIndex = 0;

  function showImage(index) {
    carouselImage.src = carouselImages[index];
  }

  prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
  });

  nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
  });

  // Mostrar la primera imagen al cargar
  if (carouselImages.length > 0) {
    showImage(currentImageIndex);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(startCounterAnimation); // más seguro que setTimeout inicial
});


function startCounterAnimation() {
  const counter = document.getElementById("counter");
  const intro = document.getElementById("intro");
  const carousel = document.getElementById("image-carousel"); // Obtener el carrusel

  if (!counter || !intro || !carousel) {
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

      setTimeout(updateCounter, Math.max(delay, 10)); // mínimo 10ms
    } else {
      counter.textContent = 50;
      intro.classList.add("zoom");

      setTimeout(() => {
        // Verifica que confetti esté disponible
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
          // Mostrar el carrusel después de ocultar la introducción
          carousel.classList.add("visible");
        }, 2500); // Espera 2.5 segundos después del confeti para ocultar la intro y mostrar el carrusel
      }, 300);
    }
  }

  setTimeout(updateCounter, delay);
}
