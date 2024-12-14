document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const cards = document.querySelectorAll(".founder-card");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;
    const totalCards = cards.length;

    // Función para actualizar el desplazamiento del carrusel
    const updateCarousel = () => {
        const offset = -currentIndex * 100; // Desplaza el carrusel
        carousel.style.transform = `translateX(${offset}%)`;
    };

    // Navegación manual
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCarousel();
        restartAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCarousel();
        restartAutoSlide();
    });

    // // Auto deslizamiento
    // let autoSlideInterval = setInterval(() => {
    //     currentIndex = (currentIndex + 1) % totalCards;
    //     updateCarousel();
    // }, 5000);

    // Reinicia el auto deslizamiento
    const restartAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        }, 5000);
    };

    // Animaciones con GSAP
    cards.forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Animar la sección "Sobre Nosotros"
    gsap.fromTo(
        ".about h1",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
        ".about p",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Animar la sección "Nuestros Cofundadores"
    gsap.fromTo(
        ".founders h2",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
    );

    gsap.fromTo(
        ".founder-card",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2, // Retraso entre tarjetas
            ease: "power3.out",
        }
    );
});
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const cards = document.querySelectorAll(".founder-card");
    const dotsContainer = document.querySelector(".dots-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;
    const totalCards = cards.length;

    // Crear los puntos indicadores dinámicamente
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active"); // Marca el primer punto como activo
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    // Actualizar el carrusel y los puntos
    const updateCarousel = () => {
        // Mover el carrusel
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Actualizar los puntos
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    };

    // Navegación manual con botones
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalCards; // Circular al final
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards; // Circular al inicio
        updateCarousel();
    });

    // Navegación manual con puntos
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });
    });
});
