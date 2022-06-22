let myAccount = {
    name: "John Dou",
    expense: 0,
    income: 0,
}

myAccount.income = 100;
let otherAccount = myAccount;
otherAccount.income = otherAccount.income + 1000;

let addExpense = function(account, amount){
    account.expense = account.expense + amount;
    console.log(account)
}

addExpense(myAccount, 637.88);
console.log(myAccount)