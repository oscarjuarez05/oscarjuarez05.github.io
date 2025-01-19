let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

// Optional: Auto slide every 5 seconds
setInterval(nextSlide, 10000);

/* Habilidades */
function animateSkillsOnScroll() {
    const skillCards = document.querySelectorAll('.skill-card');
    const windowHeight = window.innerHeight;

    skillCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 50) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', animateSkillsOnScroll);

/* Copiar Numero */
function copyNumber(button) {
    // Selecciona el párrafo con la clase 'number' que está justo antes del botón clicado
    const numberElement = button.previousElementSibling;
    const number = numberElement.textContent.trim();

    navigator.clipboard.writeText(number).then(() => {
        button.textContent = "¡Número copiado!";
        button.classList.add('copied');

        // Restablece el texto del botón después de 3 segundos
        setTimeout(() => {
            button.textContent = "Copiar Número";
            button.classList.remove('copied');
        }, 5000);
    }).catch((err) => {
        console.error("Error al copiar:", err);
    });
}

// EmailJS. Formulario.
(function () {
    emailjs.init('y7fX4Nsy8oB77K1Dz');
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    const status = document.getElementById('form-status');
    const serviceID = 'service_9irauvp';
    const templateID = 'template_nbndeec';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            status.textContent = 'Mensaje enviado con éxito. ¡Gracias por contactarme!';
            status.style.color = 'green';
            this.reset(); // Reinicia el formulario después de enviarlo
        }, (err) => {
            status.textContent = 'Error al enviar el mensaje. Intenta nuevamente.';
            status.style.color = 'red';
            console.error('Error:', err);
        });
});
