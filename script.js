//create object
//changes based on input 

const display = document.getElementById('display')

const calculator = {
    displayValue: '0',  //default string value in calculator bar displayed is 0
    calculationValue: 0,
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

const updateDisplay = (number) => display.innerHTML = calculator.displayValue;

function appendInput(number) {

    //adds value from caculation to HTML display
    //creates visual reprsentation of math equation?? I think that's how you word it
    calculator.displayValue += number.toString();

    //calculation
    calculationValue = Number(calculator.displayValue);

    updateDisplay();
    console.log(calculator.calculationValue);
}



// function submitCalculation (a) {

// }