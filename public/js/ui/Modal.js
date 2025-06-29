
class Modal {
 
  static instances = {};

  
  constructor(element) {
    if (!element) {
      throw new Error('Не был передан элемент модального окна');
    }
    this.element = element;
    this.id = element.id;
    this.registerEvents();
    if (this.id) {
      Modal.instances[this.id] = this;
    }
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

 
  static initAll() {
   
    document.querySelectorAll('.modal').forEach(el => new Modal(el));
  
    document.querySelectorAll('[data-toggle="modal"]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const target = btn.getAttribute('data-target');
        if (!target) return;
        const id = target.startsWith('#') ? target.slice(1) : target;
        const modal = Modal.instances[id];
        if (modal) modal.open();
      });
    });
  }
}

Modal.initAll();