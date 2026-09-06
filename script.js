document.addEventListener("DOMContentLoaded", function () {

    // Mobile Menu
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact Form
    const form = document.querySelector("#contact form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("Thank you! Your message has been received.");

            form.reset();
        });
    }

    // Back To Top
    const topButton = document.querySelector("#top-btn");

    if (topButton) {

        window.addEventListener("scroll", function () {
            if (window.scrollY > 400) {
                topButton.classList.add("show");
            } else {
                topButton.classList.remove("show");
            }
        });

        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});