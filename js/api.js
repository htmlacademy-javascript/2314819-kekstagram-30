const SERVER_URL = 'https://30.javascript.pages.academy/kekstagram';

const ServerRoute = {
  GET_DATA : '/data',
  SEND_DATA : '/',
};

const HttpMethods = {
  GET : 'GET',
  POST : 'POST',
};

const ErrorText = {
  [HttpMethods.GET] : 'Не удалось загрузить данные', // Текст ошибок в техническом задании !!!
  [HttpMethods.POST] : 'Не удалось отправить данные',
};

const request = async (url, method = HttpMethods.GET, body = null) => {
  const response = await fetch(url, { method, body });
  if (!response.ok) {
    throw new Error(ErrorText[method]);
  }

  return response.json();
};

const loadPicture = async () => request(SERVER_URL + ServerRoute.GET_DATA);

const sendPicture = async (pictureData) => request(
  SERVER_URL + ServerRoute.SEND_DATA,
  HttpMethods.POST,
  pictureData,
);

export { loadPicture, sendPicture };
