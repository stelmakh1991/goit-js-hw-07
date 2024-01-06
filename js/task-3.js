const eventElem = document.querySelector('input');
const eventOutput = document.querySelector('#name-output');

eventElem.addEventListener('input', onInput);

function onInput() {
    if (eventElem.value.trim().length < 1) {
        eventOutput.textContent = 'Anonymus';
    } else {
        eventOutput.textContent = eventElem.value.trim();
    }
};