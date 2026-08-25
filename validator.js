'use strict'

function validator(id, value) {

    switch (id) {

        case 'first-name':
            if (/^[а-яё]+$/i.test(value) || /[-']/.test(value)) {
                if (value[0] === value[0].toUpperCase()) {
                    if (value.length < 30 && value.length > 3) {
                        return "valid";
                    }
                }
            }
            return "invalid";

        case 'last-name':
            if (/^[а-яё]+$/i.test(value) || /[-']/.test(value)) {
                if (value[0] === value[0].toUpperCase()) {
                    if (value.length < 30 && value.length > 3) {
                        return "valid";
                    }
                }
            }
            return "invalid";

        case 'email':
            if (/@/.test(value) && /./.test(value) && /[a-z]/i.test(value) && !(/[а-я]/i.test(value))) {
                return "valid";
            }
            return "invalid";

        case 'password':
            if (value.length > 8) {
                if (/[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value) && /[!@#$%^&*_-]/.test(value)) {
                    return "valid";
                }
            }
            return "invalid";

        case 'confirm-password':
            if (value.length > 8) {
                if (/[a-z]/.test(value) && /[A-Z]/.test(value) && /\d/.test(value) && /[!@#$%^&*_-]/.test(value)) {
                    return "valid";
                }
            }
            return "invalid";

        case 'birth-day':
            const valueDate = new Date(value);
            const days = Date.now() - valueDate;
            if (days > 5.676e+11 && days <= 2.523e+12) {
                return "valid";
            }
            return "invalid";
    }
}

export {validator};