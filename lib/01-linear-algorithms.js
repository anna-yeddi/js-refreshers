"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sumAndMultiplier;

/**
 * 1.В переменных a и b хранятся числа. Написать программу,
 * которая выводит в консоль произведение и сумму этих чисел. */
var num1 = Math.random().toFixed(3) * 1000;
var num2 = Math.random().toFixed(3) * 1000;

function sumAndMultiplier(a, b) {
  console.log("Sum: ".concat(a + b, ", Multi: ").concat(a * b));
}

sumAndMultiplier(num1, num2);
/**
 *  2. В двух переменных хранятся строки символов.
 * Написать программу, которая выведет в консоль суммарное
 * количество символов в обоих строках. */

var strLine1 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nemo totam architecto impedit inventore?";
var strLine2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, consequatur sapiente. Minus a ab quos recusandae delectus. Quae, nihil error.";
console.log((strLine1 + strLine2).length);
/**
 *  3. * Написать программу, которая запрашивает у пользователя ввод
 * трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа. */
// const userInput = '456'

var userInput = prompt("Enter 3-digit number: "); // Solution #1:
// let sum = Number(userInput[0]) + Number(userInput[1]) + Number(userInput[2])

var sum = 0;

for (var i = 0; i < userInput.length; i++) {
  sum += Number(userInput[i]);
}

console.log("Sum:", sum, "from the input of", userInput); // Solution #2:

var num = Number(userInput);
var digit3 = num % 10;
var digit1 = (num - num % 100) / 100;
var digit2 = (num - digit1 * 100 - digit3) / 10;
console.log("Sum (solution 2):", digit1 + digit2 + digit3);