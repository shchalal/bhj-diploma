class CreateTransactionForm extends AsyncForm {
  
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  
  renderAccountsList() {
    Account.list({}, (err, response) => {
      if (response && response.success) {
        const selectList = this.element.querySelector('.accounts-select');
        if (selectList) {
          selectList.innerHTML = '';
          response.data.forEach(account => {
            const option = document.createElement('option');
            option.value = account.id;
            option.textContent = account.name;
            selectList.appendChild(option);
          });
        }
      }
    });
  }

  
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
      if (response && response.success) {
       
        App.update();
        this.element.reset();
    
        const modalId = this.element.closest('.modal').dataset.modalId;
        const modal = App.getModal(modalId);
        modal.close();
      }
    
    });
  }
}


if (typeof window !== 'undefined') {
  window.CreateTransactionForm = CreateTransactionForm;
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateTransactionForm;
}