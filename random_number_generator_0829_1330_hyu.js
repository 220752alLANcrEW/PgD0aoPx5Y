// 代码生成时间: 2025-08-29 13:30:38
(function($) {
    
    function RandomNumberGenerator() {
        "use strict";
        
        // Private properties
        var min = 0;
        var max = 100;
        
        // Public methods
        this.generate = function(range) {
            // Check if the range is valid
            if (range && range.min !== undefined && range.max !== undefined) {
                if (range.min >= range.max) {
                    throw new Error('Minimum value must be less than maximum value.');
                }
                min = range.min;
                max = range.max;
            }
            
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    }
    
    // Expose the RandomNumberGenerator to the global scope
    window.RandomNumberGenerator = RandomNumberGenerator;
    
}(jQuery));

// Usage example
try {
    var rng = new window.RandomNumberGenerator();
    var randomNumber = rng.generate({ min: 1, max: 50 });
    console.log('Generated random number:', randomNumber);
} catch (error) {
    console.error('Error:', error.message);
}