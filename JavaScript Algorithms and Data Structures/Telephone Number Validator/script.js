function isValidPhoneNumber(number) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return regex.test(number);
}

document.getElementById("check-btn").addEventListener("click", () => {
    const input = document.getElementById("user-input").value.trim();
    const resultsDiv = document.getElementById("results-div");

    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    const outputText = isValidPhoneNumber(input)
        ? `Valid US number: ${input.toString().trim()}`
        : `Invalid US number: ${input.toString().trim()}`;

    resultsDiv.textContent = outputText;
    resultsDiv.style.color = isValidPhoneNumber(input) ? "green" : "red";
});

document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("user-input").value = "";
    document.getElementById("results-div").textContent = "";
});