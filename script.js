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
  