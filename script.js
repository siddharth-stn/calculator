const numKeys = document.querySelector(".numKeys");
const display = document.querySelector(".display");
const operatorKeys = document.querySelector(".operators");

let result = "";
let num1 = "";
let num2 = "";
let operator = "";
let equalPressed = false;

function reset () {
    result = "";
    num1 = "";
    num2 = "";
    operator = ""; 
}

display.textContent = "";

let add = (num1, num2) => {
    return num1 + num2;
}

let subtract = (num1, num2) => {
    return num1 - num2;
}

let multiply = (num1, num2) => {
    return num1 * num2;
}

let divide = (num1, num2) => {
    return num1 / num2;
}

numKeys.addEventListener('click', (event) => {
    if (event.target.id == "clear") {
        display.textContent = "";
        operator = "";
        result = "";
        num1 = "";
        num2 = "";
    } else if (event.target.id == "equals") {
        if (equalPressed == false) {
            num2 = Number(display.textContent);
            switch (true) {
                case operator == "plus":
                    result = add(num1, num2);
                    display.textContent = result;
                    break;
                case operator == "minus":
                    result = subtract(num1, num2);
                    display.textContent = result;
                    break;
                case operator == "multiply":
                    result = multiply(num1, num2);
                    display.textContent = result;
                    break;
                case operator == "divide":
                    result = divide(num1, num2);
                    display.textContent = result;
                    break;
                default:
                    break;
            }
            reset();
        } else {
            display.textContent = result;
            equalPressed = false;
            reset();
        }
    } else {
        display.textContent += event.target.textContent;
    }
});

operatorKeys.addEventListener('click', (event) => {
   if (operator) {
    switch (true) {
        case operator == "plus":
            num2 = Number(display.textContent);
            result = add(num1, num2);
            num1 = Number(result);
            display.textContent = "";
            operator = event.target.id;
            break;
        case operator == "minus":
            num2 = Number(display.textContent);
            result = subtract(num1, num2);
            num1 = Number(result);
            display.textContent = "";
            operator = event.target.id;
            break;
        case operator == "multiply":
            num2 = Number(display.textContent);
            result = multiply(num1, num2);
            num1 = Number(result);
            display.textContent = "";
            operator = event.target.id;
            break;
        case operator == "divide":
            num2 = Number(display.textContent);
            result = divide(num1, num2);
            num1 = Number(result);
            display.textContent = "";
            operator = event.target.id;
            break;
    
        default:
            break;
    }
   } else {  
        switch (event.target.id) {
            case "plus":
                operator = "plus";
                num1 = Number(display.textContent);
                display.textContent = "";
                break;
            case "minus":
                operator = "minus";
                num1 = Number(display.textContent);
                display.textContent = "";
                break;
            case "multiply":
                operator = "multiply";
                num1 = Number(display.textContent);
                display.textContent = "";
                break;
            case "divide":
                operator = "divide";
                num1 = Number(display.textContent);
                display.textContent = "";
                break;
        
            default:
                break;
        }
    }
});
