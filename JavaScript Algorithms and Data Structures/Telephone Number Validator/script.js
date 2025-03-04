const resultsDiv = document.getElementById("results-div");
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

function isValidPhoneNumber(number) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return regex.test(number);
}

checkBtn.addEventListener("click", () => {
    const input = userInput.value.trim();

    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    resultsDiv.textContent = isValidPhoneNumber(input)
        ? `Valid US number: ${input}`
        : `Invalid US number: ${input}`;
    resultsDiv.style.color = isValidPhoneNumber(input) ? "green" : "red";
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    resultsDiv.textContent = "";
});