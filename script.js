// Animación inicial del "hero"

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline()
        .to(".hero-title", { duration: 1, opacity: 1, y: 0 })
        .to(".hero-text", { duration: 1, opacity: 1, y: 0 }, "-=0.5");
    
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