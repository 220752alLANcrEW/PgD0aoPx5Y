// 代码生成时间: 2025-09-23 07:02:10
$(document).ready(function() {
    "use strict";

    // Function to parse the log file
    function parseLogFile(logContent) {
        try {
            // Assuming logContent is a string containing the log file contents
            const lines = logContent.split('
');
            const parsedData = lines.map(line => {
                // Extract relevant information from each line
                // This is a placeholder for actual parsing logic
                // You can modify this to suit the specific log file format
                return {
                    timestamp: line.substring(0, 19),
                    level: line.substring(20, 25),
                    message: line.substring(26)
                };
            });

            displayParsedData(parsedData);
        } catch (error) {
            console.error('Error parsing log file:', error);
            alert('Failed to parse log file.');
        }
    }

    // Function to display parsed data in the DOM
    function displayParsedData(parsedData) {
        const logContainer = $('#logContainer');
        logContainer.empty(); // Clear previous content

        parsedData.forEach(data => {
            const logEntry = $('<div class="log-entry"></div>');
            logEntry.append($('<span class="timestamp">').text(data.timestamp));
            logEntry.append($('<span class="level">').text(data.level));
            logEntry.append($('<span class="message">').text(data.message));
            logContainer.append(logEntry);
        });
    }

    // Load and parse log file when the button is clicked
    $('#parseButton').on('click', function() {
        const logFile = $('#logFile').val();
        if (!logFile) {
            alert('Please select a log file.');
            return;
        }

        $.ajax({
            url: logFile,
            dataType: 'text',
            success: function(data) {
                parseLogFile(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error loading log file:', textStatus, errorThrown);
                alert('Failed to load log file.');
            }
        });
    });
});