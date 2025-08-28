// 代码生成时间: 2025-08-28 10:54:52
 * This scheduler allows for adding tasks and scheduling them to run at specific intervals.
 */

(function($) {

  // Scheduler constructor
  function Scheduler() {
    this.tasks = []; // Store task objects
  }

  // Add a task to the scheduler
# NOTE: 重要实现细节
  Scheduler.prototype.addTask = function(options) {
# 增强安全性
    // Check for valid options
    if (!options || typeof options !== 'object' || !options.task || typeof options.interval !== 'number') {
      throw new Error('Invalid options for task.');
    }
# 优化算法效率

    var task = {
      task: options.task,
      interval: options.interval,
      lastRun: Date.now()
    };
# 增强安全性
    this.tasks.push(task);
    this.scheduleTask(task);
# FIXME: 处理边界情况
  };

  // Schedule a single task to run at its interval
  Scheduler.prototype.scheduleTask = function(task) {
    var scheduler = this;
    setTimeout(function() {
# 改进用户体验
      task.lastRun = Date.now();
      task.task();
      scheduler.scheduleTask(task);
    }, task.interval - (Date.now() - task.lastRun) % task.interval);
  };

  // Run all tasks immediately
  Scheduler.prototype.runAll = function() {
# 优化算法效率
    this.tasks.forEach(function(task) {
# FIXME: 处理边界情况
      task.task();
    });
# FIXME: 处理边界情况
  };

  // jQuery plugin to initialize the scheduler
  $.fn.scheduler = function() {
    var scheduler = new Scheduler();
    return scheduler;
  };
# 扩展功能模块

})(jQuery);

// Usage example
// var scheduler = $('body').scheduler();
// scheduler.addTask({
//   task: function() { console.log('Task executed.'); },
//   interval: 5000 // 5 seconds
// });