var num1 = +prompt("Enter a num 1");
var num2 = +prompt("Enter a num 2");
var operator = prompt("Enter an operator (+ , - , *)");

if (operator === "+") {
    console.log(num1 + num2);
}
else if (operator === "-") {
    console.log(num1 - num2);
}
else if (operator === "*") {
    console.log(num1 * num2);
}
else {
    console.log("Invalid Character");
}