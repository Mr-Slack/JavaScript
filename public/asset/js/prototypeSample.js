/*
* プロトタイプの利用
* 生成されたインスタンス自身が持っていない機能(function)や属性(property)であっても
* 生成時のコンストラクタのprototypeより取得して使用することが可能
*
* インスタンス.__proto__
*
*  上記にてprototypeのプロパティへアクセス可能
*/

// Humanオブジェクトコンストラクタ
function Human(name) {
  this.name = name;
  // コンストラクタ内でファンクションを定義してしまうとインスタンスの生成ごとに
  // メソッド分のメモリ確保が行われてしまう。
  // インスタンス毎に共通の振る舞いをするメソッドはプロトタイプを用いて定義する
  /*
  this.greet = function() {
    console.log("My name is " + this.name );
  }
  */
}

// Humanオブジェクトのプロトタイプへファンクションを定義
Human.prototype.greet = function() {
  console.log("My name is " + this.name )
};

// インスタンス自体には定義されていないgreetメソッドをprototypeプロパティを通して
// 使用可能としている
var alice = new Human("Alice");
alice.greet();

var bob = new Human("Bob");
bob.greet();
