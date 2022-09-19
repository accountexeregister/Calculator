//create global variable globalValue1 to store first number
let globalValue1 = "0";
//create global variable globalValue2 to store second number
let globalValue2 = "";

//create global variable globalOperator to store operator
let globalOperator = "";

//create global variable equalsPressed to store whether equals button has been pressed
//set it to true
let equalsPressed = true;

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
    //if equalsPressed is true, clear everything and restart
    if (equalsPressed) {
        clearEverything();
        //set equalsPressed to false
        equalsPressed = false;
        //clear display
        clearDisplay();
    }
    //get and store "display" div in display variable
    const display = document.querySelector(".display");
    //append text context of button (which is a number) to globalValue1 if there is no operator
    //else append it to globalValue2
    if ((globalOperator === "")) {
        globalValue1 += this.textContent;
    } else {
        globalValue2 += this.textContent;
    }

    //if globalValue2 is not empty, clear display
    if (globalValue2 !== "") {
        clearDisplay();
    }
     //append text content of button (which is a number) to current text content
    display.textContent += this.textContent;
    
}

function clearDisplay() {
    //get and store "display" div in display variable
    const display = document.querySelector(".display");
    //set display textContent to empty string
    display.textContent = "";
}

function clearEverything() {
    //reset globalValue1, globalValue2, globalOperator and equalsPressed to initial values
    globalValue1 = "0";
    globalValue2 = "";
    globalOperator = "";
    equalsPressed = true;
    //set display text to initial value (0)
    document.querySelector(".display").textContent = globalValue1;
}

function displayOperator() {
    //if equalsPressed is true, assign it false
    if (equalsPressed) {
        equalsPressed = false;
    }
    //get and store "display" div in display variable
    const display = document.querySelector(".display");
    //if globalOperator is not empty, execute displayOperation()
    if (globalOperator !== "") {
        displayOperation();
    }
    //append text content of button (which is a operator) to globalOperator
    globalOperator = this.textContent;
    
    /*removed
    //append text content of button (which is a operator) to current text content
    //of display
    display.textContent += " " + this.textContent + " ";
    */

}

function roundOff(num) {
    //multiply the num by 10000000000
    num = num * 10000000000;
    //round the number
    num = Math.round(num);
    //return the number divided by 10000000000
    return num / 10000000000;
}
function displayOperation() {
    //if either globalOperator, globalValue1 or globalValue2 is empty
    //return without doing anything
    if (!globalOperator || !globalValue1) {
        return;
    }
    //initialise result variable
    let result;
    //if globalValue2 is empty, execute operate(globalOperator, globalValue1, globalValue1)
    //and store it in variable result
    if (!globalValue2) {
        result = operate(globalOperator, +globalValue1, +globalValue1);
    } else {
    //else executes operate(globalOperator, globalValue1, globalValue2)
    //and store it in variable result
        result = operate(globalOperator, +globalValue1, +globalValue2);
    }
    //clear display 
    clearDisplay();
    //if result is infinity (result obtained by dividing by zero)
    //display LOL
    if (result === Infinity) {
        document.querySelector(".display").textContent = "LOL";
    } //else set the text content of display to result
    else {
        //round off the result
        result = roundOff(result);
        document.querySelector(".display").textContent = result;
    }
    //set globalOperator back to empty string
    globalOperator = "";
    //set isNotFirstOperation to true
    isNotFirstOperation = true;
    //set globalValue1 to result
    globalValue1 = result;
    //set globalValue2 back to empty
    globalValue2 = "";

}

function displayOperationEquals() {
    //executes displayOperation
    displayOperation();
    //set equalsPressed to true
    equalsPressed = true;
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

    //generate "." button  and store it in variable dotButton
    const dotButton = document.createElement("button");
    //add on click event listener to . button to add decimal and display number
    dotButton.addEventListener("click", displayNumber)
    //append "." button to "input-container" div
    document.querySelector(".input-container").appendChild(dotButton);
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
    
    //add event listener to "=" button that display operation
    operateButton.addEventListener("click", displayOperationEquals);

    //append buttons to "input-container" div
    const inputContainer = document.querySelector(".input-container");
    inputContainer.appendChild(addButton);
    inputContainer.appendChild(subtractButton);
    inputContainer.appendChild(multiplyButton);
    inputContainer.appendChild(divideButton);
    inputContainer.appendChild(operateButton);

    //set initial display text content to initial globalValue1 (0)
    document.querySelector(".display").textContent = globalValue1;
}

function addClearButton() {
    //create clear button and store it in variable "clearButton"
    const clearButton = document.createElement("button");
    //set text content of clearButton to "clear"
    clearButton.textContent = "clear";
    //add click event listener that clears all display content
    clearButton.addEventListener("click", clearEverything);
    //append clearButton to "input-container" div
    document.querySelector(".input-container").appendChild(clearButton);
}

generateInputButtons();
addClearButton();