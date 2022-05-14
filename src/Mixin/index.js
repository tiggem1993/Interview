var LogMixin = {
  actionLog: function () {
    console.log("action...");
  },
  requestLog: function () {
    console.log("request...");
  }
};
function User() {
  /*..*/
}
function Goods() {
  /*..*/
}
_.extend(User.prototype, LogMixin);
_.extend(Goods.prototype, LogMixin);
var user = new User();
var good = new Goods();
user.actionLog();
good.requestLog();
