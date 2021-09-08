/**
 * Пользователь вводит текстовую строку.
 * Определить с помощью регулярного выражения, является ли введённая строка:
 * 1.Датой.
 */

// const input = window.prompt('Enter a date using numbers, or an email, or a phone number')
const userInput = "01.02.034";

export function isDate(input) {
  const regexp = new RegExp(
    "^\\d{1,2}[.\\/\\-]\\d{1,2}[.\\/\\-](\\d{2})(\\d{2})?$"
  );
  // const regexp = /^\d{1,2}[.\/\-]\d{1,2}[.\/\-](\d{2})(\d{2})?$/

  return regexp.test(input);
}

isDate(userInput);

/**
 * 2.Адресом электронной почты.
 */

export function isEmail(input) {
  const regexp = new RegExp(
    "^[0-9a-zA-Z+-\\.]+@[0-9a-zA-Z-\\.]+\\.[a-zA-Z]{2,6}$",
    "i"
  );
  // const regexp = /^[0-9a-zA-Z+-\.]+@[0-9a-zA-Z-\.]+\.[a-zA-Z]{2,6}$/i

  return regexp.test(input);
}

isEmail(userInput);

/**
 * 3.*Номером телефона.
 */

export function isPhone(input) {
  const regexp = new RegExp(
    "^\\+?[0-9]?[.-]?[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{2}[.-]?[0-9]{2}$"
  );
  // const regexp = /^\+?[0-9]?[.-]?[0-9]{3}[.-]?[0-9]{3}[.-]?[0-9]{2}[.-]?[0-9]{2}$/;

  return regexp.test(input);
}

isPhone(userInput);
