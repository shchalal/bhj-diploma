class AsyncForm {

  constructor(element) {
    if (!element || element.tagName !== 'FORM') {
      throw new Error('AsyncForm: передан неверный элемент');
    }
    this.element = element;
    this.registerEvents();
  }

 
  registerEvents() {
    this.element.addEventListener('submit', event => {
      event.preventDefault();
      this.submit();
    });
  }

  getData() {
    const formData = new FormData(this.element);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    return data;
  }

  
  onSubmit(formData) {
   
  }

 
  submit() {
    const data = this.getData();
    this.onSubmit(data);
  }
}


window.AsyncForm = AsyncForm;