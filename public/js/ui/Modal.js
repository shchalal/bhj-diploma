class Modal {
  
  constructor(element) {
    if (!element) {
      throw new Error('Не был передан элемент модального окна');
    }
    /** @private {HTMLElement} */
    this.element = element;
    this.registerEvents();
  }

  
  registerEvents() {
    const dismissButtons = this.element.querySelectorAll('[data-dismiss="modal"]');
    dismissButtons.forEach(button => {
      button.addEventListener('click', e => this.onClose(e));
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