class TransactionsWidget {
  constructor(element) {
    if (!element) {
      throw new Error('Элемент для TransactionsWidget не найден');
    }
    this.element = element;
    this.registerEvents();
  }

  
  registerEvents() {
    const incomeBtn = this.element.querySelector('.create-income-button');
    const expenseBtn = this.element.querySelector('.create-expense-button');

    if (incomeBtn) {
      incomeBtn.addEventListener('click', e => {
        e.preventDefault();
        const modal = App.getModal('newIncome');
        modal.open();
      });
    }

    if (expenseBtn) {
      expenseBtn.addEventListener('click', e => {
        e.preventDefault();
        const modal = App.getModal('newExpense');
        modal.open();
      });
    }
  }
}


if (typeof window !== 'undefined') {
  window.TransactionsWidget = TransactionsWidget;
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = TransactionsWidget;
}

