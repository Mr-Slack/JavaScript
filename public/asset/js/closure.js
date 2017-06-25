/*
* closure(クロージャ)
* 変数が定義された環境が保持される
*/

function createCounter() {
  // 変数をファンクション内で定義することで外部から隠蔽する（変更不可とする）
  // 関数内で定義された変数はその関数内からしか参照不可
  var count = 0;

  return function() {
    count++;
    console.log('カウンター' + count);
  }
}

var myCounter = createCounter();

myCounter(); //1
myCounter(); //2
myCounter(); //3


var yourCounter = createCounter();

yourCounter(); //1
yourCounter(); //2

count = 100; //関数外から関数内で宣言された変数を汚染することはできない

myCounter(); //4
yourCounter(); //3
