let a;
let operator;
let b;
let result;
let tempNum = "";

const clickedButton = document.querySelector(".buttons");
const clickedNumber = document.querySelectorAll(".number").forEach
    (number => number.addEventListener('click', (event) => {
    let selected = event.target.textContent;
    buildNumber(selected);
    }));
const clickedOperator = document.querySelectorAll(".operator").forEach
    (operatorButton => operatorButton.addEventListener('click', (event) => {
    let selectedOperator = event.target.textContent;
    if (!a){
        a = tempNum;
        tempNum = "";
        operator = selectedOperator;
    }else if (a && !b){
        if (!tempNum){
            operator = selectedOperator;
        } else if (tempNum){
            b = tempNum;
            result = operate(a, b, operator);
            updateDisplay(result);
            a = result;
            b = undefined;
            tempNum = "";
            operator = selectedOperator;}
    }
    }));
const numberDisplay = document.querySelector(".display");
const computeEquation = document.querySelector(".equals");
const clearCalculator = document.querySelector(".AC");


function updateDisplay(text){
    numberDisplay.textContent = "";
    numberDisplay.textContent = text;
};

clickedButton.addEventListener('click', () => {
    console.log ("a = " + a + ",b = " + b + ",operator = " + operator + ",result = " + result);
});

function clearVariables(){
    a = undefined;
    b = undefined;
}

function storeVariables(number){
    if (!a){
        a = +number;
    }
    else if (!b){
        b = +number;
    }
};

function buildNumber(input){
    tempNum = tempNum + input;
    updateDisplay(tempNum);
    return tempNum;
}

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
        return add(+a,+b);
    }
    else if (operator === "-"){
        return subtract(+a,+b);
    }
    else if (operator === "x"){
        return multiply(+a,+b);
    }
    else if (operator === "÷"){
        return divide(+a,+b);
    };
    tempNum = "";
};

computeEquation.addEventListener('click', () => {
    b = tempNum;
    result = operate(a, b, operator);
    updateDisplay(result);
    a = result;
    b = undefined;
    operator = undefined;
    tempNum = "";
});

clearCalculator.addEventListener('click', () => {
    numberDisplay.textContent = "0";
    a = undefined;
    b = undefined;
    operator = undefined;
    tempNum = "";
    result = undefined;
});