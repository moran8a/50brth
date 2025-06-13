function startCounterAnimation() {
  const counterEl = document.getElementById("counter");
  const introScreen = document.getElementById("intro");

  let count = 1;
  let delay = 120;

  function updateCounter() {
    counterEl.textContent = count;

    if (count < 50) {
      count++;
      delay = Math.max(20, delay * 0.9); // Acelera
      setTimeout(updateCounter, delay);
    } else {
      counterEl.classList.add("zoom");

      setTimeout(() => {
        introScreen.style.opacity = 0;
        setTimeout(() => {
          introScreen.style.display = "none";
          document.body.style.overflow = "auto"; // habilita scroll si es necesario
        }, 1000);
      }, 1000);
    }
  }

  updateCounter();
}

window.addEventListener("DOMContentLoaded", () => {
  startCounterAnimation();

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
