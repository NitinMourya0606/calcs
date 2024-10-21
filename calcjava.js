// Selecting necessary elements from the HTML
let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// Variables to store the input and result
let inputString = "";

// Add event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === 'AC') {
            // Clear the input box
            inputString = "";
            inputBox.value = inputString;
        } 
        else if (buttonText === 'DEL') {
            // Remove the last character from the input
            inputString = inputString.slice(0, -1);
            inputBox.value = inputString;
        } 
        else if (buttonText === '=') {
            try {
                // Evaluate the input expression and display the result
                inputString = eval(inputString).toString();
            } catch (error) {
                inputString = "Error";
            }
            inputBox.value = inputString;
        } 
        else {
            // Add the clicked button's value to the input string
            inputString += buttonText;
            inputBox.value = inputString;
        }
    });
});
