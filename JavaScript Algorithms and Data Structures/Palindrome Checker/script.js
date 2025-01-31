document.getElementById("check-btn").addEventListener("click", function () {
    let input = document.getElementById("text-input").value;
    let result = document.getElementById("result");

    if (!input) {
        alert("Please input a value");
        return;
    }

    let cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedInput = cleanedInput.split("").reverse().join("");

    if (cleanedInput === reversedInput) {
        result.textContent = `${input} is a palindrome`;
    } else {
        result.textContent = `${input} is not a palindrome`;
    }
});