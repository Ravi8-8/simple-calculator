// Function to append the clicked button value to the display
function appendToDisplay(value) {
    document.getElementById('calc').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('calc').value = '';
}

// Function to calculate the result and display it
function calculateResult() {
    try {
        // Evaluate the expression in the display
        const result = eval(document.getElementById('calc').value);
        // Display the result
        document.getElementById('calc').value = result;
    } catch (error) {
        // If an error occurs during evaluation, display 'Error'
        document.getElementById('calc').value = 'Error';
    }
}
