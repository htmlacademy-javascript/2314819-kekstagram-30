import { isEscape } from './util';

const successMessage = document.querySelector('#success')
  .content
  .querySelector('.success');
const errorMessage = document.querySelector('#error')
  .content
  .querySelector('.error');

const hideMessage = () => {
  const existsMessage = document.querySelector('.success') || document.querySelector('.error');
  existsMessage.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.body.removeEventListener('click', onBodyClick);
};

const onCloseButtonClick = () => {
  hideMessage();
};

function onMessageEscKeydown (evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

function onBodyClick (evt) {
  if (evt.target.closest('.error__inner') || evt.target.closest('.success__inner')) {
    return;
  }
  hideMessage();
}

const showMessage = (element, buttonClass) => {
  document.body.append(element);
  document.body.addEventListener('click', onBodyClick);
  document.addEventListener('keydown', onMessageEscKeydown);

  element
    .querySelector(buttonClass)
    .addEventListener('click', onCloseButtonClick);
};

const showSuccesMessage = () => {
  showMessage(successMessage, '.success__button');
};

const showErrorMessage = () => {
  showMessage(errorMessage, '.error__button');
};

export {showSuccesMessage, showErrorMessage};

