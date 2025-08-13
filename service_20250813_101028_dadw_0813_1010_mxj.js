// 代码生成时间: 2025-08-13 10:10:28
$(document).ready(function() {

  // 上传文件按钮点击事件
  $('#uploadButton').click(function() {
    const file = $('#fileInput')[0].files[0];
    if (!file) {
      alert('请选择一个文件');
      return;
    }

    // 检查文件类型是否为zip
    if (!file.name.endsWith('.zip')) {
      alert('只支持.zip文件');
      return;
    }

    // 显示文件信息
    $('#fileName').text(file.name);
    $('#fileSize').text(file.size + ' bytes');
  });

  // 解压文件按钮点击事件
  $('#extractButton').click(function() {
    const file = $('#fileInput')[0].files[0];
    if (!file) {
      alert('请先上传文件');
      return;
    }

    // 创建解压目录
    const extractDir = $('#extractDir').val();
    if (!extractDir) {
      alert('请输入解压目录');
      return;
    }

    try {
      // 使用JSZip库解压文件
      JSZip.loadAsync(file)
        .then(function(zip) {
          return zip.folder('content').filter(function(relativePath, file) {
            return !file.dir;
          }).forEach(function(relativePath, file) {
            return file.async('blob')
              .then(function(blob) {
                saveAs(blob, file.name);
              });
          }).then(function() {
            $('#extractedList').empty();
            zip.folder('content').filter(function(relativePath, file) {
              return !file.dir;
            }).forEach(function(relativePath, file) {
              $('#extractedList').append($('<li>').text(file.name));
            });
          }).catch(function(err) {
            console.error('解压失败：', err);
            alert('解压失败：' + err.message);
          });
        })
        .catch(function(err) {
          console.error('读取文件失败：', err);
          alert('读取文件失败：' + err.message);
        });
    } catch (err) {
      console.error('解压错误：', err);
      alert('解压错误：' + err.message);
    }
  });

});

// 使用FileSaver.js库保存文件
function saveAs(blob, fileName) {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}