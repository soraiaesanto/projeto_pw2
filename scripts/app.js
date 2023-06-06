const menu = document.querySelector('.menu');
const mobileMenuButton = document.querySelector('button.mobile-menu-button');

const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('form');
const errorsList = document.querySelector('ul.errors');

function handleWindowScroll() {
    if (window.scrollY >= 60) {
        menu.classList.add('active')
    } else {
        menu.classList.remove('active')
    }
}

function handleMobileMenuClick() {
    menu.classList.toggle('show');
}

function handleFormSubmit(event) {
    event.preventDefault();

    errorsList.innerHTML = '';
    const errors = [];

    if (nameInput.value === '' || nameInput.value.length < 3) {
        errors.push('Name is required and min length is 3');
    }

    if (emailInput.value === '' || !emailInput.value.includes('@')) {
        errors.push('Email is required or is invalid');
    }

    if (messageInput.value === '' || messageInput.value.length < 10) {
        errors.push('Message is required and min length is 10');
    }

    if (errors.length > 0) {
        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            errorsList.appendChild(li);
        });
    } else {
        form.submit();
    }
}

window.addEventListener('scroll', handleWindowScroll);
mobileMenuButton.addEventListener('click', handleMobileMenuClick);
form.addEventListener('submit', handleFormSubmit);