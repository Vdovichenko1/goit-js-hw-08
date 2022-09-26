import throttle from 'lodash.throttle';

const REFUGE_KEY = 'feedback-form-state';
let savedMessage = null;
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onFormInput, 500));

messageOutput();

const feedbackForm = {
  email: savedMessage?.email ? savedMessage.email : '',
  message: savedMessage?.message ? savedMessage.message : '',
};

function onFormInput(e) {
  feedbackForm[e.target.name] = e.target.value;
  localStorage.setItem(REFUGE_KEY, JSON.stringify(feedbackForm));
}

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(REFUGE_KEY);
  console.log(feedbackForm);
  feedbackForm.email = '';
  feedbackForm.message = '';
}

function messageOutput() {
  savedMessage = JSON.parse(localStorage.getItem(REFUGE_KEY));

  if (savedMessage) {
    if (savedMessage.email) {
      refs.email.value = savedMessage.email;
    }
    if (savedMessage.message) {
      refs.textarea.value = savedMessage.message;
    }
  }
}

// cc
