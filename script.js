var display = document.querySelector("#display");
var operator = document.querySelectorAll(".operator");
var integer = document.querySelectorAll(".integer");

const MAX_DIGITS = 9999999;
var first, second, operator, temp;

// event listeners //

// operator buttons
operator.forEach(op => op.addEventListener('click', function () {
    if (op.getAttribute("value") === '/') {
        console.log("divide by");
        display.textContent += ' / '
    } else if (op.getAttribute("value") === '*') {
        console.log("times");
        display.textContent += ' * '
    } else if (op.getAttribute("value") === '-') {
        console.log("minus");
        display.textContent += ' - '
    } else if (op.getAttribute("value") === '+') {
        console.log("plus");
        display.textContent += ' + '
    } else if (op.getAttribute("value") === '=') {
        console.log("equals");
        display.textContent += ' = '
    } else {
        console.log("error");
        display.textContent += ' E '
    }
}));

// integer buttons
integer.forEach(int => int.addEventListener('click', function () {
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