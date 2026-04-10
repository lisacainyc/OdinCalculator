let a;
let operator;
let b;

const clickedButton = document.querySelector(".buttons");
const clickedOperator = document.querySelector(".operator");
const numberDisplay = document.querySelector(".display");

clickedButton.addEventListener('click', (event) => {
    if (event.target.classList.contains('number') && !a){
        a = event.target.textContent;
    } else if (event.target.classList.contains('number')) {
        b = event.target.textContent;
    } else if (event.target.classList.contains('operator')){
        operator = event.target.textContent;
    }
    console.log(a,b, operator);
});

function updateDisplay(result){

};

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
    else if (operator === "*"){
        return multiply(a,b);
    }
    else if (operator === "/"){
        return divide(a,b);
    };
    };