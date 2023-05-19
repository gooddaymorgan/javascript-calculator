//create object
//changes based on input 

const display = document.getElementById('display')

const calculator = {
    displayValue: '',  //default string value in calculator bar displayed is 0
    calculationValue: 0,
    calculationArray: [],
    firstOperand: null,
    operatorArray: [],
};

//updates our display
const updateDisplay = () => display.innerHTML = calculator.displayValue;

function appendInput(number) {

    //adds value from caculation to HTML display
    //creates visual reprsentation of math equation?? I think that's how you word it
    calculator.displayValue += number.toString();

    //creates display into first number in equation 
    calculator.calculationValue = parseFloat(calculator.displayValue);

    updateDisplay();
    console.log("This is my calculation value" + calculator.calculationValue );

}
function setOperator(operator) {

    //if we don't have operator in the front append operator to display value & push final number in array to be calculated
    if (calculator.firstOperand == null) {

        value = calculator.calculationValue;
        calculator.calculationArray.push(value); //ERROR RETURNS undefined??
        calculator.displayValue += operator.toString();
        calculator.firstOperand = true;
    }

    console.log("This is my array" + calculator.calculationArray)
    updateDisplay();
}

function clearDisplay() {
    //reset our values
    calculator.displayValue = '';
    calculator.calculationValue = 0,
    calculator.calculationArray = [];
    calculator.firstOperand = null;

    updateDisplay();
}

function calculate() {

    console.log(calculator.displayValue)

    finish = parseInt(calculator.displayValue)

    console.log(finish)
    updateDisplay();
}