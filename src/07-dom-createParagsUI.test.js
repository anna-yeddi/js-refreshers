import { createParagsUI } from "./07-dom-createParagsUI.js";

describe('07-dom-createParagsUI.js', () => {
  describe('createParagsUI', () => {  
    it('is a function', () => {
      expect(createParagsUI).toBeInstanceOf(Function)
    });

    it('renders initial markup', () => {
      const el = document.createElement('div');
      const data = ["First", "Second", "Third"];

      createParagsUI(el, data);

      const parags = el.querySelector('#paragraphs');
      expect(parags.querySelector('ol.p-like')).toBeTruthy();
      expect(parags.querySelector('li')).toBeTruthy();
      expect(parags.querySelectorAll('li').length)
        .toEqual(data.length);

      const form = el.querySelector('form');
      expect(form.querySelector('label')).toBeTruthy();
      expect(form.querySelector('label').hasAttribute('for'))
        .toBeTruthy();
      expect(form.querySelector('label').getAttribute('for'))
        .toEqual(form.querySelector('textarea').getAttribute('id'));
      expect(form.querySelector('textarea')).toBeTruthy();
      expect(form.querySelector('button[type="submit"]'))
        .toBeTruthy();
      expect(form.querySelector('button[type="submit"]')
        .hasAttribute('hidden')).toBeTruthy();
    })
  })

})