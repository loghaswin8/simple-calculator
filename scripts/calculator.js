const display = document.getElementById('cal-display');

let currentInput = '';
let previousInput = '';
let operator = '';

function updateDisplay(value) {
    display.textContent = value;
    let showCurrentInput = currentInput;
    updateDisplay(previousInput + " " + operator + " " + showCurrentInput);
}

function handleNum(num) {
    currentInput += num;
    updateDisplay(currentInput);
}

function handleOperator(symbol){
    if(currentInput === ''){return;}
    if (previousInput !== ''){
        calculation();
    }
    operator += symbol;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay(previousInput + " " + operator);
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
}

function handleEqual() {
    if (currentInput === '' || previousInput === ''){return;}
    calculation();
}

function calculation() {
    let result ='';
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if(isNaN(prev) || isNaN(current)){return;}

    switch (operator){
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'x':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    previousInput = '';
    operator = '';
    updateDisplay(currentInput);
}


document.querySelector('.js-clear').addEventListener('click', clearDisplay);
document.querySelector('.js-equal').addEventListener('click', handleEqual);


//numbers Btn
document.querySelector('.js-one').addEventListener('click', () => handleNum('1'));
document.querySelector('.js-two').addEventListener('click', () => handleNum('2'));
document.querySelector('.js-three').addEventListener('click', () => handleNum('3'));
document.querySelector('.js-four').addEventListener('click', () => handleNum('4'));
document.querySelector('.js-five').addEventListener('click', () => handleNum('5'));
document.querySelector('.js-six').addEventListener('click', () => handleNum('6'));
document.querySelector('.js-seven').addEventListener('click', () => handleNum('7'));
document.querySelector('.js-eight').addEventListener('click', () => handleNum('8'));
document.querySelector('.js-nine').addEventListener('click', () => handleNum('9'));
document.querySelector('.js-zero').addEventListener('click', () => handleNum('0'));

//operator btn
document.querySelector('.js-module').addEventListener('click', () => handleOperator('%'));
document.querySelector('.js-division').addEventListener('click', () => handleOperator('/'));
document.querySelector('.js-multiply').addEventListener('click', () => handleOperator('x'));
document.querySelector('.js-add').addEventListener('click', () => handleOperator('+'));
document.querySelector('.js-subtract').addEventListener('click', () => handleOperator('-'));
