const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];

const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);
}

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);

    document.querySelector("#mean").textContent = mean;
}