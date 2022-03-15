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
        numberTwo = "";
        result = 0;
    }
    if(operator === false) {
        if (!(Array.from(e.target.classList).includes("negate")) &&
        (!(Array.from(e.target.classList).includes("dot")))) {
            numberOne += e.target.textContent;
        }
        if (Array.from(e.target.classList).includes("negate") && numberOne != "") {
            numberOne = -1 * numberOne;
        }
        if ((Array.from(e.target.classList).includes("dot"))) {
            numberOne += ".";
        }
        if (numberOne.length >= 2 && numberOne[0] == 0 && (!numberOne.includes("."))){
            numberOne = numberOne.substring(1); //to remove zero from the start of the number
        }
        screenDigits.textContent = numberOne;
    } else if (operator != false) {
        numberOne = Number(numberOne); //converted into number type for performing the operation
        //store the second number after the selection of operator
        if (!(Array.from(e.target.classList).includes("negate"))  &&
        (!(Array.from(e.target.classList).includes("dot")))) {
            numberTwo += e.target.textContent;
        }
        if (Array.from(e.target.classList).includes("negate") && numberTwo != "") {
            numberTwo = -1 * numberTwo;
        }

        if ((Array.from(e.target.classList).includes("dot"))) {
            numberTwo += ".";
        }
        if (numberTwo != "") {
            if (numberTwo.length >= 2 && numberTwo[0] == 0 && 
                (!(numberTwo.toString().includes(".")))){
                numberTwo = numberTwo.substring(1); //remove 0 from the start of non decimal numberr
            }
            screenDigits.textContent = numberTwo;
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

    if (operator != false) {
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
numberOne = result;
numberTwo = 0;
    } 

    if(Array.from(e.target.classList).includes("operator")) {
        operator = "";
        operator = e.target.textContent;
        if (operator.codePointAt(0) == 215) {
            screenDigits.textContent = "*"
        } else {
            screenDigits.textContent = operator;        
        }
    }
}

//function to calculate and return result after the equals button is clicked
function calculate (e) {
    if (numberTwo === "") {
        return;
    }
    if (Array.from(e.target.classList).includes("equals") && operator != false) {
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
        result = result.toString();
        if (result.length > 15) {
            result = Number(result).toFixed(2).toString();
        }
        screenDigits.textContent = result;
        numberOne = result;
        return result;
    }
}

// have to work on the logic of displaying and calculating very large numbers
