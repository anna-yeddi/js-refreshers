/**
 * 1. В переменных a и b хранятся числа.
 *  Вывести в консоль наибольшее из них. */

const a = Math.random().toFixed(5) * 100000;
const b = Math.random().toFixed(5) * 100000;

const biggest = a > b ? a : b;

console.log(`${biggest} is the biggest among ${a} and ${b}`);

/**
 * 2. Запросить у пользователя ввод числа от 1 до 12.
 *  Вывести в консоль название месяца, соответствующее этому числу
 *  (1 — январь, 2 — февраль и т.д.). */

const userInput = +prompt("Enter a number between 1 and 12: ");
// const userInput = 6

// Solution #1:

switch (userInput) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;

  default:
    console.log("Not a valid month number");
    break;
}

// Solution #2:

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log("Month is: ", monthArr[userInput - 1]);

/**
 * 3*. В переменных circle и square хранятся площади круга и квадрата соответственно.
 *  Написать программу, которая определяет, поместится ли круг в квадрат. */

// const circleArea = 200
// const squareArea = 100
const circleArea = Math.random().toFixed(2) * 100;
const squareArea = Math.random().toFixed(2) * 100;

// Формула для расчета диаметр круга через площадь: D=2√S/π
const circleDiam = (2 * Math.sqrt(circleArea)) / Math.PI;
const squareSide = Math.sqrt(squareArea);

const circleCanFitInSquare = circleDiam <= squareSide;

console.log(`${circleCanFitInSquare} while the circle area is ${circleArea} and its diameter is ${circleDiam}
  and the square area is ${squareArea} and its side is ${squareSide}`);
