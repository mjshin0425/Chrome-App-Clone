////////////////////////// is Not a Number

//console.log(isNaN(age)); // true = Not a Number

const age = parseInt(prompt("How are you?"));

if (isNaN(age)) {
  console.log("Please write a number");
}

////////////////////////

const age = parseInt(prompt("How are you?"));

if (isNaN(age)) {
  console.log("Please write a number");
} else {
  console.log("Thank you for writing your age.");
}
