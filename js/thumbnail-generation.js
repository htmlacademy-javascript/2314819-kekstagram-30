import { showBigPicture } from './big-picture.js';

const thumbailTemplate = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesContainer = document.querySelector('.pictures');

const createThumbnail = ({url, description, likes, comments}) => {
  const thumbnail = thumbailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  thumbnail.addEventListener('click', () => {
    showBigPicture({url, description, likes, comments});
  });

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  picturesContainer.append(fragment);
};


export {renderThumbnails};
