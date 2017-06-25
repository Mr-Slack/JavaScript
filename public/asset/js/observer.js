function Observer() {
  // 監視者格納用の空オブジェクト(->複数の監視者対応)
  this.listener = {};
}

Observer.prototype.on = function (event, func) {
  // listenersにイベントが存在しない場合、配列を作成
  if(!this.listeners[event]) {
    this.listeners[event] = [];
  }
  // イベントが存在した場合は追加する
  this.listeners[event].push(func);
};

// リスナーの削除
Observer.prototype.off = function (event, func) {

  var ref = this.listeners[event];
  var len = ref.length;
  for(var i = 0; i < len; i++) {
    var listener = ref[i];
    if(listener === func) {
      ref.splice(i, 1);
    }
  }
};

Observer.prototype.trigger = function(event) {
  var ref = this.listeners[event];
  for(var i = 0, len = ref.length; i < len; i++) {
    var listener = ref[i];
    if(typeof listener === "function") listener();
  }
};

var observer = new Observer();
var greet = function() {
  console.log("Good Morning!");
};

observer.on("morning", greet);
observer.trigger("morning");

var pen = function() {
  console.log("I am a pen");
};

observer.on("pen", pen);
observer.trigger("pen");
