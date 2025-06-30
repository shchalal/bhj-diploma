class CreateAccountForm extends AsyncForm {
  onSubmit(data) {
    Account.create(data, (err, response) => {
      if (response && response.success) {
        this.element.reset();
        const modal = App.getModal('createAccount');
        modal.close();
        App.update();
      }
     
    });
  }
}


if (typeof window !== 'undefined') {
  window.CreateAccountForm = CreateAccountForm;
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateAccountForm;
}
