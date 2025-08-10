// 代码生成时间: 2025-08-10 16:03:21
(function($) {

  /**
   * ExcelTableGenerator
   * @class 用于生成Excel表格的类
   * @constructor
   */
  function ExcelTableGenerator() {
    this.$table = null;
  }

  /**
   * 初始化方法，创建表格结构
   * @method init
   * @param {Object} options - 配置选项
   * @param {String} options.container - 表格容器的选择器
   * @param {Array} options.columns - 列定义数组
   * @param {Array} options.rows - 行数据数组
   */
  ExcelTableGenerator.prototype.init = function(options) {
    if (!options || !options.container || !options.columns || !options.rows) {
      console.error('缺少必要的初始化参数');
      return;
    }
    this.$table = $(options.container);
    this.createTable(options.columns, options.rows);
  };

  /**
   * 创建表格结构
   * @method createTable
   * @param {Array} columns - 列定义数组
   * @param {Array} rows - 行数据数组
   */
  ExcelTableGenerator.prototype.createTable = function(columns, rows) {
    var $table = this.$table;
    $table.empty(); // 清空表格内容
    var $thead = $('<thead>').appendTo($table);
    var $tbody = $('<tbody>').appendTo($table);

    // 创建表头
    var $tr = $('<tr>').appendTo($thead);
    columns.forEach(function(column) {
      $('<th>').text(column.title).appendTo($tr);
    });

    // 创建行数据
    rows.forEach(function(row) {
      $tr = $('<tr>').appendTo($tbody);
      columns.forEach(function(column) {
        var cellValue = row[column.field] || '';
        $('<td>').text(cellValue).appendTo($tr);
      });
    });
  };

  // 将ExcelTableGenerator类暴露到全局
  window.ExcelTableGenerator = ExcelTableGenerator;

}(jQuery));

// 使用示例：
// var tableGenerator = new ExcelTableGenerator();
// tableGenerator.init({
//   container: '#excelTable',
//   columns: [{
//     field: 'name',
//     title: '姓名'
//   }, {
//     field: 'age',
//     title: '年龄'
//   }],
//   rows: [{
//     name: '张三',
//     age: 28
//   }, {
//     name: '李四',
//     age: 32
//   }]
// });