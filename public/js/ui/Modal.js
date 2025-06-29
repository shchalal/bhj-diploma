class Modal {
  
  constructor(element) {
    if (!element) {
      throw new Error('Элемент для модального окна не найден');
    }
    this.element = element;
    this.registerEvents();
  }

 
  registerEvents() {
    const closeButtons = this.element.querySelectorAll('[data-dismiss="modal"]');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', this.onClose.bind(this));
    });
  }

  onClose(e) {
    e.preventDefault();
    this.close();
  }

  
  open() {
    this.element.style.display = 'block';
  }


  close() {
    this.element.style.removeProperty('display');
  }
} 


if (typeof module !== 'undefined' && module.exports) {
  module.exports = Modal;
} else {
  window.Modal = Modal;
}
