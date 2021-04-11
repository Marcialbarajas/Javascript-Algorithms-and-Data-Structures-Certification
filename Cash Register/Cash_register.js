let denom = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
    let cashRegister = {status: null, change: []};
    let change = cash - price;
    let sumCid = parseFloat(cid.map(function(x) { return x[1] }).reduce((a, b) => a + b, 0).toFixed(2));
    cid = cid.reverse();
    let currentValue = 0;

    let changeArray = denom.reduce(function(acc, next, index){
        let currentValueArray = 0;

        if(cid[index][1] === 0){
            acc.push(cid[index]);
            return acc;
        }else{
            if(change >= next.val){
                while(change >= next.val && cid[index][1] >= next.val){
                    change -= next.val;
                    change = Math.round(change * 100) / 100;
                    cid[index][1] = Math.round(cid[index][1] * 100) / 100;
                    cid[index][1] -= next.val;
                    currentValueArray += next.val;
                }
                currentValue = currentValueArray;
                acc.push([next.name, Math.round(currentValueArray * 100) / 100]);
                return acc;
            }else{
                return acc;
            }
        }
    }, []);

    if(change > sumCid || change > 0){
        cashRegister.status = "INSUFFICIENT_FUNDS";
        cashRegister.change = [];
        console.log(cashRegister);
        return cashRegister
    }else if(sumCid - Math.round(currentValue * 100) / 100 === 0){
        cashRegister.status = "CLOSED";
        cashRegister.change = changeArray.reverse();
        console.log(cashRegister);
        return cashRegister
    }else {
        cashRegister.status = "OPEN";
        cashRegister.change = changeArray;
        console.log(cashRegister);
        return cashRegister
    }

}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
