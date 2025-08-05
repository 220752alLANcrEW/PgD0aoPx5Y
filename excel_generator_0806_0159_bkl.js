// 代码生成时间: 2025-08-06 01:59:44
 * Features:
 * - Create a dynamic Excel table in an HTML page.
 * - Allow users to specify the number of rows and columns.
 * - Error handling for invalid input.
 */

// Ensure jQuery is loaded before running this script.
"use strict";

$(document).ready(function() {

    // Function to create an Excel-like table
    function createExcelTable(rows, columns) {
        // Error handling for invalid input
        if (typeof rows !== 'number' || typeof columns !== 'number' || rows <= 0 || columns <= 0) {
            console.error('Invalid input: rows and columns must be positive numbers.');
            return;
        }

        // Start by creating the table element
        const table = $('<table>', {
            class: 'excel-table'
        });

        // Generate table headers
        const thead = $('<thead>');
        const headerRow = $('<tr>');
        for (let i = 1; i <= columns; i++) {
            headerRow.append($('<th>').text(`Column ${i}`));
        }
        thead.append(headerRow);
        table.append(thead);

        // Generate table body
        const tbody = $('<tbody>');
        for (let i = 1; i <= rows; i++) {
            const row = $('<tr>');
            for (let j = 1; j <= columns; j++) {
                row.append($('<td>').text(`Row ${i}, Cell ${j}`));
            }
            tbody.append(row);
        }
        table.append(tbody);

        // Append the table to the body
        $('body').append(table);
    }

    // Example usage: Create a table with 5 rows and 3 columns
    createExcelTable(5, 3);

    // You can also call createExcelTable() with different parameters to generate different table sizes.
    // For example:
    // createExcelTable(10, 4);

});