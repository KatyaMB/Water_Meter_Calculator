let waterAmount = prompt(`How many litres of water would you like to calculate the price for?`);
console.log(`You have selected ` + waterAmount + ` litres`);

// Converting the prompt to a number
let waterAmountNo = Number(waterAmount);

// Declare a variable for the result
let result;

// Calculate the cost with an if statement
if (waterAmountNo > 0 && waterAmountNo <= 6) {
    result = waterAmountNo * 5.73;
} else if (waterAmountNo > 6 && waterAmountNo <= 10.5) {
    result = (waterAmountNo - 6) * 22.38 + (6 * 5.73);
} else if (waterAmountNo > 10.5 && waterAmountNo <= 35) {
    result = (waterAmountNo - 10.5) * 31.77 + (4.5 * 22.38) + (6 * 5.73);
} else if (waterAmountNo > 35) {
    result = (waterAmountNo - 35) * 69.76 + (24.5 * 31.77) + (4.5 * 22.38) + (6 * 5.73);
} else {
    result = 0; // Handle the case where waterAmountNo is not a positive number
}

// Round the result to 2 decimal places
result = Math.round(result * 100) / 100;

// Output the result
console.log(`You will need to pay ` + result + ` pounds`);
