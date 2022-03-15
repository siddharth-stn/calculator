function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2; 
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1/num2;
}

function operate (operator, num1, num2) {
    let answer;
    switch (operator) {
        case "add":
            answer = add (num1, num2);
            break;
        case "subtract": 
            answer = subtract (num1, num2);
            break;
        case "multiply": 
            answer = multiply (num1, num2);
            break;
        case "divide": 
            answer = divide (num1, num2);
            break;        
        default:
            break;
    }
    return answer;
}

//query screenDigits element and save its reference in a constant
const screenDigits = document.querySelector(".screenDigits");
const cBtn = document.querySelector(".cBtn");

//to clear everything from screenDigits class element when c btn is clicked
cBtn.addEventListener('click', clearScreen);

function clearScreen () {
    //remove everything from screenDigits class
    screenDigits.textContent = "";    
}