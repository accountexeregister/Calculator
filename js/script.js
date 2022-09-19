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

function generateInputButtons() {
    //use loop to generate button from 0 to 9 digit
    for (let i = 0; i < 10; i++) {
        const button = document.createElement("button");
        //assign button text content from 0 to 0 digit
        button.textContent = i;
        //append button to "input-container" div
        document.querySelector(".input-container").appendChild(button);
    }
    //generate button for each function defined
    //assign button text content to functions defined
    //append buttons to "input-container" div

    const addButton = document.createElement("button");
    const subtractButton = document.createElement("button");
    const multiplyButton = document.createElement("button");
    const divideButton = document.createElement("button");
    const operateButton = document.createElement("button");

    addButton.textContent = "add";
    subtractButton.textContent = "subtract";
    multiplyButton.textContent = "multiply";
    divideButton.textContent = "divide";
    operateButton.textContent = "operate";

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
    //append clearButton to "input-container" div
    document.querySelector(".input-container").appendChild(clearButton);
}

generateInputButtons();
addClearButton();