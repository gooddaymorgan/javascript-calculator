const calculator = {
    htmlString: '', //total expression
    stringNumber: '', //meant to represent current number bieng inputed
    currentInputNumber: 0, //takes user input for actual calculation
    calculationArray: [], //stores our final values to calculate
    canAddOperand: false, //if true add operator to string
    operatorArray: [], //stores our operators
};

let finalCalculation = 0; //for final calcultion

//updates our display
const display = document.getElementById('display')
const updateDisplay = () => display.innerHTML = calculator.htmlString;


//---------------------------------------------------->

//adds input from button press to our calculator object
function appendInput(number) {

    //adds our total input number to a string to be updated for our HTML
    calculator.htmlString += number.toString();
    calculator.stringNumber += number.toString();
    // adds our input number to our calculation value
    calculator.currentInputNumber = parseFloat(calculator.stringNumber); //expected output (ex 9999 or 1234) should continously add numbers to end
    calculator.canAddOperand = true; //we have number inputed so now we can have operand
    updateDisplay();

    console.log("This is my calculation value" + calculator.currentInputNumber);

}

// function appendDecimal() {

// }

// pushes our variables in calculator object to array to store for final calculation
function addArray() {

    calculator.calculationArray.push(calculator.currentInputNumber);
    calculator.currentInputNumber = 0;
    calculator.stringNumber = ''; //sets to zero to restart the next number into array

}

//adds operators to our calculator 
function setOperator(operator) {

    if (calculator.canAddOperand == true) {
        addArray(); //adds our number before operator into array for final calculation
        calculator.htmlString += operator.toString(); //adds operator input to our HTML
        calculator.operatorArray.push(operator.toString());
        calculator.canAddOperand = false; //sets operand to false to show that we have an operand in the string and cannot add another one until it is resolved
        console.log("This is my array" + calculator.calculationArray + "this is my operator " + calculator.operatorArray)
    }

    updateDisplay();
}

//reset our values
function clearDisplay() {

    calculator.htmlString = '';
    calculator.stringNumber = '',
        calculator.currentInputNumber = 0,
        calculator.calculationArray = [];
    calculator.operatorArray = [];
    calculator.canAddOperand = false;
    updateDisplay();
}



function calculate() {

    //if no second number do not calculate
    // if (calculator.canAddOperand == true) {
    //     return
    // }

    finalCalculation = calculator.calculationArray[0] //add our array to variable at 0 spot so we can loop 
    addArray(); //makes sure our last number is added to array


    //loops through our number array and then add/subtracts/multi/divide based on which operand is in the array
    for (let i = 1; i < calculator.calculationArray.length; i++) {

        if (calculator.operatorArray[i - 1] == '+') {

            finalCalculation += calculator.calculationArray[i]

        }
        if (calculator.operatorArray[i - 1] == '-') {

            finalCalculation -= calculator.calculationArray[i]

        }
        if (calculator.operatorArray[i - 1] == '*') {

            finalCalculation *= calculator.calculationArray[i]

        }
        if (calculator.operatorArray[i - 1] == '/') {

            finalCalculation /= calculator.calculationArray[i]

        }

    }

    // updates our display
    function updateHistory() {

        let p = document.createElement("p");
        let history = document.getElementById("history");
        let text;

        // if we have two numbers in array to computate-- execute this 
        if (calculator.calculationArray.length > 2) {
            text = document.createTextNode(calculator.htmlString + "=" + finalCalculation); // add equals sign 
        }
        //Our array has under 2 numbers (plus a operator) -- execute this
        else {
            text = document.createTextNode(calculator.htmlString);
        }

        p.appendChild(text);
        history.insertBefore(p, history.children[0])
    }

    updateHistory();
    clearDisplay();

}