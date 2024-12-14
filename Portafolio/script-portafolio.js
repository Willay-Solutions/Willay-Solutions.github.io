document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
        ".portfolio-intro h1",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".portfolio-intro", start: "top 80%" } }
    );

    gsap.fromTo(
        ".portfolio-intro p",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out", scrollTrigger: { trigger: ".portfolio-intro", start: "top 80%" } }
    );
    
    gsap.registerPlugin(ScrollTrigger);

    // Animaciones de entrada para cada sección
    gsap.utils.toArray(".portfolio-section").forEach((section) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
            }
        );
    });

    // Modal para artículos pendientes
    const notifyButtons = document.querySelectorAll(".notify-btn");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <p>¡Quédate atento a nuestras redes sociales! Avisaremos cuando el artículo esté disponible.</p>
        <a href="https://www.instagram.com/Willay_Solutions" target="_blank">Visítanos en Instagram</a>
    `;
    document.body.appendChild(modal);

    notifyButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.classList.add("active");
            setTimeout(() => modal.classList.remove("active"), 5000); // Modal se cierra automáticamente
        });
    });
});