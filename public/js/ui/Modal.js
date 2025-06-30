
class Modal {
 
  constructor(element) {
    if (!element) {
      throw new Error('Элемент для модального окна не найден');
    }
    this.element = element;
    this.registerEvents();
    
    this.close();
  }

 
  registerEvents() {
    this.element.addEventListener('click', event => {
      const closeTrigger = event.target.closest('modal-login');
      if (closeTrigger) {
        this.onClose(event);
      }
    });
  }

  
  onClose(e) {
    e.preventDefault();
    this.close();
  }

  open() {
    this.element.style.display = 'block';
    this.element.classList.add('in');
  }


  close() {
    this.element.style.removeProperty('display');
    this.element.classList.remove('in');
  }
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = Modal;
} else {
  window.Modal = Modal;
}