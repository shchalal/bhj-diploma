(function() {
  class Sidebar {
    static init() {
      this.initAuthLinks();
      this.initToggleButton();
    }
    static initToggleButton() {
      const btn = document.querySelector('.sidebar-toggle.visible-xs');
      if (!btn) return console.warn('Toggle button not found');
      btn.addEventListener('click', e => {
        e.preventDefault();
        document.body.classList.toggle('sidebar-open');
        document.body.classList.toggle('sidebar-collapse');
      });
    }
    static initAuthLinks() {
      // ...
    }
  }

  window.Sidebar = Sidebar;
})();