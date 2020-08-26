/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {};
    transaction.id = this.transactions.length;
    transaction.type = type;
    transaction.amount = amount;
    this.transactions.push(transaction);
    //
    // console.table(this.transactions);
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
    return `Счет пополнен на ${amount}`;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      return `Cнятие ${amount} невозможно, на счету недостаточно средств.`;
    }
    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
    return `Со счета снято ${amount}`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `Баланс: ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) return item;
    }
    return `Нет транзакции с id=${id}`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        total += item.amount;
      }
    }
    return `Транзакций ${type} на сумму ${total}`;
  },
};

console.log(account.deposit(50));
console.log(account.withdraw(22));
console.log(account.getBalance());
console.log(account.withdraw(7));
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
