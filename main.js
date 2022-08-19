let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiple = document.getElementById('multiple');
let divide = document.getElementById('divide');

const buttons = document.querySelectorAll('.btn');

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

buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(`${button.id}`);
    }
)})
