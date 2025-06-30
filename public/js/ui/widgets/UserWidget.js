
class UserWidget {
  constructor(element) {
    if (!element) {
      throw new Error('Элемент для UserWidget не найден');
    }
    this.element = element;
  }

  
  update() {
    const user = User.current();
    const nameField = this.element.querySelector('.user-name');
    if (user && nameField) {
      nameField.textContent = user.name;
    }
  }
}

if (typeof window !== 'undefined') {
  window.UserWidget = UserWidget;
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = UserWidget;
}
