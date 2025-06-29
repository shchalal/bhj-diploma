
class Modal {
 
  constructor(element) {
    if (!element) {
      throw new Error('Не был передан элемент модального окна');
    }

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
    this.element.offsetWidth;
    this.element.classList.add('in');
  }


  close() {
    this.element.classList.remove('in');
    const removeDisplay = () => this.element.style.removeProperty('display');
    this.element.addEventListener('transitionend', removeDisplay, { once: true });
    setTimeout(removeDisplay, 300);
  }
}


export default Modal;
