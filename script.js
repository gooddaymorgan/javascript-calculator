const calculator = {
    displayValue: '',  //takes user input as strings to display in HTML
    calculationValue: 0, //takes user input for actual calculation
    calculationArray: [], //stores our final values to calculate
    canAddOperand: false, //if true add operator to string
    operatorArray: [], //stores our operators
};

//updates our display
const display = document.getElementById('display')
const updateDisplay = () => display.innerHTML = calculator.displayValue;

//---------------------------------------------------->

//adds input from button press to our calculator object
function appendInput(number) {

    //adds our input number to a string to be updated for our HTML
    calculator.displayValue += number.toString();

    // adds our input number to our calculation value
    calculator.calculationValue = parseFloat(calculator.displayValue); //expected output (ex 9999 or 1234) should continously add numbers to end
    calculator.canAddOperand = true;
    //sets operand to false 
    updateDisplay();

    //console.log("This is my calculation value" + calculator.calculationValue );

    //TBA --- if has string? updated operand?
}

// pushes our variables in calculator object to array to store for final calculation
function addArray() {
    value = calculator.calculationValue;
    calculator.calculationArray.push(value);
}

//adds operators to our calculator 
function setOperator(operator) {

    if (calculator.canAddOperand == true) {
        addArray(); //adds our number before operator into array for final calculation
        calculator.displayValue += operator.toString(); //adds operator to our HTML
        calculator.canAddOperand = false; //sets operand to false to show that we have an operand in the string and cannot add another one until it is resolved
        console.log("This is my array" + calculator.calculationArray)
    }

    updateDisplay();
}

function clearDisplay() {
    //reset our values
    calculator.displayValue = '';
    calculator.calculationValue = 0,
    calculator.calculationArray = [];
    calculator.canAddOperand = false;
    updateDisplay();
}

function calculate() {
    console.log(finish)
    updateDisplay();
}