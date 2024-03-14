// Function to perform mathematical operations on two numbers
function performOperations() {
    // Prompt the user for two numbers
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return; // Exit the function if inputs are not valid
    }

    // Perform addition
    var sum = num1 + num2;
    alert("Sum: " + sum);

    // Perform subtraction
    var difference = num1 - num2;
    alert("Difference: " + difference);

    // Perform multiplication
    var product = num1 * num2;
    alert("Product: " + product);

    // Perform division
    if (num2 !== 0) {
        var quotient = num1 / num2;
        alert("Quotient: " + quotient);
    } else {
        alert("Cannot divide by zero.");
    }

    // Calculate the remainder
    var remainder = num1 % num2;
    alert("Remainder: " + remainder);

    // Calculate the average
    var average = (num1 + num2) / 2;
    alert("Average: " + average);

    // Find the maximum number
    var max = Math.max(num1, num2);
    alert("Maximum number: " + max);

    // Find the minimum number
    var min = Math.min(num1, num2);
    alert("Minimum number: " + min);
}

// Call the function to perform operations when the page loads
performOperations();
