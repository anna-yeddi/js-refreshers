/**
 * Сверстать страницу и подключить к ней файл со скриптом. 
 * На странице должны быть три текстовых параграфа, поле ввода и кнопка. 
 * Напишите скрипт, который будет выполнять следующие условия:
 * 
 * 1. Кнопка скрыта, если в поле ввода нет значения. 
 * 2. При клике на кнопку добавляется новый параграф, содержащий текст 
 * из поля ввода.
 * 3. *Если параграфов становится больше 5, первый из них удаляется.
 */

import { createParagsUI } from "./07-dom-createParagsUI.js";

const app = document.querySelector('#app');
const data = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum explicabo facere numquam eum laudantium itaque tempora molestias voluptas optio doloribus quas quam, possimus asperiores iusto doloremque dolor obcaecati porro neque?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quasi atque consequatur veniam libero ab quia perferendis eaque nemo vitae nostrum omnis, adipisci non sequi ducimus facilis. Esse, at quis!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatibus animi rerum tempora voluptates explicabo at sequi a recusandae soluta. Reiciendis modi laboriosam iusto officia ducimus animi itaque, pariatur quo?"
];

createParagsUI(app, data);