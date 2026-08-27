'use strict'

import {validator} from "./validator.js";

const registrationForm = document.forms["RegForm"]
const pass = document.getElementById('password')
const passConfirm = document.getElementById('confirm-password')
const passCheckValidation = document.getElementById('check-password-val')
const clearButton = document.getElementById('form-button-reset')


registrationForm.addEventListener('input', function (event) {
    const currentInput = event.target;
    if (currentInput.tagName !== 'INPUT') return
    if (currentInput.classList.contains('valid')) {
        currentInput.classList.replace("valid", "invalid")
    }
    const currentInputValidate = validator(currentInput.id, currentInput.value)
    if (currentInputValidate === "valid") {
        currentInput.classList.replace("invalid", "valid")
        const currentInputValidateMessage = document.getElementById(`${event.target.id}-val`)
        currentInputValidateMessage.style.opacity = '0'
    }
    validateFormCheck()
})

registrationForm.addEventListener('focusout', function (event) {
    const eventTargetValidate = document.getElementById(`${event.target.id}-val`)
    if (!eventTargetValidate) return
    if (!event.target.classList.contains('valid')) eventTargetValidate.style.opacity = '1';
    else eventTargetValidate.style.opacity = '0';
    if (event.target.id === 'confirm-password' || event.target.id === 'password' && pass.value && passConfirm.value) {
        if (pass.value !== passConfirm.value) passCheckValidation.style.opacity = '1';
        else passCheckValidation.style.opacity = '0';
    }
})

registrationForm.addEventListener('click', (event) => showPassword(event))

clearButton.addEventListener('click', (event) => clearForm(event))

export function clearForm(event = "") {
    document.getElementById('form-button').disabled = true;
    if (event) event.stopPropagation();

    // Clear input value and switch to invalid state
    for (let input of registrationForm) {
        if (input.getAttribute('class') !== "button") {
            input.value = '';
            if (input.classList.contains('valid')) input.classList.replace("valid", "invalid")
        }
    }

    // Hide all error massages
    for (let errorMessage of document.querySelectorAll('.errorMessage')) {
        errorMessage.style.opacity = '0';
    }
}

function validateFormCheck() {
    const inputs = Array.from(registrationForm).filter((element) => element.tagName === "INPUT"
        && element.type !== "submit" && element.type !== "reset");
    const validationResult = inputs.every((input) => input.classList.contains('valid'));
    document.getElementById('form-button').disabled = !(validationResult && pass.value === passConfirm.value);
}

function showPassword(event) {
    if (event.target.tagName !== 'BUTTON') return;
    const currentButton = event.target;
    const currentInput = document.getElementById(`${currentButton.id}word`)
    const value = currentInput.value;
    currentInput.type = currentInput.type === 'password' ? 'text' : 'password';
    currentInput.value = value;
    currentButton.classList.toggle('open');
}

