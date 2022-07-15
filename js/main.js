'use strict';
console.log('main.js');

//  nusitaikom
const formEl = document.forms[0];
const loginEl = document.getElementById('login');
const passwordEl = document.getElementById('password');

formEl.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();
  // console.log('js works');
  // .trim() - nuimam tuscius tarpus is abieju pusiu
  const loginValue = loginEl.value.trim();
  console.log('loginValue ===', loginValue);
  loginEl.value = loginValue;
  if (loginValue.length < 3) {
    console.warn('reiktu daugiau raidikiu');
    return;
  }

  console.log('siunciam forma!!!!!!!!');
}