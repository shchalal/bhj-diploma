class AccountsWidget {

  constructor(element) {
    if (!element) {
      throw new Error('Элемент для AccountsWidget не найден');
    }
    this.element = element;
    this.registerEvents();
    this.update();
  }


  registerEvents() {

    const createBtn = this.element.querySelector('.create-account');
    if (createBtn) {
      createBtn.addEventListener('click', e => {
        e.preventDefault();
        const modal = App.getModal('createAccount');
        modal.open();
      });
    }
   
    this.element.addEventListener('click', e => {
      const accountElem = e.target.closest('.account');
      if (accountElem) {
        e.preventDefault();
        this.onSelectAccount(accountElem);
      }
    });
  }


  update() {
    const user = User.current();
    if (user) {
      Account.list({}, (err, response) => {
        if (response && response.success) {
          this.clear();
          response.data.forEach(item => this.renderItem(item));
        }
      });
    }
  }

 
  clear() {
    const items = this.element.querySelectorAll('.account');
    items.forEach(item => item.remove());
  }


  onSelectAccount(element) {
    
    const prev = this.element.querySelector('.active.account');
    if (prev) {
      prev.classList.remove('active');
    }
   
    element.classList.add('active');
   
    const accountId = element.dataset.id;
    App.showPage('transactions', { account_id: accountId });
  }

 
  getAccountHTML(item) {
    const formattedSum = item.sum.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    return `
      <li class="account" data-id="${item.id}">
        <a href="#">
          <span>${item.name}</span> / <span>${formattedSum} ₽</span>
        </a>
      </li>
    `;
  }

  renderItem(data) {
    const html = this.getAccountHTML(data);
    this.element.insertAdjacentHTML('beforeend', html);
  }
}


if (typeof window !== 'undefined') {
  window.AccountsWidget = AccountsWidget;
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = AccountsWidget;
}
