// 代码生成时间: 2025-09-01 00:38:36
 * Features:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division
 * - Error handling for division by zero
 * - User-friendly error messages
 * - Clear structure for easy maintenance and expansion
 */

$(document).ready(function() {
    // Function to perform addition
    function add(x, y) {
        return x + y;
    }

    // Function to perform subtraction
    function subtract(x, y) {
        return x - y;
    }

    // Function to perform multiplication
    function multiply(x, y) {
        return x * y;
    }

    // Function to perform division
    function divide(x, y) {
        // Error handling for division by zero
        if (y === 0) {
            return 'Error: Division by zero is not allowed.';
        }
        return x / y;
    }

    // Event listener for the calculate button
    $('#calculate-button').on('click', function() {
        // Get user input from the input fields
        let num1 = parseFloat($('#num1').val());
        let num2 = parseFloat($('#num2').val());
        let operation = $('#operation').val();

        // Perform the selected operation
        let result;
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                if (typeof result === 'string') {
                    // Display error message if division by zero
                    $('#result').text(result);
                    return;
                }
                break;
            default:
                result = 'Error: Invalid operation selected.';
                break;
        }

        // Display the result in the result field
        $('#result').text(result);
    });
});