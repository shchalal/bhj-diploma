class Sidebar {
  
  static initToggleButton() {
    
    const toggleButton = document.querySelector('.sidebar-toggle.visible-xs');

    if (!toggleButton) {
      console.warn('Sidebar toggle button not found');
      return;
    }

 
    toggleButton.addEventListener('click', event => {
      event.preventDefault();
      const body = document.body;


      body.classList.toggle('sidebar-open');
      body.classList.toggle('sidebar-collapse');
    });
  }

}
