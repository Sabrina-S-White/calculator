//declarations

const numbers = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.opr');
const clearNum = document.querySelectorAll('.clr');
const equal = document.querySelectorAll('.fnc');
const plusMin = document.querySelectorAll('.plusmin');
const dec = document.querySelectorAll('.dec');

document.getElementById('results1').innerHTML = '';
document.getElementById('results2').innerHTML = '';

let displayOperator = 'none';
let equationOperator = 'none';
let x = 0;
let array = ['0'];
let num1 = 0;
let num2 = 0;
let results1 = '';
let results2 = '';
let holder = 0;
let y = 0;

//functions

function addition(num2, num1) {
    let result = (num2 + num1).toFixed(2); 
    return result;
};

function subtraction(num2, num1) {
    let result = (num2 - num1).toFixed(2);
    return result;
};

function multiplication(num2, num1) {
    let result = (num2 * num1).toFixed(2);
    return result;
};

function division(num2, num1) {
    let result = (num2 / num1).toFixed(2);
    return result;
};

function operate(equationOperator, num2, num1) {
if (equationOperator == '+') {
    let answer = addition(num2, num1);
    return answer;
} else if (equationOperator == '-') {
    let answer = subtraction(num2, num1);
    return answer;
} else if (equationOperator == '*') {
    let answer = multiplication(num2, num1);
    return answer;
} else if (equationOperator == '/') {
    let answer = division(num2, num1);
    return answer;
}
};

//buttons

numbers.forEach(button => {
    button.addEventListener('click', function() {
        if (y === 0) {
            document.getElementById('results1').innerHTML = '';
            array[x] = `${button.id}`;
            document.getElementById('results2').innerHTML = array.join('');
            x++;
            y++;
            num1 = Number(array.join(''))
        } else if (y > 0) {
        array[x] = `${button.id}`;
        document.getElementById('results2').innerHTML = array.join('');
        x++;
        y++
        num1 = Number(array.join(''))}});
    });

operators.forEach(button => {
    button.addEventListener('click', function() {
        displayOperator = `${button.id}`;
        num2 = num1;
        num1 = 0;
        equationOperator = displayOperator;
        displayOperator = 'none';
        array = ['0'];
        x = 0;
        document.getElementById('results1').innerHTML = (num2 + ' ' + equationOperator);
        document.getElementById('results2').innerHTML = '';
        })});

clearNum.forEach(button => {
    button.addEventListener('click', function() {
    displayOperator = 'none';
    equationOperator = 'none';
    x = 0;
    y = 0;
    array = ['0'];
    num1 = 0;
    num2 = 0;
    results1 = '';
    results2 = '';
    document.getElementById('results1').innerHTML = ' ';
    document.getElementById('results2').innerHTML = ' ';
    })});

equal.forEach(button => {
    button.addEventListener('click', function() {
        let fin = operate(equationOperator, num2, num1)
        document.getElementById('results1').innerHTML = (num2 + ' ' + equationOperator + ' ' + num1 + ' ' + '=' + ' ' + fin);
        holder = fin;
        displayOperator = 'none';
        equationOperator = 'none';
        x = 0;
        y = 0;
        array = ['0'];
        num1 = 0;
        num2 = 0;
        results1 = '';
        results2 = '';
        document.getElementById('results2').innerHTML = ' ';
    }
    )});

    plusMin.forEach(button => {
        button.addEventListener('click', function() {
            
            if (num1 > 0) {
                num1 = (-num1);
                document.getElementById('results2').innerHTML = num1;
            } else if (num1 < 0) {
                num1 = (-(num1));
                document.getElementById('results2').innerHTML = num1;
            } else return;
        })
    });

    dec.forEach(button => {
        button.addEventListener('click', function() {
        array[x] = '.';
        document.getElementById('results2').innerHTML = array.join('');
        x++;
        y++;
        num1 = Number(array.join('')); 
        })
        
    })
    