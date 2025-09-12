// 代码生成时间: 2025-09-12 15:36:13
 * and is well documented for maintainability and extensibility.
 */

$(document).ready(function() {

  /**
   * Generate a random integer between two values
   * @param {number} min - The minimum value
   * @param {number} max - The maximum value
   * @returns {number} A random integer between min and max
   */
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Generate a random string of a specified length
   * @param {number} length - The length of the string
   * @returns {string} A random string
   */
  function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(getRandomInt(0, charactersLength - 1));
    }
    return result;
  }

  /**
   * Generate random test data
   * @param {number} count - The number of data points to generate
   * @returns {Array} An array of test data objects
   */
  function generateTestData(count) {
    try {
      // Input validation
      if (count < 1 || !Number.isInteger(count)) {
        throw new Error('Invalid count. Please provide a positive integer.');
      }

      const testData = [];
      for (let i = 0; i < count; i++) {
        testData.push({
          id: getRandomInt(1, 1000),
          name: getRandomString(10),
          email: getRandomString(10) + '@example.com'
        });
      }

      return testData;
    } catch (error) {
      console.error('Error generating test data:', error.message);
      return [];
    }
  }

  /**
   * Display the generated test data in the console
   * and on the web page
   */
  function displayTestData() {
    const testDataCount = 10; // Default number of data points
    const testData = generateTestData(testDataCount);

    // Log to console
    console.log('Generated Test Data:', testData);

    // Display on web page
    const resultsElement = $('#results');
    resultsElement.empty(); // Clear existing results
    testData.forEach(data => {
      resultsElement.append(`
        <div class='test-data-item'>
          <strong>ID:</strong> ${data.id}<br>
          <strong>Name:</strong> ${data.name}<br>
          <strong>Email:</strong> ${data.email}
        </div>
      `);
    });
  }

  // Call displayTestData when the document is ready
  displayTestData();

});