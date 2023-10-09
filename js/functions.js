// Функция для проверки длины строки (c учетом пробелов)
const checkFunctionLenght = (string, NeededLength) => string.length <= NeededLength;

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (string) => {
  if (!string) {
    return false;
  }
  const shortString = string.split('').filter((e) => e !== ' ').map((e) => e.toLowerCase());
  for (let i = 0; i < Math.round(shortString.length / 2); i++) {
    if (shortString[i] !== shortString[shortString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Функция для извлечения содержащихся в ней цифр от 0 до 9. Возвращает целое, положительное число. (c учетом числа, в качестве аргумента)
const findAllNumbers = (string) => {
  const result = string.toString().split('').filter((e) => !isNaN(e) && e !== ' ');
  return result.length ? +result.join('') : NaN;
};

checkFunctionLenght('Привет', 20);
checkPalindrome('Топот');
findAllNumbers(-1);
