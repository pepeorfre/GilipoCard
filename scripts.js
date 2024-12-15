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
});
