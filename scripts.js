document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Carné añadido al carrito. ¡Eres oficialmente un gilipollas!');
        });
    });

    const form = document.getElementById('purchase-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por tu compra. Pronto recibirás tu carné.');
    });
});<textarea>
// Seleccionar el área de texto y el contador
const mensaje = document.getElementById('mensaje');
const wordCount = document.getElementById('wordCount');

// Contar palabras y validar que no exceda las 150
mensaje.addEventListener('input', () => {
  const words = mensaje.value.trim().split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = `${words.length}/150 palabras`;

  if (words.length > 150) {
    mensaje.setCustomValidity('No puedes exceder las 150 palabras.');
  } else {
    mensaje.setCustomValidity('');
  }
});
