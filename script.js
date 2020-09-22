// calculator object //
const calculator = {
    displayValue: '0',
    firstInteger: null,
    isWaiting: false,
    operator: null
}

// functions //

// function handles input
function handleInt(integer) {
    const { displayValue, isWaiting } = calculator;
    const MAX_DIGITS = 9999999;

    if (displayValue > MAX_DIGITS) {
        return false;
    } else if (isWaiting === true) {
        calculator.displayValue = integer;
        calculator.isWaiting = false;
    } else {
        calculator.displayValue = displayValue === '0' ? integer : displayValue + integer;
    }
}

function handleOperator(op) {
    const { first, displayValue, operator } = calculator;
    const input = parseFloat(displayValue);

    if (operator && calculator.isWaiting) {
        calculator.operator = op;
        return;
    }

    if (first == null && !isNaN(input)) {
        calculator.first = input;
    } else if (operator) {
        const result = calculate(first, input, operator);
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.first = result;
    }

    calculator.isWaiting = true;
    calculator.operator = op;
}

// updates calculator display
function updateDisplay() {
    const display = document.querySelector(".display");
    display.value = calculator.displayValue;
}

// sets calculator object to default values
function clearAll() {
    calculator.displayValue = '0';
    calculator.first = null;
    calculator.waiting = false;
    calculator.operator = null;
}

function calculate(first, second, operator) {
    if (operator === '/') {
        return first / second;
    } else if (operator === '*') {
        return first * second;
    } else if (operator === '-') {
        return first - second;
    } else if (operator === '+') {
        return first + second;
    } else {
        return "E";
    }
}

function toggleStyle(element) {
    if (element.className == 'on') {
        element.className = 'off';
    } else {
        element.className = 'on';
    }
}

// event listeners //

updateDisplay();

// operator button
const keypad = document.querySelector(".keypad");
keypad.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case "/":
        case "*":
        case "-":
        case "+":
        case "=":
            handleOperator(value);
            break;
        case "clear-all":
            clearAll();
            break;
        default:
            if (Number.isInteger(parseFloat(value))) {
                handleInt(value);
            }
    }

    updateDisplay();
});

// dark mode
const dark = document.querySelector("#dark-mode");
dark.addEventListener('click', event => {
    if (document.querySelector(".on")) {
        document.querySelector("#main-dark").style.backgroundColor = '#212121';
        document.querySelector("#input-dark").style.backgroundColor = 'silver';

        document.querySelectorAll(".btn-dark").forEach((btn) => {
            btn.style.backgroundColor = '#424242';
            btn.style.color = 'white';
        });

        document.querySelector(".equal-button").style.backgroundColor = '#486581';
        document.querySelector(".equal-button").style.color = 'white';

        document.querySelector(".clear-all-button").style.backgroundColor = '#9E9E9E';
        document.querySelector(".clear-all-button").style.color = 'white';
    } else {
        document.querySelector("#main-dark").style.backgroundColor = 'silver';
        document.querySelector("#input-dark").style.backgroundColor = 'white';

        document.querySelectorAll(".btn-dark").forEach((btn) => {
            btn.style.backgroundColor = 'white';
            btn.style.color = 'black';
        });

        document.querySelector(".equal-button").style.backgroundColor = 'green';
        document.querySelector(".equal-button").style.color = 'black';

        document.querySelector(".clear-all-button").style.backgroundColor = 'orange';
        document.querySelector(".clear-all-button").style.color = 'black';
    }
});
