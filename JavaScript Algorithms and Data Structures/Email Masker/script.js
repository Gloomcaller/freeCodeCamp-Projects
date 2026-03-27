function maskEmail(email) {
    const atIndex = email.indexOf('@');
    const username = email.substring(0, atIndex);
    const domain = email.substring(atIndex);
    const firstChar = username[0];
    const lastChar = username[username.length - 1];
    const maskedUsername = firstChar + '*'.repeat(username.length - 2) + lastChar;
    return maskedUsername + domain;
}

const email = "apple.pie@example.com";

console.log(maskEmail(email));