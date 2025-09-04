// 代码生成时间: 2025-09-05 06:43:46
$(document).ready(function() {

    // Function to encrypt a password
    // @param {string} password - The password to encrypt
    // @returns {string} - The encrypted password
    function encryptPassword(password) {
        if (!password) {
            throw new Error('Password cannot be empty.');
        }

        let encryptedPassword = '';
        for (let i = 0; i < password.length; i++) {
            let char = password[i];
            if (char.match(/[a-z]/i)) {
                // Shift the character by 3 positions in the alphabet
                let code = password.charCodeAt(i) + 3;
                encryptedPassword += String.fromCharCode(code);
            } else {
                encryptedPassword += char;
            }
        }
        return encryptedPassword;
    }

    // Function to decrypt a password
    // @param {string} encryptedPassword - The encrypted password to decrypt
    // @returns {string} - The decrypted password
    function decryptPassword(encryptedPassword) {
        if (!encryptedPassword) {
            throw new Error('Encrypted password cannot be empty.');
        }

        let decryptedPassword = '';
        for (let i = 0; i < encryptedPassword.length; i++) {
            let char = encryptedPassword[i];
            if (char.match(/[a-z]/i)) {
                // Shift the character back by 3 positions in the alphabet
                let code = encryptedPassword.charCodeAt(i) - 3;
                decryptedPassword += String.fromCharCode(code);
            } else {
                decryptedPassword += char;
            }
        }
        return decryptedPassword;
    }

    // Event listener for the encrypt button
    $('#encryptButton').click(function() {
        let password = $('#passwordInput').val();
        try {
            let encrypted = encryptPassword(password);
            $('#encryptedOutput').val(encrypted);
        } catch (error) {
            console.error(error.message);
            alert(error.message);
        }
    });

    // Event listener for the decrypt button
    $('#decryptButton').click(function() {
        let encryptedPassword = $('#encryptedInput').val();
        try {
            let decrypted = decryptPassword(encryptedPassword);
            $('#decryptedOutput').val(decrypted);
        } catch (error) {
            console.error(error.message);
            alert(error.message);
        }
    });

});