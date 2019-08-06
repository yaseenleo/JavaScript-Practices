var price = prompt("enter the price of thing?");
price = Number(price);
var taxRate = (price / 100) * 6.5;
var total = price + taxRate;
console.log(taxRate);
console.log(total);

var prettyTotal = total.toFixed(2);
console.log(prettyTotal);

var currencyTotal = "$" + prettyTotal;
console.log(currencyTotal);

var num = prompt("enter a number");
var str = num.toString();
if (str.charAt(str.length - 1) === "5") {
    str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
prettyNum = num.toFixed(2);
console.log(prettyNum);