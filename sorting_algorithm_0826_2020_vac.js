// 代码生成时间: 2025-08-26 20:20:25
 * @returns {Array} - The sorted array
 */
function bubbleSort(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array.');
    }

    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

/**
 * Selection Sort Algorithm
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function selectionSort(arr) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array.');
    }

    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

/**
 * Test the sorting algorithms
 */
$(document).ready(function() {
    try {
        let arrayToSort = [64, 34, 25, 12, 22, 11, 90];
        console.log('Original array:', arrayToSort);

        // Perform bubble sort
        let sortedArray = bubbleSort(arrayToSort.slice()); // Use slice to clone the array
        console.log('Sorted array (Bubble Sort):', sortedArray);

        // Perform selection sort
        let selectionSortedArray = selectionSort(arrayToSort.slice()); // Use slice to clone the array
        console.log('Sorted array (Selection Sort):', selectionSortedArray);
    } catch (error) {
        console.error('Error:', error.message);
    }
});