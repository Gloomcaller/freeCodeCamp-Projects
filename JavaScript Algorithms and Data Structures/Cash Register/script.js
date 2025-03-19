let price = 19.5;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
];

const currencyUnitValues = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
};

const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDueElement = document.getElementById("change-due");

purchaseBtn.addEventListener("click", () => {
    const cashProvided = parseFloat(cashInput.value) * 100;
    const priceInCents = price * 100;
    const changeDue = cashProvided - priceInCents;

    if (cashProvided < priceInCents) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (cashProvided === priceInCents) {
        changeDueElement.textContent = "No change due - customer paid with exact cash";
        return;
    }

    const totalCid = cid.reduce((total, [, amount]) => total + amount * 100, 0);

    if (totalCid < changeDue) {
        changeDueElement.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    const changeBreakdown = calculateChange(changeDue, cid);

    if (changeBreakdown.status === "INSUFFICIENT_FUNDS") {
        changeDueElement.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    changeDueElement.textContent = formatChangeOutput(changeBreakdown);
});

function calculateChange(changeDue, cid) {
    const totalCashInDrawer = cid.reduce((total, [, amount]) => total + amount * 100, 0);

    if (totalCashInDrawer === changeDue) {
        let closedChange = cid.filter(([unit, amount]) => amount > 0);
        closedChange.sort((a, b) => currencyUnitValues[b[0]] - currencyUnitValues[a[0]]);
        return { status: "CLOSED", change: closedChange };
    }

    const changeBreakdown = [];
    let remainingChange = changeDue;

    for (let i = cid.length - 1; i >= 0; i--) {
        const [unit, amountInDrawer] = cid[i];
        const unitValue = currencyUnitValues[unit];
        let amountInCents = amountInDrawer * 100;
        let count = 0;

        while (remainingChange >= unitValue && amountInCents >= unitValue) {
            remainingChange -= unitValue;
            amountInCents -= unitValue;
            count++;
        }

        if (count > 0) {
            changeBreakdown.push([unit, (count * unitValue) / 100]);
        }
    }

    if (remainingChange > 0) {
        return { status: "INSUFFICIENT_FUNDS" };
    }

    return { status: "OPEN", change: changeBreakdown };
}

function formatChangeOutput(changeBreakdown) {
    const { status, change } = changeBreakdown;
    let output = `Status: ${status}`;

    change.sort((a, b) => currencyUnitValues[b[0]] - currencyUnitValues[a[0]]);

    change.forEach(([unit, amount]) => {
        const formattedAmount = parseFloat(amount.toFixed(2)).toString();
        output += ` ${unit}: $${formattedAmount}`;
    });

    return output.trim();
}
