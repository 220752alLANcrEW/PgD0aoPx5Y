// 代码生成时间: 2025-08-21 11:58:27
 * It uses JS and JQUERY to provide a user interface and perform the hashing.
 *
 * @author Your Name
 * @version 1.0
 * @date YYYY-MM-DD
 */

$(document).ready(function() {

  /**
   * Function to calculate hash value using CryptoJS
   *
   * @param {string} algorithm - The hashing algorithm to use.
   * @param {string} input - The input string to hash.
   * @returns {string} - The hash value of the input.
   */
  function calculateHash(algorithm, input) {
    try {
      // Check if CryptoJS algorithm is available
      if (typeof CryptoJS[algorithm] === 'undefined') {
        throw new Error('Hashing algorithm is not available.');
      }

      // Calculate hash using CryptoJS
      var hash = CryptoJS[algorithm](input).toString();
      return hash;
    } catch (error) {
      // Handle errors
      console.error('Error calculating hash:', error.message);
      return null;
    }
  }

  /**
   * Event handler for hash calculation button click
   *
   * @param {Event} event - The click event object.
   */
  $('#calculateHashButton').click(function(event) {
    event.preventDefault();

    // Get user input from the text field
    var input = $('#inputText').val().trim();
    if (input === '') {
      alert('Please enter some text to hash.');
      return;
    }

    // Get selected algorithm from the dropdown
    var algorithm = $('#algorithmSelect').val();

    // Calculate hash and display the result
    var hashValue = calculateHash(algorithm, input);
    if (hashValue) {
      $('#result').text(hashValue);
    }
  });

  /**
   * Populate the algorithm dropdown with available algorithms
   */
  function populateAlgorithms() {
    var algorithms = Object.keys(CryptoJS);
    var select = $('#algorithmSelect');

    algorithms.forEach(function(algorithm) {
      select.append($('<option></option>').val(algorithm).html(algorithm));
    });
  }

  // Initialize the algorithm dropdown
  populateAlgorithms();

});