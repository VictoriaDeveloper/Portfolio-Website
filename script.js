document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Your message has been sent!');
        form.reset();
    });
});
