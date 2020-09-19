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
    console.log("before if else");
    if (isWaiting === true) {
        calculator.displayValue = integer;
        calculator.isWaiting = false;
        console.log(isWaiting);
    } else {
        calculator.displayValue = displayValue === '0' ? integer : displayValue + integer;
        console.log(displayValue);
        console.log(integer);
        console.log("inside else if");

        if (displayValue > MAX_DIGITS) {
            alert("Too many digits for this calculator.");
            return false;
        }
    }
}

function handleOperator(operator) {
    // call calculate
    //calculate(first,second,operator);
}

// updates calculator display
function updateDisplay() {
    const display = document.querySelector(".display");
    display.value = calculator.displayValue;
    console.log(calculator);
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

// event listeners //

updateDisplay();

// operator button
const keypad = document.querySelector(".keypad");
keypad.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    console.log(value);
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
            console.log(value);
            break;
        case "clear-all":
            clearAll();
            break;
        default:
            if (Number.isInteger(parseFloat(value))) {
                console.log(value);
                handleInt(value);
            }
    }

    updateDisplay();
});