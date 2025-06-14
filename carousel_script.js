window.addEventListener("DOMContentLoaded", () => {
  const carouselImages = [];
  for (let i = 1; i <= 12; i++) {
    carouselImages.push(`img${String(i).padStart(3, '0')}.png`);
  }

  const carousel = document.getElementById("image-carousel");
  const carouselImage = document.getElementById("carousel-image");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  let currentImageIndex = 0;

  function showImage(index) {
    if (carouselImage && carouselImages[index]) {
      carouselImage.src = carouselImages[index];
    } else {
      console.error("No se pudo cargar la imagen en el carrusel. Índice o elemento no válido.");
    }
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
      showImage(currentImageIndex);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
      showImage(currentImageIndex);
    });
  }

  if (carouselImages.length > 0) {
    showImage(currentImageIndex);
  }

  // Hacer el carrusel visible directamente al cargar la página
  if (carousel) {
    carousel.classList.add("visible");
  }
});