/**
 * Создайте объект user, содержащий поле name со значением ‘John’.
 * 1.Запросить у пользователя ввод числа. Записать введенное значение
 * в поле age объекта user. */

const user = {
  name: "John",
};

console.log('=== User: ===');

export function addAge(user) {
  user.age = +prompt("Enter a number: ");
  
  console.log(user);
  return user
}

/**
 * 2.Создать копию объекта user с именем admin.
 * Добавить новому объекту поле role со значением ‘admin’. */

console.log('=== Admin: ===');

export function createUserObjCopy(user) {
  const admin = { ...user, role: "admin" };
  
  console.log(admin);
  return admin
}

/**
 * 3*. Записать все значения полей объекта admin в отдельные переменные.
 * Имена переменных должны совпадать с названиями полей. */

console.log('=== Separate variables: ===');

export function createVarsForAdminProps(admin) {
  const { name, age, role } = admin;
  
  console.log(`Name: ${name}, age: ${age}, role: ${role}`);
  return { name, age, role }
}
