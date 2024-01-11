const myForm = document.getElementById("myForm");
const name = document.getElementById("name");
const address = document.getElementById("address");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telephone = document.getElementById("telephone");
const course = document.getElementById("course");
const comment = document.getElementById("comment");
const resetBtn = document.getElementById("reset-btn");

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const showError = (input, message) => {
    const formField = input.parentElement;

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

// remove error
const removeError = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = "";
}

const resetForm = () => {
    myForm.reset();
}

const checkName = () => {
    const nameValue = name.value.trim();
    const min = 3;
    const max = 25;
    if (!isRequired(nameValue)) {
        showError(name, 'Username cannot blank.');
    } else if (!isBetween(name.value.length, min, max)) {
        showError(name, `Username must be between ${min} and ${max} characters.`)
    } else {
        removeError(name)
        return true;
    }
    return true;
}

const checkEmail = () => {
    const emailValue = email.value.trim();
    if (!isRequired(emailValue)) {
        showError(email, "Email can't be blank!")
    } else if (!isValidEmail(emailValue)) {
        showError(email, "Invalid Email!")
    } else {
        removeError(email);
        return true
    }
}

const checkPassword = () => {
    const passwordVal = password.value;
    if (!isRequired(passwordVal)) {
        showError(password, "Password can't be black!");
    } else if (!isBetween(passwordVal.length, 8, 25)) {
        showError(password, "Password lenght should be between 8 to 25!")
    } else {
        removeError(password);
        return true;
    }
}

const checkTelephone = () => {
    const telephoneVal = telephone.value;
    if (!isRequired(telephoneVal)) {
        showError(telephone, "Telephone can't be blank!");
    } else if (!isBetween(telephoneVal.length, 8, 25)) {
        showError(telephone, "Telephone lenght should be between 8 to 25!")
    } else {
        removeError(telephone);
        return true;
    }
}

// submit form
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isNameValid = checkName();
    let isEmailValid = checkEmail();
    let isPasswordValid = checkPassword();
    let isTelephoneValid = checkTelephone();

    const ifFormValid = isNameValid && isEmailValid && isPasswordValid && isTelephoneValid;

    if (ifFormValid) {
        alert(`${name.value}, you're registred!`)
        resetForm();
    }
});

// check for error on input change
myForm.addEventListener("input", (e) => {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'telephone':
            checkTelephone();
            break;
    }
})

// reset form
resetBtn.addEventListener("click", resetForm);