//create object
//changes based on input 

const display = document.getElementById('display')

const calculator = {
    displayValue: '0',  //default string value in calculator bar displayed is 0
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

console.log("Before" + calculator.displayValue);


const updateDisplay = (a) => display.innerHTML = calculator.displayValue;

function appendInput(a) {
    calculator.displayValue += a.toString();
    updateDisplay();
    console.log(calculator.displayValue);
}
