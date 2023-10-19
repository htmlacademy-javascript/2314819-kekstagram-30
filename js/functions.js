// Функция для проверки длины строки
const checkStringLenght = (string, maxLength) => string.length <= maxLength;

// Функция для проверки, является ли строка палиндромом (c учетом пробелов)
const checkPalindrome = (string) => {
  if (!string) {
    return false;
  }
  const shortString = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < Math.round(shortString.length / 2); i++) {
    if (shortString[i] !== shortString[shortString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

/*
Функция для извлечения содержащихся в ней цифр от 0 до 9.
Возвращает целое, положительное число. (c учетом числа, в качестве аргумента)
*/
const findAllNumbers = (string) => {
  const result = string.toString().split('').filter((e) => !isNaN(e) && e !== ' ');
  return result.length ? +result.join('') : NaN;
};


/*
Функция, которая принимает время начала и конца рабочего дня,
а также время старта и продолжительность встречи в минутах
возвращает true, если встреча не выходит за рамки рабочего дня,
и false, если выходит.
( и рабочий день, и встреча укладываются в одни календарные сутки)
*/
const checkMeetingWithinWorkingHours = (startTime, endTime, meetingStart, meetingDuration) => {
  // Вспомогательная функция для вычисления времени в минутах
  const getTimeInMinute = (time) => {
    const timeParts = time.split(':');
    return (+timeParts[0] * 60) + +timeParts[1];
  };

  // Переводим все временные промежутки в минуты при помощи деструктуризации
  [startTime, endTime, meetingStart] = [startTime, endTime, meetingStart].map((e) => getTimeInMinute(e));

  // Время окончания встречи
  meetingStart += meetingDuration;

  return meetingStart >= startTime && meetingStart <= endTime;
};

checkStringLenght('Привет', 20);
checkPalindrome('Леша на полке клопа нашел');
findAllNumbers(-1);
checkMeetingWithinWorkingHours(('8:00', '17:30', '08:00', 900));
