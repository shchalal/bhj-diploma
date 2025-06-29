(function() {
  class Modal {

    constructor(element) {
      if (!(element instanceof HTMLElement)) {
        throw new Error('Modal: передан неверный элемент');
      }
      this.element = element;

    
      this.onCloseClick = this.onCloseClick.bind(this);
      this.onBackdropClick = this.onBackdropClick.bind(this);
      this.onEscPress     = this.onEscPress.bind(this);

      this.registerEvents();
    }

   
    registerEvents() {
     
      this.element
        .querySelectorAll('[data-dismiss="modal"]')
        .forEach(btn => btn.addEventListener('click', this.onCloseClick));

     
      this.element.addEventListener('click', this.onBackdropClick);
    }

  
    onCloseClick(e) {
      e.preventDefault();
      this.close();
    }

  
    onBackdropClick(e) {
      if (e.target === this.element) {
        this.close();
      }
    }

   
    open() {
      this.element.style.display = 'block';
      document.addEventListener('keydown', this.onEscPress);
    }

    close() {
      this.element.style.display = 'none';
      document.removeEventListener('keydown', this.onEscPress);
    }

    onEscPress(e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        this.close();
      }
    }
  }

  window.Modal = Modal;
})();
