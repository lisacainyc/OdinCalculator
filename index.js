let a;
let operator;
let b;

const clickedButton = document.querySelector(".buttons");
const clickedOperator = document.querySelector(".operator");
const numberDisplay = document.querySelector(".display");
const computeEquation = document.querySelector(".equals");
const clearCalculator = document.querySelector(".AC");

function updateDisplay(text){
    numberDisplay.textContent = "";
    numberDisplay.textContent = text;
};

clickedButton.addEventListener('click', (event) => {
    let selected = event.target.textContent;
    if (event.target.classList.contains('number') && !a){
        a = +selected;
        updateDisplay(selected);
    } else if (event.target.classList.contains('number')) {
        b = +selected;
        updateDisplay(selected);
    } else if (event.target.classList.contains('operator')){
        operator = selected;
        updateDisplay(selected);
    }
});

function add(a, b){
    return a+b;
    a = undefined;
    b = undefined;
};

function subtract(a, b){
    return a-b;
    a = undefined;
    b = undefined;
};

function multiply(a, b){
    return a*b;
    a = undefined;
    b = undefined;
};

function divide(a, b){
    return a / b;
    a = undefined;
    b = undefined;
};

function operate(a, b, operator){
    if (operator === "+"){
        return add(a,b);
    }
    else if (operator === "-"){
        return subtract(a,b);
    }
    else if (operator === "x"){
        return multiply(a,b);
    }
    else if (operator === "÷"){
        return divide(a,b);
    };
    };

computeEquation.addEventListener('click', () => {
    let result = operate(a, b, operator);
    numberDisplay.textContent = result;
});

clearCalculator.addEventListener('click', () => {
    numberDisplay.textContent = "0";
    a = undefined;
    b = undefined;
    operator = undefined;
});