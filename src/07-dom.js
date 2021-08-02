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

const parags = document.querySelector('#paragraphs');
const form = document.querySelector('form');
const input = document.querySelector('#new-p__input');
const data = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum explicabo facere numquam eum laudantium itaque tempora molestias voluptas optio doloribus quas quam, possimus asperiores iusto doloremque dolor obcaecati porro neque?",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quasi atque consequatur veniam libero ab quia perferendis eaque nemo vitae nostrum omnis, adipisci non sequi ducimus facilis. Esse, at quis!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatibus animi rerum tempora voluptates explicabo at sequi a recusandae soluta. Reiciendis modi laboriosam iusto officia ducimus animi itaque, pariatur quo?"
]

// На странице должны быть три текстовых параграфа, поле ввода и кнопка. 
function drawParags(el, data) {
  el.innerHTML = null;

  data.forEach((text) => {
    const p = document.createElement('p');
    p.innerText = text;
    el.appendChild(p);
  })
}

// 1. Кнопка скрыта, если в поле ввода нет значения. 
function handleInput() {
  const btn = document.querySelector('.btn__submit');
  
  if (input.value !== null) {
    if (btn.hasAttribute('hidden')) btn.removeAttribute('hidden')
  } else {
    btn.setAttribute('hidden')
  }
}

// 2. При клике на кнопку добавляется новый параграф, содержащий текст 
//  * из поля ввода.
function handleSubmit(val) {
  updateData(val);
  drawParags(parags, data);

  input.value = null;
}

// 3. *Если параграфов становится больше 5, первый из них удаляется.
function updateData(val) {
  data.unshift(val);
  
  if (data.length > 5) {
    data.pop();
  }
}

drawParags(parags, data);

input.addEventListener('input', handleInput);

form.addEventListener('submit', (event) => {
  handleSubmit(input.value);
  
  event.preventDefault();
})