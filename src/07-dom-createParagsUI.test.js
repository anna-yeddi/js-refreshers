import { createParagsUI } from "./07-dom-createParagsUI.js";

describe('07-dom-createParagsUI.js', () => {
  describe('createParagsUI', () => {  
    it('is a function', () => {
      expect(createParagsUI).toBeInstanceOf(Function)
    });

    describe('createParagsUI functional tests', () => {
      let el, data;
      beforeEach(() => {
        el = document.createElement('div');
        data = ["First", "Second", "Third"];
  
        createParagsUI(el, data);
      })
    
      it('renders initial markup', () => {
  
        const parags = el.querySelector('#paragraphs');
        expect(parags.tagName).toBe('OL');
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
      }),
        
        it('clears input value on submit', () => {
          el.querySelector('textarea').value = 'Some text here';
          el.querySelector('form').submit();
          expect(el.querySelector('textarea').value).toBe('');
        }),
        
        it('hides Submit button on submit', () => {
          el.querySelector('textarea').value = 'Some text here';
          el.querySelector('form').submit();
          expect(el.querySelector('button[type="submit"').hasAttribute('hidden'))
            .toBeTruthy;
        }),
        
        it('adds input value to the list of paragraphs', () => {
          el.querySelector('textarea').value = 'Some text here';
          el.querySelector('form').submit();
          expect(el.querySelectorAll('ol#paragraphs li').length).toBe(data.length);
          expect(el.querySelectorAll('ol#paragraphs li').length).toBe(4);
          expect(data.length).toBe(4);
          expect(el.querySelector('ol#paragraphs li').innerText)
            .toBe('Some text here');
        }),
        
        it('handles visibility of the Submit button on user input', () => {
          el.querySelector('textarea').value = 'Some text here';
          el.querySelector('textarea').dispatchEvent(new Event('input'));
          expect(el.querySelector('button[type="submit"').hasAttribute('hidden'))
            .toBeFalsy();
        
          el.querySelector('textarea').value = '';
          el.querySelector('textarea').dispatchEvent(new Event('input'));
          expect(el.querySelector('textarea').value).toBe('');
          expect(el.querySelector('button[type="submit"').hasAttribute('hidden'))
            .toBeTruthy();
        }),
        
        it('limits the number of paragraphs to 5', () => {
          el.querySelector('textarea').value = 'Fourth';
          el.querySelector('form').submit();
          el.querySelector('textarea').value = 'Fifth';
          el.querySelector('form').submit();
          el.querySelector('textarea').value = 'Sixth';
          el.querySelector('form').submit();
          el.querySelector('textarea').value = 'Seventh';
          el.querySelector('form').submit();

          expect(el.querySelectorAll('ol#paragraphs li').length).toBe(5);
          expect(data.length).toBe(5);
        }),

        it('adds new elements to the top of list', () => {
          el.querySelector('textarea').value = 'Fourth';
          el.querySelector('form').submit();
          el.querySelector('textarea').value = 'Fifth';
          el.querySelector('form').submit();
          
          expect(el.querySelectorAll('ol#paragraphs li')[0].innerText)
            .toBe('Fifth');
          expect(el.querySelectorAll('ol#paragraphs li')[1].innerText)
            .toBe('Fourth');
        })
    })
  })

})