/*
* this
* 関数が呼ばれた時にその関数が属していたオブジェクトを指し示す
* ->呼び出し元でthisの中身が決まる
* thisを操作（束縛することができるメソッド）
* call(Object,arg1,...)
* bind(Object,arg1,...)
*
*/
function Human(name) {
  this.name = name;
};

Human.prototype.greet = function () {
  console.log("Hello " + this.name);
};

var mike = new Human("Mike");
mike.greet();

// ここでのthisはグローバルオブジェクトつまりwindowオブジェクトを指し示す
function greet(arg1, arg2) {
  console.log(arg1 + this.name + arg2);
}

greet("Hello ", "!!");

var tom = new Human("Tom");
//tomをthisとしてgreetメソッドを呼び出す
greet.call(tom, "Hello ", "??");

var nike = new Human("Nike");
// nikeをthisとした新しい関数オブジェクトが返り値となっている
var goodMorning = greet.bind(nike);
goodMorning("Good Morning ", "!!");
