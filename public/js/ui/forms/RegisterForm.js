class RegisterForm extends AsyncForm {
 
  onSubmit(data) {
    User.register(data, response => {
      if (response && response.success) {
        this.element.reset();
        App.setState('user-logged');
        const modal = App.getModal('register');
        modal.close();
      }
    });
  }
}


if (typeof window !== 'undefined') {
  window.RegisterForm = RegisterForm;
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = RegisterForm;
}
