var display = document.querySelector("#display");
var temp = document.querySelector("#temp");
var operatorBtn = document.querySelectorAll(".operator");
var integerBtn = document.querySelectorAll(".integer");

const MAX_DIGITS = 9999999;
var first, second, operator, temp;

// event listeners //

// operator buttons
operatorBtn.forEach(op => op.addEventListener('click', function () {
    switch (op.getAttribute("value")) {
        case "/":
            console.log("divide by");
            display.textContent += ' / ';
            break;
        case "*":
            console.log("times");
            display.textContent += ' * '
            break;
        case "-":
            console.log("minus");
            display.textContent += ' - '
            break;
        case "+":
            console.log("plus");
            display.textContent += ' + '
            break;
        case "=":
            console.log("equals");
            display.textContent += ' = ';
            // TODO: Calculate and display answer
            break;
        default:
            console.log("error");
            display.textContent += ' E '
            break;
    }
}));

// integer buttons
integerBtn.forEach(int => int.addEventListener('click', function () {
    if (display.textContent === '0') {
        display.textContent = int.getAttribute("value");
    } else {
        if (display.textContent > MAX_DIGITS) {
            alert("Too many digits for this calculator.")
            return false;
        } else {
            display.textContent += int.getAttribute("value");
        }
    }
}));

document.querySelector("#clear-all-button").addEventListener('click', function () {
    display.textContent = '0';

});

document.querySelector("#clear-button").addEventListener('click', function () {
    display.textContent = '0';
});