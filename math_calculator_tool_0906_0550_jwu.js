// 代码生成时间: 2025-09-06 05:50:30
$(document).ready(function() {

    // Function to add two numbers
    function add(a, b) {
        return a + b;
    }

    // Function to subtract two numbers
    function subtract(a, b) {
        return a - b;
    }

    // Function to multiply two numbers
    function multiply(a, b) {
        return a * b;
    }

    // Function to divide two numbers
    function divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }

    // Function to handle mathematical operations
    function handleMathOperation(operation, num1, num2) {
        try {
            switch (operation) {
                case 'add':
                    return add(num1, num2);
                case 'subtract':
                    return subtract(num1, num2);
                case 'multiply':
                    return multiply(num1, num2);
                case 'divide':
                    return divide(num1, num2);
                default:
                    throw new Error('Invalid operation');
            }
        } catch (error) {
            return error.message;
        }
    }

    // Attach click event to the buttons for each mathematical operation
    $('#add-btn').click(function() {
        displayResult(handleMathOperation('add', $('#num1').val(), $('#num2').val()));
    });
    $('#subtract-btn').click(function() {
        displayResult(handleMathOperation('subtract', $('#num1').val(), $('#num2').val()));
    });
    $('#multiply-btn').click(function() {
        displayResult(handleMathOperation('multiply', $('#num1').val(), $('#num2').val()));
    });
    $('#divide-btn').click(function() {
        displayResult(handleMathOperation('divide', $('#num1').val(), $('#num2').val()));
    });

    // Function to display the result in the result div
    function displayResult(result) {
        $('#result').text(result);
    }

    // Helper function to clear the input fields and result div
    function clearFields() {
        $('#num1').val('');
        $('#num2').val('');
        $('#result').text('');
    }

    // Attach click event to the clear button
    $('#clear-btn').click(clearFields);

    // Attach click event to the reset button
    $('#reset-btn').click(function() {
        clearFields();
        $('#num1').val('0');
        $('#num2').val('0');
    });

});
