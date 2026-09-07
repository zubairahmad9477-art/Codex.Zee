const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const text =
        "Hello CodeWithZee!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Message: " + message;

    const whatsappURL =
        "https://wa.me/923018339477?text=" +
        encodeURIComponent(text);

    window.location.href = whatsappURL;
});