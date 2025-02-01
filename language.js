document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle");

    // Contenido en español e inglés
    const translations = {
        es: {
            header: {
                home: "Inicio",
                services: "Servicios",
                about: "Nosotros",
                contact: "Contacto",
            },
            about: {
                title: "Sobre Nosotros",
                description:
                    "En Willay Solutions, somos una empresa boliviana de vanguardia especializada en inteligencia artificial, business intelligence y análisis de datos.",
            },
        },
        en: {
            header: {
                home: "Home",
                services: "Services",
                about: "About Us",
                contact: "Contact",
            },
            about: {
                title: "About Us",
                description:
                    "At Willay Solutions, we are a leading Bolivian company specializing in artificial intelligence, business intelligence, and data analysis.",
            },
        },
    };

    let currentLanguage = "es";

    // Cambiar el contenido según el idioma seleccionado
    const updateLanguage = () => {
        const content = translations[currentLanguage];

        // Header
        document.querySelector(".menu li:nth-child(1) a").textContent =
            content.header.home;
        document.querySelector(".menu li:nth-child(2) a").textContent =
            content.header.services;
        document.querySelector(".menu li:nth-child(3) a").textContent =
            content.header.about;
        document.querySelector(".menu li:nth-child(4) a").textContent =
            content.header.contact;

        // About section
        document.querySelector(".about h1").textContent =
            content.about.title;
        document.querySelector(".about p").textContent =
            content.about.description;
    };

    // Cambiar entre inglés y español
    languageToggle.addEventListener("click", () => {
        currentLanguage = currentLanguage === "es" ? "en" : "es";
        languageToggle.textContent = currentLanguage === "es" ? "EN" : "ES";
        updateLanguage();
    });

    // Inicializar con el idioma actual
    updateLanguage();
});