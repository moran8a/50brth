function startCounterAnimation() {
  const counterEl = document.getElementById("counter");
  const introScreen = document.getElementById("intro");

  let count = 1;
  let delay = 120; // empieza más lento

  function updateCounter() {
    counterEl.textContent = count;

    if (count < 50) {
      count++;
      delay = Math.max(20, delay * 0.9); // acelera progresivamente
      setTimeout(updateCounter, delay);
    } else {
      // Hacer zoom final
      counterEl.classList.add("zoom");
      setTimeout(() => {
        introScreen.style.opacity = 0;
        setTimeout(() => {
          introScreen.style.display = "none";
        }, 1000); // esperar fade out
      }, 1000); // mostrar zoom un segundo
    }
  }

  updateCounter();
}

window.addEventListener("DOMContentLoaded", () => {
  startCounterAnimation();

  // Ya funciona el resto de botones como antes
  document.querySelectorAll('.gift-button').forEach(button => {
    const originalText = button.textContent;
    const hoverText = button.getAttribute('data-hover');

    button.addEventListener('mouseenter', () => {
      button.textContent = hoverText;
    });

    button.addEventListener('mouseleave', () => {
      button.textContent = originalText;
    });
  });
});

document.querySelectorAll('.gift-button').forEach(button => {
    const originalText = button.textContent;
    const hoverText = button.getAttribute('data-hover');
  
    button.addEventListener('mouseenter', () => {
      button.textContent = hoverText;
    });
  
    button.addEventListener('mouseleave', () => {
      button.textContent = originalText;
    });
  });
  