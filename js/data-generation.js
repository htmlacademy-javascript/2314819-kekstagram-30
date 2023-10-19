import {
  PHOTOS_QUANTITY,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  PHOTOS_DESCRIPTIONS,
  COMMENTS__MESSAGES,
  USERS__NAMES
} from './data.js';

import {getRandomInteger, getRandomArrayElement} from './utils.js';


const createComment = (index) => ({
  id : index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message : getRandomArrayElement(COMMENTS__MESSAGES),
  name : getRandomArrayElement(USERS__NAMES)
});

const createPhoto = (index) => ({
  id : index,
  url : `photos/${index}.jpg`,
  description: `${PHOTOS_DESCRIPTIONS[index - 1]}`,
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments : Array.from(
    {length : getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)},
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPictures = () =>
  Array.from({ length: PHOTOS_QUANTITY }, (_, pictureIndex) =>
    createPhoto(pictureIndex + 1)
  );

export {getPictures};
