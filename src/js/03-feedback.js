import throttle from 'lodash.throttle';

const REFUGE_KEY = 'feedback-form-state';

const feedbackForm = {
  email: '',
  textarea: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  feedbackForm[e.target.name] = e.target.value;
  localStorage.setItem(REFUGE_KEY, JSON.stringify(feedbackForm));
});

messageOutput();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(REFUGE_KEY);
}

function onTextareaInput(e) {
  const message = e.target.value;

  localStorage.setItem(REFUGE_KEY, message);
}

function messageOutput() {
  const savedMessage = JSON.parse(localStorage.getItem(REFUGE_KEY));

  if (savedMessage) {
    refs.textarea.value = savedMessage.textarea;
    refs.email.value = savedMessage.email;
  }
}
