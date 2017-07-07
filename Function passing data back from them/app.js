function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
        orderTot =merchTot + 5;
    }
    else {
        orderTot = merchTot + 5 + ( 0.3 * (merchTot - 50));
    }
    return orderTot;
}
var totalToCharge = calcTot(75.25);
console.log(totalToCharge);