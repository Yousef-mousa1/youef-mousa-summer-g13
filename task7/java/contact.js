let handleError = (input, msg = "") => {
    let errorElement = input.nextElementSibling;
    errorElement.innerText = msg;
}
let nameValidation = (input) => {
    let value = input.value.trim();
    if (value.length < 3) {
        handleError(input, "Please enter at least 3 characters");
    } else {
        handleError(input);
    }
}
let emailValidation = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value.trim())) {
        handleError(input, "Please enter a valid email: Example@email.com");
    } else {
        handleError(input);
    }
}
let subjectValidation = (input) => {
    if (input.value.trim().length < 3) {
        handleError(input, "Subject must be at least 3 characters");
    } else {
        handleError(input);
    }
}
let messageValidation = (input) => {
    if (input.value.trim().length < 10) {
        handleError(input, "Message must be at least 10 characters");
    } else {
        handleError(input);
    }
}
let form = document.getElementById('contactForm');
form.addEventListener('input', (e) => {
    switch (e.target.id) {
        case "userName":
            nameValidation(e.target);
            break;
        case "userEmail":
            emailValidation(e.target);
            break;
        case "subject":
            subjectValidation(e.target);
            break;
        case "message":
            messageValidation(e.target);
            break;
    }
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    nameValidation(document.getElementById('userName'));
    emailValidation(document.getElementById('userEmail'));
    subjectValidation(document.getElementById('subject'));
    messageValidation(document.getElementById('message'));

    let errors = form.querySelectorAll("small.text-danger");
    let hasError = Array.from(errors).some(el => el.innerText !== "");
    if (!hasError) {
        console.log("Form submitted successfully!");
        form.submit();
    }
});
