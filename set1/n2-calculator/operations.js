
// Full Name: Jenelle M. Sabal
// Section: IV-BSIT C
// Activity: ELEC 3 - N2
// Date: November 24, 2026

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

function average(numbers) {
    if (numbers.length === 0) {
        throw new Error("Please provide numbers to calculate the average.");
    }

    const total = numbers.reduce((sum, number) => sum + number, 0);
    return total / numbers.length;
}

// Export all calculator functions
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};
