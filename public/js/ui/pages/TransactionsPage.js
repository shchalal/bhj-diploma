
class TransactionsPage {
  
  constructor(element) {
    if (!element) throw new Error('Элемент не передан в TransactionsPage');
    this.element = element;
    this.lastOptions = null;
    this.registerEvents();
  }


  registerEvents() {
  
    this.element.querySelector('.remove-account')?.addEventListener('click', e => {
      e.preventDefault();
      this.removeAccount();
    });
  
    this.element.addEventListener('click', e => {
      const btn = e.target.closest('.transaction__remove');
      if (btn) {
        e.preventDefault();
        this.removeTransaction(btn.dataset.id);
      }
    });
  }

  
  update() {
    if (this.lastOptions) this.render(this.lastOptions);
  }

  
  clear() {
    this.renderTransactions([]);
    this.renderTitle('Название счёта');
    this.lastOptions = null;
  }

 
  removeAccount() {
    if (!this.lastOptions) return;
    if (!confirm('Вы действительно хотите удалить счёт?')) return;
    Account.remove({ id: this.lastOptions.account_id }, (err, resp) => {
      if (resp?.success) {
        this.clear();
        App.updateWidgets();
        App.updateForms();
      }
    });
  }

  
  removeTransaction(id) {
    if (!confirm('Вы действительно хотите удалить эту транзакцию?')) return;
    Transaction.remove({ id }, (err, resp) => {
      if (resp?.success) App.update();
    });
  }

  render(options) {
    if (!options?.account_id) return;
    this.lastOptions = options;
    
    Account.get({ id: options.account_id }, (err, resp) => {
      if (resp?.success) this.renderTitle(resp.data.name);
    });
    
    Transaction.list({ account_id: options.account_id }, (err, resp) => {
      if (resp?.success) this.renderTransactions(resp.data);
    });
  }

  renderTitle(name) {
    const el = this.element.querySelector('.content-title');
    if (el) el.textContent = name;
  }

 
  formatDate(dateString) {
    const dt = new Date(dateString.replace(' ', 'T'));
    const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    const d = dt.getDate();
    const m = months[dt.getMonth()];
    const y = dt.getFullYear();
    const hh = String(dt.getHours()).padStart(2, '0');
    const mm = String(dt.getMinutes()).padStart(2, '0');
    return `${d} ${m} ${y} г. в ${hh}:${mm}`;
  }

  
  getTransactionElement(item) {
    const typeClass = item.type === 'income' ? 'transaction_income' : 'transaction_expense';
    const root = document.createElement('div');
    root.classList.add('transaction', typeClass, 'row');

 
    const details = document.createElement('div');
    details.classList.add('col-md-7', 'transaction__details');
    const icon = document.createElement('div');
    icon.classList.add('transaction__icon');
    const iconSpan = document.createElement('span');
    iconSpan.classList.add('fa', 'fa-money', 'fa-2x');
    icon.appendChild(iconSpan);
    const info = document.createElement('div');
    info.classList.add('transaction__info');
    const title = document.createElement('h4');
    title.classList.add('transaction__title');
    title.textContent = item.name;
    const dateEl = document.createElement('div');
    dateEl.classList.add('transaction__date');
    dateEl.textContent = this.formatDate(item.created_at);
    info.append(title, dateEl);
    details.append(icon, info);

 
    const sumCol = document.createElement('div');
    sumCol.classList.add('col-md-3');
    const sumEl = document.createElement('div');
    sumEl.classList.add('transaction__summ');
    sumEl.textContent = item.sum.toLocaleString('ru-RU', { minimumFractionDigits: 2 });
    const currency = document.createElement('span');
    currency.classList.add('currency');
    currency.textContent = ' ₽';
    sumEl.appendChild(currency);
    sumCol.appendChild(sumEl);


    const ctrlCol = document.createElement('div');
    ctrlCol.classList.add('col-md-2', 'transaction__controls');
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-danger', 'transaction__remove');
    btn.dataset.id = item.id;
    const btnIcon = document.createElement('i');
    btnIcon.classList.add('fa', 'fa-trash');
    btn.appendChild(btnIcon);
    ctrlCol.appendChild(btn);

    root.append(details, sumCol, ctrlCol);
    return root;
  }

 
  renderTransactions(items) {
    const container = this.element.querySelector('section.content');
    if (!container) return;
    container.innerHTML = '';
    items.forEach(item => {
      const el = this.getTransactionElement(item);
      container.appendChild(el);
    });
  }
}


if (typeof window !== 'undefined') window.TransactionsPage = TransactionsPage;
else if (typeof module !== 'undefined') module.exports = TransactionsPage;
