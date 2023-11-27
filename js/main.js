import { getPictures } from './create-photos-array.js';
import { renderThumbnails } from './thumbnail-generation.js';
import './form.js';

renderThumbnails(getPictures());
