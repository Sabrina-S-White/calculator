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

let displayOperator = '';
let x = 0;
let y = 0;
let array = Array();
let array2 = Array();
num0 = '';
num1 = '';

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
    if (displayOperator.length == '') {button.addEventListener('click', function () {
        document.getElementById('results1').innerHTML = `${button.id}`;
        array[x] = `${button.id}`;
        x++;
        num0 += `${button.id}`;
    })} else if (displayOperator.length != '') {button.addEventListener('click', function() {
        document.getElementById('results1').innerHTML = `${button.id}`
        array2[y] = `${button.id}`;
        y++
        num1 += `${button.id}`;
    })}
})

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