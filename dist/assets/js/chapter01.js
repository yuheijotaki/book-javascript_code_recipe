/**********
* 009 ふたつの値を比較したい（比較演算子）
**********/
console.log(10 == '10');  // true
console.log(10 === '10'); // false
console.log(20 != '20');  // false
console.log(20 !== '20'); // true


/**********
* 010 複合代入演算子を使いたい
**********/
let a = 10;
let b = 20;
a += b;         // a = a + b と同じ意味
console.log(a); // 結果: 30

let c = '鈴木';
let d = '一郎';
c += d;         // c = c + d と同じ意味
console.log(c); // 結果: '鈴木一郎'


/**********
* 012 アロー関数（=>）で関数を定義したい
**********/
// 関数の宣言
const myFunction1 = (a) => {
  return a + 2;
};

// 関数の宣言（カッコを省略）
const myFunction2 = a => {
  return a + 2;
}

// アロー関数内の処理が1行のときは、{}とreturnを省略できる
const myFunction3 = (a) => a + 2;
console.log(myFunction3(10)); // 結果: 12


/**********
* 013 関数に渡す値の初期値を設定したい
**********/
/**
 * 税込みの値段を返す関数
 * @param price 価格
 * @param tax 税率
 */
function calcFunction(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}

// tax の引数を省略すると、初期値の0.08が使用される
const result1 = calcFunction(100);
console.log(result1); // 結果: 108

// tax の引数を指定すると、その値が使用される
const result2 = calcFunction(100, 0.1);
console.log(result2); // 結果: 110


/**********
* 014 関数に任意の数の引数を渡したい
**********/
/**
 * 引数の合計値を返す関数
 * @param price
 * @returns {number}
 */
function calcSum(...prices) {
  let result = 0;
  for (const value of prices) {
    result += value;
  }
  return result;
}

// 引数が2個の場合
const result3 = calcSum(10, 20);
console.log(result3); // 結果: 30

// 引数が3個の場合
const result4 = calcSum(10, 20, 30);
console.log(result4); // 結果: 60


/**********
* 016 条件に応じて処理を分けたい（switch文）
**********/
// 文字列の'100'
const myValue = '100';

switch (myValue) {
  case 100:
    // 文字列の'100'ではないので実行されない
    console.log('数字の100です');
    break;
  default:
    console.log('数字の100ではありません');
    break;
}

/**********
* 019 反復処理をスキップしたい
**********/
for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) {
    // index が偶数（2で割った余りが0）の場合は、これ以降の処理はスキップされる。
    continue;
  }

  // 奇数のみが出力される
  console.log(index);
}

// ループが終了したら実行される
console.log('ループ終了');
