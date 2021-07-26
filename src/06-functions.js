/** 
 * 1.Напишите функцию diff, которая получает в качестве параметров 2 числа 
 * и возвращает разницу между наибольшим и наименьшим.
 */

// Option 1:
// export function diff(n1, n2) {
//   if (typeof n1 === 'number' && typeof n2 === 'number') {
//     const numArr = new Array(n1, n2);
//     numArr.sort((a, b) => a - b);
//     return numArr[1] - numArr[0]
//   } else {
//     throw new Error('Not a number was received')
//   }
// }

// Option 2:
export function diff(n1, n2) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return Math.abs(n1 - n2);
  } else {
    throw new Error('Not a number was received')
  }
}

/**
 * 2.Напишите функцию isWord, которая принимает на вход текстовую строку. 
 * Функция возвращает true, если строка состоит из одного слова и false, 
 * если из нескольких.
 */

export function isWord(str) {
  if (typeof str === 'string') {
    if (str.length === 0) {
      throw new Error('Empty string was received')
    } else {
      const wordsArr = str.split(' ', 2)
      return (wordsArr.length === 1)
    }
  } else {
    throw new Error('Not a string was received')
  }
}

/**
 * *Напишите функцию pow(a, x), которая вернёт значение числа a, 
 * возведённого в степень x.
 */

// Option 1:
// export function pow(a, x) {
//   if (typeof a === "number" && typeof x === "number") {    
//     let toRet = 1;
  
//     for (let i = 1; i <= x; i++) {
//       toRet = toRet * a;
//     }
  
//     return toRet;
//   } else {
//     throw new Error('Not a number was received');
//   }
// }

// Option 2:
export function pow(a, x) {
  if (typeof a === "number" && typeof x === "number") {    
    return Math.pow(a, x);
  } else {
    throw new Error('Not a number was received');
  }
}