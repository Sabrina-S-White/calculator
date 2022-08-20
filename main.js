//declarations

let add = document.getElementById('+');
let subtract = document.getElementById('-');
let multiple = document.getElementById('*');
let divide = document.getElementById('/');

const numbers = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.opr');
const clearNum = document.querySelectorAll('.clr');
const equal = document.querySelectorAll('.fnc');

document.getElementById('results').innerHTML = '';

let displayOperator = '';
let x = 0;
let array = Array();
num0 = '';
num1 = '';

//functions

function addition(num0, num1) {
        let result = (num0 + num1); 
        document.getElementById('results').innerHTML = result;
};

function subtraction(num0, num1) {
    let result = (num0 - num1);
    return result;
};

function multiplication(num0, num1) {
    let result = (num0 * num1);
    return result;
};

function division(num0, num1) {
    let result = (num0 / num1);
    return result;
};

function operate(displayOperator, num0, num1) {
    if (displayOperator == '+') {
        addition(num0, num1);
    } 
};

//buttons

numbers.forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('results').innerHTML = `${button.id}`;
        array[x] = `${button.id}`;
        x++;
        num0 = parseInt(array[0]);
        num1 = parseInt(array[1]);
    })});

operators.forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('results').innerHTML = `${button.id}`;
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