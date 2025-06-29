export class Sidebar {
 
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

 
  static initToggleButton() {
    const toggleButton = document.querySelector('.sidebar-toggle.visible-xs');
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


window.addEventListener('DOMContentLoaded', () => {
  Sidebar.init();
});
