/** 
 * Создайте объект user, содержащий поле name со значением ‘John’.
 * 1.Запросить у пользователя ввод числа. Записать введенное значение 
 * в поле age объекта user. */

const user = {
  name: 'John'
}

user.age = prompt('Enter a number: ')

console.log("User:", user);

/** 
 * 2.Создать копию объекта user с именем admin.
 * Добавить новому объекту поле role со значением ‘admin’. */
  
const admin = Object.assign({}, user, { role: 'admin' })
  
console.log("Admin:", admin);
  
/** 
 * 3*. Записать все значения полей объекта admin в отдельные переменные. 
 * Имена переменных должны совпадать с названиями полей. */

let { name, age, role } = admin

 console.log(`Name: ${name}, age: ${age}, role: ${role}`);