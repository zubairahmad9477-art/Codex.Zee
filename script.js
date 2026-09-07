const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const topButton = document.getElementById("top-btn");
const contactForm = document.getElementById("contactForm");

/* MOBILE MENU */

if (menuToggle && navLinks) {
menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

}

/* BACK TO TOP */

window.addEventListener("scroll", () => {

if (!topButton) return;

if (window.scrollY > 400) {
    topButton.style.display = "block";
} else {
    topButton.style.display = "none";
}

});

if (topButton) {
topButton.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});
}

/* CONTACT FORM */

if (contactForm) {
contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name) {
        alert(
            `Thank you, ${name}! Your message has been received.`
        );
    }

    contactForm.reset();
});

}

/* REVEAL SECTIONS */

const sections = document.querySelectorAll(".section");

const revealSections = () => {

sections.forEach(section => {

    const position = section.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    }

});

};

sections.forEach(section => {
section.style.opacity = "0";
section.style.transform = "translateY(30px)";
section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

window.addEventListener("scroll", revealSections);

revealSections();