(function() {
  class Sidebar {
    static init() {
      this.initAuthLinks();
      this.initToggleButton();
    }


    static initToggleButton() {
      const btn = document.querySelector('.sidebar-toggle.visible-xs');
      if (!btn) {
        console.warn('Toggle button not found');
        return;
      }
      btn.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.toggle('sidebar-open');
        document.body.classList.toggle('sidebar-collapse');
      });
    }


    static initAuthLinks() {
     
      const registerBtn = document.querySelector('.menu-item_register');
      if (registerBtn) {
        registerBtn.addEventListener('click', e => {
          e.preventDefault();
          const registerModal = App.getModal('register');
          registerModal.open();
        });
      }
    
      const loginBtn = document.querySelector('.menu-item_login');
      if (loginBtn) {
        loginBtn.addEventListener('click', e => {
          e.preventDefault();
          const loginModal = App.getModal('login');
          loginModal.open();
        });
      }
     
      const logoutBtn = document.querySelector('.menu-item_logout');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', e => {
          e.preventDefault();
          User.logout(response => {
            if (response && response.success) {
              App.setState('init');
            }
          });
        });
      }
    }
  }

  window.Sidebar = Sidebar;
})();