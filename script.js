const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '0';
        } else if (value === '=') {
            if (previousInput && currentInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
