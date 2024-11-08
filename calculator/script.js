// Getting the display element 
const display = document.getElementById('display');
let currentInput = ''; // Holds the current input as a string

// Function to update display
const updateDisplay = (input) => {
    display.textContent = input || '0';
};

// Function to clear the display
document.getElementById('all-clear').addEventListener('click', () => {
    currentInput = '';
    updateDisplay(currentInput);
});

// Function to handle DEL button functionality
document.getElementById('del').addEventListener('click', (e) => {
    e.stopPropagation();  // Prevents other button handlers from firing
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
});

// Function to handle button clicks (excluding 'DEL' and 'C')
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const value = button.textContent.trim();

        if (value === '=' && currentInput) {
            // Replace the symbols with valid JavaScript operators for calculation
            let inputToEvaluate = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
            try {
                currentInput = eval(inputToEvaluate).toString();
            } catch {
                currentInput = 'Error';
            }
        } else if (value !== 'C' && value !== 'DEL') {
            const lastChar = currentInput[currentInput.length - 1];
            if (['+', '-', '×', '÷', '%'].includes(lastChar) && ['+', '-', '×', '÷', '%'].includes(value)) {
                currentInput = currentInput.slice(0, -1) + value;
            } else {
                currentInput += value;
            }
        }
        updateDisplay(currentInput);
    });
});
