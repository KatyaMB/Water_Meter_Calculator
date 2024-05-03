let waterAmount = prompt(`How many litres of water would you like to calculate the price for?`);
console.log(waterAmount);

//converting to number

let waterAmountNo = Number(waterAmount);

// declare variable for result

let result;

// calculate

if(waterAmountNo >= 6) {
    result = waterAmountNo * 5.73;
}

else if (waterAmountNo >6 && waterAmountNo >=10.5) {
    result = (waterAmountNo - 6) * 22.38 + (6 * 5.73);
}

else if (waterAmountNo >10.5 && waterAmountNo >=35) {
    result = (waterAmountNo - 10.5) * 31.77 + (6 * 5.73) + (4.5 * 22.38);
}

else if (waterAmountNo >35) {
    result = (waterAmountNo - 35) * 69.76 + (6 * 5.73) + (4.5 * 22.38) + (24.5 * 31.77);
}

// Output

console.log(`You will need to pay` + result + `pounds`);

