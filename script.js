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
const numPad = document.querySelector(".numberBtns");
const operatorPad = document.querySelector(".operatorPad");
const equalsBtn = document.querySelector(".equals");

//to clear everything from screenDigits class element when c btn is clicked
cBtn.addEventListener('click', clearScreen);
cBtn.addEventListener('click', initializeCalc);

// event listener to call function calculate when equals button is clicked
equalsBtn.addEventListener('click', calculate);

//store digits in a variable when a button is clicked
let numberOne = "";
let numberTwo = "";
let result; //to store the value of the result
numPad.addEventListener('click', digitsSelected);

//variable to store operator which is clicked
let operator = false;
operatorPad.addEventListener('click', operatorSelected);

function initializeCalc () {
    //to remove numbers selected, operator selected and calculated content from the variables
    numberOne = "";
    numberTwo = "";
    operator = false;
    result = 0;
}

//remove everything from screenDigits class
function clearScreen () {
    screenDigits.textContent = "";
}

//to store clicked digit in a variable
function digitsSelected (e) {
    if (result) {
        clearScreen();
        initializeCalc();
    }
    if (Array.from(e.target.classList).includes("number")) {
        if(operator === false) {
            numberOne += e.target.textContent;
            //? console.log(typeof numberOne +  " " + numberOne);
        } else if (operator != false) {
            numberOne = Number(numberOne); //converted into number type for performing the operation
            //? console.log(typeof numberOne + " " + numberOne);
            //store the second number after the selection of operator
            numberTwo += e.target.textContent;
        }
    }
}
// unicode to ASCII values ---->
// divide is 247
// multiply is 215
// plus is 43
// minus is 8722
// equals is 61
// operator.codePointAt(0) //to convert unicode text to ASCII

//to store clicked operator in a variable
function operatorSelected (e) {
    if (numberOne == "") {
        return;
    }
    if(Array.from(e.target.classList).includes("operator")) {
        operator = "";
        operator = e.target.textContent;        
    }
}

//function to calculate and return result after the equals button is clicked
function calculate (e) {
    if (numberTwo === "") {
        console.log("no second operand");
        return;
    }
    if (Array.from(e.target.classList).includes("equals")) {
        numberTwo = Number(numberTwo); //to convert numberTwo string to number type for calculation
        switch (operator.codePointAt(0)) {
            case 43:
                result = numberOne + numberTwo;
                break;
            case 8722:
                result = numberOne - numberTwo;
                break;
            case 215:
                result = numberOne * numberTwo;
                break;
            case 247:
                result = numberOne / numberTwo;
                break;
            default:
                break;
        }
        operator = false;
        console.log(result);
        return result;
    }
}