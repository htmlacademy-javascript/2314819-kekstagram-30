import { renderThumbnails } from './thumbnail-generation.js';
import './form.js';
import { loadPicture } from './api.js';
import { showErrorMessage } from './utils.js';
import { initFilter } from './filter.js';

const bootstrap = async() => {
  try {
    const pictures = await loadPicture();
    renderThumbnails(pictures);
    initFilter(pictures);
  } catch (error) {
    showErrorMessage();
  }

};

bootstrap();
