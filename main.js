//declarations

let add = document.getElementById('+');
let subtract = document.getElementById('-');
let multiple = document.getElementById('*');
let divide = document.getElementById('/');

const numbers = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.opr');
const clearNum = document.querySelectorAll('.clr');
const equal = document.querySelectorAll('.fnc');

document.getElementById('results1').innerHTML = '';
document.getElementById('results2').innerHTML = '';

let displayOperator = 'none';
let equationOperator = 'none';
let x = 0;
let array = ['0'];
num0 = 0;
num1 = 0;


//functions

function addition(num0, num1) {
        let result = (num0 + num1).toFixed(2); 
        document.getElementById('results').innerHTML = result;
};

function subtraction(num0, num1) {
    let result = (num0 - num1).toFixed(2);
    document.getElementById('results').innerHTML = result;
};

function multiplication(num0, num1) {
    let result = (num0 * num1).toFixed(2);
    document.getElementById('results').innerHTML = result;
};

function division(num0, num1) {
    let result = (num0 / num1).toFixed(2);
    document.getElementById('results').innerHTML = result;
};

function operate(displayOperator, num0, num1) {
    if (displayOperator == '+') {
        addition(num0, num1);
    } else if (displayOperator == '-') {
        subtraction(num0, num1);
    } else if (displayOperator == '*') {
        multiplication(num0, num1);
    } else if (displayOperator == '/') {
        division(num0, num1);
    }
};

//buttons
numbers.forEach(button => {
    if (displayOperator === 'none') {button.addEventListener('click', function () {
        array[x] = `${button.id}`;
        document.getElementById('results1').innerHTML = array.join('');
        x++;
        num0 = parseInt(array.join(''))});
    } else if (displayOperator === '+' || displayOperator === '-') {button.addEventListener('click', function () {
        num1 = num0;
        equationOperator = displayOperator;
        array = ['0'];
        displayOperator = 'none';
        x = 0;
        array[x] = `${button.id}`;
})}});

operators.forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('results2').innerHTML = `${button.id}`;
        displayOperator = `${button.id}`;
        })});

clearNum.forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('results').innerHTML = "";
        displayOperator = '';
        num0 = '';
        num1 = '';
        array.splice(0, array.length);
        x = 0;
    })});


equal.forEach(button => {
    button.addEventListener('click', function() {
        operate(displayOperator, num0, num1);
    })});