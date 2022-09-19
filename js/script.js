//create global variable globalValue1 to store first number
let globalValue1 = "";
//create global variable globalValue2 to store second number
let globalValue2 = "";

function add(value1, value2) {
    //return value1 + value2
    return +value1 + +value2;
}

function subtract(value1, value2){
    //return value1 - value2
    return value1 - value2;
}

function multiply(value1, value2) {
    //return value1 * value2
    return value1 * value2;
}

function divide(value1, value2) {
    //return value1 / value2
    return value1 / value2;
}

function operate(operator, value1, value2) {
    // return value1 (operator) value2
    //ex if operator = +, return value1 + value2
    switch (true) {
        case (operator.trim() === "+"):
            return add(value1, value2);
        case (operator.trim() === "-"):
            return subtract(value1, value2);
        case (operator.trim() === "*"):
            return multiply(value1, value2);
        case (operator.trim() === "/"):
            return divide(value1, value2);
    }
}

function displayNumber() {
    //get and store "display" div in display variable
    const display = document.querySelector(".display");
    //append text context of button (which is a number) to globalValue1
    globalValue1 += this.textContent;
    //append text content of button (which is a number) to current text content
    //of display
    display.textContent += this.textContent;
}

function clearDisplay() {
    //get and store "display" div in display variable
    const display = document.querySelector(".display");
    //set display textContent to empty string
    display.textContent = "";
}

function displayOperator() {
    //get and store "display" div in display variable
    const display = document.querySelector(".display");
    //append text content of button (which is a operator) to current text content
    //of display
    display.textContent += this.textContent;
}
function generateInputButtons() {
    //use loop to generate button from 0 to 9 digit
    for (let i = 0; i < 10; i++) {
        const button = document.createElement("button");
        //assign button text content from 0 to 0 digit
        button.textContent = i;
        //add on click event listener to button to display number clicked on display
        button.addEventListener("click", displayNumber);
        //append button to "input-container" div
        document.querySelector(".input-container").appendChild(button);
    }
    //generate button for each function defined
    

    const addButton = document.createElement("button");
    const subtractButton = document.createElement("button");
    const multiplyButton = document.createElement("button");
    const divideButton = document.createElement("button");
    const operateButton = document.createElement("button");

    //assign button text content to functions defined
    addButton.textContent = "+";
    subtractButton.textContent = "-";
    multiplyButton.textContent = "*";
    divideButton.textContent = "/";
    operateButton.textContent = "=";

    //add event listener to operator buttons that display operator 
    addButton.addEventListener("click", displayOperator);
    subtractButton.addEventListener("click", displayOperator);
    multiplyButton.addEventListener("click", displayOperator);
    divideButton.addEventListener("click", displayOperator);
    

    //append buttons to "input-container" div
    const inputContainer = document.querySelector(".input-container");
    inputContainer.appendChild(addButton);
    inputContainer.appendChild(subtractButton);
    inputContainer.appendChild(multiplyButton);
    inputContainer.appendChild(divideButton);
    inputContainer.appendChild(operateButton);
}

function addClearButton() {
    //create clear button and store it in variable "clearButton"
    const clearButton = document.createElement("button");
    //set text content of clearButton to "clear"
    clearButton.textContent = "clear";
    //add click event listener that clears all display content
    clearButton.addEventListener("click", clearDisplay);
    //append clearButton to "input-container" div
    document.querySelector(".input-container").appendChild(clearButton);
}

generateInputButtons();
addClearButton();