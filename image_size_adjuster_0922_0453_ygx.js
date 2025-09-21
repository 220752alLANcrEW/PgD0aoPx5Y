// 代码生成时间: 2025-09-22 04:53:58
 * It provides a user interface to select images and specify the new size.
 * @author Your Name
 * @version 1.0
 */

$(document).ready(function() {

    // Function to handle image upload and resizing
    function resizeImages() {
        // Check if any images are selected
        const selectedImages = document.getElementById('images').files;
        if (!selectedImages.length) {
            console.error('No images selected.');
            return;
        }

        // Specify the new image size
        const newSize = parseInt($('#newSize').val(), 10);
        if (isNaN(newSize) || newSize <= 0) {
            console.error('Invalid new size specified.');
            return;
        }

        // Process each selected image
        for (let i = 0; i < selectedImages.length; i++) {
            const image = selectedImages[i];
            const reader = new FileReader();

            // Read the image file as a data URL
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    // Create a canvas to draw the resized image
                    const canvas = document.createElement('canvas');
                    canvas.width = newSize;
                    canvas.height = newSize;
                    const ctx = canvas.getContext('2d');

                    // Draw the image on the canvas with the new size
                    ctx.drawImage(img, 0, 0, newSize, newSize);

                    // Convert the canvas to a data URL and create a new Blob
                    canvas.toBlob(function(blob) {
                        const resizedImage = new File([blob], image.name, {type: 'image/jpeg'});

                        // Handle the resized image (e.g., upload to server or display)
                        // For demonstration purposes, we'll just log the new file
                        console.log(resizedImage);
                    }, 'image/jpeg');
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(image);
        }
    }

    // Event listener for the resize button
    $('#resizeButton').click(resizeImages);
});