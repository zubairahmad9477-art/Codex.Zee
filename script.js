const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const text =
        "Hello CodeWithZee!%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A" +
        "Message: " + encodeURIComponent(message);

    const whatsappURL =
        "https://wa.me/923018339477?text=" + text;

    window.location.href = whatsappURL;
});