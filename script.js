var display = document.querySelector("#display");

var maxDigits = 99999999;
var int1 = 0;
var int2 = 0;

document.querySelector("#divide").addEventListener('click', function() { 
    console.log("divide");
    return '/';
});

document.querySelector("#multiply").addEventListener('click', function () {

});

document.querySelector("#subtract").addEventListener('click', function () {
    
});

document.querySelector("#add").addEventListener('click', function () {
    
});

document.querySelector("#equal-button").addEventListener('click', function () {
    // calculate and return answer
});

document.querySelector("#clear-all-button").addEventListener('click', function () {
    display.textContent = '0';

});

document.querySelector("#clear-button").addEventListener('click', function () {
    display.textContent = '0';
});

document.querySelectorAll(".integer").forEach(integer => integer.addEventListener('click', function() {
    if (display.textContent === '0') {
        display.textContent = integer.getAttribute("value");
    } else {
        display.textContent += integer.getAttribute("value");
    }
}))