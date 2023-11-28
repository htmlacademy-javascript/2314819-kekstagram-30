// import { getPictures } from './create-photos-array.js';
import { renderThumbnails } from './thumbnail-generation.js';
import './form.js';
import { loadPicture } from './api.js';
import { showErrorMessage } from './utils.js';

const bootstrap = async() => {
  try {
    const pictures = await loadPicture();
    renderThumbnails(pictures);
  } catch (error) {
    showErrorMessage();
  }

};

bootstrap();
