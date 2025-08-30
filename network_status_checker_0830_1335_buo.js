// 代码生成时间: 2025-08-30 13:35:38
(function($) {

    // Function to check network status
    function checkNetworkStatus() {
        if (navigator.onLine) {
            // If online, update the status in the DOM
            updateStatus('online');
        } else {
            // If offline, update the status in the DOM
            updateStatus('offline');
        }
    }

    // Function to update the status in the DOM
    function updateStatus(status) {
        var statusElement = $('#networkStatus');
        if (statusElement.length) {
            statusElement.text('Network Status: ' + status);
        } else {
            console.error('Network status element not found in the DOM.');
        }
    }

    // Initial check and setup event listeners
    $(document).ready(function() {
        checkNetworkStatus();
        // Listen for online event
        $(window).on('online', function() {
            checkNetworkStatus();
        });
        // Listen for offline event
        $(window).on('offline', function() {
            checkNetworkStatus();
        });
    });

})(jQuery);
