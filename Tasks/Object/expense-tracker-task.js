// Challenge Task

// 1. addIncome
// 2. resetAccount
// 3. get Account summary
// 4. print the message in console

let userAccount = {
    name: "Nick Harrigan",
    expense: 0,
    income: 0,
}

let addIncome = function(account, income){
    account.income = account.income + income;
    console.log(`${account.name} income is ${account.income}`)
    // console.log(account);
}

addIncome(userAccount, 50000)

let userExpense = function(account, expense){
    account.expense = account.expense + expense
    console.log(`${account.name} expense is ${account.expense}`);
}

userExpense(userAccount, 30000)

let accountReset = function(account){
    account.income = 0;
    account.expense = 0
    console.log(account);
}

accountReset(userAccount);

let accountSummary = function(account){
    let userName = account.name
    let userIncome = account.income
    let userExpense = account.expense
    console.log(`${userName} income is ${userIncome} and expense is ${userExpense}`);

    if(userIncome > userExpense){
        let balance = userIncome - userExpense
        console.log(`hurray ${userName} is saving ${balance} cash`);
    }

    else if(userIncome < userExpense){
        let spending = userExpense - userIncome
        console.log(`Yikes ${userName} is spending ${spending} more than its income`);
    }

    else if(userIncome !== 0 && userExpense !== 0 && userIncome == userExpense){
        console.log(`${userName} need to have a part time job for extra income`);
    }

    else{
        console.log(`${userName} needs to find a job`);
    }
}

addIncome(userAccount, 50000);
userExpense(userAccount, 40000)
accountSummary(userAccount)
accountReset(userAccount)

// addIncome(userAccount, 55000);
addIncome(userAccount, 50000);
userExpense(userAccount, 55000);

// accountReset(userAccount)
accountSummary(userAccount);