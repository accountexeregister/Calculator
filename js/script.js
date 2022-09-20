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

function inverseSign() {
    //if globalOperator is empty, inverse globalValue1
    if (globalOperator === "") {
        /* temporarily removed
        //if globalValue1 is empty, do nothing
        if (!globalValue1) {
            return;
        }
        */
        globalValue1 = -globalValue1;
    } else {
    //else inverse globalValue2
        
        /*temporarily removed
        //if globalValue2 is empty, do nothing
        if (!globalValue2) {
            return;
        }
        */

        globalValue2 = -globalValue2;
    }

    //set display text content to its inverse
    document.querySelector(".display").textContent = -(document.querySelector(".display").textContent) + "";

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

        /*removed temporarily
        //clear display
        clearDisplay();
        */
    }


    //get and store "display" div in display variable
    const display = document.querySelector(".display");
    //append text context of button (which is a number) to globalValue1 if there is no operator
    //else append it to globalValue2
    if ((globalOperator === "")) {
        //if text content of this is "." and globalValue1 already has "."
        //return without doing anything
        if (this.textContent === "." && globalValue1.includes(".")) {
            return;
        }
        globalValue1 += this.textContent;
    } else {
        //if text content of this is "." and globalValue2 already has "."
        //return without doing anything
        if (this.textContent === "." && globalValue2.includes(".")) {
            return;
        }
        //if globalValue1 equals globalValue2, clear display
        if (globalValue2 === globalValue1) {
            clearDisplay();
            globalValue2 = "";
        }
        globalValue2 += this.textContent;
    }

    //if globalValue2 is not empty and globalValue2 is not longer than 1 length, clear display
    if (globalValue2 !== "" && !(globalValue2.length > 1)) {
        clearDisplay();
    }
    //create and store display text + this text content in appendedText
    let appendedText = 0 + display.textContent + this.textContent;
    //display text with . if no leading zero
    if (appendedText.includes(".") && !(+appendedText + "").includes(".")) {
        display.textContent = +(appendedText) + ".";
    } else {
     //else append text content of button (which is a number) to current text content
    display.textContent = +(appendedText) + "";
    }
    
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

    //set globalValue2 = globalValue1
    globalValue2 = globalValue1;
    //append text content of button (which is a operator) to globalOperator
    globalOperator = this.textContent;
    
    /*removed
    //append text content of button (which is a operator) to current text content
    //of display
    display.textContent += " " + this.textContent + " ";
    */

}

function applyPercent() {
    //initialise num variable
    let num;
    //if globalOperator is empty, divide globalValue1 by 100
    if (globalOperator === "") {
        globalValue1 = globalValue1 / 100;
        globalValue1 = roundOff(globalValue1);
        //set num variable to hold globalValue1
        num = globalValue1;
    } else {
    //else inverse globalValue2
        globalValue2 = globalValue2 / 100;
        globalValue2 = roundOff(globalValue2);
        //set num variable to hold globalValue2
        num = globalValue2
    }

    //display the number after percent is applied
    document.querySelector(".display").textContent = num + "";
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
    /* temporarily removed
    //if globalValue2 is empty, execute operate(globalOperator, globalValue1, globalValue1)
    //and store it in variable result
    if (!globalValue2) {
        result = operate(globalOperator, +globalValue1, +globalValue1);
    } else {
    //else executes operate(globalOperator, globalValue1, globalValue2)
    //and store it in variable result
        result = operate(globalOperator, +globalValue1, +globalValue2);
    }
    */
    //executes operate(globalOperator, globalValue1, globalValue2)
    //and store it in variable result
        result = operate(globalOperator, +globalValue1, +globalValue2);
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


function backSpace() {
    //if equalsPressed
    if (equalsPressed) {
        //clear everything
        clearEverything();
        //set equalsPressed to false
        equalsPressed = false;
        //set display to display 0
        const display = document.querySelector(".display");
        display.textContent = globalValue1;
        return;
        
    }
    //store ".display" div in display variable
    const display = document.querySelector(".display");
    //if display text is 0, return without doing anything
    if (display.textContent.trim() === "0") {
        return;
    }
    //slice away the last digit of the display text 
    display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    //if display text is empty, set it to 0
    if (display.textContent === "") {
        display.textContent = 0;
    }
    //if globalOperator is empty, set globalValue1 to display text
    if (globalOperator === "") {
        globalValue1 = display.textContent;
    } else {
    //else set globalValue2 to display text
        globalValue2 = display.textContent;
    }
}

function resetCurrentNumber() {
     //if equalsPressed
     if (equalsPressed) {
        //clear everything
        clearEverything();
        //set equalsPressed to false
        equalsPressed = false;
        //set display to display 0
        const display = document.querySelector(".display");
        display.textContent = globalValue1;
        return;
        
    }
    //store ".display" div in display variable
    const display = document.querySelector(".display");
    //create variable resetNum;
    let resetNum;
    //if globalOperator is  empty, set globalValue1 = 0 and store globalValue1 in resetNum
    if (globalOperator === "") {
        globalValue1 = 0;
        resetNum = globalValue1;
    } else {
    //else set globalValue2 = 0 and store globalValue2 in resetNum
        globalValue2 = 0;
        resetNum = globalValue2;
    }
    display.textContent = resetNum + "";
}

function generateInputButtons() {
    //use loop to get button from 0 to 9 digit
    for (let i = 0; i < 10; i++) {
        const button = document.querySelector(".b" + i);
        //add on click event listener to button to display number clicked on display
        button.addEventListener("click", displayNumber);
    }

    //get "+/-" button and store it in inverseSignButton
    const inverseSignButton = document.querySelector(".inverse-sign");
    //add onclick event listener to inverseButton to inverse number
    inverseSignButton.addEventListener("click", inverseSign);

    //get "%" button and store it in applyPercentButton
    const applyPercentButton = document.querySelector(".apply-percent");
    //add onclick event listener to applyPercentButton to apply percent to number
    applyPercentButton.addEventListener("click", applyPercent);

    //get "UNDO" button and store it in backSpaceButton
    const backSpaceButton = document.querySelector(".undo");
    //add onclick event listener to backSpaceButton to backspace digit
    backSpaceButton.addEventListener("click", backSpace);

    //get "RESET NUM" button and store it in resetCurrentButton
    const resetCurrentButton = document.querySelector(".reset");
    //add onclick event listener to resetCurrentButton to reset current number
    resetCurrentButton.addEventListener("click", resetCurrentNumber);

    //get "." button  and store it in variable dotButton
    const dotButton = document.querySelector(".dot");
    //add on click event listener to . button to add decimal and display number
    dotButton.addEventListener("click", displayNumber)
   
    //get button for each function defined
    const addButton = document.querySelector(".add");
    const subtractButton = document.querySelector(".subtract");
    const multiplyButton = document.querySelector(".multiply");
    const divideButton = document.querySelector(".divide");
    const operateButton = document.querySelector(".operate");

    //add event listener to operator buttons that display operator 
    addButton.addEventListener("click", displayOperator);
    subtractButton.addEventListener("click", displayOperator);
    multiplyButton.addEventListener("click", displayOperator);
    divideButton.addEventListener("click", displayOperator);
    
    //add event listener to "=" button that display operation
    operateButton.addEventListener("click", displayOperationEquals);

    //set initial display text content to initial globalValue1 (0)
    document.querySelector(".display").textContent = globalValue1;
}

function addClearButton() {
    //get clear button and store it in variable "clearButton"
    const clearButton = document.querySelector(".clear");
    //add click event listener that clears all display content
    clearButton.addEventListener("click", clearEverything);
}

generateInputButtons();
addClearButton();