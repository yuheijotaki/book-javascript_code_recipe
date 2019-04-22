/**********
* 251 情報・エラー・警告を出力したい
**********/
console.log('ログです');
console.info('情報です');
console.warn('警告です');
console.error('エラーです');

/**********
* 252 オブジェクトの構造を出力したい
**********/
const item252_myObject = {
  id: 2,
  name: '鈴木'
};
console.dir(item252_myObject);

// body要素の構造を出力
console.dir(document.body);
// baseURI を出力
console.dir(document.body.baseURI); // 結果: http://127.0.0.1:5500/dist/index.html

const item252_myArray = [
  { id: 100, name: '鈴木', age: 25 },
  { id: 200, name: '田中', age: 30 },
  { id: 300, name: '太郎', age: 35 }
];
console.table(item252_myArray);

/**********
* 254 `Error` オブジェクトを生成したい
**********/
// Error オブジェクトのインスタンス化
const item254_error = new Error('エラーが発生しました');
console.log(item254_error.message); // 結果: エラーが発生しました

/**********
* 255 エラーを投げたい
**********/
/** 引数value が数値でない場合にエラーを発生させる関数 */
function item255_myFunction(value) {
  if (typeof value !== 'number') {
    // エラーを生成する
    const item255_error = new Error(`「${value}はNumberではありません」`);
    // エラー内容をコンソールで表示する
    console.log(item255_error);
    // エラーを投げる
    throw item255_error;
  }

  console.log(`「${value}」は数値です`);
}

// 関数に数値を渡す（エラーなし）
item255_myFunction(5); // 結果: 「5」は数値です
// 関数に文字列を渡す（エラーが発生する）
// item255_myFunction('鈴木'); // 結果: Uncaught Error: 「鈴木はNumberではありません」

/**********
* 256 エラー発生時にエラーを検知したい
**********/
const item256_a = 10;

try {
  item256_a = 20; // aへの再代入 エラー
} catch (error) {
  console.log(`エラーが発生しました: ${error.messsage}`);
}

// 中断されることなく実行される
console.log(`定数item256_aの値は${item256_a}です`); // 結果: 定数item256_aの値は10です
