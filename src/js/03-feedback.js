import throttle from 'lodash.throttle';
// ------------------------------------
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');

form.addEventListener('input', throttle(onFormListener, 500));
form.addEventListener('submit', onFormSubmit);

const FEEDBACK_FROM_STATE = 'feedback-form-state';
const textObj = JSON.parse(localStorage.getItem(FEEDBACK_FROM_STATE)) || {
  email: '',
  message: '',
};

inputEmail.value = textObj.email;
textarea.value = textObj.message;

function onFormListener(e) {
  textObj[e.target.name] = e.target.value;
  const textObjToString = JSON.stringify(textObj);
  localStorage.setItem(FEEDBACK_FROM_STATE, textObjToString);
}

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(FEEDBACK_FROM_STATE);
  e.currentTarget.reset();
  console.log(textObj);
}
