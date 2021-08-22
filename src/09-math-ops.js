/**
 * 1.Даны длины трёх сторон треугольника. 
 * Определить, является ли треугольник прямоугольным.
 */

const a = 3;
const b = 4;
const c = 5;

export function isRightTriangle(a, b, c) {
  const legsSqrd = Math.pow(a, 2) + Math.pow(b, 2);
  const hypotenuseSqrd = Math.pow(c, 2);

  return legsSqrd === hypotenuseSqrd;
}

/**
 * 2.Пользователь вводит число R. 
 * Написать программу, которая выведет в консоль 
 * длину окружности и площадь круга с радиусом R.
 */


export function calcCircumferenceAndArea() {
  const userInputNum = +window.prompt('Enter a number R: ');

  const circumference = 2 * Math.PI * userInputNum;
  console.log(Math.round(circumference * 100) / 100);

  const area = Math.PI * Math.pow(userInputNum, 2);
  console.log(Math.round(area * 100) / 100);
}

/**
 * 3* Пользователь вводит числа a, b и c. 
 * Написать программу, выводящую корни 
 * квадратного уравнения с коэффициентами a, b и c.
 */

export function calcSolutions() {
  
}