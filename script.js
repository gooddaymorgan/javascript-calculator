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

    //up one bc we do not want to calculate our first number
    finalCalculation = calculator.calculationArray[0]
    addArray();


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

    function updateHistory() {

        //updates our display
        // const display = document.getElementById('display')
        // const updateDisplay = () => display.innerHTML = calculator.htmlString;
        

        let p = document.createElement("p");
        let text = document.createTextNode(calculator.htmlString + "=" + finalCalculation);
        p.appendChild(text);
        let history = document.getElementById("history");
        history.insertBefore(p, history.children[0])

    }

    updateHistory();
    clearDisplay();

}