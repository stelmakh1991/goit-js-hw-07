const form = document.querySelector('.login-form');
const email = document.querySelector('.login-form').elements["email"];
const password = document.querySelector('.login-form').elements["password"];

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (email.value.length > 1 && password.value.length > 1) {
        console.log({
            name: email.value.trim(),
            password: password.value.trim(),
        });
        form.reset();
    } else {
        alert('All form fields must be filled in');
    }
};
