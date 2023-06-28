
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
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function handleMobileMenuClick() {
    menuMobile.classList.toggle('show');
}

// function handleFormSubmit(event) {
//     event.preventDefault();

//     errorsList.innerHTML = '';
//     const errors = [];

//     if (nameInput.value === '' || nameInput.value.length < 3) {
//         errors.push('Name is required and min length is 3');
//     }

//     if (emailInput.value === '' || !emailInput.value.includes('@')) {
//         errors.push('Email is required or is invalid');
//     }

//     if (messageInput.value === '' || messageInput.value.length < 10) {
//         errors.push('Message is required and min length is 10');
//     }

//     if (errors.length > 0) {
//         errors.forEach(error => {
//             const li = document.createElement('li');
//             li.textContent = error;
//             errorsList.appendChild(li);
//         });
//     } else {
//         form.submit();
//     }
// }


function handleOpenFacsQuestion() {
  const textElement = this.nextElementSibling;
  const dropdownElements = document.querySelectorAll('.fa-solid.fa-chevron-down');

  textElement.style.display = (textElement.style.display === "block") ? "none" : "block";
  
  dropdownElements.forEach((dropdownElement) => {
    dropdownElement.style.transform = ""; // Remove a transformação de rotação de todos os elementos
  });

  const currentDropdownElement = this.querySelector('.fa-solid.fa-chevron-down');
  currentDropdownElement.style.transform = (textElement.style.display === "block") ? "rotate(180deg)" : "";
}



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function handleChangeLanguage() {
    if(!this.classList.contains("active-language")){
        languages.forEach( (_value, index) => {
            languages[index].classList.toggle("active-language");
        });
    }
}

// window.addEventListener('scroll', handleWindowScroll);
window.onscroll = () => scrollFunction();
mobileMenuButton.addEventListener('click', handleMobileMenuClick);
// form.addEventListener('submit', handleFormSubmit);
//https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
facsQuestions.forEach( (_value, index) => {
    facsQuestions[index].addEventListener('click', handleOpenFacsQuestion);
});
languages.forEach( (_value, index) => {
    languages[index].addEventListener('click', handleChangeLanguage);
});