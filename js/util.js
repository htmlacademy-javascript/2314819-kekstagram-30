const REMOVE_MESSAGE_TIMEOUT = 5000;

const dataErrorMessageTemplate = document.querySelector('#data-error')
  .content
  .querySelector('.data-error');

const isEscape = (evt) => evt.key === 'Escape';

const showDataErrorMessage = () => {
  const dataErrorMessage = dataErrorMessageTemplate.cloneNode(true);
  document.body.appendChild(dataErrorMessage);

  setTimeout(() => {
    dataErrorMessage.remove();
  }, REMOVE_MESSAGE_TIMEOUT);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscape, showDataErrorMessage, debounce};
