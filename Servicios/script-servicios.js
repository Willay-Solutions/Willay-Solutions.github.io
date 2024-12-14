document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animación de la sección de diagnóstico
    gsap.fromTo(
        ".diagnostic",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".diagnostic",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );

    // Animación del contenido
    gsap.fromTo(
        ".diagnostic-content",
        { opacity: 0, x: -50 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".diagnostic",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );

    // Animación de la imagen
    gsap.fromTo(
        ".diagnostic-image img",
        { opacity: 0, x: 50 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".diagnostic",
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );
    // Animación para la sección del Catálogo
    gsap.fromTo(
        ".catalog-section h2",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".catalog-section", start: "top 80%" } }
    );

    gsap.fromTo(
        ".catalog-section p",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".catalog-section", start: "top 80%" } }
    );

    gsap.fromTo(
        ".catalog-section .btn",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.4, ease: "back.out(1.7)", scrollTrigger: { trigger: ".catalog-section", start: "top 80%" } }
    );

    // Animación para las secciones de Servicios
    gsap.utils.toArray(".service-section").forEach((section, index) => {
        const isReversed = section.querySelector(".service-content").classList.contains("reverse");
        const xStart = isReversed ? 50 : -50;

        gsap.fromTo(
            section.querySelector(".service-text"),
            { opacity: 0, x: xStart },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: { trigger: section, start: "top 80%" },
            }
        );

        gsap.fromTo(
            section.querySelector(".service-image img"),
            { opacity: 0, x: -xStart },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: { trigger: section, start: "top 80%" },
            }
        );
    });
});
