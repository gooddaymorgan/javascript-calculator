//create object
//changes based on input 

const display = document.getElementById('display')

const calculator = {
    displayValue: '',  //default string value in calculator bar displayed is 0
    calculationValue: 0,
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

//updates our display
const updateDisplay = () => display.innerHTML = calculator.displayValue;

function appendInput(number) {

    //adds value from caculation to HTML display
    //creates visual reprsentation of math equation?? I think that's how you word it
    calculator.displayValue += number.toString();

    //creates display into first number in equation 
    calculator.calculationValue = parseInt(calculator.displayValue);

    updateDisplay();
    console.log(calculator.calculationValue);

}


function clearDisplay() {
    //reset our values
    calculator.displayValue = '';
    calculator.calculationValue = 0,

    updateDisplay();
}