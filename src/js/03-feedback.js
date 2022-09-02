import throttle from 'lodash.throttle';
// ------------------------------------
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('[name="email"]');
const textarea = document.querySelector('[name="message"]');

form.addEventListener('input', onFormListener);
form.addEventListener('submit', onFormSubmit);

const FEEDBACK_FROM_STATE = 'feedback-form-state';
const textObj = { email: '', message: '' };

const getFromLocStore = JSON.parse(
  localStorage.getItem(FEEDBACK_FROM_STATE)
) || { email: '', message: '' };

inputEmail.value = getFromLocStore.email;
textarea.value = getFromLocStore.message;

function onFormListener(e) {
  const {
    elements: { email, message },
  } = e.currentTarget;
  textObj.email = email.value;
  textObj.message = message.value;
  const textObjToString = JSON.stringify(textObj);
  localStorage.setItem(FEEDBACK_FROM_STATE, textObjToString);
}

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(FEEDBACK_FROM_STATE);
  e.currentTarget.reset();
}
