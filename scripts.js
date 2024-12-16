document.addEventListener('DOMContentLoaded', function () {
    // 1. Alerta al añadir productos al carrito
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Carné añadido al carrito. ¡Eres oficialmente un gilipollas!');
        });
    });

    // 2. Validación del formulario
    const form = document.getElementById('purchase-form');
    const mensaje = document.getElementById('mensaje');
    const wordCount = document.getElementById('wordCount');
    const foto = document.getElementById('foto');

    // Contador de palabras y validación del mensaje personalizado
    mensaje.addEventListener('input', () => {
        const words = mensaje.value.trim().split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = `${words.length}/150 palabras`;

        if (words.length > 150) {
            mensaje.setCustomValidity('No puedes exceder las 150 palabras.');
        } else {
            mensaje.setCustomValidity('');
        }
    });

    // Validación de la foto subida
    foto.addEventListener('change', () => {
        const file = foto.files[0];
        if (file) {
            const fileType = file.type;
            const validImageTypes = ['image/jpeg', 'image/png'];
            if (!validImageTypes.includes(fileType)) {
                alert('Por favor, selecciona una imagen en formato JPG o PNG.');
                foto.value = ''; // Limpia el campo
            }
        }
    });

    // Enviar el formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validar que se ha subido una foto
        if (!foto.files.length) {
            alert('Por favor, sube una fotografía en formato JPG o PNG.');
            return;
        }

        // Validar el mensaje personalizado
        const words = mensaje.value.trim().split(/\s+/).filter(word => word.length > 0);
        if (words.length > 150) {
            alert('El mensaje no puede tener más de 150 palabras.');
            return;
        }

        // Si todo está correcto, mostrar confirmación
        alert('¡Gracias por tu compra! Pronto recibirás tu carné personalizado.');
        form.reset(); // Limpiar el formulario
        wordCount.textContent = '0/150 palabras';
    });
});
