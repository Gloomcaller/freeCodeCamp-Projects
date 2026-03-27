const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
    if (creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
        return "You qualify for a duplex, condo, and car loan."
    } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
        return "You qualify for a condo and car loan."
    } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
        return "You qualify for a car loan."
    } else {
        return "You don't qualify for any loans."
    }
}

var duplexLoanMsg = getLoanMessage(85000, 850)
var condoLoanMsg = getLoanMessage(65000, 690)
var carLoanMsg = getLoanMessage(45000, 660)
var noLoanMsg = getLoanMessage(25000, 550)

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);