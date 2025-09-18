// 代码生成时间: 2025-09-18 18:38:21
jQuery(document).ready(function($) {

  // MathCalculatorTool class definition
  class MathCalculatorTool {
    // Constructor
    constructor() {
      this.operators = ['add', 'subtract', 'multiply', 'divide'];
    }

    // Perform addition
    add(a, b) {
      return a + b;
    }

    // Perform subtraction
    subtract(a, b) {
      return a - b;
    }

    // Perform multiplication
    multiply(a, b) {
      return a * b;
    }

    // Perform division
    divide(a, b) {
      if (b === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      return a / b;
    }

    // Get available operators
    getOperators() {
      return this.operators;
    }
  }

  // Create an instance of MathCalculatorTool
  const calculator = new MathCalculatorTool();

  // Event handler for clicking on an operator button
  function handleOperatorClick(operator, a, b) {
    try {
      let result;
      switch (operator) {
        case 'add':
          result = calculator.add(a, b);
          break;
        case 'subtract':
          result = calculator.subtract(a, b);
          break;
        case 'multiply':
          result = calculator.multiply(a, b);
          break;
        case 'divide':
          result = calculator.divide(a, b);
          break;
        default:
          throw new Error('Invalid operator.');
      }
      // Display result in the result box
      $('#result').text(result);
    } catch (error) {
      // Handle errors, such as division by zero
      $('#result').text('Error: ' + error.message);
    }
  }

  // Event binding for each operator button
  calculator.getOperators().forEach(op => {
    $('#btn-' + op).on('click', function() {
      const a = parseFloat($('#num1').val()) || 0;
      const b = parseFloat($('#num2').val()) || 0;
      handleOperatorClick(op, a, b);
    });
  });

});