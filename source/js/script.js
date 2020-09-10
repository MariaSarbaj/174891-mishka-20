/* Mobile Menu */

let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
})

/* Popup */

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('.html', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseButton = document.querySelectorAll('.size__button');
if (popupCloseButton.length > 0) {
  for (let index = 0; index < popupCloseButton.length; index++) {
    const el = popupCloseButton[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose (popupActive, false);
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup-content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

function bodyUnlock() {
  setTimeout(function () {
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout );
}

/* Form Animation */

let orderForm = document.querySelector('.order-form');
let nameInput = document.querySelector('.order-form__input--name');
let surnameInput = document.querySelector('.order-form__input--surname');
let emailInput = document.querySelector('.order-form__input--email');
let phoneInput = document.querySelector('.order-form__input--tel');

orderForm.addEventListener('submit', function (evt) {
  if(!nameInput.value) {
    evt.preventDefault();
    nameInput.classList.add('order-form__input--error');
    setTimeout(function () {
      nameInput.classList.remove('order-form__input--error')}, 500)
  }

  if(!surnameInput.value) {
    evt.preventDefault();
    surnameInput.classList.add('order-form__input--error');
    setTimeout(function () {
      surnameInput.classList.remove('order-form__input--error')}, 500)
  }

  if(!emailInput.value) {
    evt.preventDefault();
    emailInput.classList.add('order-form__input--error');
    setTimeout(function () {
      emailInput.classList.remove('order-form__input--error')}, 500)
  }

  if(!phoneInput.value) {
    evt.preventDefault();
    phoneInput.classList.add('order-form__input--error');
    setTimeout(function () {
      phoneInput.classList.remove('order-form__input--error')}, 500)
  }
})
