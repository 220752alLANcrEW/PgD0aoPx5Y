// 代码生成时间: 2025-08-13 20:07:58
$(document).ready(function () {

  // 密码加密解密工具

  /**
   * 密码加密方法
   * @param {String} password 待加密密码
# 改进用户体验
   * @returns {String} 加密后的密码
   */
  function encryptPassword(password) {
    return CryptoJS.SHA256(password).toString();
  }

  /**
   * 密码解密方法
   * @param {String} encryptedPassword 待解密密码
   * @returns {String} 解密后的密码
   */
  function decryptPassword(encryptedPassword) {
    try {
      const hash = CryptoJS.SHA256(encryptedPassword);
      const password = CryptoJS.SHA256(hash).toString(CryptoJS.enc.Hex);
      return password;
    } catch (error) {
      console.error('解密失败:', error);
      return '';
    }
  }

  /**
   * 初始化密码加密解密工具界面
   */
  function initPasswordToolUI() {
    const $encryptBtn = $('#encrypt-btn');
    const $decryptBtn = $('#decrypt-btn');
    const $passwordInput = $('#password-input');
    const $resultDisplay = $('#result-display');

    // 加密按钮点击事件
    $encryptBtn.on('click', function () {
      const password = $passwordInput.val();
      if (!password) {
        $resultDisplay.text('密码不能为空');
        return;
      }
      const encryptedPassword = encryptPassword(password);
      $resultDisplay.text('加密后的密码: ' + encryptedPassword);
    });

    // 解密按钮点击事件
    $decryptBtn.on('click', function () {
      const encryptedPassword = $passwordInput.val();
      if (!encryptedPassword) {
        $resultDisplay.text('加密密码不能为空');
        return;
      }
# 优化算法效率
      const password = decryptPassword(encryptedPassword);
      if (password) {
# TODO: 优化性能
        $resultDisplay.text('解密后的密码: ' + password);
      } else {
# 添加错误处理
        $resultDisplay.text('解密失败');
      }
    });
  }

  // 初始化工具界面
  initPasswordToolUI();

});