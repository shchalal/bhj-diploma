class Sidebar {
 
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

 
  static initToggleButton() {
    const toggleButton = document.querySelector('.sidebar-toggle'); 
    if (!toggleButton) return;

    toggleButton.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.classList.toggle('sidebar-open');
      document.body.classList.toggle('sidebar-collapse');
    });
  }

  
  static initAuthLinks() {
   
  }
}


document.addEventListener('DOMContentLoaded', () => {
  Sidebar.init();
});
