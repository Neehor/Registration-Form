'use strict'


import {clearForm} from "./JSreg.js"

const userId = `${Math.floor(Math.random() * 10000)}`;

const formRegistration = document.getElementById('registration')
formRegistration.addEventListener('submit', async (e) => {
    e.preventDefault()

    let formData = new FormData(formRegistration)
    formData.append("userId", userId)

    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData
    });

    let results = await response.json()
    document.getElementById('form-button').disabled = true;
    clearForm()
    console.log(results)
})