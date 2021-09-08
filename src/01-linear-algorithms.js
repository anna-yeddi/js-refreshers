/**
 * 1.В переменных a и b хранятся числа. Написать программу,
 * которая выводит в консоль произведение и сумму этих чисел. */

// const num1 = 2;
// const num2 = 3;
const num1 = Math.random().toFixed(3) * 1000;
const num2 = Math.random().toFixed(3) * 1000;

export function multiplierAndSum(a, b) {
  console.log(`Multi: ${a * b}, Sum: ${a + b}`);
}

multiplierAndSum(num1, num2);

/**
 *  2. В двух переменных хранятся строки символов.
 * Написать программу, которая выведет в консоль суммарное
 * количество символов в обоих строках. */

const str1 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
Saepe nemo totam architecto impedit inventore?`;
const str2 = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Necessitatibus, consequatur sapiente. Minus a ab quos recusandae delectus.
  Quae, nihil error.`;

export function sumStringsLength(strLine1, strLine2) {
  console.log((strLine1 + strLine2).length);
}

sumStringsLength(str1, str2);

/**
 *  3. * Написать программу, которая запрашивает у пользователя ввод
 * трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа. */

// Solution #0:
// let sum = Number(userInput[0]) + Number(userInput[1]) + Number(userInput[2])

// Solution #1:
export function sumOfDigits() {
  const userInput = "456";
  // const userInput = prompt("Enter 3-digit number: ");

  let sum = 0;

  for (let i = 0; i < userInput.length; i++) {
    sum += Number(userInput[i]);
  }

  // console.log("Sum:", sum, "from the input of", userInput);
  console.log(sum);
}

sumOfDigits();

// Solution #2:
export function sumOfDigitsAnother() {
  // const userInput = '456'
  const userInput = prompt("Enter 3-digit number: ");
  const num = Number(userInput);

  const digit3 = num % 10;
  const digit1 = (num - (num % 100)) / 100;
  const digit2 = (num - digit1 * 100 - digit3) / 10;

  // console.log("Sum (solution 2):", digit1 + digit2 + digit3);
  console.log(digit1 + digit2 + digit3);
}

sumOfDigitsAnother();
