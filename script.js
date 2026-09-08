document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");

            menuToggle.textContent = isOpen ? "✕" : "☰";
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =========================
       BACK TO TOP
    ========================= */

    const topButton = document.getElementById("top-btn");

    if (topButton) {

        const updateTopButton = () => {
            topButton.style.display =
                window.scrollY > 400 ? "block" : "none";
        };

        window.addEventListener("scroll", updateTopButton);

        topButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        updateTopButton();
    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";
    });

    const revealSections = () => {

        sections.forEach(section => {

            const position =
                section.getBoundingClientRect().top;

            if (position < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections();


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const navItems =
        document.querySelectorAll(".nav-links a");

    const pageSections =
        document.querySelectorAll("section[id]");

    const updateActiveNavigation = () => {

        let currentSection = "";

        pageSections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {
                currentSection =
                    section.getAttribute("id");
            }
        });

        navItems.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();

});