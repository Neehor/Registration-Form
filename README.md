# Registration Form Validation

A small front-end pet project that demonstrates how to build and validate a registration form using **HTML, CSS, and vanilla JavaScript**.

The project focuses on client-side form validation, user-friendly error messages, semantic HTML — without using any JavaScript frameworks.

## ✨ Project requirements

- Registration form with:
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
- Password strength validation
- Password confirmation matching
- Email format validation
- Minimum age requirement of 18 years
- Reasonable length restrictions for name fields
- Semantic HTML form structure
- Compatible with modern versions of:
  - Chrome
  - Firefox
  - Edge
- No JavaScript frameworks
- No third-party libraries

## 📋 Validation Rules

### First Name

- Required
- Only characters allowed for names
- Must have a reasonable length

### Last Name

- Required
- Only characters allowed for names
- Must have a reasonable length

### Email

- Required
- Must contain a valid email address

### Password

The password must:

- Contain at least 8 characters
- Contain at least one digit
- Contain at least one uppercase letter
- Contain at least one lowercase letter
- Contain at least one special character

### Password Confirmation

- Required
- Must exactly match the password

### Date of Birth

- Required
- The user must be at least 18 years old at the time of registration

## 🔎 Validation Behavior

Validation messages are displayed next to the corresponding fields to help the user understand and correct errors, after the corresponding form element loses focus.

The **Submit** button remains disabled until all form fields contain valid values.

As soon as the entire form becomes valid, the button is enabled automatically — the user does not need to click outside the form or perform any additional action.

## 🆔 Element IDs

The project follows the required naming convention for form elements:

```text
first-name
last-name
email
password
password-confirm
birth-day
form-button
```

Validation message elements also have their own `id` attributes.

## 🛠️ Technologies

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* No frameworks
* No external dependencies

## 📁 Project Structure

```text
registration-form/
├── registration.html
├── CSSreg.css
├── icon/
│   └── eye.svg
│   └── eye-crossed.svg
├── JSreg.js
├── validator.js
├── fetchReg.js
└── README.md
```

## 🚀 Getting Started

No build tools or package managers are required.

Clone the repository:

```bash
git clone https://github.com/Neehor/Registration-Form.git
```

Navigate to the project directory:

```bash
cd registration-form
```

Open `registration.html` in your browser.

Alternatively, the project can be served using any local static HTTP server.

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
* Native HTML input types
* Client-side form validation
* JavaScript event handling
* DOM manipulation
* Regular expressions
* Form state management
* User-friendly validation feedback
* Writing clean, framework-free JavaScript

## 📌 Requirements

The project intentionally does **not** use JavaScript frameworks or third-party validation libraries.

All validation logic is implemented from scratch using native browser APIs and vanilla JavaScript.

## 📄 License

This project is created for educational and portfolio purposes.

```
```

