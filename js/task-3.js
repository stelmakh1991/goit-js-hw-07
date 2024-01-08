const inputData = document.querySelector('input');
const helloNameOutput = document.querySelector('#name-output');


inputData.addEventListener('input', onInput);

function onInput() {
    const helloName = inputData.value.trim();
    if (helloName === '') {
        helloNameOutput.textContent = 'Anonymous';
    } else {
        helloNameOutput.textContent = helloName;
    }
};