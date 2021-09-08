/**
 * 1.Даны длины трёх сторон треугольника.
 * Определить, является ли треугольник прямоугольным.
 */

const sideA = 3;
const sideB = 4;
const sideC = 5;

export function isRightTriangle(a, b, c) {
  const legsSqrd = a ** 2 + b ** 2;
  // const legsSqrd = Math.pow(a, 2) + Math.pow(b, 2);
  const hypotenuseSqrd = c ** 2;
  // const hypotenuseSqrd = Math.pow(c, 2);

  return legsSqrd === hypotenuseSqrd;
}

isRightTriangle(sideA, sideB, sideC);

/**
 * 2.Пользователь вводит число R.
 * Написать программу, которая выведет в консоль
 * длину окружности и площадь круга с радиусом R.
 */

export function calcCircumferenceAndArea() {
  const userInputNum = +window.prompt("Enter a number R: ");

  const circumference = 2 * Math.PI * userInputNum;
  console.log(Math.round(circumference * 100) / 100);

  // const area = Math.PI * Math.pow(userInputNum, 2);
  const area = Math.PI * userInputNum ** 2;
  console.log(Math.round(area * 100) / 100);
}

calcCircumferenceAndArea();

/**
 * 3* Пользователь вводит числа a, b и c.
 * Написать программу, выводящую корни
 * квадратного уравнения с коэффициентами a, b и c.
 */

export function calcSolutions() {
  const userInputNums = window.prompt(
    "Enter 3 numbers separates with a space (a b c): "
  );
  const userInputNumsArr = userInputNums.split(" ");
  const a = +userInputNumsArr[0];
  const b = +userInputNumsArr[1];
  const c = +userInputNumsArr[2];

  let root1;
  let root2;
  const roots = [];

  const discriminant = b * b - 4 * a * c;

  // real roots
  if (discriminant >= 0) {
    if (discriminant === 0) {
      // one real root (both roots are equal)
      root1 = -b / (2 * a);
      root2 = root1;
    } else {
      // two real roots
      root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    }

    // root1 = Math.round(root1 * Math.pow(10, 5)) / Math.pow(10, 5);
    root1 = Math.round(root1 * 10 ** 5) / 10 ** 5;
    // root2 = Math.round(root2 * Math.pow(10, 5)) / Math.pow(10, 5);
    root2 = Math.round(root2 * 10 ** 5) / 10 ** 5;
  } else {
    // complex roots
    const realPart = (-b / (2 * a)).toFixed(5);
    const complexPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(5);

    root1 = `${realPart} + ${complexPart}i`;
    root2 = `${realPart} - ${complexPart}i`;
  }

  roots.push(root1, root2);

  return roots;
}
