class Modal {

  constructor(element) {
    if (!element) {
      throw new Error('Элемент для модального окна не найден');
    }
    this.element = element;
    this.registerEvents();
  }

  registerEvents() {
   
    this.element.addEventListener('click', event => {
  
      if (event.target.closest('[data-dismiss="modal"]')) {
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