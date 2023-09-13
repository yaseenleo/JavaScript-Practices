const account = {
  name: "John Doe",
  income: [],
  expenses: [],

  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },

  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalExpense = 0;
    let totalIncome = 0;
    let balance = 0;

    this.income.forEach(function (earn) {
      totalIncome = totalIncome + earn.amount;
    });

    this.expenses.forEach(function (expense) {
      totalExpense = totalExpense + expense.amount;
    });

    balance = totalIncome - totalExpense;
    // return `${this.name} has $${totalExpense} in expenses`;
    return `${this.name} has a balance of $${balance}, $${totalIncome}in income, $${totalExpense} in expenses`;
  },
};

account.addExpense("Butter", 12);
account.addExpense("Milk", 5);
account.addExpense("playstation", 600);
account.addIncome("Job", 1000);
account.addIncome("Freelance", 1200);

console.log(account);
console.log(account.getAccountSummary());
