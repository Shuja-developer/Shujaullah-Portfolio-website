document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("4SKnOu-uiPFc7zhq5"); // Initialize EmailJS with your user ID

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Send the form data using EmailJS
        emailjs.sendForm('service_yfukbi6', 'template_c6q2a4v', this)
            .then(function () {
                alert('SUCCESS! Your message has been sent.');
                document.getElementById('contactForm').reset(); // Optional: Reset the form after successful submission
            }, function (error) {
                alert('FAILED... Your message could not be sent. Please try again later.');
                console.log('FAILED...', error);
            });
    });
});
