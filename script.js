// Animación inicial del "hero"
gsap.timeline()
    .to(".hero-title", { duration: 1, opacity: 1, y: 0 })
    .to(".hero-text", { duration: 1, opacity: 1, y: 0 }, "-=0.5") // Empieza antes
    .to(".hero-button", { duration: 1, opacity: 1, scale: 1 }, "-=0.5");

// Animaciones al hacer scroll
gsap.utils.toArray(".service").forEach((section) => {
    gsap.fromTo(section, 
        { opacity: 0, y: 100 }, 
        { opacity: 1, y: 0, duration: 1, scrollTrigger: {
            trigger: section,
            start: "top 80%", // Empieza cuando la sección está en el 80% de la ventana
        }}
    );
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación para la sección de Servicios
    gsap.fromTo(
        ".services",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".services",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );

    // Animación para los items de servicios
    gsap.fromTo(
        ".service-item",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2, // Cada item se anima con un retraso
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".services",
                start: "top 85%",
                toggleActions: "play none none none",
            },
        }
    );

    // Animación para la sección de Portafolio
    gsap.fromTo(
        ".portfolio",
        { opacity: 0, scale: 0.8 },
        {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
                trigger: ".portfolio",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );

    // Animación para los items de portafolio
    gsap.fromTo(
        ".portfolio-item",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".portfolio",
                start: "top 85%",
                toggleActions: "play none none none",
            },
        }
    );

    // Animación para el CTA (Call to Action)
    gsap.fromTo(
        ".cta",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
                trigger: ".cta",
                start: "top 90%",
                toggleActions: "play none none none",
            },
        }
    );

    // Botón CTA
    gsap.fromTo(
        ".cta .btn",
        { opacity: 0, scale: 0.8 },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".cta",
                start: "top 90%",
                toggleActions: "play none none none",
            },
        }
    );
});

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