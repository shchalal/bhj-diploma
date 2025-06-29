class Modal {
 
  constructor(element) {
    if (!element) {
      throw new Error('Modal: передан пустой или неопределённый элемент');
    }
    this.element = element;
    this.registerEvents();
  }

  
  registerEvents() {
    const closeButtons = this.element.querySelectorAll('[data-dismiss="modal"]');
    closeButtons.forEach(button => {
      button.addEventListener('click', this.onClose.bind(this));
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

window.Modal = Modal;
