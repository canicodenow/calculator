
var numOne = 0;
var numTwo = 0;
var operatorUsed = "";
var result = 0;
var displayText = "";
// update display when press a number
var digits = Array.from(document.querySelectorAll(".digit"));
digits.forEach(digit => digit.addEventListener("click", e => {
    display(e.target.value);
}))

// all clear event listener
var clearButton = document.querySelector(".all-clear");
clearButton.addEventListener("click", e => {
    allClear();
})

var equalsButton = document.querySelector(".equals");
equalsButton.addEventListener("click", e => {
    equals();
})

var operators = Array.from(document.querySelectorAll(".operator"));
operators.forEach(operator => operator.addEventListener("click", e => {
    if (numTwo === 0) {
        numOne = Number(displayText);
        numTwo = 1;
        chooseOperator(operator.value);
    }
    else {
        numTwo = Number(displayText);
        result = operate(operatorUsed, numOne, numTwo);
        displayText = "";
        numOne = result;
        chooseOperator(operator.value);
    }
    console.log(`result is: ${result}`);
    console.log(`numOne is: ${numOne}`);
    console.log(`numTwo is: ${numTwo}`);
    console.log(`operatorUsed is: ${operatorUsed}`);
    console.log(`displayText is: ${displayText}`);
}))

function chooseOperator(operator) {
    switch (operator) {
        case "+":
            displayText = "+";
            operatorUsed = "add";
            break;
        case "-":
            displayText = "-";
            operatorUsed = "subtract";
            break;
        case "*":
            displayText = "×";
            operatorUsed = "multiply";
            break;
        case "/":
            displayText = "÷";
            operatorUsed = "divide";
            break;
    }
    document.getElementById("calc-screen").value = operator;
    displayText = "";
}


function equals() {
    numTwo = Number(displayText);
    result = operate(operatorUsed, numOne, numTwo);
    document.getElementById("calc-screen").value = result;
    displayText = "";
    numOne = 0;
    numTwo = 0;
    result = 0;
}


// function add ([...args]) {
//     var added = 0;
//     args.forEach(arg => {
//         added = added + arg;
//     });
// 	return added;
// }


function add (a, b) {
    return (a + b);
}

// function subtract ([...args]) {
//     var subtracted = 0;
//     args.forEach(arg => {
//         subtracted = subtracted - arg;
//     });
// 	return subtracted;
// }

function subtract (a, b) {
    return a - b;
}

// function multiply ([...args]) {
// 	var multiplied = 1;
// 	args.forEach(arg => {
// 		multiplied = multiplied * arg;
// 	});
// 	return multiplied;
// }

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operator, numOne, numTwo) {
    switch (operator) {
        case "add":
            return add(numOne, numTwo);
        case "subtract":
            return subtract(numOne, numTwo);
        case "multiply":
            return multiply(numOne, numTwo);
        case "divide":
            return divide(numOne, numTwo);
    }
}

function display(buttonValue) {
    displayText = displayText + buttonValue;
    document.getElementById("calc-screen").value = displayText;
    console.log(displayText);
    return displayText;
}

function allClear() {
    document.getElementById("calc-screen").value = 0;
    displayText = "";
    numOne = 0;
    numTwo = 0;
    result = 0;
    operatorUsed = "";
    console.log(displayText, numOne, numTwo, result);
}