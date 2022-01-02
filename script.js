const inputs = document.querySelectorAll('input')
const errorMessages = document.querySelectorAll('.error-message')
const errorImages = document.querySelectorAll('.error')
const formGroups = document.querySelectorAll('.form-group')
const form = document.querySelector('form')

const message = [
    'First Name cannot be empty',
    'Last Name cannot be empty',
    'Email Address cannot be empty',
    'Password cannot be empty'
]

const placeholder = [
    'First Name',
    'Last Name',
    'Email Address',
    'Password'
]

form.addEventListener('submit', (e) => {
    e.preventDefault()

    inputs.forEach((input, index) => {
        let value = input.value.trim()
        if (index !== 2) {
            if (value === '') {
                errorMessageFunc(index)
            }
        } else {
            if (value === '') {
                errorMessageFunc(index)
            } else {
                errorMessageEmailFunc(value, index)
            }
        }
    })
})

inputs.forEach((input, index) => {
    input.addEventListener('click', () => {
        formGroups[index].classList.remove('error')
        inputs[index].placeholder = placeholder[index]
    })
})

function errorMessageFunc(index) {
    if (index !== 2) {
        formGroups[index].classList.add('error')
        inputs[index].placeholder = ''
        errorMessages[index].innerHTML = message[index]
    } else {
        formGroups[index].classList.add('error')
        inputs[index].placeholder = 'email@example.com'
        errorMessages[index].innerHTML = message[index]
    }
}

function errorMessageEmailFunc(value, index) {
    if (!validateEmail(value)) {
        formGroups[index].classList.add('error')
        inputs[index].value = ''
        inputs[index].placeholder = 'email@example.com'
        errorMessages[index].innerHTML = 'Looks like this is not an email'
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}
