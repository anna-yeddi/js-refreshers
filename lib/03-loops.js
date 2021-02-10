"use strict";

/**
 * 1.Вывести в консоль сумму всех целых чисел от 50 до 100. */
console.log("=== Sum of integers 50 through 100: ===");
var sum50 = 0;
var i = 50;

while (i <= 100) {
  sum50 += i;
  i++;
}

console.log(sum50);
/**
 * 2.Вывести в консоль таблицу умножения на 7. 7 x1 = 7
 * 7 x 2 = 14
 * ...
 * 7 x 9 = 63 */

console.log("=== Seven times table: ===");

for (var j = 1; j <= 9; j++) {
  console.log("7 x ".concat(j, " = ").concat(j * 7));
}
/**
 * 3* Запросить у пользователя ввод числа N. Вывести в консоль среднее
 * арифметическое всех нечётных чисел от 1 до N. */


console.log("=== Arithmetic mean of odd numbers: ===");
var userInput = +prompt("Enter any number N: "); // const userInput = 3

var sumArithMean = 0;
var count = 0;
var k = 1;

while (k <= userInput) {
  sumArithMean += k;
  count++;
  k += 2;
}

var arithmeticMean = sumArithMean / count;
console.log(arithmeticMean);
console.log("".concat(arithmeticMean, " is the arithmetic mean for ").concat(userInput));