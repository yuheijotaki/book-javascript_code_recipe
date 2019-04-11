/**********
* 076 データの型を調べたい
**********/
console.log(typeof true);                    // 結果: 'boolean'
console.log(typeof 10);                      // 結果: 'number'
console.log(typeof '鈴木');                   // 結果: 'string'
console.log(typeof null);                    // 結果: 'symbol'
console.log(typeof undefined);               // 結果: 'undefined'
console.log(typeof Symbol());                // 結果: 'symbol'
console.log(typeof [1, 2, 3]);               // 結果: 'object'
console.log(typeof { id: 10, name: '田中' }); // 結果: 'object'
console.log(
  typeof function() {
    console.log('test');
  }
); // 結果: 'function'
console.log(typeof class myClass { }); // 結果: 'function'

/**********
* 079 型を変換したい
**********/
const item79_result = 100 + Number('200');
console.log(item79_result); // 結果: 300

// `Boolean()` や `String()` などを用いて値の型を明示的に変更することを、「明示的な型変換」といいます。
console.log(Boolean(1));     // 結果: true
console.log(Boolean(0));     // 結果: false
console.log(Boolean('鈴木')); // 結果: true
console.log(Boolean(''));    // 結果: false

console.log(String(1)); // 結果: "1"

console.log(Number('1'));   // 結果: 1
console.log(Number(''));    // 結果: 0
console.log(Number('鈴木')); // 結果: NaN
console.log(Number(true));  // 結果: 1
console.log(Number(false)); // 結果: 0

// 暗黙の型変換
console.log(100 + '200'); // 結果: '100200'
console.log('200' - 100); // 結果: 100
