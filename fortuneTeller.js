let firstName = prompt("What is your mothers maiden name?");
console.log("Your mother's maiden name is " + firstName);

let streetName = prompt("What is the street you grew up on?");
console.log("The street you grew up on is " + streetName);

let faveColour = prompt("What is your favourite colour?");
console.log("Your favourite colour is " + faveColour);

let age = prompt("What is your age?");
console.log("Your age is " + age);

// Start working out, best friend
let pickNumber = prompt("Pick a number between 1 and 10");
console.log("The number of years in which you'll meet your bestie is" + pickNumber);

// Bestie name
console.log("Your best friend will be called " + firstName + streetName);

//In how many years married
let ageParsed = Number(age);
let pickNumberParsed = Number(pickNumber);
let marriedInYears = ageParsed + pickNumberParsed;
console.log("You will get married in " + marriedInYears + ` years`);

//Children
let children = (ageParsed % pickNumberParsed);
console.log("You will have " + children + " children");

//Hair dyed
let dyeHair = Math.round(ageParsed / pickNumberParsed);
console.log("In " + dyeHair + " you will dye your hair");

//Multiline template literal 
console.log(`In ${pickNumber} years you will meet your best friend named ${firstName} ${streetName}
You will get married in ${age} years and have ${children} children,
In ${marriedInYears} years you will dye your hair ${faveColour}`);