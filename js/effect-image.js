const Effects = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilter = {
  [Effects.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [Effects.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [Effects.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [Effects.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [Effects.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

const effectToSliderOptions = {
  [Effects.NONE]: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  [Effects.CHROME]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  [Effects.SEPIA]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  [Effects.MARVIN]: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  [Effects.PHOBOS]: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
  [Effects.HEAT]: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
};

const form = document.querySelector('.img-upload__form');
const previewImage = form.querySelector('.img-upload__preview img');
const previewEffects = form.querySelector('.effects');
const sliderContainer = form.querySelector('.img-upload__effect-level');
const slider = form.querySelector('.effect-level__slider');
const effectLevelValue = form.querySelector('.effect-level__value');


noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  step: 1,
  start: 100,
  connect: 'lower'
});


slider.noUiSlider.on('update', () => {
  const filterValue = slider.noUiSlider.get(true);
  effectLevelValue.value = filterValue;
  sliderContainer.classList.remove('hidden');
  const selectedEffect = document.querySelector('input[name="effect"]:checked').value;
  if (selectedEffect !== Effects.NONE) {
    const { value } = effectLevelValue;
    const { style, unit } = effectToFilter[selectedEffect];

    previewImage.style.filter = `${style}(${value}${unit})`;
  } else {
    previewImage.style.filter = 'none';
    sliderContainer.classList.add('hidden');
  }
});

const onEffectChange = (evt) => {
  const effectValue = evt.target.value;
  slider.noUiSlider.updateOptions(effectToSliderOptions[effectValue]);
};

previewEffects.addEventListener('change', onEffectChange);

const resetEffects = () => {
  document.querySelector('#effect-none').check = true;
  previewImage.style.filter = 'none';
  sliderContainer.classList.add('hidden');
};

export {resetEffects};
