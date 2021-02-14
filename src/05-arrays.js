/**
 * Создайте массив целых чисел из 10 элементов.
 * 1.Выведите в консоль сумму всех элементов массива. */

const arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Option 1: Map method:
export function sumArrOf10Map(arr) {
  let sumArr = 0;
  arr.map((num) => { sumArr += num })
  console.log(sumArr);
}

// Option 2: ForEach method:
export function sumArrOf10ForEach(arr) {
  let sumArr = 0;
  arr.forEach((num) => {
    sumArr += num
  })
  console.log(sumArr);
}

// Option 3: Reducer:
export function sumArrOf10Reducer(arr) {
  let sumArr = 0;
  sumArr = arr.reduce((prev, num) => prev + num, 0);
  console.log(sumArr);
}

/**
 * 2.Создайте новый массив на основе исходного, в котором
 * каждый элемент будет вдвое больше элемента исходного массива
 * с таким же индексом. (a[1] = 3, b[1] = 6, где
 * a — исходный массив, b — новый массив). */

export function createArrOfDoubles(arr) {
  const newArr = arr.map((num) => num * 2);
  console.log(newArr);
}

/**
 * 3.*Найдите и выведите в консоль наибольший и наименьший
 * элементы исходного массива. */

// Option 1: Math object:
export function printMaxMinItemsMath(arr) {
  const arrMax = Math.max(...arr)
  const arrMin = Math.min(...arr)
  
  console.log(arrMax, arrMin);
}

// Option 2: Sorting:
export function printMaxMinItemsSort(arr) {
  const arrSortedDesc = arr.sort((a, b) => b - a);

  const arrMax = arrSortedDesc[0];
  const arrMin = arrSortedDesc[arrSortedDesc.length - 1];

  // console.log(`Max is ${arrMax}, Min is ${arrMin}`);
  console.log(arrMax, arrMin)
}