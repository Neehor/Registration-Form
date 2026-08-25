'use strict'

import {validator} from "./validator.js";

const registrationForm = document.forms["RegForm"]
const name = document.getElementById('first-name')
const surName = document.getElementById('last-name')
const email = document.getElementById('email')
const pass = document.getElementById('password')
const passConfirm = document.getElementById('confirm-password')
const day = document.getElementById('birth-day')

const passCheckValidation = document.getElementById('check-password-val')


const Maria = document.getElementById('Maria')

function validateFormCheck() {
    // let validateCheck = true
    // for (let input of registrationForm) {
    //     if (input.getAttribute('class') !== "button") {
    //         if (!input.classList.contains('valid')) validateCheck = false
    //     }
    // } every     console.log(Array.from(registrationForm))
    if (name.classList.contains('valid') && surName.classList.contains('valid') && day.classList.contains('valid')
        && pass.classList.contains('valid') && passConfirm.classList.contains('valid')
        && email.classList.contains('valid') && pass.value === passConfirm.value)
    {
        document.getElementById('form-button').disabled = false;
    } else document.getElementById('form-button').disabled = true;
}

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

const clearButton = document.getElementById('form-button-reset')
clearButton.addEventListener('click', (event) => clearForm(event))


function clearForm(event = "") {
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


export {clearForm}

