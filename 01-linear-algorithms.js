/**
 * 1.В переменных a и b хранятся числа. Написать программу,
 * которая выводит в консоль произведение и сумму этих чисел. */

const a = Math.random().toFixed(3) * 1000
const b = Math.random().toFixed(3) * 1000

console.log(`Sum: ${a + b}, Multi: ${a * b}`)

/**
 *  2. В двух переменных хранятся строки символов.
 * Написать программу, которая выведет в консоль суммарное
 * количество символов в обоих строках. */

const strLine1 =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nemo totam architecto impedit inventore?'
const strLine2 =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, consequatur sapiente. Minus a ab quos recusandae delectus. Quae, nihil error.'

console.log((strLine1 + strLine2).length)

/**
 *  3. * Написать программу, которая запрашивает у пользователя ввод
 * трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа. */

// const userInput = '456'
const userInput = prompt('Enter 3-digit number: ')

// let sum = Number(userInput[0]) + Number(userInput[1]) + Number(userInput[2])
let sum = 0

for (let i = 0; i < userInput.length; i++) {
  sum += Number(userInput[i])
}

console.log('Sum:', sum, 'from the input of', userInput)
