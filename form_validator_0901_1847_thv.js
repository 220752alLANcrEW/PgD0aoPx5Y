// 代码生成时间: 2025-09-01 18:47:01
$(document).ready(function() {

    // 表单数据验证器
    function FormValidator() {
        // 存储验证结果
        this.errors = [];
    }

    // 验证电子邮件
    FormValidator.prototype.validateEmail = function(email) {
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regex.test(email)) {
            this.errors.push('Invalid email format.');
        }
    };

    // 验证密码强度
    FormValidator.prototype.validatePassword = function(password) {
        var regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
        if (!regex.test(password)) {
            this.errors.push('Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.');
        }
    };

    // 显示错误信息
    FormValidator.prototype.showErrors = function() {
        if (this.errors.length > 0) {
            var errors = '<ul>';
            for (var i = 0; i < this.errors.length; i++) {
                errors += '<li>' + this.errors[i] + '</li>';
            }
            errors += '</ul>';
            // 显示错误信息
            $('body').append(errors);
        } else {
            // 提交表单数据
            console.log('Form is valid, submitting data...');
        }
    };

    // 绑定表单验证事件
    $('#myForm').on('submit', function(e) {
        e.preventDefault(); // 阻止表单提交

        var validator = new FormValidator();

        // 获取表单数据
        var email = $('#email').val();
        var password = $('#password').val();

        // 执行验证
        validator.validateEmail(email);
        validator.validatePassword(password);

        // 显示错误信息
        validator.showErrors();
    });

    // 示例：使用验证器验证表单数据
    function validateForm() {
        var email = $('#email').val();
        var password = $('#password').val();

        var validator = new FormValidator();
        validator.validateEmail(email);
        validator.validatePassword(password);
        validator.showErrors();
    }
});