// 代码生成时间: 2025-09-10 05:16:13
// Function to generate random data
function generateRandomData() {
    // Define the data structure
    const data = {
        id: generateRandomId(),
        name: generateRandomName(),
        email: generateRandomEmail(),
        age: generateRandomAge()
    };

    return data;
}

// Generate a random ID
function generateRandomId() {
    return Math.floor(Math.random() * 10000) + 1; // Generate a number between 1 and 10000
}

// Generate a random name
function generateRandomName() {
    const firstNames = ['John', 'Jane', 'Doe']; // Add more names as needed
    const lastNames = ['Smith', 'Doe', 'Johnson']; // Add more names as needed
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

// Generate a random email
function generateRandomEmail() {
    const domains = ['@example.com', '@sample.com', '@test.com']; // Add more domains as needed
    return `${generateRandomName().toLowerCase().replace(' ', '')}+${generateRandomId()}${domains[Math.floor(Math.random() * domains.length)]}`;
}

// Generate a random age
function generateRandomAge() {
    return Math.floor(Math.random() * 100) + 1; // Generate a number between 1 and 100
}

// Function to handle errors
function handleError(error) {
    console.error('An error occurred:', error);
}

// Function to generate and display test data
function generateAndDisplayTestData() {
    try {
        const testData = generateRandomData();
        console.log('Generated Test Data:', testData);
        // Display the data in the HTML element with the ID 'test-data'
        if ($('#test-data').length) {
            $('#test-data').html(JSON.stringify(testData, null, 2));
        } else {
            throw new Error('Element with ID test-data not found');
        }
    } catch (error) {
        handleError(error);
    }
}

// Attach the click event listener to the button with the ID 'generate-data'
$('#generate-data').on('click', generateAndDisplayTestData);
