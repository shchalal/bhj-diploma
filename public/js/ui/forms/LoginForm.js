class LoginForm extends AsyncForm {

  onSubmit(data) {
    User.login(data, response => {
      if (response && response.success) {
        this.element.reset();
        App.setState('user-logged');
        const modal = App.getModal('login');
        modal.close();
      }
 
    });
  }
}


if (typeof window !== 'undefined') {
  window.LoginForm = LoginForm;
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = LoginForm;
}