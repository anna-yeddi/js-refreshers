"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Создайте объект user, содержащий поле name со значением ‘John’.
 * 1.Запросить у пользователя ввод числа. Записать введенное значение
 * в поле age объекта user. */
var user = {
  name: "John"
};
user.age = +prompt("Enter a number: ");
console.log("User:", user);
/**
 * 2.Создать копию объекта user с именем admin.
 * Добавить новому объекту поле role со значением ‘admin’. */

var admin = _objectSpread(_objectSpread({}, user), {}, {
  role: "admin"
});

console.log("Admin:", admin);
/**
 * 3*. Записать все значения полей объекта admin в отдельные переменные.
 * Имена переменных должны совпадать с названиями полей. */

var name = admin.name,
    age = admin.age,
    role = admin.role;
console.log("Name: ".concat(name, ", age: ").concat(age, ", role: ").concat(role));