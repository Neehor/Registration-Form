# Registration Form

The project represents a registration form with custom data validation on the client side.    
It was developed as a technical test assignment based on a set of specific requirements and constraints.

The assignment required user-friendly error messages and semantic **HTML**, implemented from scratch     
using only **CSS** and vanilla **JavaScript**, without any external libraries.

## 🚀 Getting Started

No build tools or package managers are required.

Clone the repository:

```bash
git clone https://github.com/Neehor/Registration-Form.git
```

Open `registration.html` in your browser.

## 📌 Project requirements

- Registration form fields:
  - First Name
  - Last Name
  - Email
  - Password
  - Password Confirmation
  - Date of Birth
- Client-side validation using vanilla JavaScript
- Real-time form state tracking
- Submit button remains disabled until the entire form is valid
- Clear validation messages for users
- `valid` and `invalid` classes applied to form elements
- Semantic HTML form structure
- No JavaScript frameworks
- No third-party libraries
- Id naming convention for form elements
- Validation message elements also have their own `id` attributes.

## 📋 Validation Rules

All fields are required

### First Name & Last Name

- Allowed characters: cyrillic letters, spaces, hyphens and apostrophes
- Must have a reasonable length

### Email

- Must contain a valid email address

### Password

The password must:
- Contain at least 8 characters
- Contain at least one digit
- Contain at least one uppercase letter
- Contain at least one lowercase letter
- Contain at least one special character

### Password Confirmation

- Must exactly match the password

### Date of Birth

- The user must be at least 18 years old at the time of registration

## 🔎 Validation Behavior

Validation messages are displayed next to the relevant fields to help the user understand and correct errors, after the form element loses focus.

As soon as the entire form becomes valid, the button is enabled automatically — the user does not need to click outside the form or perform any additional action.

## ✅ HTML Validation

The HTML markup is intended to comply with modern HTML standards and can be checked using the [W3C Markup Validator](https://validator.w3.org/).

The project aims to have:

* No validation errors
* No unnecessary warnings
* Semantic and valid HTML markup

## 🎯 Project Goals

This project was created to practice:

* HTML5 form structure
* Semantic markup
* Native HTML input attributes
* Client-side form validation
* JavaScript event handling
* DOM manipulation
* Regular expressions
* Form state management
* User-friendly validation feedback
* Writing clean, framework-free JavaScript
* CSS styling and layout
