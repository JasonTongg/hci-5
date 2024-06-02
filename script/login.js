const username = document.querySelector('#Username');
const male = document.querySelector('#Male');
const female = document.querySelector('#Female');
const date = document.querySelector('#date');
const email = document.querySelector('#Email');
const term = document.querySelector('#term');
const submit = document.querySelector('#submit');
const message = document.querySelector('.form-error');
const errorContainer = document.querySelector('.form-error-container');

submit.addEventListener('click', e => {
  e.preventDefault();
  if (
    username.value === '' ||
    (male.checked === false && female.checked === false) ||
    date.value === '' ||
    email.value === '' ||
    term.checked === false
  ) {
    errorContainer.style.display = 'flex';
    message.innerHTML = 'Please fill in all fields';
    setTimeout(() => {
      errorContainer.style.display = 'none';
    }, 5000);
  } else if (email.value.includes('@') === false) {
    errorContainer.style.display = 'flex';
    message.innerHTML = 'Invalid email';
    setTimeout(() => {
      errorContainer.style.display = 'none';
    }, 5000);
  } else {
    errorContainer.style.display = 'none';
    window.location.href = '/';
  }
});
