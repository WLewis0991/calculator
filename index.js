//Calculator module

//Variables

let num1="";
let num2="";
let operator="";
let result="";
const display= document.getElementsByClassName("calculator-screen");
const digits= document.getElementsByClassName("number");
const operators= document.getElementsByClassName("operator");
const clear= document.getElementsByClassName("clear")[0];
const equal= document.getElementsByClassName("equal-sign")[0];
const decimal= document.getElementsByClassName("decimal")[0];
const deleteBtn= document.getElementsByClassName("delete")[0];


//Operator functions
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
        return ("Nope 😜");
    }
    return a / b;
}

//Event Listener for delete button
deleteBtn.addEventListener("click", function() {
    if (operator === "") {
        num1 = num1.slice(0, -1);
        display[0].value = num1;
    } else {
        num2 = num2.slice(0, -1);
        display[0].value = num2;
    }
});

//Event Listener for decimal point
decimal.addEventListener("click", function() {
    if (operator === "") {
        if (!num1.includes(".")) {
            num1 += ".";
            display[0].value = num1;
        }
    }   else {
        if (!num2.includes(".")) {
            num2 += ".";
            display[0].value = num2;
        }
    }
}); 


//Event Listeners for digits
for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", function() {
        if (operator === "") {
            num1 += digits[i].innerText;
            display[0].value = num1;
        } else {
            num2 += digits[i].innerText;
            display[0].value = num2;
        }
    });
}

//Event Listeners for operators
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function() {
        if (num1 === "") {
            return;
        }
        if (operator !== "" && num2 !== "") {
            result = calculate(parseFloat(num1), parseFloat(num2), operator);
            display[0].value = result;
            num1 = result.toString();
            num2 = "";
        }
        operator = operators[i].innerText;
    });
}   

//Event Listener for equal sign rounded to 4 decimal places
equal.addEventListener("click", function() {
    if (num1 === "" || num2 === "" || operator === "") {
        return;
    }
    result = calculate(parseFloat(num1), parseFloat(num2), operator);
    if (typeof result === "number") {
        result = Math.round(result * 10000) / 10000;
    }
    display[0].value = result;
    num1 = result.toString();
    num2 = "";
    operator = "";
}); 



//Event Listener for clear button
clear.addEventListener("click", function() {
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    display[0].value = "";
}); 


//Main calculation function
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            throw new Error("Invalid operator 😜");
    }
}

