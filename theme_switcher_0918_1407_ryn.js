// 代码生成时间: 2025-09-18 14:07:53
(function($, window, document) {

    // Object to hold theme configurations
    const themes = {
        "light": {
            "bgColor": "#FFFFFF",
            "textColor": "#000000"
        },
        "dark": {
            "bgColor": "#333333",
            "textColor": "#FFFFFF"
        }
    };

    // Function to change the theme
    function switchTheme(themeName) {
        try {
            // Check if the theme exists in the themes object
            if (!themes[themeName]) {
                throw new Error(`Theme '${themeName}' is not defined.`);
            }

            // Apply the theme styles to the body
            $('body').css({
                'background-color': themes[themeName].bgColor,
                'color': themes[themeName].textColor
            });

            // Optionally, you can use classes to handle themes if you want to have more control over CSS
            // $('body').attr('class', themeName);

            // Save the current theme to local storage or cookies for persistence
            localStorage.setItem('currentTheme', themeName);

            console.log(`Theme switched to: ${themeName}`);
        } catch (error) {
            console.error(error.message);
        }
    }

    // Function to initialize the theme based on user preference or default
    function initTheme() {
        try {
            // Check for saved theme in local storage
            const savedTheme = localStorage.getItem('currentTheme');

            // If a saved theme exists, switch to it. Otherwise, default to 'light'.
            if (savedTheme) {
                switchTheme(savedTheme);
            } else {
                switchTheme('light');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    // Expose the theme switching functionality to the global scope
    window.switchTheme = switchTheme;
    window.initTheme = initTheme;

    // Initialize the theme on document ready
    $(document).ready(function() {
        initTheme();
    });

})(jQuery, window, document);