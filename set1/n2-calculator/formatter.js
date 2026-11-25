
// Full Name: Jenelle M. Sabal
// Section: IV-BSIT C
// Activity: ELEC 3 - N2
// Date: November 24, 2026

function formatResult(operation, a, b, result) {
    let symbol;

    switch (operation) {
        case "add":
            symbol = "+";
            break;
        case "subtract":
            symbol = "-";
            break;
        case "multiply":
            symbol = "*";
            break;
        case "divide":
            symbol = "/";
            break;
        default:
            symbol = "?";
    }

    return `${a} ${symbol} ${b} = ${result}`;
}

function formatAverage(numbers, result) {
    return `Average of ${numbers.join(", ")} = ${result}`;
}

// Export formatting functions
module.exports = {
    formatResult,
    formatAverage
};
