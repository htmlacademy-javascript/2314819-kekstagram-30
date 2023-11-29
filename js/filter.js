const filtersElement = document.querySelector('.img-filters');

const MAX_RANDOM_FILTER = 10;

const FilterEnum = {
  DEFAULT : 'default',
  RANDOM : 'random',
  DISCUSSED : 'discussed'
};

const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min));

const filterHandlers = {
  [FilterEnum.DEFAULT] : (data) => data,
  [FilterEnum.RANDOM] : (data) => {
    const randomIndexList = [];
    const max = Math.min(MAX_RANDOM_FILTER, data.length);
    while (randomIndexList.length < max) {
      const index = getRandomIndex(0, data.length);
      if (!randomIndexList.includes(index)) {
        randomIndexList.push(index);
      }
    }
    return randomIndexList.map((index) => data[index]);
  },
  [FilterEnum.DISCUSSED] : (data) => {
    [...data].sort((element1, element2) =>
      element1.comments.length - element2.comments.length);
  },
};

export const initFilter = (data) => {
  filtersElement.classList.remove('img-filters--inactive');
  const filtered = filterHandlers[FilterEnum.DISCUSSED](data);
  console.log(data);
  console.log(filtered);
  console.log(data);
};
