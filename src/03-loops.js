/**
 * 1.Вывести в консоль сумму всех целых чисел от 50 до 100. */

console.log("=== Sum of integers 50 through 100: ===");

export function sumOfIntegers50to100() {
  let sum50 = 0;
  let i = 50;
  
  while (i <= 100) {
    sum50 += i;
  
    i++;
  }
  
  console.log(sum50);
}

/**
 * 2.Вывести в консоль таблицу умножения на 7. 7 x1 = 7
 * 7 x 2 = 14
 * ...
 * 7 x 9 = 63 */

console.log("=== Seven times table: ===");

export function sevenTimes1to9() {
  for (let j = 1; j <= 9; j++) {
    console.log(`7 x ${j} = ${j * 7}`);
  }
}

/**
 * 3* Запросить у пользователя ввод числа N. Вывести в консоль среднее
 * арифметическое всех нечётных чисел от 1 до N. */

console.log("=== Arithmetic mean of odd numbers: ===");

export function arithmeticMeanOdds() {
  const userInput = +prompt("Enter any number N: ");
  // const userInput = 3
  
  let sumArithMean = 0;
  let count = 0;
  let k = 1;
  
  while (k <= userInput) {
    sumArithMean += k;
    count++;
    k += 2;
  }
  
  const arithmeticMean = sumArithMean / count;
  
  console.log(arithmeticMean);
  // console.log(`${arithmeticMean} is the arithmetic mean for ${userInput}`);
}
