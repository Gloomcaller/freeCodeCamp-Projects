const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;



const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);

    document.querySelector("#mean").textContent = mean;
}