
const menu = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');
const mobileMenuButton = document.querySelector('button.mobile-menu-button');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const form = document.querySelector('form');
const errorsList = document.querySelector('ul.errors');
const facsQuestions = document.querySelectorAll('section.s-faqs .faq .accordion');
const backToTopButton = document.getElementById("backToTopButton");
const languages = document.querySelectorAll('.pt,.en');

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Append and close the mobile menu
function handleMobileMenuClick() {
    menuMobile.classList.toggle('show');
}

//change the question answer visibility
function handleOpenFacsQuestion() {
  const textElement = this.nextElementSibling; //get the text box
  const currentDropdownElement = this.querySelector('.fa-solid.fa-chevron-down'); //get the icon
  textElement.style.display = (textElement.style.display === "block") ? "none" : "block"; //toggle text box visibility
  currentDropdownElement.style.transform = (textElement.style.display === "block") ? "rotate(180deg)" : ""; // rotate the icon
}

//change the selected language
function handleChangeLanguage() {
    if(!this.classList.contains("active-language")){
        languages.forEach( (_value, index) => {
            languages[index].classList.toggle("active-language");
        });
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    errorsList.innerHTML = '';
    const errors = [];

    if (nameInput.value === '' || nameInput.value.length < 3) {
        errors.push('Name is required and min length is 3.');
    }

    if (emailInput.value === '' || !emailInput.value.includes('@')) {
        errors.push('Email is required or is invalid.');
    }

    if (messageInput.value === '' || messageInput.value.length < 10) {
        errors.push('Message is required and min length is 10.');
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

//toggle the "back to top" button visibility
window.onscroll = () => scrollFunction();

//toggle the mobile menu sivibuility
mobileMenuButton.addEventListener('click', handleMobileMenuClick);

//https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
//add event listeners to all faq questions to toggle the answers visibility
facsQuestions.forEach( (_value, index) => {
    facsQuestions[index].addEventListener('click', handleOpenFacsQuestion);
});
//add event listeners to all languages to toggle the selected language status
languages.forEach( (_value, index) => {
    languages[index].addEventListener('click', handleChangeLanguage);
});
//on form submit
form.addEventListener('submit', handleFormSubmit); 