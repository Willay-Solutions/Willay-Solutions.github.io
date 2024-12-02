
// Animar las letras del título
gsap.fromTo(
    ".title span",
    { opacity: 0, y: 50 }, // Estado inicial
    { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.1, // Intervalo entre letras
        ease: "back.out(1.7)" // Rebote suave
    }
);

// Animar el párrafo con un pequeño retraso
gsap.from(".intro-content p", { 
    opacity: 0, 
    y: 20, 
    duration: 1, 
    delay: 1 
});

// Animar el botón con retraso adicional
gsap.from(".btn-start", { 
    opacity: 0, 
    scale: 0.8, 
    duration: 0.8, 
    delay: 1.5 
});

// Animar la imagen con escala
gsap.from(".intro-image img", { 
    opacity: 0, 
    scale: 0.8, 
    duration: 1.5, 
    delay: 1 
});
// Animaciones iniciales con GSAP
gsap.from(".intro-content h1", { duration: 1, y: -50, opacity: 0 });
gsap.from(".intro-content p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".intro-image img", { duration: 1, scale: 0.8, opacity: 0, delay: 1 });

// Animaciones al hacer scroll con ScrollReveal
ScrollReveal().reveal(".course-item", { delay: 200, distance: "50px", origin: "bottom", interval: 200 });

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
            header.classList.remove("transparent");
        } else {
            header.classList.add("transparent");
            header.classList.remove("scrolled");
        }
    });
});

// Archivo: para servicios

document.addEventListener("DOMContentLoaded", () => {
    // Animación de entrada para la sección "Más Servicios"
    gsap.fromTo(
        ".catalog-section h2",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
        ".catalog-section p",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
        ".catalog-section .btn",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 1, ease: "elastic.out(1, 0.5)" }
    );

    // Notificación al descargar catálogo
    const downloadButton = document.getElementById("download-catalog");
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = "¡Gracias por descargar nuestro catálogo!";
    document.body.appendChild(notification);

    downloadButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita la descarga instantánea para mostrar la animación
        notification.classList.add("show");

        // Simula una descarga retrasada
        setTimeout(() => {
            window.location.href = downloadButton.href; // Descarga el archivo
            setTimeout(() => notification.classList.remove("show"), 3000);
        }, 500);
    });
});