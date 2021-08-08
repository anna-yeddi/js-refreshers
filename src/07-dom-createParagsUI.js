export function createParagsUI(el, data) {
  const parags = document.createElement('div');
  parags.setAttribute('id', 'paragraphs');
  el.appendChild(parags);

  // На странице должны быть три текстовых параграфа, поле ввода и кнопка. 
  function drawParags(data) {
    const ol = document.createElement('ol');
    ol.classList.add('p-like');

    data.forEach((str) => {
      const li = document.createElement('li');
      li.innerText = str;
      ol.appendChild(li);
    })

    parags.innerHTML = null;
    parags.appendChild(ol);
  }

  drawParags(data);

  const form = document.createElement('form');

  const containerLabel = document.createElement('div');
  containerLabel.classList.add('container__field');
  const label = document.createElement('label');
  label.setAttribute('for', 'new-p__input');
  label.classList.add('text__label');
  label.innerText = 'Add new text for the page:';
  containerLabel.appendChild(label);
  form.appendChild(containerLabel);

  const containerInput = document.createElement('div');
  containerInput.classList.add('container__field');
  const input = document.createElement('textarea');
  input.setAttribute('id', 'new-p__input');
  input.setAttribute('name', 'new-p');
  input.setAttribute('cols', '60');
  input.setAttribute('rows', '5');
  input.setAttribute('placeholder', 'Lorem ipsum...');
  
  containerInput.appendChild(input);
  form.appendChild(containerInput);
  
  const btn = document.createElement('button');
  btn.setAttribute('type', 'submit');
  btn.setAttribute('hidden', 'true');
  btn.classList.add('btn__submit');
  btn.innerText = 'Add it!';
  form.appendChild(btn);

  // 1. Кнопка скрыта, если в поле ввода нет значения. 
  // currying function
  const handleInputCurrying = function (btn) {
    return function handleInput(e) {
      const value = e.currentTarget.value;

      if (value !== null) {
        if (btn.hasAttribute('hidden')) btn.removeAttribute('hidden')
      } else {
        btn.setAttribute('hidden')
      }
    }
  }

  input.addEventListener('input', handleInputCurrying(btn), false);
  
  form.addEventListener('submit', (event) => {
    handleSubmit(input.value);
    
    event.preventDefault();
  })

  el.appendChild(form);

  // 2. При клике на кнопку добавляется новый параграф, содержащий текст 
  //  из поля ввода.
  function handleSubmit(val) {
    updateData(val);
    drawParags(data);

    return val = null;
  }

  // 3. *Если параграфов становится больше 5, первый из них удаляется.
  function updateData(val) {
    data.unshift(val);
    
    if (data.length > 5) {
      data.pop();
    }
  
    drawParags(data);
  }
};