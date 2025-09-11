// 代码生成时间: 2025-09-12 04:59:39
$(document).ready(function() {

    /**
     * Function to handle file selection and unzipping
     */
    $('#fileInput').change(function(event) {
        // Get the selected file
        var file = event.target.files[0];
        if (!file) {
            return;
        }

        // Create a new JSZip instance
        var zip = new JSZip();

        // Use JSZip to load the file and extract its content
        zip.loadAsync(file).then(function(zip) {
            // Loop over the files in the zip
            zip.forEach(function(relativePath, zipEntry) {
                // Extract each file to the browser's file system
                zipEntry.async('blob').then(function(content) {
                    // Create a link to download the file
                    var url = URL.createObjectURL(content);
                    var link = document.createElement('a');
                    link.href = url;
                    link.download = zipEntry.name; // Set the download name
                    link.click(); // Trigger the download
                    URL.revokeObjectURL(url); // Revoke the URL
                });
            });
        }, function(e) {
            // Handle errors
            console.error('Error unzipping file:', e);
            alert('An error occurred while unzipping the file.');
        });
    });

    /**
     * Function to handle drag and drop
     */
    $(document).on('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });

    $(document).on('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var files = e.originalEvent.dataTransfer.files;
        if (files.length > 0) {
            $('#fileInput')[0].files = files;
            $('#fileInput').trigger('change');
        }
    });

    /**
     * Function to display drag and drop instructions
     */
    function showDragDropInstructions() {
        $('#dragDropInstructions').show();
    }

    // Initialize drag and drop instructions
    showDragDropInstructions();
});

/**
 * Make sure to include the JSZip library in your HTML file
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js"></script>
 */