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

// Функция для извлечения содержащихся в ней цифр от 0 до 9. Возвращает целое, положительное число. (c учетом числа, в качестве аргумента)
const findAllNumbers = (string) => {
  const result = string.toString().split('').filter((e) => !isNaN(e) && e !== ' ');
  return result.length ? +result.join('') : NaN;
};

checkStringLenght('Привет', 20);
checkPalindrome('Лёша на полКе клопа нашёл ');
findAllNumbers(-1);
