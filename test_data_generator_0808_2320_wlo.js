// 代码生成时间: 2025-08-08 23:20:40
$(document).ready(function() {

    // Function to generate random string
    function generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // Function to generate random integer
    function generateRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate random float
    function generateRandomFloat(min, max, decimalPlaces) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var decPlaces = Math.pow(10, decimalPlaces);
        return Math.floor((Math.random() * (max - min + 1)) * decPlaces) / decPlaces;
    }

    // Function to generate random date
    function generateRandomDate(start, end) {
        start = new Date(start).getTime();
        end = new Date(end).getTime();
        return new Date(start + Math.random() * (end - start));
    }

    // Function to generate random test data
    function generateTestData() {
        try {
            // Generate random string data
            var randomString = generateRandomString(10);

            // Generate random integer data
            var randomInteger = generateRandomInteger(1, 100);

            // Generate random float data
            var randomFloat = generateRandomFloat(1.0, 100.0, 2);

            // Generate random date data
            var randomDate = generateRandomDate('1990-01-01', '2023-12-31');

            // Display generated data
            $('#testData').text('Random String: ' + randomString + '
' +
                                 'Random Integer: ' + randomInteger + '
' +
                                 'Random Float: ' + randomFloat + '
' +
                                 'Random Date: ' + randomDate.toISOString().split('T')[0]);
        } catch (error) {
            console.error('Error generating test data:', error);
        }
    }

    // Add button click event listener to generate test data
    $('#generateTestDataButton').click(generateTestData);

});