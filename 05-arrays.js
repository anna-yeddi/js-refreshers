/** 
 * Создайте массив целых чисел из 10 элементов.
 * 1.Выведите в консоль сумму всех элементов массива. */

const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

let sumArr = 0

// Option 1: Map method:
// arr.map((num) => { sumArr += num })

// Option 2: ForEach method:
// arr.forEach((num) => {
//   sumArr += num
// })

// Option 3: Reducer:
sumArr = arr.reduce((prev, num) => { return prev + num }, 0)

console.log(sumArr);

/** 
 * 2.Создайте новый массив на основе исходного, в котором 
 * каждый элемент будет вдвое больше элемента исходного массива 
 * с таким же индексом. (a[1] = 3, b[1] = 6, где 
 * a — исходный массив, b — новый массив). */

let newArr = arr.map((num) => {
  return num * 2
})

console.log(newArr);

/**
 * 3.*Найдите и выведите в консоль наибольший и наименьший 
 * элементы исходного массива. */

// Option 1: Math object:
// const arrMax = Math.max(...arr)
// const arrMin = Math.min(...arr)

// Option 2: Sorting:
let arrSortedDesc = arr.sort((a, b) => { return b - a })

const arrMax = arrSortedDesc[0]
const arrMin = arrSortedDesc[arrSortedDesc.length - 1]

console.log(`Max is ${arrMax}, Min is ${arrMin}`);