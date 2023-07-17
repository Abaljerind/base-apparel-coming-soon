const arrowBtn = document.querySelector('.arrow-btn');
const errorMsg = document.querySelector('.error-msg');
const errorAlert = document.querySelector('.error-alert');
const inputField = document.querySelector('.input-field');

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeout = setInterval(() => {
  errorMsg.style.display = 'none';
  errorAlert.style.display = 'none';
}, 3000);

arrowBtn.addEventListener('click', function() {
  if (inputField.value.length === 0 || !inputField.value.match(emailValidation)) {
    errorMsg.style.display = 'inline';
    errorAlert.style.display = 'inline';
    errorMsg.textContent = 'Please provide a valid email';
    return timeout;
  }
});