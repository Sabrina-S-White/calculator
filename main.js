let add = document.getElementById('+');
let subtract = document.getElementById('-');
let multiple = document.getElementById('*');
let divide = document.getElementById('/');

const buttons = document.querySelectorAll('.btn');

let displayValue = ''

function addition(num1, num2) {
    if ((num1 == parseInt(num1)) && (num2 == parseInt(num2))) {
        let result = (num1 + num2); 
        return result;
    } 
};

function subtraction(num1, num2) {
    let result = (num1 - num2);
    return result;
};

function multiplication(num1, num2) {
    let result = (num1 * num2);
    return result;
};

function division(num1, num2) {
    let result = (num1 / num2);
    return result;
};

function operate(operator, num1, num2) {
    if (operator == '+') {
        let result = addition(num1, num2);
        return result;
    } else if (operator == '-') {
        let result = subtraction(num1, num2);
        return result;
    } else if (operator == '*') {
        let result = multiplication(num1, num2);
        return result;
    } else if (operator == '/') {
        let result = division(num1, num2);
        return result;
    };
};

buttons.forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('results').innerHTML = `${button.id}`;
        displayValue = `${button.id}`;
        return displayValue;
    })});

document.getElementById('result').innerHTML = ''


